function TextElementFormView($el){
  this.$input = $el;
  this.$input.click(this.onsubmit.bind(this));

}

TextElementFormView.prototype.onsubmit = function(e){
  e.preventDefault();
  var text;
  text = $(this.$input[0])[0].innerText;
  Todo.add(text);
};
