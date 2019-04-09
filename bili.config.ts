import { Config } from 'bili';

const config: Config = {
  input: 'index.js',
  output: {
    moduleName: 'VueGlider',
    extractCSS: true,
    format: ['esm', 'umd', 'cjs'],
    fileName({ format }, defaultFileName) {
      if (format === 'esm') {
        return 'vue-glider.esm.js';
      }
      if (format === 'umd') {
        return 'vue-glider.js';
      }
      if (format === 'cjs') {
        return 'vue-glider.cjs.js';
      }
      return defaultFileName;
    },
    sourceMapExcludeSources: true
  },
  babel: {
    minimal: true
  },
  plugins: {
    vue: true,
  },
  extendConfig(config, { format }) {
    if (format === 'umd') {
      config.output.minify = true;
      config.env = Object.assign({}, config.env, {
        NODE_ENV: 'production',
      });
    }
    return config;
  },
};

export default config;
