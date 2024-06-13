import { defineConfig } from "playwright/test";

export default defineConfig({
    use: {
        browserName: 'chromium',
        headles: true,
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]],
})