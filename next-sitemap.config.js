/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.sobhaworldcity.com",
  generateRobotsTxt: true,

  generateIndexSitemap: false,
  sitemapSize: 50000,

  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: config.siteUrl,
        changefreq: "daily",
        priority: 1,
        lastmod: new Date().toISOString(),
      };
    }

    const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;

    return {
      loc: `${config.siteUrl}${cleanPath}.html`, 
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

export default config;