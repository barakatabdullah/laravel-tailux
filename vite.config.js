import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
        jsconfigPaths(),
        svgr()
    ],
    esbuild: {
        jsx: 'automatic',
    },

});
