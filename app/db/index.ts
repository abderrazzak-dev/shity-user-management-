import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/app/db/schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  max: 10,
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 30000,
});

export const db = drizzle(pool, {
  schema,
});
