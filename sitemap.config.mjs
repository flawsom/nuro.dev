const isProduction = process.env.NODE_ENV === 'production';
const domain = isProduction ? 'nuro.dev' : 'localhost:3000';
const protocol = isProduction ? 'https' : 'http';

/**
 * @type {import('next-sitemap').IConfig}
 */
const config = {
	exclude: ['/server-sitemap.xml'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${protocol}://${domain}/sitemap.xml`,
		],
	},
	siteUrl: `${protocol}://${domain}`,
};

export default config;
