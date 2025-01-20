module.exports = {
  // ...existing configuration...
  async redirects() {
    return [
      {
        source: "/",
        destination: "/1",
        permanent: true,
      },
    ];
  },
};
// ...existing code...
