$(function(){
  var nb = $('#navbtn');
  var n = $('#topnav nav');
  
  $(window).on('resize', function(){
    
    if($(this).width() < 570 && n.hasClass('keep-nav-closed')) {
     
      $('#topnav nav').hide().removeAttr('class');
    }
    if(nb.is(':hidden') && n.is(':hidden') && $(window).width() > 569) {
    
      $('#topnav nav').show().addClass('keep-nav-closed');
    }
  }); 
  
  $('#topnav nav a,#topnav h1 a,#btmnav nav a').on('click', function(e){
  
  });
  
  $('#navbtn').on('click', function(e){
    
    $("#topnav nav").slideToggle(350);
  });
  
});