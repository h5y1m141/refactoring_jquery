(function() {
  describe("Todo", function() {
    beforeEach(function() {
      var data;
      data = {text: "test"};
      return this.todo = new Todo(data);
    });
    
    it('should be init Class', function() {
      return expect(typeof this.todo).toEqual("object");
    });
    
    it('should be return valid test data ', function() {
      return expect(this.todo.text).toEqual("test");
    });
    
  });

}).call(this);
