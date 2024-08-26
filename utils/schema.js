import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Player = pgTable("player", {
    id: serial("id").primaryKey(),
    email: varchar("email"),
    name: varchar("name"),
    image: varchar("image"),
    createdAt: varchar("createdAt"),
    points: integer("points"),
    username: varchar("username")
});