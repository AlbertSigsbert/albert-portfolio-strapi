module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc30e6d7b50803ae5dad5fd26787d102'),
  },
});
