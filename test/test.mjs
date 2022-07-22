import { expect } from "chai";
import fetch from "node-fetch";

describe("App Tests", function () {
    describe("HTTP Requests", function () {
        const url = "http://localhost:3000/api/configs";
        const id = "id-for-test";

        it("POST /api/configs - new configuration", function (done) {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, name: "config name" }),
            })
                .then((response) => {
                    expect(response.status).to.equal(201);
                    return response.json();
                })
                .then((data) => {
                    expect(data).to.deep.equal({
                        status: "success",
                        newConfig: {
                            id,
                            configuration: { id, name: "config name" },
                        },
                    });
                    done();
                })
                .catch((e) => console.log(e.message));
        });

        it("GET /api/configs/:id - finds the configuration", function (done) {
            fetch(url + "/" + id)
                .then((response) => {
                    expect(response.status).to.equal(200);
                    return response.json();
                })
                .then((data) => {
                    expect(data).to.deep.equal({
                        status: "success",
                        config: [
                            { configuration: { id, name: "config name" } },
                        ],
                    });
                    done();
                })
                .catch((e) => console.log(e.message));
        });

        it("DELETE /api/configs/:id - deletes the config", function (done) {
            fetch(url + "/" + id, {
                method: "DELETE",
            })
                .then((response) => {
                    expect(response.status).to.equal(200);
                    return response.json();
                })
                .then((data) => {
                    expect(data).to.deep.equal({
                        status: "success",
                        deletedConfig: {
                            id,
                            configuration: { id, name: "config name" },
                        },
                    });
                    done();
                })
                .catch((e) => console.log(e.message));
        });
    });
});
