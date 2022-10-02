import { resolve } from "path";
import { fileURLToPath } from "url";

import { defineNuxtModule, addComponentsDir, addImportsDir } from "@nuxt/kit";

export interface ModuleOptions {
    addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: "nuxt-buck",
        configKey: "buck",
        compatibility: {
            nuxt: ">=3.0.0-rc.11",
        },
    },
    defaults: {
        addPlugin: true,
    },
    async setup(_options, _nuxt) {
        const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
        // nuxt.options.build.transpile.push(runtimeDir);
        // if (options.addPlugin) {
        //     addPlugin(resolve(runtimeDir, "plugin"));
        // }

        addImportsDir(resolve(runtimeDir, "composables"));

        await addComponentsDir({
            path: resolve(runtimeDir, "components"),
            pathPrefix: false,
            prefix: "",
            level: 999,
            global: true,
        });
    },
});
