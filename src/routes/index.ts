import express from "express";
import {
    getAllConfigs,
    getConfigById,
    createConfig,
} from "../controllers/config";

const router = express.Router();

router.get("/configs", getAllConfigs);
router.get("/configs/:id", getConfigById);
router.post("/configs", createConfig);

export default router;
