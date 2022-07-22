import express from "express";
import {
    getAllConfigs,
    getConfigById,
    createConfig,
    deleteConfig,
    updateConfig,
} from "../controllers/config";

const router = express.Router();

router.delete("/configs/:id", deleteConfig);
router.get("/configs", getAllConfigs);
router.get("/configs/:id", getConfigById);
router.post("/configs", createConfig);
router.put("/configs/:id", updateConfig);

export default router;
