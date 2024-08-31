/*
𝙆𝙮𝙯𝙍𝙮𝙯𝙯 𝙓𝘿
𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱
𝘸𝘢: wa.me/6287815560235
𝘵𝘦𝘭𝘦: t.me/kyzoffc
𝘸𝘦𝘣: s.id/kyzzxd
🚨Di Larang Menghapus Wm Ini🚨
*/

import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
import { ytmp4 } from '../scraper/ytmp4.js'

let handler = m => m
handler.before = async function (m, {conn}) {
this.data = this.data ? this.data : {}
  let id = m.sender
  const streamPipeline = promisify(pipeline);
  if (!m.text) return !0
  
let mp_3 = Object.values(this.data).find(v => v.user === m.sender)
if (!mp_3) return !0

    if (m.text.toLowerCase() == 'mp3') {
    m.reply(wait).then(_ => {
    conn.sendMessage(m.chat, {react: {text: '🚀', ke: m.key}})
    })
        const audioStream = ytdl(this.data[id].url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${id}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${id}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: mp_3.title,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: mp_3.url,
        title: mp_3.title,
        body: wm,
        sourceUrl: mp_3.url,
        thumbnail: await (await this.getFile(mp_3.thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m }).then(_ => {
      conn.sendMessage(m.chat, {react: {text: '🫧', ke: m.key}})
      
  })

  // Delete the audio file
  fs.unlink(`${tmpDir}/${id}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${id}.mp3`);
    }
  })
  delete this.data[id]
  } else if (m.text.toLowerCase() == 'mp4') {
  m.reply(wait).then(_ => {
    conn.sendMessage(m.chat, {react: {text: '🚀', ke: m.key}})
    })
  ytmp4(mp_3.url).then((result) => {
				const video = result.url
				const title = result.title
				const duration = result.duration
				const cenel = result.channel
				const publish = result.published
				const view = result.views
				
				conn.sendFile(m.chat, video || emror, title + '.mp4', `
 *[ 乂 Y T  M P 4 ]*
    
> ╭ ⚘ *title* : ${title}
> ∘ ⚘ *channel* : ${cenel}
> ∘ ⚘ *publish* : ${publish}
> ∘ ⚘ *tayangan* : ${view}×
> ∘ ⚘ *durasi* : ${mp_3.times}
> ∘ ⚘ *resolusi* : 360p
> ╰ ⚘ *url* : ${mp_3.url}

${global.namebot}
`, m).then(_ => {
    conn.sendMessage(m.chat, {react: {text: '🫧', ke: m.key}})
    
})
		
				})
			 delete this.data[id]
				    
  } else if (m.text.toLowerCase() == 'batal') {
  let stel = await style('*Lagu/Video yang kamu pilih akan di hapus*..', 1)
  m.reply(stel).then(_ => {
  delete this.data[id]
})

  }
      return !0
      
}

export default handler