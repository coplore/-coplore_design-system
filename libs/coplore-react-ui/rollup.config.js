import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json' assert { type: 'json' };

const externalDependencies = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies
})

const external = ['react/jsx-runtime', ...externalDependencies]

/** @type {import('rollup').RollupOptions} */
const commonOption = {
  input: 'src/index.ts',
  plugins: [
    nodeResolve({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
    commonjs({ include: 'node_modules/**' }),
    terser({
      format: { comments: false },
      compress: {
        unused: true,
        dead_code: true,
        pure_funcs: ['console.log'],
      },
    }),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external,
};

/** @type {import('rollup').RollupOptions} */
const cjsOption = {
  ...commonOption,
  output: {
    file: pkg.exports['.'].require,
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
};

/** @type {import('rollup').RollupOptions} */
const esmOption = {
  ...commonOption,
  output: {
    file: pkg.exports['.'].import,
    format: 'esm',
    sourcemap: true,
    exports: 'auto',
  },
};

export default defineConfig([cjsOption, esmOption]);
