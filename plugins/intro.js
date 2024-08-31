import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `╭‹•━━━━━━━━━━━━━━━━━━━━━━♡
├───「🪩 *K A R T U  I N T R O* 🪩」───
│ *Nama*    : 
│ *Gender*   : 
│ *Umur*      : 
│ *Hobby*     : 
│ *Kelas*      : 
│ *Asal*        : 
│ *Agama*    : 
│ *Status*     : 
└───────────────────╌┄┄╌╸
`
m.reply(krtu)
}
  handler.help = ['intro']
  handler.tags = ['main']
  handler.command = /^(intro)$/i
  
  export default handler
 