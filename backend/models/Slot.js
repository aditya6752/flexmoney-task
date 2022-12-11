const mongoose = require('mongoose');

const SlotSchema = mongoose.Schema(
  {
    details:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  }
);

module.exports =  mongoose.model('Slot', SlotSchema);
