var TextElementItemView;
TextElementItemView = (function(){
  function TextElementItemView(todo, $el) {
    this.todo = todo;
    this.$text = todo.text;
    this.$el = $el;    
    this.offset = this.$el.offset();
    this.textarea = null;
    this.savebutton = null;
    this.init();

  }
  TextElementItemView.prototype.init = function(){
    this.prepareTextarea();
    this.prepareSaveButton();
    // この後のthis.savebutton()からは
    // TextElementItemViewクラスのメンバー変数にアクセス出来ない
    // ので、この時点でのthisであるTextElementItemViewへの参照を
    // 得るために変数thatに入れる
    var that = this;
    this.savebutton.on('click', function() {
      var val;
      console.log(that.textarea.val());
      val = that.textarea.val().replace(/\n/g, '<br>');
      // val = that.textarea.val;
      that.textarea.remove();
      that.savebutton.remove();
      that.$el.html(val);
      return;
    });
    $('body').append(that.savebutton);
    $('body').append(that.textarea);
    return;
  };
  TextElementItemView.prototype.save = function(e){
    var _textElement;
    _textElement = new TextElement(this.$el);
    _textElement.add();
    console.log("TextElement.add() called");
  };
  TextElementItemView.prototype.prepareTextarea = function(e){
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
    }).val(this.$text);
  };
  TextElementItemView.prototype.prepareSaveButton = function(e){
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
  };

  return TextElementItemView;
})();


