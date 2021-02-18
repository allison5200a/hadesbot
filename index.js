/*
]====> 𝑺𝑹 𝑨𝑳𝑳𝑰𝑺𝑶𝑵 <====[ ]====> 𝑯𝑨𝑫𝑬𝑺 𝑶𝑭 𝑨𝑳𝑵𝑩𝑶𝑻𝑺 <====[ ]====> 558688036194 <====[
*/
// ANAK ANJING PASTI YANG ATAS DI UBAH
// NGOTAK KONSOL
// NUMPANG NAMA TIDAK MEMBUAT MU PRO
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cara } = require('./src/cara')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:RAMLAN ID\n' // GANTI NAMA LU
            + 'ORG:OWNER BOTZ;\n'
            + 'TEL;type=CELL;type=VOICE;waid=558688036194:+55 86 8803-6194\n' // GANTI NOMOR LU
            + 'END:VCARD'
// UDAH SEGITU KONSOL KEBAWAH BIARIN AJA
const ngonsol = JSON.parse(fs.readFileSync('./settings/Ramlan.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol
// POWERED BY RAMLAN ID
prefix = botPrefix
blocked = []   
limitawal = UserLimitz
memberlimit = GrupLimitz
cr = CeerTod

// LOAD JSON
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { help } = require('./lib/help')
const { simple } = require('./database/menu/simple')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { dompet } = require('./database/menu/dompet')
const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { sound } = require('./database/menu/sound')
const { vip } = require('./database/menu/premium')
/*
]=====> FUNCTION <=====[
*/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/

const baby = new WAConnection()
baby.logger.level = 'warn'
console.log(banner.string)
   baby.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' ASSINAR O CANAL MAWY FF'))
})

	baby.on('credentials-updated', () => {
		fs.writeFileSync('./Ramlan.json', JSON.stringify(baby.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'ingfokan cuyy...')
	})
	fs.existsSync('./Ramlan.json') && baby.loadAuthInfo('./Ramlan.json')
	baby.on('connecting', () => {
		start('2', 'Hades Conectando...')
	})
	baby.on('open', () => {
		success('2', 'Hades Conectado')
	})
	baby.connect({timeoutMs: 30*1000})

baby.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await baby.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *BEM-VINDO AO GRUPO ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Intro/Dikick!!! \n➸ Nome : \n➸ Idade : \n➸ Askot : \n➸ Gênero : \n➸ Já tenho Doi/Blm: \n➸ Cara de Pap primeiro!!! \n➸ Instagram? \n𝐒𝐚𝐯𝐞 𝐍𝐨𝐦𝐨𝐫 𝐀𝐃𝐌𝐈𝐍! \n *___________________________*\nNão seja uma pulga/ghost por favor krl!!`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Saiu mais um arrombado, nem faz falta XD. ADEUS... @${num.split('@')[0]}👋* \n_Vou enterrar seu corpo profundamente_`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	baby.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	baby.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = baby.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = baby.contacts[sender] != undefined ? baby.contacts[sender].vname || baby.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await baby.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*
]=====> RAMLAN ID <=====[
*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isPrem = premium.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				baby.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				baby.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? baby.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    baby.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			baby.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    baby.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			
/*
]=====> LEVELING <=====[
*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
/*
]=====> CHECK LIMIT BY LANN ID <=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return baby.sendMessage(from,`Seu limite subiu\n\n_Note : limite pode ser obtido por meio de ${prefix}buylimit e subir de level_`, text,{ quoted: mek})
                            baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
/*
]=====> LIMITED BY LANN ID <=====[
*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    baby.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            baby.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
/*
]=====> ATM <=====[
*/
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admins de grupo são livres:v')
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Sim mana, não spam")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Woyy ${sender.split("@")[0]} Grup ini anti link, siap siap kau!`)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 3000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Tiros na Cabeça :v")
		        }, 2000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Preparar?")
		        }, 0)
	        }               
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


