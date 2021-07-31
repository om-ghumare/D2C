document.getElementsByTagName('header')[0].innerHTML = `
<img src="images/Vector 7.png" alt="" srcset="" class="header_vector">
<nav>
    <div class="logo">
        <a href="index.html" style="text-align:left;"><img src="https://vaibhav-22-dm.github.io/UPSIDA/images/upsida_logo.png" alt="" srcset="" class="header_logo"></a>
        <div class="hamburger_menu">
            <div class="ham_line"></div>
            <div class="ham_line"></div>
            <div class="ham_line"></div>
        </div>
    </div>
    <div class="logo_line"></div>
    <div class="menu">
        <a href="index.html" class="menu_items">HOME</a>
        <a href="about.html" class="menu_items">ABOUT</a>
        <a href="eservices.html" class="menu_items">E-SERVICES</a>
        <a href="new_flagship.html" class="menu_items">FLAGSHIP PROJECTS</a>
        <a href="policies_final.html" class="menu_items">POLICIES</a>
        <a href="resource_center.html" class="menu_items">RESOURCE CENTER</a>
        <a href="contact_us.html" class="menu_items">CONTACT</a>
    </div>
</nav>`

document.querySelector('.area').innerHTML = `
<ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
</ul>`

document.getElementsByTagName('footer')[0].innerHTML = `
<div class="footer_container">
<div class="footer_menu">
    <span class="footer_menu_heading">Navigation</span>
    <a href="index.html" class="footer_menu_items">Home</a>
    <a href="about.html" class="footer_menu_items">About</a>
    <a href="eservices.html" class="footer_menu_items">E-services</a>
    <a href="new_flagship.html" class="footer_menu_items">Flagship Projects</a>
    <a href="policies_final.html" class="footer_menu_items">Policies</a>
    <a href="resource_center.html" class="footer_menu_items">Resource Center</a>
    <a href="contact_us.html" class="footer_menu_items">Contact</a>
</div>
<div class="contact_info">
    <div class="footer_logo">
        <img src="images/upsida_logo.png" alt="" srcset="">
    </div>
    <div class="address">
        <span>USIDC Complex</span>
        <span>A-1/4 Lakhanpur</span>
        <span>Kanpur-208024</span>	
    </div>
    <span class="phone">Phone: 0512-2582851, 2582852, 2582853</span>
    <span class="fax">Fax: 0512-2580797</span>
    <span class="email">Email: </span>
    <div class="member_social social_links">
        <a href="#"><img src="images/Koo_Logo_SVG_mifeb6.png" alt="" srcset=""></a>
        <a href="https://www.facebook.com/UPSIDAGoUP" target="_blank"><img src="images/facebook.png" alt="" srcset=""></a>
        <a href="https://twitter.com/upsida" target="_blank"><img src="images/twitter.png" alt="" srcset=""></a>
    </div>
</div>
<div class="contact_us_form">
    <span class="footer_contact_heading">Drop a message</span>
    <form action="">
        <input type="text" name="name" id="name" placeholder="Enter your name">
        <input type="tel" name="phone" id="phone" placeholder="Enter your phone">
        <input type="email" name="email" id="email" placeholder="Enter your email">
        <textarea name="message" id="message" cols="30" rows="6" placeholder="Enter your message"></textarea>
        <input type="submit" id="submit" placeholder="Submit" >
    </form>
</div>
</div>
<div class="footer_bottom_bar">
<p>Content on this website is published and managed by Uttar Pradesh State Industrial Development Authority.</p>
<p>For any query regarding this website, please contact the “ADMINISTRATOR”.</p>
<p>© UPSIDA, U.P., India | All rights reserved.</p>
</div>`


    $(document).ready(function(){
     $(".hamburger_menu").click(function(){
       $(".menu").slideToggle(1000);
     });
   });




   $(function () {
    $(document).scroll(function () {
      var $nav = $("header");
      var $img = $(".header_vector");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $img.toggleClass('header_scrolled' , $(this).scrollTop() > $nav.height());
    });
  });