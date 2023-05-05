const { SlashCommandBuilder, PermissionsBitField, guild, PermissionFlagsBits, messageLink, Client, GatewayIntentBits } = require('discord.js');
const { execute } = require('../events/parsing-command');
const { token } = require ('../config.json')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Setting role permissions.
client.guild.everyone.setPermissions([PermissionsBitField.Flags.SendMessages]);

// Creating a role with permissions.
client.guild.create({ 
    name: 'Test', 
    permissions: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel]
    });

module.exports = {
    // Initial Slash Command
    data: new SlashCommandBuilder()
    .setName('Test')
    .setDescription('This is a test command')
    .addUserOption(option =>
        
        // Select the user
        option
        .setName('target')
        .setDescription('Test String')
        .setRequired(true))
        .addStringOption(option =>
            
            // Second parsing field.
            option
            .setName('Test String 2')
            .setDescription('Test String 2'))
            .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
            .setDMPermissions(false),

    async execute(interaction) {
        const member = interaction.options.getMember('User');
        const owner = await messageLink.guild.members.fetch(message.guild.ownerID);
        return interaction.reply({content: `Role has been added to: ${message.guild.owner.user.tag}`, ephemeral: true});
    }
}

client.login(token);