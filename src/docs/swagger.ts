export const swaggerDoc = {
    openapi: "3.0.1",
    info: {
        version: "1.0.0",
        title: "APIs Document",
        description: "Configuration API",
    },
    paths: {
        "/api/configs": {
            get: {
                description: "Returns all configs",
                operationId: "getAll",
                responses: {
                    "200": {
                        description: "The list of configs",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                },
                            },
                        },
                    },
                    "500": {
                        description: "I did something wrong",
                    },
                },
            },
            post: {
                description: "Creates a new config",
                operationId: "createConfig",
                responses: {
                    "201": {
                        description: "New config created",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Something is missing",
                    },
                    "500": {
                        description: "I did something wrong",
                    },
                },
            },
        },
        "/api/configs/:id": {
            get: {
                description: "Returns all configs",
                operationId: "getConfigById",
                responses: {
                    "200": {
                        description: "The config with that id",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Something is missing",
                    },
                    "500": {
                        description: "I did something wrong",
                    },
                },
            },
            delete: {
                description: "Deletes the config with that id",
                operationId: "deleteConfig",
                responses: {
                    "200": {
                        description: "Config deleted",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Something is missing or wrong",
                    },
                    "500": {
                        description: "I did something wrong",
                    },
                },
            },
            put: {
                description: "Updates an existing config",
                operationId: "updateConfig",
                responses: {
                    "200": {
                        description: "Updated config created",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Something is missing or wrong",
                    },
                    "500": {
                        description: "I did something wrong",
                    },
                },
            },
        },
    },
};
