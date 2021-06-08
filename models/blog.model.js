const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    faTitle: { type: String},
    faDescription:{type:String},
    faBody:{},
    enTitle:{type:String},
    enDescription:{type:String},
    enBody:{},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    wordCount:{type:Number},
    isTranslating:{type:Boolean},
    isTranslated:{type:Boolean},
    isConfirm:{type:Boolean},
    revised:{
        isRevised:{type:Boolean},
        RevisedComment:{type:String}
    },
    isPublished:{
        type:Boolean
    }},
        { timestamps: { createdAt: 'created_at' } }
)

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
    }
});

module.exports = mongoose.model('Blogs', schema);