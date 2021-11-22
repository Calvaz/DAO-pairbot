export const name = 'interactionCreate';

export async function execute(interaction: any) {
    if (!interaction.isCommand() && !interaction.isButton()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;
    try {
        await command.execute(interaction)
        console.log(`${interaction.user.tag} in #${interaction.channel?.name} triggered an interaction.`);
    }
    catch (error) {
        console.error(error)
        try {
          await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
        catch (e) {
          console.error(e);
        }
    }
  

}