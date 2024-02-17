module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("images")
    return {
        dir: {
            input: "src",
            output: "docs"
        },
        pathPrefix: "/MSIA/"
    }
};