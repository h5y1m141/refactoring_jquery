var TextElementFormView;
TextElementFormView = (function(){
  function TextElementFormView($el) {
    this.$el = $el;
    this.$text = this.$el.text();
    this.offset = this.$el.offset();
    console.log(this.offset);
    this.model = new TextElement(this.$text);
    this.textarea = $('<textarea>').css({
      display: 'block',
      position: 'absolute',
      left: this.offset.left,
      top: this.offset.top,
      width: 300,
      height: 100,
      fontSize: 14,
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      zIndex: 1,
      background: 'rgba(255,255,255,0.9)'
    }).val(this.$el.html());
    this.savebutton = $('<div id="save" class="btn">').css({
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
      color: '#f9f9f9',
      cursor: 'pointer'
    }).text('save');
    this.model.on('edit', this.edit.bind(this));
  }
  TextElementFormView.prototype.init = function(){
    // この後のthis.savebutton()からは
    // TextElementFormViewクラスのメンバー変数にアクセス出来ない
    // ので、この時点でのthisであるTextElementFormViewへの参照を
    // 得るために変数thatに入れる
    var that = this;
    this.savebutton.on('click', function() {
      var val;
      console.log(that.textarea.val());
      val = that.textarea.val().replace(/\n/g, '<br>');
      that.textarea.remove();
      that.savebutton.remove();
      that.$el.html(val);
      return;
    });
    $('body').append(that.savebutton);
    $('body').append(that.textarea);
    return;
  };
  TextElementFormView.prototype.save = function(e){
    var _textElement;
    _textElement = new TextElement(this.$el);
    _textElement.add();
    console.log("TextElement.add() called");
  };
  TextElementFormView.list = [];
  TextElementFormView.prototype.edit = function(text){
    var _element;
    _element = new TextElementFormView({ text:text });
    TextElementFormView.list.push(_element);
    this.trigger('add', _element);
  };
  return TextElementFormView;
})();


