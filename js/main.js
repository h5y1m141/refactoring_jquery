$(document).ready(function() {
  new TodoFormView($('.todoForm'));
  new TodoListView($('.todoList'));
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
