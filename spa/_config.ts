import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.ignore("README.md");
site.ignore("windi.config.ts");
site.copy("windi.css");
site.use(esbuild({ extensions: [".ts", ".tsx"] }));

export default site;
