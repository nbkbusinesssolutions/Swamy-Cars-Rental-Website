const { defineConfig } = require('vite');
const path = require('node:path');
const fs = require('node:fs/promises');

function copyRootStaticFiles() {
  const files = [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon-192x192.png',
    'apple-touch-icon.png',
    'site.webmanifest',
    'robots.txt',
    'sitemap.xml',
    'swamy-logo.webp',
    'whatsapp icon.svg'
  ];

  const directories = ['assets', 'images', 'data'];

  return {
    name: 'copy-root-static-files',
    apply: 'build',
    async closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      await fs.mkdir(outDir, { recursive: true });

      await Promise.all(
        files.map(async (file) => {
          const src = path.resolve(__dirname, file);
          const dest = path.join(outDir, file);
          try {
            await fs.copyFile(src, dest);
          } catch {
            return;
          }
        })
      );

      await Promise.all(
        directories.map(async (dir) => {
          const srcDir = path.resolve(__dirname, dir);
          const destDir = path.join(outDir, dir);
          try {
            await fs.cp(srcDir, destDir, { recursive: true, force: true });
          } catch {
            return;
          }
        })
      );
    }
  };
}

module.exports = defineConfig({
  plugins: [copyRootStaticFiles()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        cars: path.resolve(__dirname, 'cars.html'),
        booking: path.resolve(__dirname, 'booking.html'),
        faq: path.resolve(__dirname, 'faq.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        notFound: path.resolve(__dirname, '404.html')
      }
    }
  }
});
