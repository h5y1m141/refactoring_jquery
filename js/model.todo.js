function Todo(data){
  this.text = data.text;
  this.complete = !!data.complete;
}

$.extend(Todo.prototype, Backbone.Events);
$.extend(Todo, Backbone.Events);

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
