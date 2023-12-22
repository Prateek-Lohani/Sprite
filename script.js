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
