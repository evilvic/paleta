const express = require('express')
const router = express.Router()
const Project = require('../models/Project')
const User = require('../models/User')

router
    .get('/', async (req, res, next) => {

        const allProjects = await Project.find().sort({ createdAt: -1 }).populate('author')
        res.status(200).json( { allProjects } )

    })
    .post('/new', async (req, res, next) => {

        const { _id } = req.user

        const { 
            title,
            photoUrl,
            input0, input1, input2, input3, input4, input5, input6, input7, input8, input9,
            input10, input11, input12, input13, input14, input15, input16, input17, input18, input19,
            input20, input21, input22, input23, input24, input25, input26, input27, input28, input29,
            input30, input31, input32, input33, input34, input35, input36, input37, input38, input39,
            input40, input41, input42, input43, input44, input45, input46, input47, input48, input49
        } = req.body

        const project = await Project.create({
            title,
            author: _id,
            photoUrl,
            input0, input1, input2, input3, input4, input5, input6, input7, input8, input9,
            input10, input11, input12, input13, input14, input15, input16, input17, input18, input19,
            input20, input21, input22, input23, input24, input25, input26, input27, input28, input29,
            input30, input31, input32, input33, input34, input35, input36, input37, input38, input39,
            input40, input41, input42, input43, input44, input45, input46, input47, input48, input49
        })

        const projectPopulated = await Project.findById(project._id).populate('author')

        const user = await User.findByIdAndUpdate(_id, { $push: { projects: project._id  } }, { new: true } ).populate({
            path: 'projects',
            populate: {
                path: 'author',
                model: 'User'
            }
        })

        return res.status(201).json({ user, project: projectPopulated })

    })
    .get('/:id', async (req, res, next) => {

        const { id } = req.params
        console.log(id)
        const Project = await Project.findById(id)
        res.status(200).json( { Project } )

    })

module.exports = router