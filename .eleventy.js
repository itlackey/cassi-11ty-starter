import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
export default async function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addLayoutAlias("default", "default.njk");
  eleventyConfig.setInputDirectory("pages");
  eleventyConfig.setDataDirectory("../data");
  eleventyConfig.setIncludesDirectory("../includes");
  eleventyConfig.setLayoutsDirectory("../layouts");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setOutputDirectory(".build");
  //eleventyConfig.setTemplateFormats("md");
  eleventyConfig.setQuietMode(true);
}
