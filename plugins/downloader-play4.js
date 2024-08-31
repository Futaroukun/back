/*
𝙆𝙮𝙯𝙍𝙮𝙯𝙯 𝙓𝘿
𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱
𝘸𝘢: wa.me/6287815560235
𝘵𝘦𝘭𝘦: t.me/kyzoffc
𝘸𝘦𝘣: s.id/kyzzxd
╭──────────────────────────────╮
├─────「Di Larang Menghapus Wm Ini」─────┤
╰──────────────────────────────╯
*/

import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import yts from 'yt-search'
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Judulnya?\nContoh: ${usedPrefix + command} Dj the spectre`
  m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw 'Tidak Ditemukan'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `
╭──── 〔 𝗬 𝗢 𝗨 𝗧 𝗨 𝗕 𝗘  𝗣 𝗟 𝗔 𝗬 〕
• 𝗝𝘂𝗱𝘂𝗹: ${title}
• 𝗗𝘂𝗿𝗮𝘀𝗶: ${timestamp}
• 𝗩𝗶𝗲𝘄𝘀: ${views}
• 𝗨𝗽𝗹𝗼𝗮𝗱: ${ago}
• 𝗟𝗶𝗻𝗸: ${url}

⏳𝗠𝘂𝘀𝗶𝗸 𝗱𝗮𝗹𝗮𝗺 𝗽𝗲𝗻𝗴𝗶𝗿𝗶𝗺𝗮𝗻,
𝗺𝗼𝗵𝗼𝗻 𝘁𝘂𝗻𝗴𝗴𝘂 𝗵𝗶𝗻𝗴𝗴𝗮 𝘀𝗲𝗹𝗲𝘀𝗮𝗶.
╰────────⬣
${global.readmore}
Subscribe Channel Owner Juga Dong Kk😁👇
${global.syt}`
conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, m)
const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data
      }
    }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play4']
handler.tags = ['downloader']
handler.command = /^play4?$/i

handler.exp = 0
handler.limit = true
handler.register = false

export default handler;