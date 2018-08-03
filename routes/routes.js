module.exports = function(app) {
var todoList = require('../controls/controls');
  
  //Routes
  app.route('/update/:taskId')
    .put(todoList.updateData)
  
  
  app.route('/read/:taskId')
    .get(todoList.getData)
};