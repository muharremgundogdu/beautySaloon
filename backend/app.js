// paketler
const express = require('express')
const {join} = require('path')

const dbs = require(join(__dirname , 'dbs.js'))
const cors = require("cors");
const session = require('express-session');

// db bağlantısı
dbs() 

// başlangıç ayarları 
const app = express()

// degiskenler
const PORT = process.env.PORT || 5000


// middleware
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'gizliAnahtar', // Güçlü bir oturum anahtarı kullan
    resave: false, // Değişiklik yapılmadığında oturumu yeniden kaydetmez
    saveUninitialized: true, // Yeni bir oturum başlatıldığında kaydeder
    cookie: { secure: false } // HTTPS kullanmıyorsan false yap
}));



const registerPage = require(join(__dirname , 'routers', 'registerPage.js'))
app.use('/kayit', registerPage)


// portu dinleme
app.listen(PORT, () => {
    console.log(`Sunucu Çalışıyor : http://127.0.0.1:${PORT}`);
});


