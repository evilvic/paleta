const { model, Schema } = require('mongoose')

const projectSchema = new Schema(
    {
        title: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        photoUrl: String,
        input0: {type: String, default: '' }, input1: {type: String, default: '' }, input2: {type: String, default: '' }, input3: {type: String, default: '' }, input4: {type: String, default: '' }, input5: {type: String, default: '' }, input6: {type: String, default: '' }, input7: {type: String, default: '' }, input8: {type: String, default: '' }, input9: {type: String, default: '' },
        input10: {type: String, default: '' }, input11: {type: String, default: '' }, input12: {type: String, default: '' }, input13: {type: String, default: '' }, input14: {type: String, default: '' }, input15: {type: String, default: '' }, input16: {type: String, default: '' }, input17: {type: String, default: '' }, input18: {type: String, default: '' }, input19: {type: String, default: '' },
        input20: {type: String, default: '' }, input21: {type: String, default: '' }, input22: {type: String, default: '' }, input23: {type: String, default: '' }, input24: {type: String, default: '' }, input25: {type: String, default: '' }, input26: {type: String, default: '' }, input27: {type: String, default: '' }, input28: {type: String, default: '' }, input29: {type: String, default: '' },
        input30: {type: String, default: '' }, input31: {type: String, default: '' }, input32: {type: String, default: '' }, input33: {type: String, default: '' }, input34: {type: String, default: '' }, input35: {type: String, default: '' }, input36: {type: String, default: '' }, input37: {type: String, default: '' }, input38: {type: String, default: '' }, input39: {type: String, default: '' },
        input40: {type: String, default: '' }, input41: {type: String, default: '' }, input42: {type: String, default: '' }, input43: {type: String, default: '' }, input44: {type: String, default: '' }, input45: {type: String, default: '' }, input46: {type: String, default: '' }, input47: {type: String, default: '' }, input48: {type: String, default: '' }, input49: {type: String, default: '' }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Project', projectSchema)