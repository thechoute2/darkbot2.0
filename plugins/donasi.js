let handler = async m => m.reply(`
β­βγ πΊπππππππ γ
β β’ πππ¦πππ [paypal.me/Michae165]
β β’ Pero con que te suscribas a mi canal basta:)
β https://youtube.com/channel/UCnJsyIe2XksWO3jVHGXYMhw
β°ββββ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
