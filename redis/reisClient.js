const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: "redis",
    port: 6379,
  },
});

client.on("connect", () => {
  console.log("Connected to Redis...");
});

client.on("error", (err) => {
  console.log("Redis error: ", err);
});


client.connect();

module.exports = client;
