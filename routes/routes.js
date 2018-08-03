module.exports = function(app) {
var todoList = require('../controllers/controls');
  
  //Routes
  app.route('/update/:taskId')
    .put(todoList.updateData)
  
  
  app.route('/read/:taskId')
    .get(todoList.getData)
};