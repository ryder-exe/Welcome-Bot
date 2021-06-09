const Discord = require('discord.js')
const Canvas = require('canvas');

module.exports = (client) =>{
    
    const channelID = '0000000000000000000'
    
    client.on('guildMemberAdd', async member => {
        

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./welcome.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle ='#C0C0C0';
        ctx.strokeRect(0, 0, canvas.width-5, canvas.height-5);

        //  ctx.font = '50px Impact';
        //  ctx.fillstyle = '#C0C0C0'
        //  ctx.fillText(`${member.user.username}`, 362, 215)

        ctx.beginPath();
        ctx.arc(350, 125, 100, 0, Math.PI * 2 , true);
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg'}))
        ctx.drawImage(avatar, 25, 25, 200, 200);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome2.png');


        const  welembed = new Discord.MessageEmbed()
        .setAuthor('PIPO PAPO')
        .setColor(0xf8c6ff)
        .setDescription(`Wecome!!<@${member.user.id}> , to the Discord Server of { server name}!!. `)
        .setImage("attachment://welcome2.png")
        .setFooter("WELCOME TO THE SERVER")
        .attachFiles(attachment);
        const channel = member.guild.channels.cache.get(channelID)
        channel.send(` <@${member.user.id}>`, welembed);



    })
}