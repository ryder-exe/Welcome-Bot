const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const command = require('./command')
const welcome = require('./welcome');
const prettyMilliseconds = require("pretty-ms");


client.on('ready', () =>{
    console.log('Bot is ready!!')

    command(client, 'hello', message =>{
        message.channel.send(`${message.author} Hello I m bot`);
    });  
    
    command(client, 'info', message =>{
       const  infoembed = new Discord.MessageEmbed()
       .setAuthor('welcome bot', `${message.guild.iconURL({dynamic: true })}`)
       .setDescription('welcome')
       .setColor(0x42AAE9)
       .setThumbnail(`${message.guild.iconURL({dynamic: true })}`)
       .addFields(
           {name: 'BOT NAME', value: '```welcome bot```', inline: true},
           {name: 'OWNER', value: '```Ryder```', inline: true},
           {name: 'DEVELOPER', value: '```RYDER```', inline: true},
           {name: 'CURRENT STATUS', value: '```Online```', inline: true},
           {name: 'VERSION', value: '```js 16.14```', inline: true},
       )
       
       .setFooter("information command Requested By:" + message.author.username)

       message.channel.send(infoembed)
    })

    welcome(client);

    command(client, 'invite' , message => {

   
        const invite_embed = new Discord.MessageEmbed()
         .setTitle('INVITE ME IN YOUR SERVER!!')
         .setDescription('[Click](...)')
         .setColor(0x42AAE9)
    
         message.channel.send(invite_embed)
    
        })

    
    
        client.user.setActivity("Lex Maverick's Server", {type: 'WATCHING'}) 


        command(client, 'ping', message =>{

            const ping_embed = new Discord.MessageEmbed()
            .setTitle('Pong 🏓')
            .setDescription(`Latency is ${Math.round(client.ws.ping)}ms`)
            .setColor(0x42AAE9)

            message.channel.send(ping_embed)


            
        })

        
        command(client, 'uptime', message =>{

            const uptime_embed = new Discord.MessageEmbed()
            .setTitle('UPTIME')
            .setDescription(`Uptime: ${prettyMilliseconds(client.uptime)}`)
            .setColor(0x42AAE9)

            message.channel.send(uptime_embed)


            
        })



});





client.login(config.token)