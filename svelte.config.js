import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html',
            pages: "docs",
            assets: "docs"
		  }),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		appDir: 'internal'
	}
};

export default config;
