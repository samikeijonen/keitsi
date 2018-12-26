module.exports = function (eleventyConfig) {
    // Copies static files to output.
    eleventyConfig.addPassthroughCopy('src');

    return {
        passthroughFileCopy: true
    };
};