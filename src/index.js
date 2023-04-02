import { config } from 'dotenv';
import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once('ready', () => {
  console.log(`${client.user.tag} is logged in!`);
});

client.on('messageCreate', (message) => {
  console.log(message.content);
});

client.on('channelCreate', (channel) => {
  console.log(channel);
  console.log(channel.name);
});

async function main() {
  try {
    client.login(TOKEN);
  } catch (error) {
    console.log(error);
  }
}

main();
