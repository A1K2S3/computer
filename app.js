var path,value, val;


var scheme = ["G Scheme", "I Scheme"];


var sem    = ["Sem I", "Sem II", "Sem III", "SemIV", "Sem V", "Sem VI"];


var gsub = {
     semI  : {
          1: "English",
          2: "Basic Physics",
          3: "Basic Chemistry",
          4: "Basic Mathematics"
     },
     semII : {
          1: "Applied Physics",
          2: "Programming In C",
          3: "Basic Electronics",
          4: "Applied Chemistry",
          5: "Communication Skills",
          6: "Engineering Mathematics"
     },
     semIII: {
          1: "Digital Techniques",
          2: "Electrical Technology",
          3: "Applied Mathematics",
          4: "Datastructure using C",
          5: "Rational Database Management system"
     },
     semIV : {
          1: "Computer Network",
          2: "Object Oriented Programming",
          3: "Microprocessor and Programming",
          4: "Commuter Hardware and Maintenance"
     },
     semV  : {
          1: "Operating System",
          2: "Computer Security",
          3: "Java Programming",
          4: "Software Engineering",
          5: "System Programming"
     },
     semVI : {
          1: "Software Testing",
          2: "Embedded System",       
          3: "Advanced Microprocssor",
          4: "Advanced Database Management"
     }
}
var isub = {
     semI : {
          1 : "English",
          2 : "Basic Science",
          3 : "Basic Mathematics"
     },
     semII : {
          1 : "Basic Electronics",
          2 : "Programming in C",
          3 : "Applied Mathematics",
          4 : "Elements of ELectrical Engineering"
     },
     semIII : {
          1 : "Digital Techniques",
          2 : "Computer Graphics",
          3 : "Datastructure in C",
          4 : "Object Oriented Programming",
          5 : "Database Management System"
     }
}

var btn     = "but";
var small   = "small";
var large   = "large";
var year    = "year";
var subject = "subject";






