const getTareas = (req, res) => {
    res.status(200).json({ message: 'Obtener Tareas' })
}

const setTarea = (req, res) => {
    if (!req.body.texto) {
        //res.status(400).json({ message: 'Por favor teclea una descripción de la tarea' })
        res.status(400)
        throw new Error('Por favor teclea una descripción de la tarea')
    }
    res.status(201).json({ message: 'Tarea Creada' })
}

const updateTarea = (req, res) => {
    res.status(200).json({ message: `Tarea ${req.params.id} actualizada` })
}

const deleteTarea = (req, res) => {
    res.status(200).json({ message: `Tarea ${req.params.id} borrada` })
}

module.exports = {
    getTareas,
    setTarea,
    updateTarea,
    deleteTarea
}