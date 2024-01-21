import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

//if instance of prisma in global exists use that if not create new instance and assign
export const db = globalThis.prisma || new PrismaClient();

//leaving line like this would create many instances during next.js hot reload
//this is to just keep development from creating many instances to same database
// export const db = new PrismaClient();

//in development use this db instance
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
