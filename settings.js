const fs = require('fs');
const chalk = require('chalk');

global.ytname = 'YouTube: COMING SOON' // Nama YouTube Kamu
global.socialm = 'GitHub: Lyxkall' // Nama GitHub Kamu
global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang' // Lokasi Kamu

global.botName = '𝒩𝑒𝒷𝓊𝓁𝒶 𝐵𝑜𝓉𝓏' // Nama Bot Kamu
global.ownerNumber = '6285864286826' // Nomor Kamu
global.ownerName = '𝓛' // Nama Kamu
global.website = '' // Web Kamu
global.wagc = '' // Web Kamu
global.packname = '𝒩𝑒𝒷𝓊𝓁𝒶 𝐵𝑜𝓉𝓏👑 \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' // Nama Pack
global.author = 'L̷͖͈̓͌̎̉͒͗͂̓̌̚͝y̶͔͗x̵̢̝̹̘͖͖̜̩̝͗̽́̑͗͋k̵̘̺̦͉͖̪̪͖͉͊̆̔́̈́̍̃̈́͒̂̑̀̚͜͝ǎ̴̯̀͠l̶̬̞͎̖͉̹̝͕̝͖̣̉͆l̶̬̞͎̖͉̹̝͕̝͖̣̉͆ \n\n\n\n' // Nama Author
global.footer = '© 2022-2025 • L';
global.creator = '6282116221730@s.whatsapp.net' // Nomor Creator
global.premium = ['6285864286826', '6282116221730', '6285864286826'] // User Premium
global.hituet = 0 // Hit Command
global.prefa = '.'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '94@newsletter' // ID Saluran Kamu
global.saluranName = 'Nebula AI User Service | 𝓛' // Nama Saluran Kamu
global.sessionName = 'session' // Nama Folder Sesi Bot Kamu

global.panel = 'https://domainlu.my.id'; // Link Panel Kamu
global.cred = 'ptla_klUmglK7fADLZ5Br8jOwSh65IDeWAYRZuI6iQ1BIj'; // API PTLA Kamu
global.apiuser = 'ptlc_QTOmFi0ZDh0QBE5LtwCkBzSFWPZTIpz901lNybolo'; // API PTLC Kamu
global.eggs = '15', // Eggs Number (Recommended)
global.nets = '5', // Nets Number (Recommended)
global.location = '1', // Location Number (Recommended)

global.typereply = 'v4' // Gaya Reply v1-v4
global.autoblocknumber = '62' // Auto Block Number
global.antiforeignnumber = '62' // Anti Foreign Number
global.welcome = true // Auto Welcome Msg
global.anticall = true // Anti Call
global.autoswview = false // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true // Group Event Msg


global.limit = {
	free: 100, // Limit User Non-premium
	premium: 99999999, // Limit User Premium
	vip: 'VIP' // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 'VIP' // Uang User VIP 👑
};

global.bot = {
	limit: 'VIP', // Limit Awal Bot
	uang: 'VIP' // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Nebula harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Done Kak! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, limit penggunaan Kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit ✨',
	noCmd: 'Hmm... perintahnya gak ada di daftar Nebula nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Nebula lagi proses nih! ⏳🤗'
};

global.thumb = fs.readFileSync('./media/icon.png'); // Buffer Image
global.thumbUrl = 'https://files.catbox.moe/wbu8z9.png';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})