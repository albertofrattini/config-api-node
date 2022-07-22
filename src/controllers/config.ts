import { Request, Response } from "express";
import { getAll, getById, create, update, remove } from "../database";

async function getAllConfigs(req: Request, res: Response) {
    let allConfigs;
    try {
        allConfigs = await getAll();
    } catch (e) {
        return res.status(400).json({ status: "failed", error: e.message });
    }
    res.status(200).json({ status: "success", allConfigs });
}

async function getConfigById(req: Request, res: Response) {
    let config;
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error("id must be specified");
        }
        config = await getById(id);
    } catch (e) {
        return res.status(400).json({ status: "failed", error: e.message });
    }
    res.status(200).json({ status: "success", config });
}

async function createConfig(req: Request, res: Response) {
    let newConfig;
    try {
        console.log("XXX", req.body);
        const id = req.body.id;
        if (!id) {
            throw new Error("id must be specified");
        }
        newConfig = await create(req.body);
    } catch (e) {
        return res.status(400).json({ status: "failed", error: e.message });
    }
    res.status(201).json({ status: "success", newConfig });
}

async function updateConfig(req: Request, res: Response) {
    let newConfig;
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error("id must be specified");
        }
        newConfig = await update(id, req.body);
    } catch (e) {
        return res.status(400).json({ status: "failed", error: e.message });
    }
    res.status(200).json({ status: "success", newConfig });
}

async function deleteConfig(req: Request, res: Response) {
    let deletedConfig;
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error("id must be specified");
        }
        deletedConfig = await remove(id);
    } catch (e) {
        return res.status(400).json({ status: "failed", error: e.message });
    }
    res.status(200).json({ status: "success", deletedConfig });
}

export {
    getAllConfigs,
    getConfigById,
    createConfig,
    updateConfig,
    deleteConfig,
};
