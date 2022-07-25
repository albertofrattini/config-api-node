import { PrismaClient, Prisma } from "@prisma/client";
import { Config } from "../types/Config";

const prisma = new PrismaClient();

async function getAll() {
    return prisma.config.findMany({
        select: {
            configuration: true,
        },
    });
}

async function getById(id: string) {
    return prisma.config.findUnique({
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
    return prisma.config.create({
        data: {
            id: configId,
            configuration: configJson,
        },
    });
}

async function update(id: string, config: Prisma.JsonObject) {
    return prisma.config.update({
        where: {
            id: id,
        },
        data: {
            configuration: config,
        },
    });
}

async function remove(id: string) {
    return prisma.config.delete({
        where: {
            id: id,
        },
    });
}

export { getAll, getById, create, update, remove };
