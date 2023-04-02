import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

config();

const TOKEN = process.env.BOT_TOKEN;

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

async function main() {
  try {
    client.login(TOKEN);
  } catch (error) {
    console.log(error);
  }
}

main();
