const { SlashCommandBuilder, PermissionFlagsBits, messageLink } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder(),

    // // Initial slash command.
    // .setName('ban')
    // .setDescription('Select a member to ban')
    // .addUserOption(option => 

    //     // Select the user to ban.
    //     option
    //         .setName('target')
    //         .setDescription('the member to ban')
    //         .setRequired(true))
    // .addStringOption(option => 
        
    //     // The second parsing field.
    //     option
    //     .setName('reason')
    //     .setDescription('the reason to ban the user')),
    // // .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    // // .setDMPermission(false),

    async execute(interaction) {
        const member = interaction.options.getMember('User');
        const owner = await message.guild.members.fetch(message.guild.ownerID);
        return interaction.reply({content: `You wanted to ban: ${message.guild.owner.user.tag}`, ephemeral: true});
    }
};