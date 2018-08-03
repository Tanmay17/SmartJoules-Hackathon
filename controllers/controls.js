var mongoose = require('mongoose')
var Task = mongoose.model('Tasks')


exports.getData = (req, res) => {
    Task.findById(req.params.taskId, function(err, task) {
    if (err)
        res.send(err);
    res.json(task);
    });
};

exports.updateData = (req, res)=> {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
      if (err)
        res.send(err);
        var response={
          "deviceId": req.params.taskId.deviceId,
          "name": req.params.taskId.name,
          "networkSlave1": req.params.taskId.networkSlave1,
          "networkSlave2": req.params.taskId.networkSlave2,
          "deviceType": req.params.taskId.deviceType,
          "driverType": req.params.taskId.driverType,
          "communicationCategory": req.params.taskId.communicationCategory,
          "communicationType": req.params.taskId.communicationType
        };
      res.send(response)  
      res.json(task);
      //ToDo: Forward data to FullStack
    });
  };