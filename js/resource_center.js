
     $(document).ready(function(){
    
      $(".right_1").click(function(){
        $(".resource_menu_box").slideToggle(1000)
        $(".resource_menu_box").css("display", "flex")
        $(".resource_menu_box").css("flex-direction", "column")
      })
      $(".resource_menu_1 .resource_menu_box .resource_menu_items").click(function(){
        $(".resource_menu_box").slideUp(1000)
      })
    });
    var identifier = 0
    document.querySelector('.right').addEventListener('click', () => {
        if(identifier === 0){
            document.querySelector('.resource_menu_box_1').style.display = "none"
            document.querySelector('.resource_menu_box_2').style.display = "flex"
            document.querySelector('.right').innerHTML = "prev"
            identifier = 1
        }
        else{
            document.querySelector('.resource_menu_box_1').style.display = "flex"
            document.querySelector('.resource_menu_box_2').style.display = "none"
            document.querySelector('.right').innerHTML = "next"
            identifier = 0
        }
    })

    const resource_pdfs_source = [
        "https://drive.google.com/file/d/1OZCbU7cKlZz9c0q9S67kfbUVpgMyP8Pr/preview",
        "https://drive.google.com/file/d/15Jdp_rOQh0OgNEyF7L4aiZW5T-RW_i36/preview",
        "https://drive.google.com/file/d/1fwjas80h58FaJmlF-0UtvjP88n3RMYGB/preview",
        "https://drive.google.com/file/d/1k7MH0RSHFGmz571QIQTAN0Wkmm1cpEJr/preview",
        "https://drive.google.com/file/d/13RDwP1_GMPsOleTLQ7LWsU6ubmN3LsZ9/preview",
        "https://drive.google.com/file/d/142PllfgTDOk5aTcl_cLfK4j1KXqqJykV/preview",
        "https://drive.google.com/file/d/1wZ608LyM8IinTcTVm2bmzwGvQFXjOHae/preview",
        "https://drive.google.com/file/d/12t8QwG3sPX-wdJIMaeDTpcis5Tg9-dlx/preview",
        "https://drive.google.com/file/d/1DlwzlQqM7BOA9s2miJT6ycR34hxlAWMM/preview"
    ]

    const resource_viewer = document.querySelector('.resource_viewer')
    const develop = document.querySelector('.development_process_content')
    
    document.querySelectorAll('.resource_menu_items').forEach((arr, index) => {
        arr.addEventListener('click', () => {
            document.querySelector('.active_tab_heading').innerHTML = arr.innerHTML
        })
        if(index === 1){
            arr.addEventListener('click', () => {
                resource_viewer.style.display = 'none'
                develop.style.display = 'none'
                document.querySelector('.office_orders').style.display = 'flex'
            })
        }
        if(index < 11 && index > 1){
            arr.addEventListener('click', () => {
                develop.style.display = 'none'
                resource_viewer.style.display = 'flex'
                document.querySelector('.office_orders').style.display = 'none'
                resource_viewer.src = resource_pdfs_source[index - 2]
            })
        }

        if(index === 12){
            arr.addEventListener('click', () => {
                develop.style.display = 'none'
                resource_viewer.style.display = 'none'
                document.querySelector('.office_orders').style.display = 'flex'
            })
        }

        if(index > 12){
            arr.addEventListener('click', () => {
                develop.style.display = 'none'
                resource_viewer.style.display = 'flex'
                document.querySelector('.office_orders').style.display = 'none'
                resource_viewer.src = resource_pdfs_source[index -  13]
            })
        }

        if(index === 0 || index === 11){
            arr.addEventListener('click', () => {
                develop.style.display = 'flex'
                resource_viewer.style.display = 'none'
                document.querySelector('.office_orders').style.display = 'none'
            })
        }
    })
