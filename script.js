let element = document.querySelectorAll('.elem')

element.forEach(function(value){
    value.addEventListener("mouseenter",function(){
        value.childNodes[3].style.opacity = 1
    })
    value.addEventListener("mouseleave",function(){
        value.childNodes[3].style.opacity = 0
    })
    value.addEventListener("mousemove",function(dets){
        value.childNodes[3].style.left = dets.x + "px"
    })
})