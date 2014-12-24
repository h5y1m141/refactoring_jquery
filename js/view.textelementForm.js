var TextElementFormView;
TextElementFormView = (function(){
  function TextElementFormView($el){
    this.$input = $el;
    this.$input.click(this.onclick.bind(this));
  }

  TextElementFormView.prototype.onclick = function(){
    var text;
    text = this.$input[0].innerText;
    TextElement.add(text);
  };
  return TextElementFormView;
})();
