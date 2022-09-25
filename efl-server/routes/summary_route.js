const {Router} = require('express')
const Summary = require('../models/Summary')
const fs = require('fs')

const router = new Router()

router.post('/summary', async (req, res) => {
    try {
        const {fio, performers, group, email, lab_name, id_lab, photo} = req.body
        console.log(photo)
        // const {photo} = req.files
        const summary = new Summary({
            fio, performers, group, email, lab_name, id_lab, photo
        })
        await summary.save()
        res.status(201).json({message: "success summary"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"error summary"})
    }
})

module.exports = router