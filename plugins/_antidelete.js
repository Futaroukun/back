export async function before(m) {

conn.ev.off('message.delete', conn.onDelete)
conn.ev.on('message.delete', conn.onDelete)
}