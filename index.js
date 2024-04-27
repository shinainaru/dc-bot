require('dotenv').config()
const { Client, Routes, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const ping = {
  name: 'ping',
  description: 'Pings the bot and shows the latency'
};


const command2 = {
  name:'command2',
  description:'yes'
}

const imageCommand = {
    name: "image",
    description: "Nero image"
}

const commands = [ping, command2, imageCommand];

const client = new Client({ intents: [] });


client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else if(interaction.commandName === 'command2') {
    interaction.reply('example command');
  } else if (interaction.commandName == "image") {
    const attachment = new AttachmentBuilder('./nero.png', {name: 'nero-maid.png'})
    const embed = new EmbedBuilder().setDescription('Nero Nero Nero ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut Nero wangi aku mau nyiumin aroma wanginya Nero AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH Nero keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH Nero AAAAA LUCCUUUUUUUUUUUUUUU............Nero AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? Nero itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ Nero gw ...Nero di laptop ngeliatin gw, Nero .. kamu percaya sama aku ? aaaaaaaaaaah syukur Nero aku gak mau merelakan Nero aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA Nero SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH');

    interaction.reply({ embeds: [embed], files: [attachment]})
  } else {
    interaction.reply('this command\'s response has not been added yet!');
  }
});


(async ()=>{
  const token = process.env.DC_BOT_TOKEN
  if (!token) throw new Error('Invalid token');

  
  await client.login(token).catch((err) => {
    throw err
  });

  await client.rest.put(Routes.applicationCommands(client.user.id), { body: commands });


  console.log('DONE | Application/Bot is up and running. DO NOT CLOSE THIS TAB UNLESS YOU ARE FINISHED USING THE BOT, IT WILL PUT THE BOT OFFLINE.');

})();