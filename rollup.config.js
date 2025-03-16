import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { visualizer } from 'vite-plugin-visualizer';

export default defineConfig({
    plugins: [
        sveltekit(),
        visualizer({
        open: true, // Automatically open the report in the browser
        filename: 'stats.html', // Output file name
        }),
    ],
});