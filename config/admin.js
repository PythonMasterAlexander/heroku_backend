module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8c116102422faf9b85f9e4aa79ef5cd4'),
  },
});
