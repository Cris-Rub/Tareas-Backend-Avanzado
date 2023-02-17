const asyncHandler = require('express-async-handler');

const Tarea = require('../models/tareaModelo')
const User = require('../models/userModel');

const getTareas = asyncHandler(async (req, res) => {
    const tareas = await Tarea.find({ user: req.user.id });

    res.status(200).json(tareas);
});



const setTarea = asyncHandler(async (req, res) => {
    if (!req.body.texto) {
        //res.status(400).json({ message: 'Por favor teclea una descripción de la tarea' })
        res.status(400)
        throw new Error('Por favor teclea una descripción de la tarea')
    };

    // Verificar que user sea igual al del usaer del token
    if(tarea.user.toString() !== req.user.id){
        res.status(401);
        throw new Error('No tienes permisos para realizar esta acción');
    };

    const tarea = await Tarea.create({
        texto: req.body.texto,
        user: req.user.id
    })
    res.status(201).json(tarea)
})

const updateTarea = asyncHandler(async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(400); // Bad request
        throw new Error('Tarea no encontrada');
    };
    //verificamos que el user de la tarea sea igual al user del token
    if (tarea.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

const updatedTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTarea);
})

const deleteTarea = asyncHandler(async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(400); // Bad request
        throw new Error('Tarea no encontrada');
    }
    //verificamos que el user de la tarea sea igual al user del token
    if (tarea.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)
    await tarea.remove()

    res.status(200).json(req.params.id)
})

module.exports = {
    getTareas,
    setTarea,
    updateTarea,
    deleteTarea
}