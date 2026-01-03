import { friendshipsTable } from "./schema/friends";
import { relations } from "drizzle-orm";
import { usersTable, userRolesTable, rolesTable } from "./schema";

export const usersRelations = relations(usersTable, ({ many }) => ({
  roles: many(userRolesTable),
  friendshipsA: many(friendshipsTable, {
    relationName: "userA",
  }),
  friendshipsB: many(friendshipsTable, {
    relationName: "userB",
  }),
}));

export const friendshipsRelations = relations(friendshipsTable, ({ one }) => ({
  userA: one(usersTable, {
    fields: [friendshipsTable.userAId],
    references: [usersTable.id],
  }),
  userB: one(usersTable, {
    fields: [friendshipsTable.userBId],
    references: [usersTable.id],
  }),
}));

export const userRolesRelations = relations(userRolesTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [userRolesTable.userId],
    references: [usersTable.id],
  }),
  role: one(rolesTable, {
    fields: [userRolesTable.roleId],
    references: [rolesTable.id],
  }),
}));
