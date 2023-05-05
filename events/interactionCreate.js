const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        // Runs a check to see if a command matches the inputed command string.
        if (!command) {
            console.error(`No current commands match ${interaction.commandName}.`);
            return;
        }
    
        // Elementary error handling.
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            // Can be modified to disable the ephemeral option, personal choice.
            await interaction.reply({ content: 'Something has gone wrong with executing this command!', ephemeral: true});
        }
    }


}