const fs = require("fs");
const cp = require("child_process");

try {
    cp.fork("./dist/app.js", [], {
        env: {
            DB_PORT: process.env["DB_PORT"] || 27017,
            NODE_ENV: process.env["NODE_ENV"] || "dev"
        }
    });
} catch (error) {
    console.error(error);
}
