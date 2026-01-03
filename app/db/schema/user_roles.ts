import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { usersTable, rolesTable } from "./";
import { createdAt, updatedAt } from "./utilities";

export const userRolesTable = pgTable(
  "user_roles",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),

    roleId: uuid("role_id")
      .notNull()
      .references(() => rolesTable.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),

    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.roleId] }),
  })
);
