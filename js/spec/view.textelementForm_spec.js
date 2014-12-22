(function() {
  describe("TextElementFormView", function() {
    beforeEach(function() {
      var formView, _element;
      _element = '<h3 id="subTitle">ここをクリック</h3>';
      
      return this.formView = new TextElementFormView($(_element));
    });
    
    it('should be init Class', function() {
      return expect(typeof this.formView).toEqual("object");
    });
    
    it('should be fetch InnerText', function() {
      return expect(this.formView.$input[0].innerText).toEqual('ここをクリック');
    });
    
  });

}).call(this);
