var loading=document.querySelector('.loader');

var tl=gsap.timeline();

tl.to('.loader',{
    delay:3.5,
    display:"none"
})

tl.to('#main',{
    display:'initial',
    opacity:1,
    duration:1
})


var form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
        Toastify({
            text: "Wohoo!! You are now a member.",
            className: "button",
            position:"center",
    
            duration: 3000,
            gravity: "center",
            backgroundColor: "orangered",
            style: {
              background: "orangered",
              FontFace:"Helvetica",
              
            }
          }).showToast();

          document.querySelector('input').value='';
    
})