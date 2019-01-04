var path,value, class1,val,hsub;


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


     $('.main .sub .gscheme .semIII .digitaltechniques input').remove();
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

     
     
     $('.main .exam .section .s18 a input').remove();
     $('.main .exam .section .s17 a input').remove();
     $('.main .exam .section .s16 a input').remove();
     $('.main .exam .section .s15 a input').remove();
     $('.main .exam .section .w18 a input').remove();
     $('.main .exam .section .w17 a input').remove();
     $('.main .exam .section .w16 a input').remove();
     $('.main .exam .section .w15 a input').remove();
     $('.main .exam .section .w14 a input').remove();

     console.log(`Every html element removed.`);
}





function hbutton(path, value){

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



function gschemeclicked(){

     remove();
     reset();
     val = 1;

     hbutton(".header .scheme", 'Scheme');

     mbutton('.main .sem .semI',   sem[ 0 ], year);
     mbutton('.main .sem .semII',  sem[ 1 ], year);
     mbutton('.main .sem .semIII', sem[ 2 ], year);
     mbutton('.main .sem .semIV',  sem[ 3 ], year);
     mbutton('.main .sem .semV',   sem[ 4 ], year);
     mbutton('.main .sem .semVI',  sem[ 5 ], year);

}


function ischemeclicked(){

     remove();
     reset();
     val = 0;
     
     hbutton('.header .scheme', 'Scheme');
     
     mbutton('.main .sem .semI',   sem[ 0 ], year);
     mbutton('.main .sem .semII',  sem[ 1 ], year);
     mbutton('.main .sem .semIII', sem[ 2 ], year);
     
}

function showexambtn(){

     remove();
     reset();
     hbutton();
     mbutton('.main .exam .section .s18 a', "Summer 2018", year);
     mbutton('.main .exam .section .s17 a', "Summer 2017", year);
     mbutton('.main .exam .section .s16 a', "Summer 2016", year);
     mbutton('.main .exam .section .s15 a', "Summer 2015", year);
     mbutton('.main .exam .section .w18 a', "Winter 2018", year);
     mbutton('.main .exam .section .w17 a', "Winter 2017", year);
     mbutton('.main .exam .section .w16 a', "Winter 2016", year);
     mbutton('.main .exam .section .w15 a', "Winter 2015", year);
     mbutton('.main .exam .section .w14 a', "Winter 2014", year);
     hbutton('.header .scheme', "Scheme");
     hbutton('.header .sem', "Sem");
     hbutton('.header .sub', "Sub");

}


function a(path, link){

     $(path).append(`
          <a href = " ${link} ">
     `);
     
}



$('document').ready(function(){


     function mainpage(){
          console.log(`Page loaded`);
          set();
          mbutton('.main .scheme .gscheme', scheme[ 0 ], year);
          mbutton('.main .scheme .ischeme', scheme[ 1 ], year);         
          
     }
     mainpage();

     $('.header .scheme').click(function(){
          
          remove(); 
          mainpage();

     });

     $('.header .sem').click(function(){

          remove();
          reset();

          if(val == 1){

               gschemeclicked();

          }
          if(val == 0){

               ischemeclicked();
               
          }

     });
     
     $('.main .scheme .gscheme').click(function(){
          gschemeclicked();
          
     });

     $('.main .scheme .ischeme').click(function(){
          ischemeclicked();
          
     });


     $('.main .sem .semI').click(function(){

          remove();
          reset();
          
          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");
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
               mbutton('.main .sub .gscheme .semII .communicationskills',    gsub.semII[ 5 ], subject);
               mbutton('.main .sub .gscheme .semII .engineeringmathematics', gsub.semII[ 6 ], subject);
               
          }
          if(val == 0){

               mbutton('.main .sub .ischeme .semII .basicelectronics',                isub.semII[ 1 ], subject);
               mbutton('.main .sub .ischeme .semII .programminginc',                  isub.semII[ 2 ], subject);
               mbutton('.main .sub .ischeme .semII .appliedmathematics',              isub.semII[ 3 ], subject);
               mbutton('.main .sub .ischeme .semII .elementsofelectricalengineering', isub.semII[ 4 ], subject);
               
          }
          
     });

     $('.main .sem .semIII ').click(function(){

          remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               mbutton('.main .sub .gscheme .semIII .digitaltechniques',    gsub.semIII[ 1 ]);
               mbutton('.main .sub .gscheme .semIII .electricaltechnology', gsub.semIII[ 2 ]);
               mbutton('.main .sub .gscheme .semIII .appliedmathematics',   gsub.semIII[ 3 ]);
               mbutton('.main .sub .gscheme .semIII .datastructure',        gsub.semIII[ 4 ]);
               mbutton('.main .sub .gscheme .semIII .database',             gsub.semIII[ 5 ]);
               
          }
          if(val == 0){

               mbutton('.main .sub .ischeme .semIII .datastructure',             isub.semIII[ 3 ], subject);
               mbutton('.main .sub .ischeme .semIII .digitaltechniques',         isub.semIII[ 1 ], subject);
               mbutton('.main .sub .ischeme .semIII .computergraphics',          isub.semIII[ 2 ], subject);
               mbutton('.main .sub .ischeme .semIII .objectorientedprogramming', isub.semIII[ 4 ], subject);
               mbutton('.main .sub .ischeme .semIII .database',                  isub.semIII[ 5 ], subject);
               
          }
          
     });

     $('.main .sem .semIV').click(function(){

          remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               mbutton('.main .sub .gscheme .semIV .computernetwork',                gsub.semIV[ 1 ]);
               mbutton('.main .sub .gscheme .semIV .objectorientedprogramming',      gsub.semIV[ 2 ]);
               mbutton('.main .sub .gscheme .semIV .microprocessor',                 gsub.semIV[ 3 ]);
               mbutton('.main .sub .gscheme .semIV .computerhardwareandmaintenance', gsub.semIV[ 4 ]);
               
          }
          
     });
     $('.main .sem .semV').click(function(){

          remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               mbutton('.main .sub .gscheme .semV .operatingsystem',     gsub.semV[ 1 ]);
               mbutton('.main .sub .gscheme .semV .compuersecurity',     gsub.semV[ 2 ]);
               mbutton('.main .sub .gscheme .semV .javaprogramming',     gsub.semV[ 3 ]);
               mbutton('.main .sub .gscheme .semV .softwareengineering', gsub.semV[ 4 ]);
               mbutton('.main .sub .gscheme .semV .systemprogramming',   gsub.semV[ 5 ]);
               
          }
          
     });
     $('.main .sem .semVI').click(function(){

          remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               mbutton('.main .sub .gscheme .semVI .softwaretesting',        gsub.semVI[ 1 ], subject);
               mbutton('.main .sub .gscheme .semVI .emeddedsystem',          gsub.semVI[ 2 ], subject);
               mbutton('.main .sub .gscheme .semVI .advancedmicroprocessor', gsub.semVI[ 3 ], subject);
               mbutton('.main .sub .gscheme .semVI .database',               gsub.semVI[ 4 ], subject);
               
          }
          
     });
     // G Scheme SemI
     $('.main .sub .gscheme .semI .english').click(function(){
          remove();
          reset();
          hsub = 1;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semI .basicphysics').click(function(){

          hsub = 2;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semI .basicchemistry').click(function(){

          hsub = 3;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semI .basicmathematics').click(function(){

          hsub = 4;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     // G Scheme SemII
     $('.main .sub .gscheme .semII .appliedphysics').click(function(){

          hsub = 5;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semII .basicelectronics').click(function(){

          hsub = 6;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semII .appliedchemistry').click(function(){

          hsub = 7;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semII .progamminginc').click(function(){

          hsub = 8;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semII .communicationskills').click(function(){

          hsub = 9;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semII .engineeringmathematics').click(function(){

          hsub = 10;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     // G Scheme SemIII
     $('.main .sub .gscheme .semIII .digitaltechniques').click(function(){

          hsub = 11;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semIII .electricaltechnology').click(function(){

          hsub = 12;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semIII .appliedmathematics').click(function(){

          hsub = 13;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semIII .datastructure').click(function(){

          hsub = 14;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semIII .database').click(function(){

          hsub = 15;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     // G Scheme SemIV
     $('.main .sub .gscheme .semIV .computernetwork').click(function(){

          hsub = 16;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semIV .objectorientedprogramming').click(function(){

          hsub = 17;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semIV .microprocessor').click(function(){

          hsub = 18;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semIV .computerhardwareandmaintenance').click(function(){

          hsub = 19;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     // G Scheme semV
     $('.main .sub .gscheme .semV .operatingsystem').click(function(){

          hsub = 20;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semV .compuersecurity').click(function(){

          hsub = 21;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semV .javaprogramming').click(function(){

          hsub = 22;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semV .softwareengineering').click(function(){

          hsub = 23;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semV .systemprogramming').click(function(){

          hsub = 24;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     // G Scheme semVI
     $('.main .sub .gscheme .semVI .softwaretesting').click(function(){

          hsub = 25;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semVI .emeddedsystem').click(function(){

          hsub = 26;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semVI .advancedmicroprocessor').click(function(){

          hsub = 27;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });
     $('.main .sub .gscheme .semVI .database').click(function(){

          hsub = 28;
          a('.main .exam .section .s18', ' link ');
          a('.main .exam .section .s17', ' link ');
          a('.main .exam .section .s16', ' link ');
          a('.main .exam .section .s15', ' link ');
          a('.main .exam .section .w18', ' link ');
          a('.main .exam .section .w17', ' link ');
          a('.main .exam .section .w16', ' link ');
          a('.main .exam .section .w15', ' link ');
          a('.main .exam .section .w14', ' link ');
          showexambtn();

     });

     // $('.header .sub').click(function(){

     //      switch(hsub){

     //           case '1' : 

               
     //      }          

     // });
     

     
     
});