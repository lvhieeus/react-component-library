import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    libInjectCss(),
    dts({ include: ['lib'] }),
  ],
  build: {
     lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      // From https://rollupjs.org/configuration-options/#input:
      // "If you want to convert a set of files to another format
      // while maintaining the file structure and export signatures,
      // the recommended way — instead of using output.preserveModules
      // that may tree-shake exports as well as emit virtual files
      // created by plugins — is to turn every file into an entry point."
      input: Object.fromEntries(
        glob.sync('lib/**/!(*.d).{ts,tsx}').map(file => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative('lib', file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  resolve: {
    alias: {
      '@app': resolve(__dirname, './src'),
      '@lib': resolve(__dirname, './lib'),
    },
  },
});

