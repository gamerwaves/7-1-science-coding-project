import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		allowedHosts: ['5173-gamerwaves-71sciencecod-ud0fn80wryk.ws-us117.gitpod.io'],
	  }
});
