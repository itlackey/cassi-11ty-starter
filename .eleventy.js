export default async function (eleventyConfig) {
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
