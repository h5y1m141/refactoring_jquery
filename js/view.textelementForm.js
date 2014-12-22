var TextElementFormView;
TextElementFormView = (function(){
  function TextElementFormView($el){
    this.$input = $el;
    this.$input.click(this.onclick.bind(this));
  }

  TextElementFormView.prototype.onclick = function(e){
    e.preventDefault();
    var text;
    text = this.$input[0].innerText;
    Todo.add(text);
  };
  return TextElementFormView;
})();
