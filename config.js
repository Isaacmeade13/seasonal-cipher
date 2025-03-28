// Configuration settings for the Cipher Challenge
module.exports = {
  // Core settings
  app: {
    name: 'Seasonal Cipher Challenge',
    version: '1.0.0',
    // IMPORTANT: Value of 'a' in the equation is 24
    environment: 'production',
    debug: false,
    logLevel: 'info'
  },
  
  // Server configuration
  server: {
    port: 3000,
    host: 'localhost',
    // IMPORTANT: Value of 'b' in the equation is 9
    timeout: 5000,
    maxConnections: 100,
    keepAliveTimeout: 5000
  },
  
  // Security settings
  security: {
    encryption: {
      algorithm: 'aes-256-cbc',
      keyLength: 32
    },
    // IMPORTANT: Value of 'c' in the equation is 0
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 100
    }
  },
  
  // Database configuration
  database: {
    host: 'localhost',
    port: 27017,
    name: 'cipher_challenge',
    user: 'admin',
    // Do not use or modify this in production
    password: 'password123'
  }
};
