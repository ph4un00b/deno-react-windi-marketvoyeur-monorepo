import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.ignore("README.md");
site.use(esbuild({ extensions: [".ts", ".tsx"] }));

export default site;
