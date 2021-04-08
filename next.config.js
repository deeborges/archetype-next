// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { worker } = require('./src/mocks/browser');
const isProd = process.env.NODE_ENV === 'production';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
