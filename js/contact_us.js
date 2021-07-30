let highlights =`
    background-color:rgb(69, 162, 224) ;
    font-size: 110% ;
`
let normal = ` 
background-color: rgb(153, 209, 223)  !important;
font-size: 100%  !important;
`




document.querySelector(".headoffice_b").addEventListener('click' ,() =>{
    document.querySelector(".headoffice_b").style = highlights;
    document.querySelector(".regionaloffice_b").style = normal;
    document.querySelector(".divisionaloffice_b").style = normal;
    document.querySelector(".headoffice_cont").style.display = 'flex';
    document.querySelector(".regionaloffice_cont").style.display = 'none';
    document.querySelector(".divisionaloffice_cont").style.display = 'none';
})
document.querySelector(".regionaloffice_b").addEventListener('click' ,() =>{
    document.querySelector(".regionaloffice_b").style = highlights;
    document.querySelector(".divisionaloffice_b").style = normal;
    document.querySelector(".headoffice_b").style = normal;
    document.querySelector(".regionaloffice_cont").style.display = 'flex';
    document.querySelector(".headoffice_cont").style.display = 'none';
    document.querySelector(".divisionaloffice_cont").style.display = 'none';
})
document.querySelector(".divisionaloffice_b").addEventListener('click' ,() =>{
    document.querySelector(".divisionaloffice_b").style = highlights;
    document.querySelector(".headoffice_b").style = normal;
    document.querySelector(".regionaloffice_b").style = normal;
    document.querySelector(".divisionaloffice_cont").style.display = 'flex';
    document.querySelector(".headoffice_cont").style.display = 'none';
    document.querySelector(".regionaloffice_cont").style.display = 'none';
})


