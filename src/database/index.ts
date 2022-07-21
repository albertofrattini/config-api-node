import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAll() {
    return await prisma.config.findMany({
        select: {
            config: true,
        },
    });
}

async function getById(id: string) {
    return await prisma.config.findMany({
        where: {
            config: {
                path: ["id"],
                equals: id,
            },
        },
        select: {
            config: true,
        },
    });
}

async function create(config: any) {
    return await prisma.config.create({
        data: {
            config,
        },
    });
}

export { getAll, getById, create };
