import { Request, Response } from "express";
import { getAll, getById, create } from "../database";

async function getAllConfigs(req: Request, res: Response) {
    const allConfigs = await getAll();
    if (allConfigs && allConfigs.length) {
        res.send(allConfigs);
    } else {
        res.send({ error: "No configs found" });
    }
}

async function getConfigById(req: Request, res: Response) {
    const config = await getById(req.params.id);
    if (config) {
        res.send(config);
    } else {
        res.send({ error: "No config found" });
    }
}

async function createConfig(req: Request, res: Response) {
    const newConfig = await create(req.body);
    res.send(newConfig);
}

export { getAllConfigs, getConfigById, createConfig };
