var TextElement;
TextElement = (function(){
  function TextElement(data) {
    this.text = data.text;
    this.complete = !!data.complete;
  }
  TextElement.prototype.setComplete = function(complete){
    this.complete = !!complete;
    this.trigger('change:complete', this);
  };
  TextElement.list = [];
  TextElement.prototype.edit = function(text){
    var _element;
    _element = new TextElement({ text:text });
    this.trigger('edit', _element);
  };

  return TextElement;
})();


$.extend(TextElement.prototype, Backbone.Events);
$.extend(TextElement, Backbone.Events);
