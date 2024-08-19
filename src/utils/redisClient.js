const Redis = require('ioredis');

const redis = new Redis({
  // host: "redis", // for docker
  host: "127.0.0.1", // for local tesing on localhost
  port: 6379
});

redis.on('connect', () => {
  console.error('Redis connection :');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

(async () => {
  try {
    await redis.set('key', 'Hello, Redis on startup!');
    const result = await redis.get('key');
    console.log('redis Value:', result);
  } catch (err) {
    console.error('Error during Redis operation in IIFE:', err);
  } finally {
    console.warn("Closing the Redis server");
    redis.quit();
  }
})();

module.exports = { redis };
