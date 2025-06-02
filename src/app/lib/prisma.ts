import { PrismaClient } from "@prisma/client"

const globalPrisma=globalThis as unknown as {
    prisma : PrismaClient | undefined
}

const prismaBase=globalPrisma.prisma ?? new PrismaClient()


export const prisma=prismaBase


if(process.env.NODE_ENV !== "production") globalPrisma.prisma=prismaBase