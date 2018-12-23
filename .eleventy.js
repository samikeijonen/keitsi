module.exports = function (eleventyConfig) {
    // Copies static files to output.
    eleventyConfig.addPassthroughCopy('img');
};