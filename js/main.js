$(document).ready(function(){
    
    const Dir = document.querySelector("html").getAttribute("dir");
    let IsRtl = true;
    if(Dir == "rtl") {
        IsRtl = true;
    }else if(Dir == "ltr"){
        IsRtl = false;
    }
    else {
        IsRtl = false;
    }
    $("#SliderProjects").owlCarousel({
        nav:false,
        dots:false,
        rtl:IsRtl,
        margin:20,
        responsive:{
            0:{
                items:1,
                stagePadding:0,
            },375:{
                items:1,
                stagePadding:30,
            },425:{
                items:1,
                stagePadding:50,
            },
            550:{
                items:2
            },768:{
                items:3
            },
            1000:{
                items:3,
                stagePadding:5,
            }
        }
    })

    $("#gallerySlider").owlCarousel({
        nav:false,
        dots:false,
        rtl:IsRtl,
        margin:20,
        responsive:{
            0:{
                items:1,
                stagePadding:0,
            },375:{
                items:2,
                stagePadding:30,
            },425:{
                items:2,
                stagePadding:50,
            },
            550:{
                items:3
            },768:{
                items:4
            },
            1000:{
                items:6,
                stagePadding:5,
            }
        }
    })
    $("#gallerydetailSlider").owlCarousel({
        nav:false,
        dots:false,
        rtl:IsRtl,
        margin:20,
        items:1,
    })
    
    const currentlocate = location.href; // Return the Current page..
    const menuItem = document.querySelectorAll('.Top-Navbar .nav-link');
    const menulength = menuItem.length;
    for(let i=0;i<menulength;i++){
        if(menuItem[i].href === currentlocate){
            menuItem[i].classList.add("active")
        }
    }
    
    
})