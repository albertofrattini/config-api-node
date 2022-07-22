import { PrismaClient, Prisma } from "@prisma/client";
import { Config } from "../types/Config";

const prisma = new PrismaClient();

async function getAll() {
    return await prisma.config.findMany({
        select: {
            configuration: true,
        },
    });
}

async function getById(id: string) {
    return await prisma.config.findMany({
        where: {
            id: id,
        },
        select: {
            configuration: true,
        },
    });
}

async function create(config: Config) {
    const configId = config.id;
    const configJson = config as Prisma.JsonObject;
    return await prisma.config.create({
        data: {
            id: configId,
            configuration: configJson,
        },
    });
}

async function update(id: string, config: Prisma.JsonObject) {
    return await prisma.config.update({
        where: {
            id: id,
        },
        data: {
            configuration: config,
        },
    });
}

async function remove(id: string) {
    return await prisma.config.delete({
        where: {
            id: id,
        },
    });
}

export { getAll, getById, create, update, remove };
