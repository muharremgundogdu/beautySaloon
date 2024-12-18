const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    name: {
        type: String,
        require
    },
    phone: {
        type: String,
        require
    },
    education: {
        type: [String], // String dizisi, birden fazla eğitim için
        require
    },
    birthDate: {
        type: Date, // Doğum tarihi
        require
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;