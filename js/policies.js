
    var clicked = 1
    const pdf_sources = [
        ["https://drive.google.com/file/d/1ONBP899VQXBLjHZtf3oZfgGiA8gRnenm/preview",
        "https://drive.google.com/file/d/1KlFypZWdJ0igdvpTUSzfefcE_oojFe5F/preview"],
        ["https://drive.google.com/file/d/1gvn3wNYK5XPNmVj8t0gwoVKnPEzgNVSP/preview",
        "https://drive.google.com/file/d/1EImOTM3O9uJ-dWefY06dqScoii2aH4t4/preview", 
        "https://drive.google.com/file/d/1JF9rrf8dgP2k8-5Vk25KdKsZCbZTc8mS/preview",
        "https://drive.google.com/file/d/1wA0UwyqzNq3DAUXr3TpaCxCUQ0EBekvQ/preview",
        "https://drive.google.com/file/d/1DkkcPutt6Psa0DLqS49DRCwpkmxbNgbh/preview"],
        ["https://drive.google.com/file/d/1xum7ZNilMPZ6upRA2mFBrs3vANi71Yxv/preview",
        "https://drive.google.com/file/d/1X7oc79w4EqZTtfvc73KrJwxGgIexkx1-/preview"],
        ["https://drive.google.com/file/d/1NVvuJJTQOWHtDixKnu5FazIfcT6i5XFi/preview",
        "https://drive.google.com/file/d/1-5xeKTRLvrG_GnLaoPe7qs5xp-88o8AQ/preview"],
        ["https://drive.google.com/file/d/1d2HyHnGtk3LaCsO-OiXO21kShcluB23b/preview"],
        ["https://drive.google.com/file/d/11Csgx3365fKjzAm2hoL1c-cXig8Sfl0C/preview"],
        ["https://drive.google.com/file/d/1x_I_AdyyTdOdfLslQ5okv4HaKA01nGLf/preview",
        "https://drive.google.com/file/d/1S_vjuEVXwo_G4N-Cr5HnuMNg_6PtYpWH/preview",
        "https://drive.google.com/file/d/1pkfI9PuO3GorY2TYTK8VS88rIqSDJwDN/preview",
        "https://drive.google.com/file/d/1wceoKsXnRv_yakBBJGSpWm065Of-P_ln/preview",
        "https://drive.google.com/file/d/1uylRqL9GFufurSHxhVk8sEEiuli5yItA/preview"],
        ["https://drive.google.com/file/d/1SuabvYxCFHYgeLbmmLJWw2TBy-anm26V/preview"],        
        ["https://drive.google.com/file/d/1bXAM52Refaq2hNhu5EcBzsUss61sz80d/preview",
        " https://drive.google.com/file/d/1kfRwVsdc09XChBUzE2KvtcisL7zZvWhW/preview"]
    ]
    
    const pdf_viewer = document.querySelector(".viewer")
    const tabs = document.querySelectorAll(".policies_files_tab")
    const policies_options = document.querySelectorAll('.policies_options')
    const policies_options_1 = document.querySelectorAll(".policy")
    const policy_open = document.querySelector('.other_policies')
    const policy_name = document.querySelector('.policy_name')

    tabs.forEach((index) => {
        index.style.display = "none"
    })
    tabs[0].style.display = "flex"

    policies_options.forEach((arr, index) => {
        arr.addEventListener('click', () => {
            tabs.forEach((i) => {
                i.style.display = "none"
            })
            tabs[index].style.display = "flex"
            pdf_viewer.src = pdf_sources[index][0]
            policies_options.forEach(index => {
                index.classList.remove("active_tab")
            })
            arr.classList.add("active_tab")
        })
        
        tabs[index].childNodes.forEach((element, i) => {
            element.addEventListener('click', () => {
                pdf_viewer.src = pdf_sources[index][i]
            })
        })
    })

    policies_options_1.forEach((arr, index) => {
        arr.addEventListener('click', () => {
            tabs.forEach((i) => {
                i.style.display = "none"
            })
            tabs[index].style.display = "flex"
            pdf_viewer.src = pdf_sources[index][0]
            policies_options_1.forEach(index => {
                index.classList.remove("active_tab")
            })
            arr.classList.add("active_tab")
            $(".policies_menu").slideUp(1000);
            policy_name.innerHTML = arr.innerHTML
        })
        
        tabs[index].childNodes.forEach((element, i) => {
            element.addEventListener('click', () => {
                pdf_viewer.src = pdf_sources[index][i]
            })
        })
    })


    $(document).ready(function(){
      $(".other_policies").click(function(){
        $(".policies_menu").slideToggle(1000);
      });
    });

    document.querySelectorAll('.policies_file').forEach((arr) => {
        arr.addEventListener('click', () => {
            document.querySelectorAll('.policies_file').forEach(arr_1 => arr_1.style.background = "skyblue")
            arr.style.background = "rgb(70 193 241)"
        }) 
    })
