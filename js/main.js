$(document).ready(function() {
  var _form;
  // new TodoFormView($('.todoForm'));
  // new TodoListView($('.todoList'));
  _form = new TextElementFormView($('#subTitle'));

  $("#subTitle").click(function(e){
    e.preventDefault();
    _form.init();
  });
});