switch(command) {
                case 'help':
				case 'menu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(help(pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku), text, tescuk, cr)
					break
				case 'donasi':
				case 'donate':
					baby.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					break
				case 'bingungcok':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())				
					baby.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					break										
                case 'simplemenu':
				case 'simpelmenu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(simple(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'gabutmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(gabut(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'groupmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())			
					await costum(groupm(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'downloadmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(download(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'dompetmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(dompet(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'randommenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(random(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'makermenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(maker(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'othermenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(other(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'soundmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(sound(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'premiummenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(vip(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break																			
                case 'ownermenu':
                if (isBanned) return reply(ind.baned())					
					await costum(owb(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break										
/*
]=====> SIMPLE MENU <=====[
*/
				case 'stiker': 
				case 'sticker':
				case 's':
				if (isBanned) return reply(ind.baned())
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								baby.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								baby.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Envie fotos/vídeos/gifs com legendas \n${prefix}sticker (duração do sticker de vídeo de 1 a 9 segundos)`)
					}
					break
				case 'nulis1':
				case 'tulis1':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (args.length < 1) return reply(`Onde está o texto, mana? Exemplo : ${prefix}nulis1 Hades é gentil`)
				ramlan = body.slice(8)
				reply('「❗」ESPERE BRO ESTÁ EM ANDAMENTO...')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ramlan}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Melhor escrever você mesma, mana :*'})
				break
				case 'nulis2':
				case 'tulis2':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (args.length < 1) return reply(`Onde está o texto, mana? Exemplo : ${prefix}nulis2 Hades é gentil`)
				laysha = body.slice(8)
				reply('「❗」ESPERE BRO ESTÁ EM ANDAMENTO...')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Melhor escrever você mesma, mana :*'})
				break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever??')
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = body.slice(7)
					reply('「❗」ESPERE BRO ESTÁ EM ANDAMENTO...')
					buff = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
					baby.sendMessage(from, buff, image, {quoted: mek})
                                        await limitAdd(sender)
					break													
				case 'quotes':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				quotes = body.slice(1)
				const quo =['Melhor entender um pouco do que entender mal.','Quase todos os homens são capazes de resistir à adversidade. No entanto, se você quiser testar o verdadeiro caráter de um homem, dê-lhe poder.','Quando a determinação de uma pessoa é forte e inabalável, Deus unirá seus esforços.','O sofrimento é uma lição.','Ciência sem religião é coxo.','A vida é como uma bicicleta, para nos mantermos equilibrados temos que seguir em frente.','A diferença entre passado, presente e futuro nada mais é do que uma ilusão teimosa.','Uma mesa, uma cadeira, uma tigela de frutas e um violino; o que mais é necessário para uma pessoa se sentir feliz?','Tenha misericórdia dos outros, seja duro consigo mesmo.','A melhor maneira de se mover é atribuindo tarefas a si mesmo.','Não devemos desanimar. A paixão é o mais forte estimulante para o amor, a criação e o desejo de viver mais.','Os humanos serão felizes contanto que escolham ser felizes.','Eu não espero ser tudo para todos. Eu só quero ser algo para alguém.','Se o intelecto de alguém é perfeito, é um pouco dito.','Feliz é o homem que pode ser seu mestre, cocheiro para sua luxúria e capitão para a arca de sua vida.','Amigos honestos são mais valiosos do que propriedade herdada de seus ancestrais.','A coisa mais cansativa da vida é ser uma pessoa insincera.','Aberto para você, é assim que Deus nos deu uma maneira de tentar. Nunca pense que a estrada está fechada.','A procrastinação é um túmulo onde a oportunidade está enterrada.','O amor não é olhar nos olhos um do outro, mas olhar na mesma direção juntos.','Nós somos o que fazemos repetidamente. Assim, o brilho não é um ato, mas um hábito.','Nunca tente fazer seu filho ou filha ser como você. Você é apenas uma pessoa.','Se você pode fazer outras pessoas rirem, então você obterá todo o amor que quiser.','Os problemas virão mais cedo ou mais tarde. Se surgir um problema, por favor, dê as boas-vindas o melhor possível. Quanto mais amigável você o cumprimenta, mais cedo ele irá embora.','Não podemos fazer nada para mudar o passado. Mas tudo o que fizermos pode mudar o futuro.','Paciência é amiga da sabedoria.','Pessoas criativas são motivadas pelo desejo de progredir, não pelo desejo de vencer os outros.','Onde quer que você esteja, seja sempre o melhor e dê o melhor que podemos dar.','O ódio é como o amor, queimando sobre as pequenas coisas.','Você não precisa ter sucesso na primeira vez.','Uma hora intensiva é muito melhor e gratificante do que anos de sonhos e ponderações.','A melhor coisa que você pode fazer por outra pessoa não é compartilhar sua riqueza, mas ajudá-la a possuir sua riqueza.','Não há garantia de sucesso, mas não tentar é garantia de fracasso.','Não sei qual é a chave do sucesso, mas a chave do fracasso é tentar fazer todos felizes.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				baby.sendMessage(from, ''+tes+'\n\n_By : ⸸Hades⸸Panutanque._', text, { quoted: mek })
				await limitAdd(sender)
				break				
				case 'ninjalogo':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Exemplo : ${prefix}ninjalogo Hades e Gans`)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break				
		case 'halloweentext':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())				
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('O texto é longo, até 9 caracteres')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
				case 'pornhub':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Exemplo : ${prefix}pornhub Hades & Hub`)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'gemboktext':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Exemplo : ${prefix}gemboktext 11 01 2021 & Hades e Nadia`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'glitchtext':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Exemplo : ${prefix}glitchtext Hades & Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'simi':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`O que você quer perguntar? Exemplo : ${prefix}simi halo`)
					teks = body.slice(5)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=${XteamKey}`)
					reply(anu.jawaban)
					break					
				case 'tts':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return baby.sendMessage(from, 'Onde está o código do idioma sis? exemplo : ${prefix}tts pt Óla Hades', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return baby.sendMessage(from, `Onde está o texto? exemplo : ${prefix}tts pt ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('O texto é muito longo mana')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							baby.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
					case 'ttp':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('que adesivo de texto você quer fazer??')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						baby.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                        await limitAdd(sender)
					break
				case 'toimg':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isQuotedSticker) return reply('Responda ou marque o sticker que você deseja converter >_<')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                baby.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break					
                case 'bikinquote':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `que tipo de citação você quer ser, titit?\n\nExemplo : ${prefix}bikinquote Eu não sou uma boneca e diz Hades`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {caption: 'Nih kak >_<', quoted: mek})
					await limitAdd(sender)
					break
                   case 'stalkig':
                   if (isBanned) return reply(ind.baned())
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${VhtearKey}`, {method: 'get'})
                     reply('「❗」Paciência novamente, é IG Stalking Sis')
                     buffer = await getBuffer(anu.result.picture)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.result.username}_ \n *Nama??* : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following?* : _${anu.result.follow}_ \n *Jumlah Post?* : _${anu.result.post_count}_ \n *Biografi?? :* _${anu.result.biography}`
                    baby.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			       break
				case 'daftar':
				if (isBanned) return reply(ind.baned())
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan kak :)`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Idade mínima 10 anos no máximo 40 anos`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(namaUser, 'cyan'), 'Idade:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(namaUser, 'cyan'), 'Idade:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
		case 'silktext':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
				if (args.length < 1) return reply(ind.wrongf())
				silk = body.slice(10)
				if (silk.length > 7) return reply('O texto é longo, com até 6 caracteres')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${VhtearKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
// PREMIUM
				case 'premiumlist':
					baby.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(ind.noregis())
					teks = `╭─「 *TOTAL USUÁRIO PREMIUM* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Número de usuários premium : ${premium.length}\n╰──────「 *${botName}* 」`
					baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				case 'bokep':
				baby.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('NÃO COMEÇA BRO')
                 randTeks = randKey.teks
                 baby.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'mutual':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
                if (isGroup) return  reply( 'NÃO PODE ESTAR NO GRUPO KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Ache um companheiro >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Par encontrado: 🐊\n*${prefix}next* — Encontre novos parceiros`)
            break
            case 'next':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
                if (isGroup) return  reply( 'NÃO PODE ESTAR NO GRUPO KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Ache um companheiro >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Par encontrado: 🐊\n*${prefix}next* — Encontre novos parceiros`)
                break
                case 'blowjob':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'nangis':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」AMOR PAUSA 1 MINUTO DESTE SIM')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'cium':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」AMOR PAUSA 1 MINUTO DESTE SIM')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'peluk':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」AMOR PAUSA 1 MINUTO DESTE SIM')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'yutubdl':
					if (args.length < 1) return reply('Cadê o url, hum?')
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('SUA URL NÃO É VÁLIDA')				
		anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VhtearKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ TÍTULO* : ${anu.result.title}\n\n*[WAIT] O processo costumava ser Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					baby.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
				case 'tiktod':
					if (args.length < 1) return reply('Cadê o url, hum?')
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('SUA URL NÃO É VÁLIDA')
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${VhtearKey}`,)
					reply('[WAIT] O processo costumava ser Yakan')
					buffer = await getBuffer(anu.result.video)
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
					case 'hidetag5':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(10)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
					break
					case 'hidetag10':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(11)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})	                	                
					break
                case 'randomhentong':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					gatauda = body.slice(15)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					break																													               							
// PREMIUM		    								
/*
]=====> GABUTZ MENU <=====[
*/
				case 'caklontong':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VhtearKey}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					lontong = `➸ Jawaban : *${anu.result.jawaban}* \n➸ Penjelasan : *${anu.result.desk}*`
					setTimeout( () => {
					baby.sendMessage(from, lontong, text, {quoted: mek})					
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_10 segundos para ir…_', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_20 segundos para ir..._', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_30 segundos para ir..._', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, caklontong, text, {quoted: mek})
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakin':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${VhtearKey}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soalImg)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					baby.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_10 segundos para ir..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_20 segundos para ir..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_30 segundos para ir..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, ngebuff, image, { caption: '_Adivinha mano!!! não posso responder a doações yan:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				case 'bisakah':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Claro que eu posso! Você é a pessoa mais caseira','Não posso Ajg Aowkaowk','Hmm, eu não sei yan, pergunte ao seu pai','Repete Tod eu não entendo']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'hobby':
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
case 'neontext':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}neontext Ramlan`)
neon = body.slice(10)
reply('「❗」ESPERE GANS...')
anu = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=$APIKEY=${XteamKey}`)
baby.sendMessage(from, anu, image, {quoted: mek})
break					
           case 'seberapagay':
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Veja os dados do Gay Si ${gay}\n\n\nPorcentagem de Gays : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
					break	
                case 'truth':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					baby.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
                case 'dare':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))                
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					baby.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
                  case 'timer':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))                  
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				break						   
/*
]=====> MENU GRUP <=====[
*/		 
				case 'welcome':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*OS RECURSOS DE BEM-VINDO ESTÃO ATIVOS*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUCESSO」 ATIVE OS RECURSOS DE BEM-VINDO NO GRUPO*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUCESSO」 RECURSO DE BEM-VINDO DESATIVADO EM GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
case 'blackpink':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}blackpink Ramlan`)
pink = body.slice(11)
reply('「❗」Hah Blekping :v')
lol = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${pink}&APIKEY=${XteamKey}`)
baby.sendMessage(from, lol, image, {quoted: mek})
break					
                 case 'event':
                  if (isBanned) return reply(ind.baned())                 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*RECURSOS DO EVENTO BOS JÁ ATIVO*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUCESSO」 ATIVADO EVENTOS EM GRUPO*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUCESSO」 EVENTO DESATIVADO EM GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*o recurso de nível já estava ativo antes*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === '0') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'simih':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*ATIVADO*')
						samih.push(from)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「SUCESSO」 ATIVAR RECURSOS DO SIMI NO GRUPO*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「SUCESSO」 DESLIGADO O RECURSO SIMI EM GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhem >_<')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *ativado*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 ATIVAR OS RECURSOS NSFW NO GRUPO*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUCESSO」 DESLIGADO O RECURSO NSWF EM GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
                                case 'antilinkgrup':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())SUCESSO
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('ESTÁ MORTO?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUCESSO」ATIVAR ANTI LINKS NO GRUPO')
						baby.sendMessage(from,`ALLERT!!! Se não for o administrador, não envie o link de outros grupos`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('SÓ EMANG?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUCESSO」ANTI LINK DESLIGADO NO GRUPO')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break					
					
				case 'admin':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'grup':
					case 'group':
                  if (isBanned) return reply(ind.baned())					
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*ABERTURA DE GRUPO COM SUCESSO*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*SUCESSO NO ENCERRAMENTO DO GRUPO*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'add':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você deseja adicionar??')
					if (args[0].startsWith('08')) return reply('Use o código de idioma sis')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						baby.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim que quiser ser adicionado em privado, tudo bem :)')
					}
					break
			     	case 'kick':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))			     	
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝗱𝗼 𝗮𝗹𝘃𝗼?? 𝗱𝗲 𝗾𝘂𝗲𝗺 𝘃𝗼𝗰𝗲̂ 𝗾𝘂𝗲𝗿 𝗰𝗵𝘂𝘁𝗮𝗿!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `vou chutar o administrador do seu grupo com permissão 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupRemove(from, mentioned)
					} else {
						mentions(`vou chutar o administrador do seu grupo com permissão @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						baby.groupRemove(from, mentioned)
					}
					break
                case 'hidetag':
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
					await limitAdd(sender)
					break					
                case 'level':
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NOME : ${pushname}\n┃│➸ NUMERO : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               baby.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
                 case 'linkgrup':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))                
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await baby.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    baby.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
           case 'setname':
                if (!isRegistered) return reply(ind.noregis())           
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                baby.groupUpdateSubject(from, `${body.slice(9)}`)
                baby.sendMessage(from, '⟪ SUCESSO ⟫ Alterar o nome do grupo', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isRegistered) return reply(ind.noregis())                
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                baby.groupUpdateDescription(from, `${body.slice(9)}`)
                baby.sendMessage(from, '⟪ SUCESSO ⟫ Mudar a DESCRIÇÃO do grupo', text, {quoted: mek})
					break
           case 'demote':
                if (!isRegistered) return reply(ind.noregis())           
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝗱𝗼 𝗮𝗹𝘃𝗼?? 𝗱𝗲 𝗾𝘂𝗲𝗺 𝘃𝗼𝗰𝗲̂ 𝗾𝘂𝗲𝗿 𝗿𝗲𝗯𝗮𝗶𝘅𝗮𝗿 𝗽𝗮𝗿𝗮 𝗺𝗲𝗺𝗯𝗿𝗼 𝗰𝗼𝗺𝘂𝗺!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Sua posição como administrador no grupo foi removida🏃`, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝗱𝗼 𝗮𝗹𝘃𝗼 𝗱𝗲 𝗾𝘂𝗲𝗺 𝘃𝗼𝗰𝗲̂ 𝗾𝘂𝗲𝗿 𝗽𝗿𝗼𝗺𝗼𝘃𝗲𝗿 𝗮 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Você foi promovido >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Parabéns🥳 @${mentioned[0].split('@')[0]} *você se tornou o administrador do grupo* >_<`, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A tag de destino que você deseja que seja um administrador!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_[0].split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						baby.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						baby.deleteMessage(from, mentioned)
					}
					break
				case 'hedsot':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						baby.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						baby.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						baby.groupRemove(from, mentioned)
						}
					break
                 case 'fitnah':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					baby.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                      case 'leave':
                      if (isBanned) return reply(ind.baned())      
                      if (!isRegistered) return reply(ind.noregis())           
                      if (!isGroup) return reply(ind.groupo())
                      if (!isGroupAdmins) return reply(ind.admin())
                      setTimeout( () => {
                      baby.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      baby.updatePresence(from, Presence.composing) 
                      if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned())   
                      baby.sendMessage(from, 'Aku pamit kak:)', text)
                      }, 0)
                      break																									
/*
]=====> DOWNLOAD MENU <=====[
*/
                     case 'play':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${VhtearKey}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*「❗」Lagu Ditemukan*\n➸ Judul : ${anu.result.title}\n➸ Durasi : ${anu.result.duration}\n➸ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                baby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                baby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break			
/*
]=====> LIMIT MENU <=====[
*/
				case 'limit':
				                  if (isBanned) return reply(ind.baned())
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
				case 'transfer':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`Você não tem dinheiro suficiente para fazer a transferência`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('558688036194@s.whatsapp.net', fee)
                reply(`*⟪ SUCESSO ⟫*\n\ntransferência de dinheiro foi bem sucedida\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
                break
				case 'atm':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`desculpe mana, o dinheiro não é suficiente, colete o dinheiro primeiro >_< não abra bo sis:v`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*⟪ PAGAMENTO DE SUCESSO ⟫*\n\n➸ pengirim : RAMLAN ID\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
				} 
				break
/*
]=====> RANDOM MENU <=====[
*/
                case 'pokemon':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'neko':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
                case 'nekonime':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(10)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${VhtearKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'kpop':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE*`
                                        baby.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
                case 'husbu':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
                case 'loli':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(6)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VhtearKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break										
					case 'wibu':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
						data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VhtearKey}`)
						buffer = await getBuffer(data.result.foto)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
                case 'darkjokes':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break										
/*
]=====> OTHER MENU <=====[
*/				
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`Desculpe ${pushname} O evento de mineração não foi ativado pelo proprietário Sr.Allison`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena Ramlan baik Bot memberikan ${one}Xp >_<`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*Parabéns* ${pushname} você pega *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
                case 'moddroid':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ publisher*: ${hepi.publisher}\n*➸ mod info:* ${hepi.mod_info}\n*➸ size*: ${hepi.size}\n*➸ latest version*: ${hepi.latest_version}\n*➸ genre*: ${hepi.genre}\n*➸ link:* ${hepi.link}\n*➸ download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			baby.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'happymod':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ version*: ${hupo.version}\n*➸ size:* ${hupo.size}\n*➸ root*: ${hupo.root}\n*➸ purchase*: ${hupo.price}\n*➸ link*: ${hupo.link}\n*➸ download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			baby.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
					case 'pinterest':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					baby.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ PINTEREST ⟫*`})
					await limitAdd(sender)
					break 
                case 'beritahoax':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    baby.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '♡───────────♡\n'
					for (let i of data.result) {
						teks += `*➸ Gambar* : ${i.image}\n*➸ Title* : ${i.title}\n*➸ link* : ${i.link}\n*➸ tag* : ${i.tag}\n♡───────────♡\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'brainly':
	                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					baby.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
				case 'info':
					me = baby.user
					uptime = process.uptime()
					teks = `*➸ Nama bot* : ${me.name}\n*➸ OWNER* : 𝗥𝗮𝗺𝗹𝗮𝗻 𝗜𝗗\n*➸ AUTHOR* : ${ownerName}\n*➸ Numero Bot* : @${me.jid.split('@')[0]}\n*➸ Prefix* : ${prefix}\n*➸ Total Block Contact* : ${blocked.length}\n*➸ O bot está ativo em* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					baby.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
            case 'admin':
            case 'owner':
            case 'creator':
                  baby.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  baby.sendMessage(from, 'Esse é o número do meu namorado >_<, Ehh, o dono está no formulário:v',MessageType.text, { quoted: mek} )
					break
case 'hartatahta':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Exemplo : ${prefix}hartatahta botwea`)
har = body.slice(12)
reply('「❗」Significado de Titi Tai Dog :v')
buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=${VhtearKey}`)
baby.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'cloudtext':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}cloudtext Ramlan`)
cloud = body.slice(11)
reply('「❗」Espere mano, está em andamento...')
buffer = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${cloud}&APIKEY=${XteamKey}`)
baby.sendMessage(from, buffer, image, {quoted: mek})
break

/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
]=====> OWNER MENU <=====[
*/
                case 'addprem':
					if (!isOwner) return reply(ind.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Sucesso adicionado ${addp} para a lista premium`)
					break
				case 'dellprem':
					if (!isOwner) return reply(ind.ownerb())
					oh = body.slice(11)
					delp = premium.indexOf(oh)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Excluído com sucesso ${oh} Da Lista Premium`)
					break					
				case 'bc':
					baby.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await baby.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 HADES BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 HADES BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*「 MY BOSS SUCESS 」*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`})
						}
						reply('*「 SUKSES BOSKU 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    baby.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`a resposta foi alterada com sucesso para : ${cr}`)
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*「 SUCESSO 」* Prefixo concluído ➸ : ${prefix}`)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await baby.chats.all()
					baby.setMaxListeners(25)
					for (let _ of anu) {
						baby.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 baby.updatePresence(from, Presence.composing) 
				 baby.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					baby.blockUser (`${body.slice(7)}@c.us`, "add")
					baby.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    baby.blockUser (`${body.slice(9)}@c.us`, "remove")
					baby.sendMessage(from, `Pedidos aceitos, desbloquear ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    baby.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(enmedia)
					await baby.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil, meu chefe😗')
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply(' *QUERO TAGS NO CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await baby.getProfilePicture(id)
						buffer = await getBuffer(pp)
						baby.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
			                case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Número ${bnnd} foi banido!`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					ya = body.slice(8)
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Número ${ya} foi desbanido!`)
					break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
baby.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
baby.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('assets/sound.mp3')
baby.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./assets/sound1.mp3');
baby.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./assets/sound2.mp3');
baby.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./assets/sound3.mp3');
baby.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./assets/sound4.mp3');
baby.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./assets/sound5.mp3');
baby.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./assets/sound6.mp3');
baby.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
baby.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break														
/*
]=====> TQTO <=====[
> SR ALLISON
> ALN BOTS
*/				
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
				//		reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Comando não registrado de', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
