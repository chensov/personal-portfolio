<?php
    /* Your password */
    $password = 'cv2023';

    /* Redirects here after login */
    $redirect_after_login = '/resume.html';

    /* Will not ask password again for */
    $remember_password = strtotime('+30 days'); // 30 days

    if (isset($_POST['password']) && $_POST['password'] == $password) {
        setcookie("password", $password, $remember_password);
        header('Location: ' . $redirect_after_login);
        exit;
    }
?>

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
    <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/app.css" />
    <title>Locked</title>
  </head>
  <body id="">
    <header class="navbar">
      <!-- HEADER -->
      <div class="left"></div>
      <div class="middle">
        <ul class="main-nav">
          <li id="li-link" data-active="home" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/' },400);">Home</a>
          </li>

          <li id="li-link" data-active="portfolio" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/portfolio.html' },400);">Portfolio</a>
          </li>

          <li id="li-link" data-active="about" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/' },400);">About</a>
          </li>

          <li id="li-link" data-active="contact" class="">
            <a href="javascript:setTimeout(()=>{window.location = '/contact.html' },400);">Contact</a>
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
            <li data-active="home"><i class="fa-solid fa-house"></i><a href="#">Home</a></li>
            <li><i class="fa-solid fa-briefcase"></i><a href="#">Portfolio</a></li>
            <li><i class="fa-solid fa-user"></i><a href="#">About</a></li>
            <li><i class="fa-solid fa-envelope"></i><a href="#">Contact</a></li>
          </ul>
          <span></span>
          <button class="dark-mode-toggle" id="dark-mode-btn2" area-label="toggle dark mode">
            <i class="bx bx-moon moon"></i>
            <i class="bx bx-sun sun"></i>
          </button>
        </div>
      </div>
    </header>
    <main>
      <div class="container-locked">
        <div class="circle-locked">
          <div class="lock">
            <i class="fa-solid fa-unlock"></i>
            <p>This page is unlocked!</p>
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
    </main>

    <script src="js/darkmode.js"></script>
    <script src="js/nav.js"></script>
  </body>
</html>
