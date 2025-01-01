// اول شيء استدعينا مكتبة الديسكورد discord.js
const { Client, GatewayIntentBits } = require('discord.js');
// ثاني شيء استدعينا البوت او client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// هنا يا طيب تحد التوكن حق البوت من discord developers    
const TOKEN = 'Add your Token';
// هنا حددنا consol.log عشان نعرف اذا بوت انلاين او لا 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
// هنا سويت رد تلقلئي بسيط لكي تاخذ فكره عن البوت 
client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'مرحبا') {
        message.reply('أهلا بك في السيرفر!');
    }
});
// هنا فـ اخير خلنا الكود يدرس التوكن حق البوت عشان يصير انلاين 

client.login(TOKEN);

  
