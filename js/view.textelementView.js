var TextElementListView;
TextElementListView = (function(){
  function TextElementListView($el) {
    this.$el = $el;
    console.log(this.$el.offset());
    TextElement.on('add', this.add.bind(this));
  };
  TextElementListView.prototype.add = function(todo){
    console.log("TextElementListView.prototype.add called");
    var item;
    item = new TextElementItemView(todo,this.$el);
    this.$el.append(item.$el);
  };
  return TextElementListView;
})();

