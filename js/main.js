$(document).ready(function() {
  new TodoFormView($('.todoForm'));
  new TodoListView($('.todoList'));
  $("#subTitle").click(function(e){
    var textarea, offset;
	  console.log(this.innerHTML);
    offset = $(this).offset();
    console.log(offset);
    textarea = $('<textarea>').css({
      display: 'block',
      position: 'absolute',
      left: offset.left,
      top: offset.top,
      width: 300,
      height: 100,
      fontSize: 14,
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      zIndex: 1,
      background: 'rgba(255,255,255,0.9)'
    }).val(this.innerHTML);
    return $('body').append(textarea);

  });
  // var $form = $('.todoForm');
  // var $input = $form.find('input[type="text"]');
  // var $list = $('.todoList');
  // console.log($form);
  // $form.submit(function(e) {

  //   e.preventDefault();
  //   var text = $input.val();

  //   var html = '<li><input type="checkbox">' + text + '</li>';
  //   var $li = $(html);

  //   $li.find('input[type="checkbox"]').change(function() {
  //     $(this).closest('li').toggleClass('complete');
  //   });

  //   $list.append($li);
  //   $input.val('');
  // });
});
