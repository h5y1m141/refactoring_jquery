var Todo;
Todo = (function(){
  function Todo(data) {
    this.text = data.text;
    this.complete = !!data.complete;
  }
  Todo.prototype.setComplete =function(complete){
    this.complete = !!complete;
    this.trigger('change:complete', this);
  };

  Todo.list = [];

  Todo.add = function(text){
    var todo;
    todo = new Todo({ text:text });
    Todo.list.push(todo);
    this.trigger('add', todo);
  };

  return Todo;
})();

$.extend(Todo.prototype, Backbone.Events);
$.extend(Todo, Backbone.Events);

