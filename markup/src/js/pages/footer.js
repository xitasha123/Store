$(function () {
    dialogInit();
});

function dialogInit () {
    $( "#dialog" ).dialog({
      width: 730,
      autoOpen: false,
      show: {
        effect: "fade",
        duration: 300
      },
      hide: {
        effect: "fade",
        duration: 300
      }
    });
  
  $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
      $('.js-opener').removeClass('active');
      $('.menu-holder').removeClass('active');
      });
  }