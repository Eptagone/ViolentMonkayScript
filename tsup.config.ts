import fs from "fs";
import { defineConfig } from "tsup";

const header = fs.readFileSync(".header", "utf8");

export default defineConfig({
    entry: {
        "my-extension.user": "src/main.ts",
    },
    clean: true,
    minify: true,
    format: "esm",
    splitting: false,
    platform: "browser",
    banner: {
        js: header,
    },
});