function remove(){
     // header
     $('.header .scheme').remove();
     $('.header .sem').remove();
     $('.header .sub').remove();
     // main
     $('.main .scheme .gscheme input').remove();
     $('.main .scheme .ischeme input').remove();
     $('.main .sem .semI input').remove();
     $('.main .sem .semII input').remove();
     $('.main .sem .semIII input').remove();
     $('.main .sem .semIV input').remove();
     $('.main .sem .semV input').remove();
     $('.main .sem .semVI input').remove();
     $('.main .sub .gscheme .semI .english input').remove();
     $('.main .sub .gscheme .semI .basicphysics input').remove();
     $('.main .sub .gscheme .semI .basicchemistry input').remove();
     $('.main .sub .gscheme .semI .basicmathematics input').remove();


     $('.main .sub .gscheme .semII .appliedphysics input').remove();
     $('.main .sub .gscheme .semII .progamminginc input').remove();
     $('.main .sub .gscheme .semII .basicelectronics input').remove();
     $('.main .sub .gscheme .semII .appliedchemistry input').remove();
     $('.main .sub .gscheme .semII .communicationskills input').remove();
     $('.main .sub .gscheme .semII .engineeringmathematics input').remove();


     $('.main .sub .gscheme .semIII .digitltechniques input').remove();
     $('.main .sub .gscheme .semIII .electricaltechnology input').remove();
     $('.main .sub .gscheme .semIII .appliedmathematics input').remove();
     $('.main .sub .gscheme .semIII .datastructure input').remove();
     $('.main .sub .gscheme .semIII .database input').remove();

     $('.main .sub .gscheme .semIV .computernetwork input').remove();
     $('.main .sub .gscheme .semIV .objectorientedprogramming input').remove();
     $('.main .sub .gscheme .semIV .microprocessor input').remove();
     $('.main .sub .gscheme .semIV .computerhardwareandmaintenance input').remove();

     $('.main .sub .gscheme .semV .operatingsystem input').remove();
     $('.main .sub .gscheme .semV .compuersecurity input').remove();
     $('.main .sub .gscheme .semV .javaprogramming input').remove();
     $('.main .sub .gscheme .semV .softwareengineering input').remove();
     $('.main .sub .gscheme .semV .systemprogramming input').remove();

     $('.main .sub .gscheme .semVI .softwaretesting input').remove();
     $('.main .sub .gscheme .semVI .emeddedsystem input').remove();
     $('.main .sub .gscheme .semVI .advancedmicroprocessor input').remove();
     $('.main .sub .gscheme .semVI .database input').remove();

     $('.main .sub .ischeme .semI .english').remove();
     $('.main .sub .ischeme .semI .basicscience').remove();
     $('.main .sub .ischeme .semI .basicmathematics').remove();

     $('.main .sub .ischeme .semII .basicelectronics').remove();
     $('.main .sub .ischeme .semII .programminginc').remove();
     $('.main .sub .ischeme .semII .appliedmathematics').remove();
     $('.main .sub .ischeme .semII .elementsofelectricalengineering').remove();

     
     $('.main .sub .ischeme .semIII .digitaltechniques').remove();
     $('.main .sub .ischeme .semIII .computergraphics').remove();
     $('.main .sub .ischeme .semIII .datastructure').remove();
     $('.main .sub .ischeme .semIII .objectorientedprogramming').remove();
     $('.main .sub .ischeme .semIII .database').remove();

     
     
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

$.hbutton = function(path, value)
{
     $(path).append(`
     <input type = "button" value = "${value}" class = "but large">
     `);     
}
$.mbutton = function(path, value, class1)
{
     $(path).append(`
     <input type = "button" value = "${value}" class = "but small ${class1}">
     `);     
}
$('document').ready(function(){
    
     $.mainpage = function(){
          remove();
          $('.header').hide();

          $('.main').css('margin-top', '7em');

          $.mbutton('.main .scheme .gscheme', scheme[0], year); //G Scheme


          $.mbutton('.main .scheme .ischeme', scheme[1], year); //I Scheme
     } 
     $.mainpage();

     $('.main .scheme .gscheme').click(function(){
          remove();
          $('.header').show();
          val = 1;
          $('.main').css('margin-top', '0em');
          $.hbutton('.header .scheme', 'scheme');
          $.mbutton('.main .sem .semI',sem[0] , year);
          $.mbutton('.main .sem .semII',sem[1], year);
          $.mbutton('.main .sem .semIII',sem[2], year);
          $.mbutton('.main .sem .semIV',sem[3], year);
          $.mbutton('.main .sem .semV',sem[4], year);
          $.mbutton('.main .sem .semVI',sem[5], year);
     }); // onclick: G Scheme

     $('.main .scheme .ischeme').click(function(){
          remove();
          $('.header').show();
          $('.main').css('margin-top', '0em');
          val = 0;
          $.hbutton('.header .scheme', 'Scheme');
          $.mbutton('.main .sem .semI',sem[0], year);
          $.mbutton('.main .sem .semII',sem[1], year);
          $.mbutton('.main .sem .semIII',sem[2], year);
     }); // onclick: I Scheme


     $('.main .sem .semI').click(function(){
          remove();
          $('.header').show();
          $.hbutton('.header .scheme', "Scheme");
          $.hbutton('.header .sem', sem[0],);
          $('.main').css('margin-top', '0em');
          if(val == 1){
               $.mbutton('.main .sub .gscheme .semI .english', gsub.semI[1], subject);
               $.mbutton('.main .sub .gscheme .semI .basicphysics', gsub.semI[2], subject);
               $.mbutton('.main .sub .gscheme .semI .basicchemistry', gsub.semI[3], subject);
               $.mbutton('.main .sub .gscheme .semI .basicmathematics', gsub.semI[4], subject);
          }
          else{
               $.mbutton('.main .sub .ischeme .semI .english', isub.semI[1], subject);
               $.mbutton('.main .sub .ischeme .semI .basicscience', isub.semI[2], subject);
               $.mbutton('.main .sub .ischeme .semI .basicmathematics', isub.semI[3], subject);
          }
     });

});
