import { db } from "@/app/db";
import { usersTable } from "@/app/db/schema";
import { isValidEmail, isValidDate, hasValidValues } from "@/app/utils";
import { NextRequest, NextResponse } from "next/server";
import { getDbError, internalServerError } from "../utils";

// Create new user
export async function POST(_request: NextRequest) {
  const req = await _request.json();
  const { first_name, last_name, birthday, email } = req;

  // validate required fields exist
  if (!hasValidValues(first_name, last_name, birthday, email)) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // check birthday
  if (!isValidDate(birthday)) {
    return NextResponse.json(
      {
        error: "Birthday must be a date",
      },
      { status: 400 }
    );
  }

  // check email
  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        error: "Invalid email",
      },
      { status: 400 }
    );
  }

  try {
    const new_user = await db
      .insert(usersTable)
      .values({
        firstName: first_name,
        lastName: last_name,
        birthday: new Date(birthday),
        email: email.trim(),
      })
      .returning();
    return NextResponse.json(new_user[0], { status: 201 });
  } catch (error) {
    const { code, constraint } = getDbError(error);

    if (code == "23505" && constraint == "user_email_unique") {
      return NextResponse.json(
        {
          error: "email already exists ",
        },
        { status: 409 }
      );
    }

    // unexpected error
    return internalServerError();
  }
}

// Get all users
export async function GET() {
  try {
    const allUsers = await db.select().from(usersTable);
    return NextResponse.json({ users: allUsers }, { status: 200 });
  } catch {
    return internalServerError();
  }
}
