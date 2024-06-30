
$(document).ready(function(){
         
    $('.buttons').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      var filter = $(this).attr('data-filter')

      if(filter == 'show all'){
        $('.image').show(400);
      }else{
        $('.image').not('.'+filter).hide(200);
        $('.image').filter('.'+filter).show(400);
      }
    });

    $('.gallery').magnificpopup({

      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });
  });