const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')
const Project = require('../models/Project')
const User = require('../models/User')

router
    .get('/', async (req, res, next) => {

        const allComments = await Comment.find().populate('project').populate('author')
        res.status(200).json( { allComments } )

    })
    .post('/new', async (req, res, next) => {

        const { _id } = req.user

        const {
            content,
            project
        } = req.body

        const comment = await Comment.create({
            content,
            author: _id,
            project
        })

        const commentPopulated = await (await Comment.findById(comment._id)).populate('athor').populate('project')

        const projectWithComment = await Project.findByIdAndUpdate(project, { $push: {comments: commentPopulated} }, { new: true }).populate({
            path: 'comments',
            populate: {
                path: 'author',
                model: 'User'
            }
        })

        return res.status(201).json({ projectWithComment, comment: commentPopulated })

    })

module.exports = router