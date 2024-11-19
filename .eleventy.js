import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setInputDirectory("pages");
  eleventyConfig.setDataDirectory("../data");
  eleventyConfig.setIncludesDirectory("../includes");
  eleventyConfig.setLayoutsDirectory("../layouts");
  eleventyConfig.setOutputDirectory(".build");
  eleventyConfig.addLayoutAlias("default", "default.njk");
  eleventyConfig.addGlobalData("layout", "default");
  eleventyConfig.addPassthroughCopy("assets");
  

  eleventyConfig.addTemplate(
    "cassi.md",
    `# Cassi Style Guide\n\nWelcome to the Cassi style guide. The links in the left nav bar will allow you to navigate through the various guides.`,
    {
      layout: "default.njk",
      title: "Cassi Style Guide",
      permalink: "/cassi/index.html",
    }
  );
}
