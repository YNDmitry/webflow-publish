import { defineConfig } from 'vite';
import multiPageInputPlugin from '@yndmitry/vite-plugin-pages';

export default defineConfig({
	plugins: [
	 	multiPageInputPlugin()
	],
});
