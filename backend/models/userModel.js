const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre de usuario obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Email obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña obligatoria']
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);

