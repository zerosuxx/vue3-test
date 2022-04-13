import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [
        vuePlugin(),
        cssInjectedByJsPlugin(),
    ],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: './src/main.js',
            name: 'appLib',
            fileName: () => 'app.js',
            formats: ['umd']
        },
    }
});
