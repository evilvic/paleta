const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
    {
        username: String,
        birthday: Date,
        email: String,
        photoUrl: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            enum: ['pending', 'active'],
            default: 'pending'
        },
        confirmationCode: {
            type: String,
            unique: true
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