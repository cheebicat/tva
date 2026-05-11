import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume({
  src: "./src",
  location: new URL("https://cheebicat.github.io/tva/"),
});

site.use(plugins());

export default site;
