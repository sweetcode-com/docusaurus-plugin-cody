module.exports = function (context, options) {

    return {
        name: 'cody-plugin',
        injectHtmlTags() {
            return {
                headTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            type: 'text/javascript',
                            async: true,
                            src: 'https://trinketsofcody.com/cody-widget.js',
                        },
                    },
                    {
                        tagName: 'script',
                        innerHTML: `
                            window.codySettings = ${JSON.stringify(options)};
                            `,
                    },
                ],
            };
        },
    };
};
