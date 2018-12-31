var path, btnclass, value;


var scheme = ["G Scheme", "I Scheme"];


var sem = ["Sem I", "Sem II", "Sem III", "SemIV", "Sem V", "Sem VI"];


var gsub = {
     semI : {
          1 : "English",
          2 : "Basic Physics",
          3 : "Basic Chemistry",
          4 : "Basic Mathematics"
     },
     semII : {
          1 : "Applied Physics",
          2 : "Programming In C",
          3 : "Basic Electronics",
          4 : "Applied Chemistry",
          5 : "Communication Skills",
          6 : "Engineering Mathematics"
     }
     semIII : {
          1 : "Digital Techniques",
     }
}


var btn = "but";
var small = "small";
var large = "large";
var year = "year";






$.remove = function(){
     // header
     $('.header .scheme input').remove();
     $('.header .sem input').remove();
     $('.header .sub input').remove();
     // main
     $('.main .scheme .gscheme input').remove();
     $('.main .scheme .ischeme input').remove();
     $('.main .sem .semI input').remove();
     $('.main .sem .semII input').remove();
     $('.main .sem .semIII input').remove();
     $('.main .sem .semIV input').remove();
     $('.main .sem .semV input').remove();
     $('.main .sem .semVI input').remove();
     $('.header .sub .gscheme .semI .english input').remove();
     $('.header .sub .gscheme .semI .basicphysics input').remove();
     $('.header .sub .gscheme .semI .basicchemistry input').remove();
     $('.header .sub .gscheme .semI .basicmathematics input').remove();


     $('.header .sub .gscheme .semII .appliedphysics input').remove();
     $('.header .sub .gscheme .semII .progamminginc input').remove();
     $('.header .sub .gscheme .semII .basicelectronics input').remove();
     $('.header .sub .gscheme .semII .appliedchemistry input').remove();
     $('.header .sub .gscheme .semII .communicationskills input').remove();
     $('.header .sub .gscheme .semII .engineeringmathematics input').remove();


     $('.header .sub .gscheme .semIII .digitltechniques input').remove();
     $('.header .sub .gscheme .semIII .electricaltechnology input').remove();
     $('.header .sub .gscheme .semIII .appliedmathematics input').remove();
     $('.header .sub .gscheme .semIII .datastructure input').remove();
     $('.header .sub .gscheme .semIII .database input').remove();

     $('.header .sub .gscheme .semIV .computernetwork input').remove();
     $('.header .sub .gscheme .semIV .objectorientedprogramming input').remove();
     $('.header .sub .gscheme .semIV .microprocessor input').remove();
     $('.header .sub .gscheme .semIV .computerhardwareandmaintenance input').remove();

     $('.header .sub .gscheme .semV .operatingsystem input').remove();
     $('.header .sub .gscheme .semV .compuersecurity input').remove();
     $('.header .sub .gscheme .semV .javaprogramming input').remove();
     $('.header .sub .gscheme .semV .softwareengineering input').remove();
     $('.header .sub .gscheme .semV .systemprogramming input').remove();

     $('.header .sub .gscheme .semVI .softwaretesting input').remove();
     $('.header .sub .gscheme .semVI .emeddedsystem input').remove();
     $('.header .sub .gscheme .semVI .advancedmicroprocessor input').remove();
     $('.header .sub .gscheme .semVI .database input').remove();
     $('main .exam .section .s18 input').remove();
     $('main .exam .section .s17 input').remove();
     $('main .exam .section .s16 input').remove();
     $('main .exam .section .s15 input').remove();
     $('main .exam .section .w18 input').remove();
     $('main .exam .section .w17 input').remove();
     $('main .exam .section .w16 input').remove();
     $('main .exam .section .w15 input').remove();
     $('main .exam .section .w14 input').remove();
}

$.mbutton = function(path, value, class1, class2, class3){
     $(path).append(`
     <input type = "button" value = "${value}" class = "${class1} ${class2} ${class3}"><br>
     `);     
}
$.hbutton = function(path, value, class1, class2){
     $(path).append(`
     <input type = "button" value = "${value}" class = "${class1} ${class2}">
     `);     
}

$('document').ready(function(){

     $.index = function(){
          
     $('.header').hide();

     $('.main').css('margin-top', '7em');

     $.mbutton('.main .scheme .gscheme', G, btn ,small, year); //G Scheme


     $.mbutton('.main .scheme .ischeme', I, btn, small, year); //I Scheme
     } 
     $.index();

     $('.main .scheme .gscheme input').click(function(){
          $.remove();
          $('.header').show();
          $.hbutton('.header .scheme', )
     }); // onclick: G Scheme




});
