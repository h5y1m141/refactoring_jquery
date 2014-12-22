(function() {
  describe("TextElementFormView", function() {
    beforeEach(function() {
      var formView, _element;
      _element = '<h3 id="subTitle">ここをクリック</h3>';
      this.formView = new TextElementFormView($(_element));
    });

    it('クラスの初期化が行える', function() {
      return expect(typeof this.formView).toEqual("object");
    });
    
    it('要素内のテキストが取得できる', function() {
      return expect(this.formView.$input[0].innerText).toEqual('ここをクリック');
    });

    describe('要素をクリックした時',function(){
      beforeEach(function() {
        var formView, _element;
        _element = '<h3 id="subTitle">ここをクリック</h3>';
        this.formView = new TextElementFormView($(_element));
        spyOn(this.formView, 'onclick');
        this.formView.onclick();
      });
    

      it('onclickメソッドが呼ばれること', function(){
        return expect(this.formView.onclick).toHaveBeenCalled();
      });

    });
    
    
  });
  
  describe('spyOn', function() {
    // jasmineのspyOnの使い方は以下URLを参照してます
    // http://qiita.com/opengl-8080/items/cf3acafda9756f4b04c9
    it('spyOn通じて実際にメソッドが呼ばれることを確認するサンプル', function() {
      var obj;
      obj = {
        method: function() {
          console.log('obj#method()');
        }
      };
      spyOn(obj, 'method');
      obj.method();
      expect(obj.method).toHaveBeenCalled();
    });
  });
  
}).call(this);
