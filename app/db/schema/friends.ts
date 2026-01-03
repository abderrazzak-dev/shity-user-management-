import { pgTable, uuid, unique, check } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { createdAt, updatedAt } from "./utilities";
import { sql } from "drizzle-orm";

export const friendshipsTable = pgTable(
  "friendships",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    userAId: uuid("user_a_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),

    userBId: uuid("user_b_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),

    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (table) => ({
    uniquePair: unique("unique_friend_pair").on(table.userAId, table.userBId),

    // Prevent self-friendship
    notSameUser: check(
      "users_must_be_different",
      sql`${table.userAId} <> ${table.userBId}`
    ),
  })
);
