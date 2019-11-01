jQuery(function(){
  structure.init();
});

var structure = {
  init: function(){

  }
};

var home = {
  init: function() {

    //AQUI VAI O CODIGO JS 

    console.log('estou funcionando');
    
  }
};

var preloader = {
  init: function(){
    function counter(){
      var count = setInterval(function(){
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());

        if(c == 100){
          clearInterval(count);
          $('.counter').addClass('hide');
          $('.preloader').addClass('active');
        }
      });
    }

    $(window).load(function(){
      counter().delay(800);
    })
    
  }
}
