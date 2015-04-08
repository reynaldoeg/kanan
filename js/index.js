$(document).ready(function(){
  
  //Sider
  $('.bxslider').bxSlider({
    speed: 500,
    auto: true,
    pager: false
  });

  //Galeria de Imagenes
  $("#gallery").unitegallery({
    gallery_autoplay:true,
    gallery_play_interval: 3000
  });

  //Efecto parallx
  $(function(){
    $(window).stellar();
  });

  //Envio de Formulario
  $("#send").click(function(event){
    event.preventDefault();

    name = $("#name").val();
    email = $("#email").val();
    subject = $("#subject").val();
    lastname = $("#lastname").val();
    phone = $("#phone").val();
    state = $("#state").val();
    message = $("#message").val();

    //alert(name);

    $(".ajax-loader").css("display", "block");

    $.ajax({
      type: 'POST',
      url: 'enviar.php',
      dataType: 'html',
      data: {
        name: name,
        email: email,
        subject: subject,
        lastname: lastname,
        phone: phone,
        state: state,
        message: message
      },
      success: function(response) {
        //alert(response);
        if( response == 'ok')
          $(".form-response").html("<p class='text-response'>Tu información fue enviada con exito</p>");
      },
      complete: function(){
        $(".ajax-loader").css("display", "none");
      },
      error: function(){
        alert('Error al enviar');
      },
    });
    
  });

    

  //Scrool del menú
  var vel = 600;
  $(".home-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, vel);
  });

  $(".about-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, vel);
  });

  $(".services-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, vel);
  });

  $(".customers-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#customers").offset().top
    }, vel);
  });

  $(".gallery-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#a-gallery").offset().top
    }, vel);
  });

  $(".contact-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, vel);
  });


  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });

  $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61419042-1', 'auto');
  ga('send', 'pageview');

