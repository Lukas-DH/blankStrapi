module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8540f3a8177b00bfa050c23b791ca1a3'),
  },
});
