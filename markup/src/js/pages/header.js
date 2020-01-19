$(function () {
  profileOpen();
  menuOpen();
  loginEmulation();
});

function dialogInit() {
  $("#dialog").dialog({
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

  $("#opener").on("click", function () {
    $("#dialog").dialog("open");
  });
}

function profileOpen() {
  $('.js-opener').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.js-opener').removeClass('active');
    } else {
      $('.js-opener').removeClass('active');
      $('.menu-holder').removeClass('active');
      $(this).addClass('active');
    }
  });
}

function menuOpen() {
  $('.menu-holder').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $('.js-opener').removeClass('active');
      $(this).addClass('active');
    }
  })
}

function loginEmulation() {
  $('.btn-logout').on('click', function () {
    if ($('header').hasClass('header-registr')) {
      $('header').removeClass('header-registr');
      $('header').addClass('header-noregistr');
    }
  })

  $('.btn-form').on('click', function () {
    if ($('header').hasClass('header-noregistr')) {
      $('header').removeClass('header-noregistr');
      $('header').addClass('header-registr');
      $("#dialog").dialog("close");
    }
  })
}