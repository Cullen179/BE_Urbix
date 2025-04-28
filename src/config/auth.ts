export default {
    jwtSecret: process.env.JWT_SECRET || 'dev-secret',
    jwtExpiresIn: '1h',
  };
  