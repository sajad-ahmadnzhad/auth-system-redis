import Redis from "ioredis";

const client = new Redis();

client.on("connect", () => {
  console.log("Connected to redis successfully");
});

client.on("error", (error) => {
  console.log("Connection redis error", error);
});

export default client