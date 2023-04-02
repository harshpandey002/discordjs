import { config } from 'dotenv';
import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  interaction.reply({ content: 'Hey There' });
});

async function main() {
  const commands = [
    {
      name: 'poke',
      description: 'Helps you poke a little',
    },
  ];
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    client.login(TOKEN);
  } catch (error) {
    console.log(error);
  }
}

main();
