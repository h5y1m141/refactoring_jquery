function TodoFormView($el){
  this.$el = $el;
  this.$input = this.$el.find('input[type="text"]');  
  this.$el.submit(this.onsubmit.bind(this));
}

TodoFormView.prototype.onsubmit = function(e){
  e.preventDefault();
  Todo.add(this.$input.val());
};
