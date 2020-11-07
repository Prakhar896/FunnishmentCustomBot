const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");

const token = 'NzczNTQ2MTcyOTAwMDQ4OTg3.X6KzAw.r95bBu1SNs7x375xiyNRLm1KRfA';

const Prefix = '$';
var totalRequestsMade = 0
var logChannel = '773172065263943704';

bot.on('ready', () => {
    console.log('The bot is online :).');
})

bot.on('message', msg => {

    let args = msg.content.substring(Prefix.length).split(' ');

    switch(args[0]) {
        case 'request-priority-speaker':
            let user = msg.author
            let messageId = msg.id
            let initialMsgContent = args[1]
            if (!initialMsgContent) return msg.reply('Please specify a message you would like to send the mod for the request. For example, please give me this capability i worked hard for it')
            
            let modToDm = msg.mentions.users.first();
            if (!modToDm) return msg.reply("Please mention a mod you would like to request.")

            if (modToDm.tag === 'Drakonzai#3350' || modToDm.tag === 'IAMJAI#4906') {
                
            } else {
                return msg.reply('The user you mentioned is not a mod.')
            }

            const embed = new Discord.MessageEmbed()
            .setTitle('Priority Speaker Request')
            .addField('Request Maker', user.tag)
            .addField('Message ID', messageId, true)
            .addField('Message Content', initialMsgContent, true)
            .addField('Request Details', 'Request for Priority speaker capability upon buying from the Points store with hard-earned points. Please DM user for follow up.')
            .setThumbnail(user.displayAvatarURL());

            modToDm.send(embed)
            msg.reply('Mod has been DMed with information about your request. The mod will DM you shortly.')
            totalRequestsMade += 1
            break;
        case 'request-twitch-notifs':
            let user1 = msg.author
            let messageId1 = msg.id
            let initialMsgContent1 = args[1]
            if (!initialMsgContent1) return msg.reply('Please specify a message you would like to send the mod for the request. For example, please give me this capability i worked hard for it')
            
            let modToDm1 = msg.mentions.users.first();
            if (!modToDm1) return msg.reply("Please mention a mod you would like to request.")

            if (modToDm1.tag === 'Drakonzai#3350' || modToDm1.tag === 'IAMJAI#4906') {
                
            } else {
                return msg.reply('The user you mentioned is not a mod.')
            }

            const embed1 = new Discord.MessageEmbed()
            .setTitle('Twitch Notifications Request')
            .addField('Request Maker', user1.tag)
            .addField('Message ID', messageId1, true)
            .addField('Message Content', initialMsgContent1, true)
            .addField('Request Details', 'Request for Twitch notifications capability upon buying from the Points store with hard-earned points. Please DM user for follow up.')
            .setThumbnail(user1.displayAvatarURL());

            modToDm1.send(embed1)
            msg.reply('Mod has been DMed with information about your request. The mod will DM you shortly.')
            totalRequestsMade += 1
            break;
        case 'request-youtube-notifs':
            let user2 = msg.author
            let messageId2 = msg.id
            let initialMsgContent2 = args[1]
            if (!initialMsgContent2) return msg.reply('Please specify a message you would like to send the mod for the request. For example, please give me this capability i worked hard for it')
            
            let modToDm2 = msg.mentions.users.first();
            if (!modToDm2) return msg.reply("Please mention a mod you would like to request.")

            if (modToDm2.tag === 'Drakonzai#3350' || modToDm2.tag === 'IAMJAI#4906') {
                
            } else {
                return msg.reply('The user you mentioned is not a mod.')
            }

            const embed2 = new Discord.MessageEmbed()
            .setTitle('YouTube Notifications Request')
            .addField('Request Maker', user2.tag)
            .addField('Message ID', messageId2, true)
            .addField('Message Content', initialMsgContent2, true)
            .addField('Request Details', 'Request for YouTube notifications capability upon buying from the Points store with hard-earned points. Please DM user for follow up.')
            .setThumbnail(user2.displayAvatarURL());

            modToDm2.send(embed2)
            msg.reply('Mod has been DMed with information about your request. The mod will DM you shortly.')
            totalRequestsMade += 1
            break;
        case 'request-twitter-notifs':
            let user3 = msg.author
            let messageId3 = msg.id
            let initialMsgContent3 = args[1]
            if (!initialMsgContent3) return msg.reply('Please specify a message you would like to send the mod for the request. For example, please give me this capability i worked hard for it')
            
            let modToDm3 = msg.mentions.users.first();
            if (!modToDm3) return msg.reply("Please mention a mod you would like to request.")

            if (modToDm3.tag === 'Drakonzai#3350' || modToDm3.tag === 'IAMJAI#4906') {
                
            } else {
                return msg.reply('The user you mentioned is not a mod.')
            }

            const embed3 = new Discord.MessageEmbed()
            .setTitle('Twitter Notifications Request')
            .addField('Request Maker', user3.tag)
            .addField('Message ID', messageId3, true)
            .addField('Message Content', initialMsgContent3, true)
            .addField('Request Details', 'Request for Twitter notifications capability upon buying from the Points store with hard-earned points. Please DM user for follow up.')
            .setThumbnail(user3.displayAvatarURL());

            modToDm3.send(embed3)
            msg.reply('Mod has been DMed with information about your request. The mod will DM you shortly.')
            totalRequestsMade += 1
            break;
        case 'clear':
            if(!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (clear) in #${msg.channel.name}`))
            if (!args[1]) return msg.reply('Please specify a number of messages that you would like to delete')
            msg.channel.bulkDelete(args[1])
            msg.guild.channels.cache.get(logChannel).send(`@${msg.author.tag} deleted ${args[1]} messages in #${msg.channel.name}`)
            break;
        case 'number-of-requests':
            if(!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (no. of requests) in #${msg.channel.name}`))
            msg.reply('There have been ' + totalRequestsMade + ' requests made.')
            break;
        case 'minfo':
            const memberUser = msg.mentions.users.first()
            if(!memberUser) return msg.reply('Please mention a member you would like to have more information on.')

            const member = msg.guild.member(memberUser)
            if(!member) return msg.reply('This user is not in this guild!')

            const memberEmbed = new Discord.MessageEmbed()
            .setTitle('Info About ' + memberUser.username)
            .addField('Name and Tag', memberUser.tag, true)
            .addField('Nickname in ' + member.guild.name, member.nickname, true)
            .addField('Last Message', 'ID: ' + memberUser.lastMessageID)
            .addField('Account Created At', memberUser.createdAt, true)
            .setThumbnail(memberUser.displayAvatarURL());
            
            msg.channel.send(memberEmbed)
            msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} requested for information on ${memberUser.tag}`)
            break;
        case 'botinit':
            if(!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (botinit) in #${msg.channel.name}`))
            let logChannelID = args[1]
            if(!logChannelID) return msg.reply('Please give the ID of the log channel.')

            logChannel = logChannelID
            msg.reply('Bot Initialised!')
            break;
        case 'info':
            msg.reply('Hi there! I am Funnishment Bot, a custom bot made for this server by Prakhar Trivedi, more commonly known as @Drakonzai on this server. My prefix is $. Say $help to know the commands you can carry out!')
            break;
        case 'help':
            let helpEmbed = new Discord.MessageEmbed()
            .setTitle('Funnishment Custom Bot Help')
            .addField('Requesting for Twitch Notifs', 'In order to request twitch notfis upon buying it from the Points store, use the command $request-twitch-notifs <a message u want to tell the mod, with spaces replaced by -> @<a mod>')
            .addField('Requesting Youtube Notifs', 'In order to request twitch notfis upon buying it from the Points store, use the command $request-youtube-notifs <a message u want to tell the mod, with spaces replaced by -> @<a mod>')
            .addField('Requesting Twitter Notifs', 'In order to request twitch notfis upon buying it from the Points store, use the command $request-twitter-notifs <a message u want to tell the mod, with spaces replaced by -> @<a mod>')
            .addField('User Info', 'To find about someone on the server, use $minfo @<user u want to find out about>. This action is logged in the server logs.')
            .setThumbnail(msg.author.displayAvatarURL());
            msg.author.send(helpEmbed)
            break;
            case 'mute':
                 const person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
                 if (!person) return msg.reply('Could not find that member.');
            
                 let mainRole = msg.guild.roles.cache.find(role => role.name === 'normie');
                 let muteRole = msg.guild.roles.cache.find(role => role.name === 'dood is shut');
            
                if(!muteRole) return msg.reply('Could not find a mute role');
            
                let time = args[2]
            
                if(!time) return msg.reply('Please specify a timeframe to mute this person/role.')
            
                person.roles.remove(mainRole.id)
                person.roles.add(muteRole.id)
                msg.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
                msg.guild.channels.cache.get(logChannel).send(`${msg.author.username} muted ${person.user.username} for ${args[2]}`)
            
                setTimeout(function() {
                    person.roles.add(mainRole.id);
                    person.roles.remove(muteRole.id);
                    msg.channel.send(`@${person.user.tag} has been unmuted!`)
                }, ms(time));
                break;
            case 'modhelp':
                if(!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (modhelp) in #${msg.channel.name}`))
                let modHelpEmbed = new Discord.MessageEmbed()
                .setTitle('Funnishment Custom Bot Moderator Only Help')
                .addField('Request DMs', 'You will receive DMs from this bot with requests of capabilities from members of the Funnishment server. You can follow up with the users themselves in a DM afterwards.')
                .addField('Mod Only Commands', 'The following are moderator only commands. Anyone found using these should be muted by you. This bot does not come with the capability of muting people if they use mod-only commands.')
                .addField('Bulk Message Deletion', 'You can delete messages in bulk via the command $clear <amount of messages you want to delete>. This action is logged.')
                .addField('Number of requests', 'With the command $number-of-requests , you can find out the number of requests that have been registered so far.')
                .addField('Timed Mutes', 'With the command $mute <@person u want to mute>10s , you can mute them for a certain time, for e,g 1h, 2m, or 30s. Note that this mute is different from the vulgarity mute.')
                .addField('Polls', 'You can initiate a poll with the $poll <poll message channel id> <poll text> command.')
                .setThumbnail(msg.author.displayAvatarURL())

                msg.author.send(modHelpEmbed)
                break;
            case "poll":
                if(!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (poll) in #${msg.channel.name}`))
                let pollEmbed = new Discord.MessageEmbed()
                .setTitle("Initiating A Poll")
                .setDescription('Start a poll by using $poll <polls channel id> <poll text>')
                .setColor(0xFFC300);

                if(!args[2]) return msg.channel.send(pollEmbed);

                let msgArgs = args.slice(2).join(" ")

                msg.guild.channels.cache.get(args[1]).send("**"+msgArgs+"**").then(msgReaction => {
                    msgReaction.react("👍")
                    msgReaction.react("👎")
                    msg.delete()
                })
                break;

    }


})

bot.login(token);
