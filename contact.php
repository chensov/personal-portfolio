<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      document.documentElement.className = localStorage.getItem("darkMode") == "enabled" ? "darkmode" : null;
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.js"></script>
    <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
    <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
    <link rel="stylesheet" href="/css/app.css" />
    <title>Contact</title>
  </head>
  <body id="contact">
    <header class="navbar">
      <!-- HEADER -->
      <div class="left"></div>
      <div class="middle">
        <ul class="main-nav">
          <li id="li-link" data-active="home" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/' },400);">Home</a>
          </li>

          <li id="li-link" data-active="portfolio" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/portfolio' },400);">Portfolio</a>
          </li>

          <li id="li-link" data-active="about" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/about' },400);">About</a>
          </li>

          <li id="li-link" data-active="contact" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/contact' },400);">Contact</a>
          </li>

          <div class="slide"></div>
        </ul>
      </div>
      <div class="right">
        <div class="hamburger hidden">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <button class="dark-mode-toggle" id="dark-mode-btn1" area-label="toggle dark mode">
          <i class="bx bx-moon moon"></i>
          <i class="bx bx-sun sun"></i>
        </button>
        <div class="mobile-nav hidden">
          <ul>
            <li data-active="home"><i class="fa-solid fa-house"></i><a href="/">Home</a></li>
            <li><i class="fa-solid fa-briefcase"></i><a href="/portfolio">Portfolio</a></li>
            <li><i class="fa-solid fa-user"></i><a href="/about">About</a></li>
            <li><i class="fa-solid fa-envelope"></i><a href="/contact">Contact</a></li>
            <span></span>
            <button class="dark-mode-toggle" id="dark-mode-btn2" area-label="toggle dark mode">
              <i class="bx bx-moon moon"></i>
              <i class="bx bx-sun sun"></i>
            </button>
          </ul>
        </div>
      </div>
    </header>

    <div class="modal-container">
      <div class="modal-bg"></div>
      <div id="modal-contents">
        <svg id="successAnimation" class="animated" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 70 70">
          <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z" />
          <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent" />
          <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent" />
        </svg>
         <p id='inputName'></p>

        <p>I will respond shortly.</p>

        <button id="close-modal"><i class="fa-solid fa-house"></i>Home</button>
      </div>
    </div>

    <div class="contact-container">
      <section class="heading">
        <h1>Contact</h1>
        <p>Get in touch or shoot me an email directly on <a href="mailto:hello@senche.dev?subject=Hey Sen! I was on your portfolio and wanted to reach out 👻">hello@senche.dev</a></p>
      </section>
      <form method="POST" id="ajaxform" action="mailer" enctype="multipart/form-data">
        <input type="text" placeholder="Name" autocomplete="off" name="name" id="name" required />

        <input type="email" id="email" placeholder="Email" name="email" autocomplete="off" required />
        <input type="text" id="subject" placeholder="Subject" autocomplete="off" name="subject" required />
        <textarea name="message" placeholder="Message..." id="message" required></textarea>

        <div class="btn-wrap">
          <button type="submit" id="button">
            <span class="btn-txt" id="btn-txt">Send<i id="paper-plane" class="fa-regular fa-paper-plane run-animation-plane"></i></span><i class="fa fa-spinner fa-spin loader_icon"></i>
          </button>
        </div>
      </form>
    </div>
      <footer>
        <div class="footer-top">
          <a href="https://github.com/chensov" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://codepen.io/senche" target="_blank"> <i class="fa-brands fa-codepen"></i></a>

          <a href="https://github.com/chensov" target="_blank"> <i class="fa-brands fa-dribbble"></i></a>
        </div>
        <div class="footer-middle">
          <p>Copyright © 2023 senche.dev. All rights reserved.</p>
        </div>
        <div class="footer-left"></div>
      </footer>
 
    
    <script>
$(document).on("submit", "form", function(e){
e.preventDefault(); // avoid executing the actual submission of the form
var form = $(this);
$(".loader_icon").show();
$(".btn-txt").hide();
$.ajax({
url: $(this).attr("action"),
type: $(this).attr("method"),
data: new FormData(this),
processData: false,
contentType: false,

//If email sent successfully
success: function (message, status){
$(".loader_icon").hide();
$(".btn-txt").hide();
setTimeout(function() { $(".btn-txt").slideDown(); }, 2300);
$(".modal-container").addClass('modal-open');
$(".contact-container").addClass('hidden');
$(".success").slideDown('slow');
$("#name");
$('#inputName').text('Thanks for your email ' + $('#name').val() + ' 😊');
$("#email").val('');

$("#subject").val('');

$("#message").val('');
},
error: function (xhr, ajaxOptions, thrownError){
alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
}
});        
});
</script>
    <script src="/js/darkmode.js"></script>
    <script src="/js/nav.js"></script>
    <script src="/js/modal.js"></script>
  </body>
</html>
