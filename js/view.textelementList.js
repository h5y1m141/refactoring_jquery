var TextElementItemView ,SaveButton, EditArea;
TextElementItemView = Backbone.View.extend({
  initialize: function (todo, $el) {
    this.$el = $el;    
    this.todo = todo;
    this.$text = todo.text;
    this.$el = $el;    
    this.offset = this.$el.offset();
    this.textarea = null;
    this.savebutton = null;
    this.render();

  },
  render: function () {
    var editArea = new EditArea({_text:this.$text, offset: this.offset});
    var saveButton = new SaveButton({offset: this.offset, textarea: editArea.el, $el: this.$el});

    $("body").append(editArea.el);
    $("body").append(saveButton.el);

  }
});


SaveButton = Backbone.View.extend({
  tagName: "div",
  events:{
    "click" : "updateContents"
  },
  updateContents: function(){
    var val;
    val = $(this.textarea).val().replace(/\n/g, '<br>');
    this.remove();
    $(this.textarea).remove();
    this.$$el.html(val);
    return;
  },
  initialize: function (obj) {
    this.$text = obj._text;
    this.offset = obj.offset;
    this.textarea = obj.textarea;
    this.$$el = obj.$el;
    this.render();
  },
  render: function () {
    this.$el.css({
      display: 'block',
      position: 'absolute',
      left: this.offset.left,
      top: this.offset.top + 110,
      width: 100,
      height: 30,
      fontSize: 14,
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      zIndex: 1,
      background: 'rgba(92,184,92,0.9)',
      textAlign:'center',
      color: '#f9f9f9',
      cursor: 'pointer'
    }).text('save');
    $(this.el).html();
  }
});

EditArea = Backbone.View.extend({
  tagName: "textarea",
  initialize: function (obj) {
    this.$text = obj._text;
    this.offset = obj.offset;
    this.render();
  },
  render: function () {
    this.$el.css({
      display: 'block',
      position: 'absolute',
      left: this.offset.left,
      top: this.offset.top,
      width: 300,
      height: 100,
      fontSize: 14,
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      zIndex: 1,
      background: 'rgba(255,255,255,1.0)'
    }).val(this.$text);
    $(this.el).html();
  }
});
