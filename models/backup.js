import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const backupSchema = new Schema({ 
    text: {type: String, required: true},
    created : {type: Date, default: Date.now},
    important:{type:Boolean,default:false},
    pin:{type:Boolean,default:false},
    hidden:{type:Boolean,default:false},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: '24h' }
      }
});

backupSchema.set('toObject', {
    transform: function (doc, ret) {
      delete ret.createdAt;
      return ret;
    }
  });

export default mongoose.model('Backup', backupSchema);