const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
    {
        username: String,
        bio: String,
        email: String,
        photoUrl: {
            type: String,
            default: 'https://res.cloudinary.com/evilvic/image/upload/v1582908337/paleta/paleta_logo.png'
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