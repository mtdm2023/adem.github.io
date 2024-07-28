let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");
let displayValThree = document.getElementById("range3");
let displayValFour = document.getElementById("range4");
let minGapTwo = 0;
let sliderTrackTwo = document.querySelector(".slider-track2");
let sliderMaxValueTwo = document.getElementById("slider-3").max;

$(document).ready(function(){
    jQuery(function() {
        jQuery('.multiSelect').each(function(e) {
          var self = jQuery(this);
          var field = self.find('.multiSelect_field');
          var fieldOption = field.find('option');
          var placeholder = field.attr('data-placeholder');
      
          field.hide().after(`<div class="multiSelect_dropdown"></div>
                              <ul class="multiSelect_list"></ul>
                              <span class="multiSelect_arrow"></span>`);
          
          fieldOption.each(function(e) {
            jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                  <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                </li>`);
          });
          
          var dropdown = self.find('.multiSelect_dropdown');
          var list = self.find('.multiSelect_list');
          var option = self.find('.multiSelect_option');
          var optionText = self.find('.multiSelect_text');
          
          dropdown.attr('data-multiple', 'true');
          list.css('top', dropdown.height() + 5);
          
          option.click(function(e) {
            var self = jQuery(this);
                  e.stopPropagation();
              self.addClass('-selected');
              field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
            dropdown.append(function(e) {
              return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<i class="fal fa-times ms-2"></i>').click(function(e) {
                var self = jQuery(this);
                e.stopPropagation();
                self.remove();
                list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                field.find('option:contains(' + self.text() + ')').prop('selected', false);
                if (dropdown.children(':visible').length === 0) {
                  dropdown.removeClass('-hasValue');
                }
              });
            }).addClass('-hasValue');
              list.css('top', dropdown.height() + 5);
              if (!option.not('.-selected').length) {
                list.append('<h5 class="multiSelect_noselections">لا يوجد مواصفات أخرى</h5>');
              }
          });
          
          dropdown.click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            dropdown.toggleClass('-open');
            list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
          });
          
          jQuery(document).on('click touch', function(e) {
              if (dropdown.hasClass('-open')) {
                  dropdown.toggleClass('-open');
                  list.removeClass('-open');
              }
          });
        });
    });


    slideOne(sliderOne,sliderTwo,displayValOne,minGap,sliderTrack);
    slideTwo(sliderOne,sliderTwo,displayValTwo,minGap,sliderTrack);

    slideOne(sliderThree,sliderFour,displayValThree,minGapTwo,sliderTrackTwo);
    slideTwo(sliderThree,sliderFour,displayValFour,minGapTwo,sliderTrackTwo);

    $('#slider-1').on('input', function() {slideOne(sliderOne,sliderTwo,displayValOne,minGap,sliderTrack);});
    $('#slider-2').on('input', function() {slideTwo(sliderOne,sliderTwo,displayValTwo,minGap,sliderTrack);});

    $('#slider-3').on('input', function() {slideOne(sliderThree,sliderFour,displayValThree,minGapTwo,sliderTrackTwo);});
    $('#slider-4').on('input', function() {slideTwo(sliderThree,sliderFour,displayValFour,minGapTwo,sliderTrackTwo);});

    // This function shows availability status
    show();
    $("#FilterStatus").change(function(){
      show();
    });



    
    

    

    
  



  })

function show(){
  var ValFilter = $("#FilterStatus").find(":selected").val();
  if(ValFilter == 1){
    $("#FilterStatusDiv").css('display','none');
  }
  else if(ValFilter == 2){
    $("#FilterStatusDiv").css('display','block');
  }
}
function slideOne(slideOne,slideTwo,displayValOne,minGap,sliderTrack){
    if(parseInt(slideTwo.value) - parseInt(slideOne.value) <= minGap){
      slideOne.value = parseInt(slideTwo.value) - minGap;
    }
    displayValOne.textContent = slideOne.value;
    fillColor(slideOne,slideTwo,sliderMaxValue,sliderTrack);
}
function slideTwo(slideOne,slideTwo,displayValTwo,minGap,sliderTrack){
    if(parseInt(slideTwo.value) - parseInt(slideOne.value) <= minGap){
      slideTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = slideTwo.value;
    fillColor(slideOne,slideTwo,sliderMaxValue,sliderTrack);
}
function fillColor(slideOne,slideTwo,sliderMaxValue,sliderTrack){
    percent1 = (slideOne.value / sliderMaxValue) * 100;
    percent2 = (slideTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to left, #b6aeae ${percent1}% , #022858 ${percent1}% , #022858 ${percent2}%, #b6aeae ${percent2}%)`;
}