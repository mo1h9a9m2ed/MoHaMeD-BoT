
break


case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
teks = `*「 ${global.botname}❤️ 」*\n FaceBook: ${global.websitex} \n\n🔖WhatSapp GR🔖: ${global.botscript}`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: '🌺 Menu 🌺'}, type: 1}
]
let buttonMessage = {
image: thum,
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
}
XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}