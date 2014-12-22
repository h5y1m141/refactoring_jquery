var TextElement;
TextElement = (function(){
  function TextElement(data) {
    this.text = data.text;
    this.complete = !!data.complete;
  }
  TextElement.prototype.setComplete =function(complete){
    this.complete = !!complete;
    this.trigger('change:complete', this);
  };

  TextElement.list = [];

  TextElement.add = function(text){
    var textelement;
    textelement = new TextElement({ text:text });
    TextElement.list.push(textelement);
    this.trigger('add', textelement);
  };

  return TextElement;
})();

$.extend(TextElement.prototype, Backbone.Events);
$.extend(TextElement, Backbone.Events);

