
    $(document).ready(function(){

     $("#application_1").click(function(){
       $(".tracker_container").css("display", "none");
       $("#tracker_1").css("background", "transparent");
       $(".application_container").slideToggle(1000);
       $(".application_container").css("display", "flex")
       $("#application_1").css("background", "white")
     });
     $("#tracker_1").click(function(){
       $(".application_container").css("display", "none");
       $("#application_1").css("background", "transparent");
       $(".tracker_container").slideToggle(1000);
       $(".tracker_container").css("display", "flex")
       $("#tracker_1").css("background", "white")
     });
   });

   document.querySelector("#application").addEventListener('click', () => {
        document.querySelector("#application").style.background = "white"
        document.querySelector("#tracker").style.background = "transparent"
        document.querySelector(".application_container").style.display = 'flex';
        document.querySelector(".tracker_container").style.display = 'none';
   })
   document.querySelector("#tracker").addEventListener('click', () => {
        document.querySelector("#tracker").style.background = "white"
        document.querySelector("#application").style.background = "transparent"
        document.querySelector(".tracker_container").style.display = 'flex';
        document.querySelector(".application_container").style.display = 'none';
   })
   
   if(window.screen.width < 900){
       $('.application_tabs').click(function(){
        $(".application_container").slideUp(1000);
        $(".tracker_container").slideUp(1000);
       })
   }
   
   var temp = 0
   const application_tabs = document.querySelectorAll('.application_tabs') 
   application_tabs.forEach((arr, index) => {
        arr.addEventListener('click', () => {
            application_tabs.forEach((arr_1) => arr_1.classList.remove('active_application_tab'))
            arr.classList.add('active_application_tab')
            generate_form(arr, index)
            generate_form_1(index)
            console.log(document.querySelector('.active_application_tab'))
        })
    })

    function generate_form(arr, index){
        if(index === 0){
            document.querySelector('.client_type').innerHTML = 
            `<input type="radio" id="1" class="option"  name="client_type" value="plot_${index}">
            <span> Apply through UPSIDA In-house System</span><br>
            <input type="radio" id="2" class="option"  name="client_type"  value="allotment_${index}">
            <span> Modify/View the existing Application</span>`
            document.querySelector('.main_form').innerHTML = ""
            document.querySelector('.submit').innerHTML = ""
        }
        else if(index == 7){
            document.querySelector('.client_type').innerHTML = ""
            
            document.querySelector('.main_form').innerHTML = 
            `<label style="padding:5px 10px">Name of Land Owner:</label>
             <input type="text" name="name" placeholder="Enter your Name">
             <label style="padding:5px 10px" for="phone">Mobile No.</label>
             <input type="phone" name="phone" id="phone" placeholder="Enter your Mobile No.">
             <label style="padding:5px 10px" for="email">Email</label>
             <input type="email" name="email" id="email" placeholder="Enter your email">
             <label style="padding:5px 10px">District Name:</label>
             <select style="width:fit-content;padding:5px;margin:5px;">
                <option value="" disabled selected hidden >Select...</option>
                <option>Gaziabad</option>
                <option>Varanasi</option>
                <option>Azamgarh</option>
             </select><br>
             <label style="padding:5px 10px" for="sub_district">Sub-district</label>
             <input type="text" name="sub_district" id="sub_district" placeholder="Enter sub-district ">
             <label style="padding:5px 10px">Type of Land owner:</label>
             <select style="width:fit-content;padding:5px;margin:5px;" placeholder="select">
                <option value="" disabled selected hidden>Select...</option>
                <option>Individual</option>
                <option>Group of individuals</option>
                <option>Comapny</option>
                <option>Trust</option>
                <option>Society</option>
             </select><br>
             <label style="padding:5px 10px">Type of Land:</label>
             <select style="width:fit-content;padding:5px;margin:5px;">
                <option value="" disabled selected hidden>Select...</option>
                <option>Agricultural Land</option>
                <option>Industrial Lnad</option>
                <option>Commercial Land</option>
                <option>Residential Land</option>
                <option>Waste Land</option>
                <option>Others</option>

             </select>`
            document.querySelector('.submit').innerHTML = ""
        }
        else if(index == 10){
            document.querySelector('.client_type').innerHTML = 
            `<label style="padding:10px">District Name:</label>
             <select style="width:fit-content;padding:5px;margin:10px;">
                <option>Kanpur</option>
                <option>Lucknow</option>
                <option>Gorakhpur</option>
             </select><br>
             <label style="padding:10px">Industrial Area:</label>
             <select style="width:fit-content;padding:5px;margin:10px;">
                <option>Kanpur</option>
                <option>Lucknow</option>
                <option>Gorakhpur</option>
             </select><br>
             <label style="padding:10px">Area Filter(in sq. mtr):</label>
             <select style="width:fit-content;padding:5px;margin:10px;">
                <option>0 - 500</option>
                <option>500 - 1000</option>
                <option>1000+</option>
             </select>`
            document.querySelector('.main_form').innerHTML = ""
            document.querySelector('.submit').innerHTML = ""
        }
        else{
            document.querySelector('.client_type').innerHTML = 
            `<input type="radio" id="1" class="option"  name="client_type" value="plot_${index}">
            <span>By Plot No.</span><br>
            <input type="radio" id="2" class="option"  name="client_type"  value="allotment_${index}">
            <span>By Allotment No.</span>`
            document.querySelector('.main_form').innerHTML = ""
            document.querySelector('.submit').innerHTML = ""
        }
        
    }      
    

    function generate_form_1(i){
        console.log(i)
        if(i === 0){
            $(".option").change(function() {
                if ($(this).val() == "plot_0") {
                    $('.main_form').html('<span>Applicant Name</span><input type="text" id="1" name="applicant_name" placeholder="Enter your Application Name"><span>Applicant Email Id</span><input type="number" id="1" name="applicant_email" placeholder="Enter your Applicant No."><span>Enter Mobile No.</span><input type="tel" id="1" name="applicant_phone" placeholder="Enter your Mobile No">');
                    $('.submit').html('<button type="submit">Submit</button>');
                    
                } else{
                    $('.main_form').html('<span>Enter your Application No.</span><input type="number" id="2" name="client_type" value="allotment_number" placeholder="Enter your Application No.">');
                    $('.submit').html('<button type="submit">Submit</button>');
                }
            });
        }
        else if(i === 1){
            console.log(i)
            $(".option").change(function() {
                if ($(this).val() == "plot_1") {
                    console.log(i)
                    $('.main_form').html(`<label style="padding:10px">Industrial Area:</label><select style="width:fit-content;padding:5px;margin:10px;"><option>Kanpur</option><option>Lucknow</option><option>Gorakhpur</option></select><label style="padding:10px">Plot No.:</label><input type="text" id="2" name="client_type" placeholder="Enter the Plot number">`)
                    $('.submit').html('<button type="submit">Submit</button>');
                    
                } else{
                    $('.main_form').html('<span>Enter your Allotment letter number</span><input type="text" id="2" name="client_type" placeholder="Enter your Allotment letter number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                }
            });
        }
        else if(i === 2){
            console.log(i)
            $(".option").change(function() {
                if ($(this).val() == "plot_2") {
                    console.log(i)
                    $('.main_form').html(`<label style="padding:10px">Industrial Area:</label><select style="width:fit-content;padding:5px;margin:10px;"><option>Kanpur</option><option>Lucknow</option><option>Gorakhpur</option></select><label style="padding:10px">Plot No.:</label><input type="text" id="2" name="client_type" placeholder="Enter the Plot number">`)
                    $('.submit').html('<button type="submit">Submit</button>');
                    
                } else{
                    $('.main_form').html('<span>Enter your Allotment letter number</span><input type="text" id="2" name="client_type" placeholder="Enter your Allotment letter number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                }
            });
        }
        else if(i === 3){
            console.log(i)
            $(".option").change(function() {
                if ($(this).val() == "plot_3") {
                    console.log(i)
                    $('.main_form').html(`<label style="padding:10px">Industrial Area:</label><select style="width:fit-content;padding:5px;margin:10px;"><option>Kanpur</option><option>Lucknow</option><option>Gorakhpur</option></select><label style="padding:10px">Plot No.:</label><input type="text" id="2" name="client_type" placeholder="Enter the Plot number">`)
                    $('.submit').html('<button type="submit">Submit</button>');
                    
                } else{
                    $('.main_form').html('<span>Enter your Allotment letter number</span><input type="text" id="2" name="client_type" placeholder="Enter your Allotment letter number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                }
            });
        }
        else if(i === 4){
            console.log(i)
            $(".option").change(function() {
                if ($(this).val() == "plot_4") {
                    console.log(i)
                    $('.main_form').html(`<label style="padding:10px">Industrial Area:</label><select style="width:fit-content;padding:5px;margin:10px;"><option>Kanpur</option><option>Lucknow</option><option>Gorakhpur</option></select><label style="padding:10px">Plot No.:</label><input type="text" id="2" name="client_type" placeholder="Enter the Plot number">`)
                    $('.submit').html('<button type="submit">Submit</button>');
                    
                } else{
                    $('.main_form').html('<span>Enter your Allotment letter number</span><input type="text" id="2" name="client_type" placeholder="Enter your Allotment letter number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                }
            });
        }
        else if(i === 5){
            console.log(i)
            $(".option").change(function() {
                if ($(this).val() == "plot_5") {
                    console.log(i)
                    $('.main_form').html('<span>Plot Number 3</span><input type="text" id="1" name="client_type" value="plot_number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                    
                } else{
                    $('.main_form').html('<span>By Allotment No. 4</span><input type="text" id="2" name="client_type" value="allotment_number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                }
            });
        }
        else if(i === 6){
            console.log(i)
            $(".option").change(function() {
                if ($(this).val() == "plot_6") {
                    console.log(i)
                    $('.main_form').html('<span>Plot Number 3</span><input type="text" id="1" name="client_type" value="plot_number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                    
                } else{
                    $('.main_form').html('<span>By Allotment No. 4</span><input type="text" id="2" name="client_type" value="allotment_number">');
                    $('.submit').html('<button type="submit">Submit</button>');
                }
            });
        }
    }

    document.querySelector('.home_icon').addEventListener('click', () => {
        application_tabs.forEach((arr_1) => arr_1.classList.remove('active_application_tab'))
        document.querySelector('.client_type').innerHTML = 
            `<input type="radio" id="1" class="option" name="client_type" value="UDSIPA">
             <span>UPSIDA_user</span>
             <input type="radio" id="2" class="option"  name="client_type" value="OTHER">
             <span>Other Dept</span>`
        document.querySelector('.main_form').innerHTML = 
            `<label for="name">Name</label>
             <input type="text" name="name" id="name" placeholder="Enter your name">
             <label for="password">Password</label>
             <input type="password" name="password" id="password" placeholder="Enter your password">
             <label for="captcha">Captcha</label>
             <input type="text" name="captcha" id="captcha" placeholder="Enter the captcha">`
        document.querySelector('.submit').innerHTML = "<button type=\"submit\">Submit</button>"
    })

    


    
    


