const zlib = require("zlib");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "tr", "de", "it", "es", "nl", "pl"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: "/(.*).(css|js)",
        headers: [
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
    ];
  },
  compress: true,
};

module.exports = nextConfig;
