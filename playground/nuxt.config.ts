import { defineNuxtConfig } from "nuxt/config";
import Buck from "..";

export default defineNuxtConfig({
    modules: [Buck],
    buck: {
        addPlugin: true,
    },
});
