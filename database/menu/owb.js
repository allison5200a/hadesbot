const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OWNER MENU* ]----- 🔰
Óla, ${pushname} 👋
Tenha um ótimo dia, usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}bc*
┃│➸ *${prefix}bcgc*
┃│➸ *${prefix}clearall*
┃│➸ *${prefix}block*
┃│➸ *${prefix}unblock*
┃│➸ *${prefix}clone*
┃│➸ *${prefix}setppbot*
┃│➸ *${prefix}setreply*
┃│➸ *${prefix}setprefix*
┃│➸ *${prefix}addprem*
┃│➸ *${prefix}dellprem*
┃│➸ *${prefix}ban*
┃│➸ *${prefix}unban*
┃│➸ *${prefix}event* 「1/0」
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.owb = owb
