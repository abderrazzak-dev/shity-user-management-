import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "./utilities";

export const rolesTable = pgTable("roles", {
  id: uuid("id").defaultRandom().primaryKey(),
  role: varchar({ length: 255 }).notNull().unique(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});
