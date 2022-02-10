module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2ec224ce870a3132dab50ab88d300f69'),
  },
});
