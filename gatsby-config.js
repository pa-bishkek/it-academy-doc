module.exports = {
    siteMetadata: {
        title: "IT-Academy Bishkek",
        description: "",
        author: "@VLZH",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "${__dirname}/src/images",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "documentation",
                path: "${__dirname}/src/doc/",
                ignore: ["**/.*"],
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/favicon.png", // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Spectral"],
                },
            },
        },
    ],
};
