import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true
    },
    test: {
        environment: "jsdom", // <- important
        globals: true,        // enables global describe/it/expect
        setupFiles: "./src/setupTests.ts", // optional, for jest-dom matchers
    },
});


