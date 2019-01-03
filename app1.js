var path,value, class1,val;


var btn     = "but";
var small   = "small";
var large   = "large";
var year    = "year";
var subject = "subject";


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



function remove(){
     // header
     $('.header .scheme input').remove();
     $('.header .sem input').remove();
     $('.header .sub input').remove();
     $('br').hide();
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

     $('.main .sub .ischeme .semI .english input').remove();
     $('.main .sub .ischeme .semI .basicscience input').remove();
     $('.main .sub .ischeme .semI .basicmathematics input').remove();

     $('.main .sub .ischeme .semII .basicelectronics input').remove();
     $('.main .sub .ischeme .semII .programminginc input').remove();
     $('.main .sub .ischeme .semII .appliedmathematics input').remove();
     $('.main .sub .ischeme .semII .elementsofelectricalengineering input').remove();

     
     $('.main .sub .ischeme .semIII .digitaltechniques input').remove();
     $('.main .sub .ischeme .semIII .computergraphics input').remove();
     $('.main .sub .ischeme .semIII .datastructure input').remove();
     $('.main .sub .ischeme .semIII .objectorientedprogramming input').remove();
     $('.main .sub .ischeme .semIII .database input').remove();

     
     
     $('main .exam .section .s18 input').remove();
     $('main .exam .section .s17 input').remove();
     $('main .exam .section .s16 input').remove();
     $('main .exam .section .s15 input').remove();
     $('main .exam .section .w18 input').remove();
     $('main .exam .section .w17 input').remove();
     $('main .exam .section .w16 input').remove();
     $('main .exam .section .w15 input').remove();
     $('main .exam .section .w14 input').remove();

     console.log(`Every html element removed.`);
}





function button(path, value){

     $(path).append(`
          <input type = "button" value = "${value}" class = "but large">
     `);     
     console.log(`Button '${value}' added to '${path}'`);

}
function mbutton(path, value, class1){

     $(path).append(`
          <input type = "button" value = "${value}" class = "but small ${class1}"><br>
     `);     
     console.log(`Button '${value}' added to '${path}'`);

}




function set(){

     console.log('.header is hidded.');
     $('.header').css('visibility', 'hidden');
     console.log('.main margin-top : 5em');
     $('.main').css('margin-top', '5em');
     
}
function reset(){

     console.log('.header is now visible.');
     $('.header').css('visibility', 'visible');
     console.log('.main margin-top : 0em');
     $('.main').css('margin-top', '0em');

}






$('document').ready(function(){


     function mainpage(){
          console.log(`Page loaded`);
          set();
          mbutton('.main .scheme .gscheme', scheme[ 0 ], year);
          mbutton('.main .scheme .ischeme', scheme[ 1 ], year);         
          
     }
     mainpage();

     $('.main .scheme .gscheme').click(function(){

          remove();
          reset();
          val = 1;

          button(".header .scheme", 'Scheme');

          mbutton('.main .sem .semI',   sem[ 0 ]);
          mbutton('.main .sem .semII',  sem[ 1 ]);
          mbutton('.main .sem .semIII', sem[ 2 ]);
          mbutton('.main .sem .semIV',  sem[ 3 ]);
          mbutton('.main .sem .semV',   sem[ 4 ]);
          mbutton('.main .sem .semVI',  sem[ 5 ]);

     });

     $('.main .scheme .ischeme').click(function(){

          remove();
          reset();
          val = 0;
          
          button('.header .scheme', 'Scheme');
          
          mbutton('.main .sem .semI', sem[ 0 ], year);
          mbutton('.main .sem .semI', sem[ 1 ], year);
          mbutton('.main .sem .semI', sem[ 2 ], year);
          
     });

     $('.main .sem .semI').click(function(){

          remove();
          reset();
          
          button('.header .scheme', "Scheme");
          button('.header .sem', "Sem");
          if(val == 1){

               mbutton('.main .sub .gscheme .semI .english',          gsub.semI[ 1 ], subject);
               mbutton('.main .sub .gscheme .semI .basicphysics',     gsub.semI[ 2 ], subject);
               mbutton('.main .sub .gscheme .semI .basicchemistry',   gsub.semI[ 3 ], subject);
               mbutton('.main .sub .gscheme .semI .basicmathematics', gsub.semI[ 4 ], subject);
               
          }
          if(val == 0){
               
               mbutton('.main .sub .ischeme .semI .english',          isub.semI[ 1 ], subject);
               mbutton('.main .sub .ischeme .semI .basicscience',     isub.semI[ 2 ], subject);
               mbutton('.main .sub .ischeme .semI .basicmathematics', isub.semI[ 3 ], subject);

          }
          
     });

     $('.main .sem .semII').click(function(){

          remove();
          reset();

          hbutton('.header .scheme', 'Scheme');
          hbutton('.header .sem', 'Sem');
          if(val == 1){

               mbutton('.main .sub .gscheme .semII .appliedphysics',         gsub.semII[ 1 ], subject);
               mbutton('.main .sub .gscheme .semII .progamminginc',          gsub.semII[ 2 ], subject);
               mbutton('.main .sub .gscheme .semII .basicelectronics',       gsub.semII[ 3 ], subject);
               mbutton('.main .sub .gscheme .semII .appliedchemistry',       gsub.semII[ 4 ], subject);
               mbutton('.main .sub .gscheme .semII .communicationskills',    gsub.semII[ 4 ], subject);
               mbutton('.main .sub .gscheme .semII .engineeringmathematics', gsub.semII[ 4 ], subject);
               
          }
          if(val == 0){

               mbutton('.main .sub .ischeme .semII .basicelectronics',                gsub.semII[ 1 ], subject);
               mbutton('.main .sub .ischeme .semII .programminginc',                  gsub.semII[ 2 ], subject);
               mbutton('.main .sub .ischeme .semII .appliedmathematics',              gsub.semII[ 3 ], subject);
               mbutton('.main .sub .ischeme .semII .elementsofelectricalengineering', gsub.semII[ 4 ], subject);
               
          }
          
     });
     
     
     
});