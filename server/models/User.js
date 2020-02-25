const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
    {
        username: String,
        email: String,
        photoUrl: {
            type: String,
            default: ''
        },
        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Project'
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.plugin(PLM, { usernameField: 'username'})
module.exports = model('User', userSchema)