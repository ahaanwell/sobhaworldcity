/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://sobhaworldcity.vercel.app",
  generateRobotsTxt: true,

  transform: async (config, path) => {
    // Skip homepage
    if (path === "/") {
      return {
        loc: config.siteUrl,
        changefreq: "daily",
        priority: 1,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: `${config.siteUrl}${path}.html`, // 👈 add .html here
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

export default config;