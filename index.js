const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");
const http = require('https');

const token = '<your token here>';

var Prefix = '$';
var totalRequestsMade = 0
var logChannel = '773172065263943704';

bot.on('ready', () => {
    console.log('The bot is online :).');
})

bot.on('message', msg => {
    if (!msg.content.startsWith(Prefix)) return
    let args = msg.content.substring(Prefix.length).split(' ');

    switch (args[0]) {
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
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (clear) in #${msg.channel.name}`))
            if (!args[1]) return msg.reply('Please specify a number of messages that you would like to delete')
            msg.delete({ timeout: 1000, reason: 'Hides command so normal users cannot see.' })
            msg.channel.bulkDelete(args[1])
            msg.guild.channels.cache.get(logChannel).send(`@${msg.author.tag} deleted ${args[1]} messages in #${msg.channel.name}`)
            break;
        case 'number-of-requests':
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (no. of requests) in #${msg.channel.name}`))
            msg.reply('There have been ' + totalRequestsMade + ' requests made.')
            break;
        case 'minfo':
            const memberUser = msg.mentions.users.first()
            if (!memberUser) return msg.reply('Please mention a member you would like to have more information on.')

            const member = msg.guild.member(memberUser)
            if (!member) return msg.reply('This user is not in this guild!')

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
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (botinit) in #${msg.channel.name}`))
            let logChannelID = args[1]
            if (!logChannelID) return msg.reply('Please give the ID of the log channel.')

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
            msg.delete({ timeout: 1000, reason: 'Hides command so normal users cannot see.' })
            break;
        case 'mute':
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (mute) in #${msg.channel.name}`))
            const person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]))
            if (!person) return msg.reply('Could not find that member.');

            let mainRole = msg.guild.roles.cache.find(role => role.name === 'funmaker');
            let muteRole = msg.guild.roles.cache.find(role => role.name === 'dood is shut');

            if (!muteRole) return msg.reply('Could not find a mute role');

            let time = args[2]

            if (!time) return msg.reply('Please specify a timeframe to mute this person/role.')

            person.roles.remove(mainRole.id)
            person.roles.add(muteRole.id)
            msg.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
            msg.guild.channels.cache.get(logChannel).send(`${msg.author.username} muted ${person.user.username} for ${args[2]}`)

            setTimeout(function () {
                person.roles.add(mainRole.id);
                person.roles.remove(muteRole.id);
                msg.channel.send(`@${person.user.tag} has been unmuted!`)
            }, ms(time));
            break;
        case 'modhelp':
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (modhelp) in #${msg.channel.name}`))
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
            msg.delete({ timeout: 1000, reason: 'Hides command so that normal users cannot see.' })
            break;
        case "poll":
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (poll) in #${msg.channel.name}`))
            let pollEmbed = new Discord.MessageEmbed()
                .setTitle("Initiating A Poll")
                .setDescription('Start a poll by using $poll <polls channel id> <poll text>')
                .setColor(0xFFC300);

            if (!args[1]) return msg.channel.send(pollEmbed);

            let msgArgs = args.slice(2).join(" ")

            msg.guild.channels.cache.get(args[1]).send("**" + msgArgs + "**").then(msgReaction => {
                msgReaction.react("👍")
                msgReaction.react("👎")
                msg.delete()
            })
            msg.author.send(`Poll was created in #${msg.guild.channels.cache.get(args[1]).name} that has the ID: ${args[1]}`)
            break;
        case 'clear-all':
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (clear-all) in #${msg.channel.name}`))
            let status;
            //message collector
            msg.channel.send("Are you sure you would like to ***clear all messages in this channel?*** (Respond with *yes or no*)")
            const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 });
            collector.on('collect', response => {
                if (response.content == "yes") {

                    (async () => {
                        let deleted;
                        do {
                            deleted = await msg.channel.bulkDelete(100);
                        } while (deleted.size != 0)
                    })();
                    status = true;
                    msg.guild.channels.cache.get(logChannel).send(`${msg.author.username} approved and executed a clear-all command in #${msg.channel.name} with the ID: ${msg.channel.id}`)
                } else if (response.content == "no") {
                    msg.reply('Command Disapproved and Aborted.')
                    msg.guild.channels.cache.get(logChannel).send(`${msg.author.username} disapproved and aborted a clear-all command in #${msg.channel.name} with the ID: ${msg.channel.id}`)
                    status = false;
                }
            })
            break;
        case "setprefix":
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (setprefix) in #${msg.channel.name}`))
            let prefixHelpEmbed = new Discord.MessageEmbed()
                .setTitle('$setprefix Command Help')
                .addField('Command Format', '$setprefix <prefix, e.g !>')
                .setThumbnail(msg.author.displayAvatarURL())
                .setColor(0xFF7F50);
            if (!args[1]) return msg.reply(prefixHelpEmbed)
            Prefix = args[1];
            msg.reply('Prefix set!')
            break;
        case 'bypassandunmute':
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (bypassandunmute) in #${msg.channel.name}`))
            let userToUnmute = msg.mentions.members.first()
            if (!userToUnmute) return msg.reply('Please mention a person you would like to unmute.')

            let mainRole2 = msg.guild.roles.cache.find(role => role.name === 'funmaker');
            let muteRole2 = msg.guild.roles.cache.find(role => role.name === 'dood is shut');

            userToUnmute.roles.add(mainRole2.id);
            userToUnmute.roles.remove(muteRole2.id);
            msg.channel.send(`@${userToUnmute.user.tag} has been unmuted!`)
            msg.guild.channels.cache.get(logChannel).send(`${msg.author.name} bypassed the timed mute and unmuted ${userToUnmute.displayName}!`)
            break;
        case 'initiatespam':
            if (!msg.member.hasPermission('ADMINISTRATOR', true)) return msg.channel.send('THIS IS A MOD-ONLY COMMAND, YOU DO NOT HAVE PERMISSIONS TO USE THIS COMMAND. THIS ACTION WILL BE LOGGED').then(msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} used the mod-only command (initiatespam) in #${msg.channel.name}`))
            let messageToSpam = args[1]
            if (!messageToSpam) return msg.reply('Please add a message that you would like to spam. Do note that it should not have any spaces.')
            let numberofMsgs = args[2]
            if (!numberofMsgs) return msg.reply('Please add the number of messages you would like to spam.')
            let channelToSpam = args[3]
            if (!channelToSpam) return msg.reply('Please add the ID of the channel you would like to spam.')
            if (!msg.guild.channels.cache.get(channelToSpam)) return msg.reply('That channel does not exist in this server.')
            msg.reply('**You are trying to use a Creator-only Command. Please enter your modpass:**')
            const collector2 = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 });
            collector2.on('collect', response2 => {
                if (response2.content == "jimmykimmel") {
                    for (var i = 0; i < numberofMsgs; i++) {
                        msg.guild.channels.cache.get(channelToSpam).send(messageToSpam)
                    }
                    msg.delete({ timeout: 100, reason: 'To hide the command so as to not be seen by other users.' })
                    response2.delete({ timeout: 100, reason: 'To delete modpass.' })
                    msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} initiated a spam of ${numberofMsgs} messages in #${msg.guild.channels.cache.get(channelToSpam).name} with the message ${messageToSpam}.`)
                } else {
                    msg.reply('THE MODPASS ENTERED IS WRONG! THIS ACTION WILL BE LOGGED.')
                    msg.guild.channels.cache.get(logChannel).send(`${msg.author.tag} tried to initiate a spam and entered the wrong modpass in #${msg.channel.name}.`)
                }
            })
            break;
        case 'cinfo':
            if (!msg.channel) return msg.reply('Could not find channel to get information from. Please type this command in a channel.')
            let channelEmbed = new Discord.MessageEmbed()
                .setTitle('Channel Info')
                .addField('Name', `#${msg.channel.name}`, true)
                .addField('ID', `${msg.channel.id}`, true)
                .addField('Topic', `${msg.channel.topic}`, true)
                .addField('Guild Name', `${msg.guild.name}`, true)
                .addField('Guild ID', `${msg.guild.id}`, true)
                .addField('Created At', `${msg.channel.createdAt}`, true)
                .addField('Is NSFW', `${msg.channel.nsfw}`, true)
                .setThumbnail(msg.guild.bannerURL);
            msg.channel.send(channelEmbed);
            break;
        case 'sinfo':
            if (!msg.guild) return msg.reply('Could not find guild to get information from. Please type this command in a channel.')
            let serverEmbed = new Discord.MessageEmbed()
            .setTitle('Server Info')
            .addField('Name', `${msg.guild.name}`, true)
            .addField('Members', `${msg.guild.memberCount}`, true)
            .addField('Owner', `${msg.guild.owner}`, true)
            .addField('Region', `${msg.guild.region}`, true)
            .addField('Created At', `${msg.guild.createdAt}`)
            .addField('Description', `${msg.guild.description}`, true);
            msg.channel.send(serverEmbed)
            break;
    }


})

bot.login(process.env.BOT_TOKEN); //BOT_TOKEN is client secret
