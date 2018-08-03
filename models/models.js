var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    deviceId: {
        type: String,
        required: 'Kindly enter the ID of the task'
      },
      name: {
        type: String,
        required: 'Kindly enter the ID of the task'
      },
      networkSlave1: {
          type: String,
          required: 'Kindly enter the ID of the task'
      },
      networkSlave2: {
        type: String,
        required: 'Kindly enter the ID of the task'
    },
    deviceType: {
        type: String,
        required: 'Kindly enter the ID of the task'
    },
    driverType: {
        type: String,
        required: 'Kindly enter the ID of the task'
    },
    communicationCategory: {
        type: String,
        required: 'Kindly enter the ID of the task'
    },
    communicationType: {
        type: String,
        required: 'Kindly enter the ID of the task'
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);