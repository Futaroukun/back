/*
𝙆𝙮𝙯𝙍𝙮𝙯𝙯 𝙓𝘿
𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱
𝘸𝘢: wa.me/6287815560235
𝘵𝘦𝘭𝘦: t.me/kyzoffc
𝘸𝘦𝘣: s.id/kyzzxd
🚨Di Larang Menghapus Wm Ini🚨
*/

import { ttSearch } from '../scraper/ttSearch.js'
let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    
ttSearch('video sad').then(a => {
let _ = a.videos
let b = _[Math.floor(Math.random() * _.length)]

let result = 'https://tikwm.com/' + b.play
conn.sendMessage(m.chat, {video: {url: result}, caption: command}, {quoted: m})
}).catch(err => {
m.reply(eror)
})
}
handler.help = ['videosad']
handler.tags = ['internet']
handler.command = /^(videosad)$/i
handler.limit = true 
handler.register = true

export default handler