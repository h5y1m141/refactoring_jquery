$(document).ready(function() {

  new TodoFormView($('.todoForm'));
  new TodoListView($('.todoList'));
  $("#subTitle").click(function(e){
    var textarea, savebutton ,offset;
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
    }).val(this.innerHTML.replace(/<br\/?>/g, '\n'));
    
    savebutton = $('<div id="save" class="btn">').css({
      display: 'block',
      position: 'absolute',
      left: offset.left,
      top: offset.top + 110,
      width: 100,
      height: 30,
      fontSize: 14,
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      zIndex: 1,
      background: 'rgba(92,184,92,0.9)',
      color: '#f9f9f9',
      cursor: 'pointer'
    }).text('save');
    savebutton.on('click', function() {
      var val;
      val = textarea.val().replace(/\n/g, '<br>');
      
      console.log(val);
      textarea.remove();
      this.remove();
      $("#subTitle").html(val);
      return;
    });
    $('body').append(savebutton);
    $('body').append(textarea);
    return;


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
