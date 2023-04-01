import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.login(process.env.BOT_TOKEN);

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
