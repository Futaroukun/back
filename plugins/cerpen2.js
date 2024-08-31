import mann from 'd-scrape'
const handler = async (m, { text, conn }) => {
  const mannr = await mann.random.randomCerpen()
  var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
  m.reply(yaya)
}
handler.command = handler.help = ["cerpen2"]
handler.tags = ["internet"]
export default handler