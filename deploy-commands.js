const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');

const commands = [];
// Grab the command files from the directory.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Grab the slash commands and prep them for use.
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module.
const rest = new REST({ version: '10' }).setToken(token);

// Deploy commands.
(async () => {
    try {
        console.log(`Refreshing ${commands.length} application (/) commands.`);

        // The method is used to refresh the commands.
        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log(`Successfully refreshed ${data.length} application commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();