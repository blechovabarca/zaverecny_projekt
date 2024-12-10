module.exports = function(eleventyConfig) {

    // Výchozí výstupní složka je: _site
    
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");

    //favicon
    eleventyConfig.addPassthroughCopy("favicon-96x96.png");
    eleventyConfig.addPassthroughCopy("favicon.svg");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("site.webmanifest");

    
    return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    }
    
    };
    