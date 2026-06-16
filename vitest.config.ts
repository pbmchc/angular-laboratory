import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['src/vitest.setup.ts'],
    coverage: {
      exclude: ['node_modules/', 'src/vitest.setup.ts'],
      reporter: ['html', 'lcovonly', 'text-summary'],
      reportsDirectory: './coverage/angular-laboratory'
    }
  }
});
