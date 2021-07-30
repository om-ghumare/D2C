
    var clicked = 1
    const pdf_sources = [
        ["https://drive.google.com/file/d/1ONBP899VQXBLjHZtf3oZfgGiA8gRnenm/preview",
        "https://drive.google.com/file/d/1GK_VHVvbN84aEMDbseEJOJLohQNzhKDp/preview"],
        ["https://drive.google.com/file/d/1gvn3wNYK5XPNmVj8t0gwoVKnPEzgNVSP/preview",
        "https://drive.google.com/file/d/1EImOTM3O9uJ-dWefY06dqScoii2aH4t4/preview", 
        "https://drive.google.com/file/d/1gvn3wNYK5XPNmVj8t0gwoVKnPEzgNVSP/preview",
        "https://drive.google.com/file/d/1k9x7fzcwyl2iYJpmNM0P8qlL0-iAUH_y/preview",
        "https://drive.google.com/file/d/1VPzDZ46JkVPQop6z7RsT7tB66iG_W9am/preview"],
        ["https://drive.google.com/file/d/1xum7ZNilMPZ6upRA2mFBrs3vANi71Yxv/preview",
        "https://drive.google.com/file/d/1TJrL2CgtGXxOPkJd6cgfAyFjOpptEN8S/preview"],
        ["https://drive.google.com/file/d/1NVvuJJTQOWHtDixKnu5FazIfcT6i5XFi/preview",
        "https://drive.google.com/file/d/1BJE4UKTWs_RdUzz1rIt3cajp5Dz8n2Hp/preview"],
        ["https://drive.google.com/file/d/1BJE4UKTWs_RdUzz1rIt3cajp5Dz8n2Hp/preview"],
        ["https://drive.google.com/file/d/1XOvfliATyRaZtZ4c6KCliQSmr-vgG-8f/preview"],
        ["https://drive.google.com/file/d/1x_I_AdyyTdOdfLslQ5okv4HaKA01nGLf/preview",
        "https://drive.google.com/file/d/1S_vjuEVXwo_G4N-Cr5HnuMNg_6PtYpWH/preview",
        "https://drive.google.com/file/d/1pCNpWtMsF2a0hJSmi93ocsvspj1RwEjl/preview",
        "https://drive.google.com/file/d/1FArtahStZuSt8vyynHkvO3K9J9t6IS7_/preview",
        "https://drive.google.com/file/d/1GNm1trSBhrVTV4XeXM7dJO-YmBkmv4Gl/preview"],
        ["https://drive.google.com/file/d/104D9Q8ZhMdE_av0L3sABRCoMXu4rLzpz/preview"],        
        ["https://drive.google.com/file/d/1bXAM52Refaq2hNhu5EcBzsUss61sz80d/preview",
        "https://drive.google.com/file/d/10IsuTd0e0IYl99db3nbsV9afiLblGcTn/preview"]
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

