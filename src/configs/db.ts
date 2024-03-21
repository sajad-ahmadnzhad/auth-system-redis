import Redis from "ioredis";

const client = new Redis(process.env.REDIS_URL as string);

client.on("connect", () => {
  console.log("Connected to redis successfully");
});

client.on("error", (error) => {
  console.log("Connection redis error", error);
});

export default client;
