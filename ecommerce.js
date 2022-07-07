function bright(){
    let bulb1=document.getElementById("IMAGES1").style.filter="grayscale(0) brightness(1)"
    let bulb2=document.getElementById("IMAGES2").style.filter="grayscale(0) brightness(1)"
    let bulb3=document.getElementById("IMAGES3").style.filter="grayscale(0) brightness(1)"
    let bulb4=document.getElementById("IMAGES4").style.filter="grayscale(0) brightness(1)"
}

function dark(){
    bulb=document.getElementById("IMAGES1").style.filter="grayscale() brightness(0.7)" 
    bulb2=document.getElementById("IMAGES2").style.filter="grayscale() brightness(0.7)"
    bulb3=document.getElementById("IMAGES3").style.filter="grayscale() brightness(0.7)"
    bulb4=document.getElementById("IMAGES4").style.filter="grayscale() brightness(0.7)"
}