import { pgTable, uuid, varchar, timestamp, unique } from "drizzle-orm/pg-core";
import { createdAt, deletedAt, updatedAt } from "./utilities";

export const usersTable = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    birthday: timestamp("birthday", { withTimezone: true }).notNull(),
    email: varchar("email", { length: 320 }).notNull(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
    deleted_at: deletedAt(),
  },
  (table) => ({
    emailUnique: unique("user_email_unique").on(table.email),
  })
);
