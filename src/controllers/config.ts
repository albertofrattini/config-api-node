import { Request, Response } from "express";
import { getAll, getById, create, update, remove } from "../database";

// GET
async function getAllConfigs(req: Request, res: Response) {
    let allConfigs;

    try {
        allConfigs = await getAll();
    } catch (e) {
        return res.status(500).json({
            status: "failed",
            error: "There was an error connecting to the database",
        });
    }

    res.status(200).json({ status: "success", allConfigs });
}

async function getConfigById(req: Request, res: Response) {
    let config;
    const id = req.params.id;

    if (!id) {
        return res
            .status(400)
            .json({ status: "failed", error: "'id' must be specified" });
    }
    try {
        config = await getById(id);
    } catch (e) {
        return res.status(500).json({
            status: "failed",
            error: "There was an error connecting to the database",
        });
    }
    res.status(200).json({ status: "success", config });
}

// CREATE
async function createConfig(req: Request, res: Response) {
    let newConfig;
    const id = req.body.id;
    const configObject = req.body;

    if (!id) {
        return res
            .status(400)
            .json({ status: "failed", error: "'id' must be specified" });
    }
    try {
        newConfig = await create(configObject);
    } catch (e) {
        if (e.code === "P2002") {
            return res
                .status(400)
                .json({ status: "failed", error: "This 'id' already exists" });
        }
        return res.status(500).json({
            status: "failed",
            error: "There was an error connecting to the database",
        });
    }

    res.status(201).json({ status: "success", newConfig });
}

// PUT
async function updateConfig(req: Request, res: Response) {
    let newConfig;
    const id = req.params.id;
    const configObject = req.body;

    if (!id) {
        return res
            .status(400)
            .json({ status: "failed", error: "id must be specified" });
    }
    if (configObject.id !== id) {
        return res.status(400).json({
            status: "failed",
            error: "The 'id' in your configuration and the path 'id' do not match",
        });
    }
    try {
        newConfig = await update(id, configObject);
    } catch (e) {
        if (e.code === "P2025") {
            return res.status(400).json({
                status: "failed",
                error: "The specified 'id' doesn't exist",
            });
        }
        return res.status(500).json({
            status: "failed",
            error: "There was an error connecting to the database",
        });
    }

    res.status(200).json({ status: "success", newConfig });
}

// DELETE
async function deleteConfig(req: Request, res: Response) {
    let deletedConfig;
    const id = req.params.id;

    if (!id) {
        return res
            .status(400)
            .json({ status: "failed", error: "id must be specified" });
    }
    try {
        deletedConfig = await remove(id);
    } catch (e) {
        if (e.code === "P2025") {
            return res.status(400).json({
                status: "failed",
                error: "The specified 'id' doesn't exist",
            });
        }
        return res.status(500).json({
            status: "failed",
            error: "There was an error connecting to the database",
        });
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
