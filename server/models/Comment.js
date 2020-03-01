const { model, Schema } = require('mongoose')

const commentSchema = new Schema(
    {
        content: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Comment', commentSchema)