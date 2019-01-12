var path,value, class1,val,hsub,fbtn1;
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
     $('.main .exam .section .s18 a').remove();
     $('.main .exam .section .s17 a').remove();
     $('.main .exam .section .s16 a').remove();
     $('.main .exam .section .s15 a').remove();
     $('.main .exam .section .w18 a').remove();
     $('.main .exam .section .w17 a').remove();
     $('.main .exam .section .w16 a').remove();
     $('.main .exam .section .w15 a').remove();
     $('.main .exam .section .w14 a').remove();

     console.log(`Every html element removed.`);
} // Remove all the elements.

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





function showbtn(){

     mbutton('.main .exam .section .s18 a','Summer 2018', year );
     mbutton('.main .exam .section .s17 a','Summer 2017', year );
     mbutton('.main .exam .section .s16 a','Summer 2016', year );
     mbutton('.main .exam .section .s15 a','Summer 2015', year );
     mbutton('.main .exam .section .w18 a','Winter 2018', year );
     mbutton('.main .exam .section .w17 a','Winter 2017', year );
     mbutton('.main .exam .section .w16 a','Winter 2016', year );
     mbutton('.main .exam .section .w15 a','Winter 2015', year );
     mbutton('.main .exam .section .w14 a','Winter 2014', year );
     
}

function addlink(path, link){

     $(path).append(`
          <a href = " ${link} " target = "_blank">
     `);
     
}



function link(l1, l2, l3, l4, l5, l6, l7, l8, l9){


     addlink('.main .exam .section .w18', l1);
     addlink('.main .exam .section .s18', l2);
     addlink('.main .exam .section .w17', l3);
     addlink('.main .exam .section .s17', l4);
     addlink('.main .exam .section .w16', l5);
     addlink('.main .exam .section .s16', l6);
     addlink('.main .exam .section .w15', l7);
     addlink('.main .exam .section .s15', l8);
     addlink('.main .exam .section .w14', l9);

     
}

function hoyear(){

     hbutton('.header .scheme', "Scheme");
     hbutton('.header .sem', "Sem");
     hbutton('.header .sub', "Sub");
     
}

function ischemebtn(){

     
     $('.main .exam .section .s17 a input').remove();
     $('.main .exam .section .s16 a input').remove();
     $('.main .exam .section .s15 a input').remove();
     $('.main .exam .section .w18 a input').remove();
     $('.main .exam .section .w17 a input').remove();
     $('.main .exam .section .w16 a input').remove();
     $('.main .exam .section .w15 a input').remove();
     $('.main .exam .section .w14 a input').remove();
     $('.main .exam .section .s17 a').remove();
     $('.main .exam .section .s16 a').remove();
     $('.main .exam .section .s15 a').remove();
     $('.main .exam .section .w18 a').remove();
     $('.main .exam .section .w17 a').remove();
     $('.main .exam .section .w16 a').remove();
     $('.main .exam .section .w15 a').remove();
     $('.main .exam .section .w14 a').remove();
     
}

// Main Functions
var load = 0;
function mainpage(){
     load += 1;
     if(load == 1){

          console.log(`Page loaded`);
          
     }
     remove();
     set();
     mbutton('.main .scheme .gscheme', scheme[ 0 ], year);
     mbutton('.main .scheme .ischeme', scheme[ 1 ], year);         
     
}
// header function
function hscheme(){

     remove(); 
     mainpage();
     console.log('Clicked on Scheme');

}
function hsem(){

     
     remove();
     reset();

     if(val == 1){

          mscheme.g();

     }
     if(val == 0){

          mscheme.i();
          
     }
     
}
function hsub(){

     
     remove();
     reset();
     
     hbutton('.header .scheme', "Scheme");
     hbutton('.header .sem', "Sem");
     switch(hsub){

          case 1: 
               msem.I();
          break;
          case 2:
               msem.II();
          break;
          case 3:
               msem.III();
          break;
          case 4:
               msem.IV();
          break;
          case 5:
               msem.V();
          break;
          case 6:
               msem.VI();
          break;
     }
     
}
var mscheme= {
     g : function(){

          remove();
          reset();
          val = 1;
          fbtn1 = 1;
          hbutton(".header .scheme", 'Scheme');

          mbutton('.main .sem .semI',   sem[ 0 ], year);
          mbutton('.main .sem .semII',  sem[ 1 ], year);
          mbutton('.main .sem .semIII', sem[ 2 ], year);
          mbutton('.main .sem .semIV',  sem[ 3 ], year);
          mbutton('.main .sem .semV',   sem[ 4 ], year);
          mbutton('.main .sem .semVI',  sem[ 5 ], year);
  
     },
     i : function(){

          remove();
          reset();
          val = 0;
          fbtn1 = 1; 
          hbutton('.header .scheme', 'Scheme');
          mbutton('.main .sem .semI',   sem[ 0 ], year);
          mbutton('.main .sem .semII',  sem[ 1 ], year);
          mbutton('.main .sem .semIII', sem[ 2 ], year);
          
     }
}
var msem = {

     I : function(){

          hsub = 1;
          remove();
          reset();
          
          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");
          if(val == 1){
               fbtn1 = 2;
               mbutton('.main .sub .gscheme .semI .english',          gsub.semI[ 1 ], subject);
               mbutton('.main .sub .gscheme .semI .basicphysics',     gsub.semI[ 2 ], subject);
               mbutton('.main .sub .gscheme .semI .basicchemistry',   gsub.semI[ 3 ], subject);
               mbutton('.main .sub .gscheme .semI .basicmathematics', gsub.semI[ 4 ], subject);
               
          }
          if(val == 0){
               fbtn1 = 3;
               mbutton('.main .sub .ischeme .semI .english',          isub.semI[ 1 ], subject);
               mbutton('.main .sub .ischeme .semI .basicscience',     isub.semI[ 2 ], subject);
               mbutton('.main .sub .ischeme .semI .basicmathematics', isub.semI[ 3 ], subject);

          }
          
     },
     II : function(){

               hsub = 2;
               remove();
          reset();

          hbutton('.header .scheme', 'Scheme');
          hbutton('.header .sem', 'Sem');
          if(val == 1){

               fbtn1 = 2;
               mbutton('.main .sub .gscheme .semII .appliedphysics',         gsub.semII[ 1 ], subject);
               mbutton('.main .sub .gscheme .semII .progamminginc',          gsub.semII[ 2 ], subject);
               mbutton('.main .sub .gscheme .semII .basicelectronics',       gsub.semII[ 3 ], subject);
               mbutton('.main .sub .gscheme .semII .appliedchemistry',       gsub.semII[ 4 ], subject);
               mbutton('.main .sub .gscheme .semII .communicationskills',    gsub.semII[ 5 ], subject);
               mbutton('.main .sub .gscheme .semII .engineeringmathematics', gsub.semII[ 6 ], subject);
               
          }
          if(val == 0){

               fbtn1 = 3;
               mbutton('.main .sub .ischeme .semII .basicelectronics',                isub.semII[ 1 ], subject);
               mbutton('.main .sub .ischeme .semII .programminginc',                  isub.semII[ 2 ], subject);
               mbutton('.main .sub .ischeme .semII .appliedmathematics',              isub.semII[ 3 ], subject);
               mbutton('.main .sub .ischeme .semII .elementsofelectricalengineering', isub.semII[ 4 ], subject);
               
          }
          
     },
     III : function(){

               hsub = 3;
               remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               fbtn1 = 2;
               mbutton('.main .sub .gscheme .semIII .digitaltechniques',    gsub.semIII[ 1 ]);
               mbutton('.main .sub .gscheme .semIII .electricaltechnology', gsub.semIII[ 2 ]);
               mbutton('.main .sub .gscheme .semIII .appliedmathematics',   gsub.semIII[ 3 ]);
               mbutton('.main .sub .gscheme .semIII .datastructure',        gsub.semIII[ 4 ]);
               mbutton('.main .sub .gscheme .semIII .database',             gsub.semIII[ 5 ]);
               
          }
          if(val == 0){

               fbtn1 = 3;
               mbutton('.main .sub .ischeme .semIII .datastructure',             isub.semIII[ 3 ], subject);
               mbutton('.main .sub .ischeme .semIII .digitaltechniques',         isub.semIII[ 1 ], subject);
               mbutton('.main .sub .ischeme .semIII .computergraphics',          isub.semIII[ 2 ], subject);
               mbutton('.main .sub .ischeme .semIII .objectorientedprogramming', isub.semIII[ 4 ], subject);
               mbutton('.main .sub .ischeme .semIII .database',                  isub.semIII[ 5 ], subject);
               
          }
          
     },
     IV : function(){

               hsub = 4;
               remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               fbtn1 = 2;
               mbutton('.main .sub .gscheme .semIV .computernetwork',                gsub.semIV[ 1 ]);
               mbutton('.main .sub .gscheme .semIV .objectorientedprogramming',      gsub.semIV[ 2 ]);
               mbutton('.main .sub .gscheme .semIV .microprocessor',                 gsub.semIV[ 3 ]);
               mbutton('.main .sub .gscheme .semIV .computerhardwareandmaintenance', gsub.semIV[ 4 ]);
               
          }
          
     },
     V : function(){

               hsub = 5;
               remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               fbtn1 = 2;
               mbutton('.main .sub .gscheme .semV .operatingsystem',     gsub.semV[ 1 ]);
               mbutton('.main .sub .gscheme .semV .compuersecurity',     gsub.semV[ 2 ]);
               mbutton('.main .sub .gscheme .semV .javaprogramming',     gsub.semV[ 3 ]);
               mbutton('.main .sub .gscheme .semV .softwareengineering', gsub.semV[ 4 ]);
               mbutton('.main .sub .gscheme .semV .systemprogramming',   gsub.semV[ 5 ]);
               
          }
          
     },
     VI : function(){

               hsub = 6;
               remove();
          reset();

          hbutton('.header .scheme', "Scheme");
          hbutton('.header .sem', "Sem");

          if(val == 1){

               fbtn1 = 2;
               mbutton('.main .sub .gscheme .semVI .softwaretesting',        gsub.semVI[ 1 ], subject);
               mbutton('.main .sub .gscheme .semVI .emeddedsystem',          gsub.semVI[ 2 ], subject);
               mbutton('.main .sub .gscheme .semVI .advancedmicroprocessor', gsub.semVI[ 3 ], subject);
               mbutton('.main .sub .gscheme .semVI .database',               gsub.semVI[ 4 ], subject);
               
          }
          
     }
     
}

var msub = {

     g : {

          semI : {

               english : function(){

                    fbtn1 = 4;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1WwGiJKzR_vqbP7Rmp_Z_PjZVPZfEyE91',
                         'https://drive.google.com/open?id=1VWgYDzevUC1NwFg_x6pVRHQs4rtJbK1p',
                         'https://drive.google.com/open?id=1kMC1Xxm__53vxAWzZSFagf3Xjxh1alu6',
                         'https://drive.google.com/open?id=1TGLJL90vI6hqjkAgupYM5H-m4kV_8qXm',
                         'https://drive.google.com/open?id=1ts5UBOdNmQCoC6J5Q1RR_hgpP8Ymsily',
                         'https://drive.google.com/open?id=1CooirgsafrMUrIm7dKrZljgg-HlT2e6G',
                         'https://drive.google.com/open?id=11I_cX3KZQAjblo9yWbWXFp7l2hduDzWh',
                         'https://drive.google.com/open?id=1NtsZyFCXEV6XLfBzcR_n3Vk3V0f7JYi7'
                    );
                    showbtn();

               },
               basicphysics : function(){

                    fbtn1 = 4;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1rFDJxg6I17xWZUR8y7zrxTIpvYRjhVgC',
                         'https://drive.google.com/open?id=1wUH70Lmli-xXwA-fKG8VeRWIhQ1BDmmp',
                         'https://drive.google.com/open?id=18CPRkrSSlcU1UHmof6PP3vmLxxOoBS0u',
                         'https://drive.google.com/open?id=1nNz1V9oOm4VamVvwhArhgQzGcWcrl7MJ',
                         'https://drive.google.com/open?id=1TVKp7imJaIQDAGJWlkD5ya9E4voLyXtb',
                         'https://drive.google.com/open?id=1EiABxRHvPZda-lNf7TG2RBF_tKXEyg4d',
                         'https://drive.google.com/open?id=1KvXxklrAk_7xu9zy6OZKFGpu3ub58B8N',
                         'https://drive.google.com/open?id=152YRzlkS966gIWgv5kjvG6aoTbzddOhJ'
                    );
                    showbtn();
                    
               },
               basicchemistry : function(){

                    fbtn1 = 4;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1fw5aMYVfF2SwqKUHhORUuNFMJmPmNgox',
                         'https://drive.google.com/open?id=1odRl1KW5qZpUnQTfcEiYQWuGtdCer_e8',
                         'https://drive.google.com/open?id=1kHQYr0aSIyYxlb12YChclz9jR1t-EWB5',
                         'https://drive.google.com/open?id=11eHoI209j11dtLwlRrXWxYqjlpwk5kv0',
                         'https://drive.google.com/open?id=1EifZkxAQ1hVdAdm1Yhm8whU2QzjwJqYQ',
                         'https://drive.google.com/open?id=1Jr5EFkuNjBDZZQR-vrOzJdjuFKww5lyE',
                         'https://drive.google.com/open?id=16eevGSCm2vUAN_MEx3oqyMxqh841zQn0',
                         'https://drive.google.com/open?id=19ffQ2_F64kiKdvLNReYevrZXLTXnHy-t'
                    );
                    showbtn();
                    
               },
               basicmathematics : function(){
                    
                    fbtn1 = 4;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1hvfhBMbS7iTyMa68ipo-zrl_pMIOYJuE',
                         'https://drive.google.com/open?id=15AMZX7phVCeHB98GKlmpjdddv5FtuRKr',
                         'https://drive.google.com/open?id=1xSyGewBgyh6UJbFBtZxqSWpXizY1DaNt',
                         'https://drive.google.com/open?id=15NfR9v-0kNGG3-b5cPoQDSBjP5oblhWt',
                         'https://drive.google.com/open?id=1PMJnWcqZEKFSo18D8fNb3E4bKh6Urf3J',
                         'https://drive.google.com/open?id=1sX7Gk4E4WGLFRWck3yC9_blZ3PihFko5',
                         'https://drive.google.com/open?id=11MjMtIha6ExgmMQiik4DlU9l9EBKGwT0',
                         'https://drive.google.com/open?id=1ReDm8hfiOZl5lXfhRvYHcw452-gWu4pa'
                    );
                    showbtn();
                    
               },
               
          },
          semII : {
               
               appliedphysics : function(){

                    fbtn1 = 5;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1OTkSmKOKf_gabHDj1YsXRHvhLnnXO4rO',
                         'https://drive.google.com/open?id=1my3WWCAYFgEK6KSHwwF4oJW0M6A1T1pG',
                         'https://drive.google.com/open?id=1VjHTgc6GOVe_oh0QJ-mWjhXxjQ51bA8c',
                         'https://drive.google.com/open?id=1t8WraV4yl8l4nf_S9iBkNwq1ct51I9Xk',
                         'https://drive.google.com/open?id=1mxGj_o-ERp4MpSFgf1FPawwR5DVTzr0h',
                         'https://drive.google.com/open?id=1Z-6m0uHEBsfjvfEzA5j46TzMJdgiOlxe',
                         'https://drive.google.com/open?id=1eorVvS7oXecS8pad9A7ZUJo6pDoGTKi0',
                         'https://drive.google.com/open?id=1ryFsnKMPRp-t5bw4p_2aL0mChC2BYfui'
                    );
                    showbtn();
                    
               },
               appliedchemistry : function(){

                    fbtn1 = 5;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1xz7jcZ7eG5n7CGeRqCihLiRpgojN4Xkp',
                         'https://drive.google.com/open?id=1Qh0FLc-DncH3M17XemIIkCVVrWpbYUez',
                         'https://drive.google.com/open?id=1ZT4VbNJ4Kpe68fgjnuregCcGz2iuqR_S',
                         'https://drive.google.com/open?id=1ZZND0jug2JHt7lAGCKbkLgXVnn8RURfq',
                         'https://drive.google.com/open?id=13zvhtGF6-o0d6Z03j3HXImUw_y2eniug',
                         'https://drive.google.com/open?id=1eTc3jspegywgeb9zE4aIhbuwiM_m-Fy0',
                         'https://drive.google.com/open?id=1COU-6XBJWi85jKxZIQYEZu-Mgqyo8GxD',
                         'https://drive.google.com/open?id=1oN3-aK_cd3t7ojj6bfEcrXSvsDe2cgP0'
                    );
                    showbtn();

               },
               basicelectronics : function(){

                    fbtn1 = 5;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1GfVy7LTU3z9j9eSdZmLwU7wQ7vMfs2gP',
                         'https://drive.google.com/open?id=1CzJLtfDvN9x_ixs7fq45k8w2-w1LeoMH',
                         'https://drive.google.com/open?id=1o-rhgpihIl9lUsVrnZpnxv8UhndDYmX_',
                         'https://drive.google.com/open?id=1GFTYdn9tE9vfxGAScxdyNLgMu2qwBJjn',
                         'https://drive.google.com/open?id=1yDs3DiemDSAYOylIfmBX2Y8QVN29XAbP',
                         'https://drive.google.com/open?id=1CazADCAfllox7SxyG8lZ0SmUYElotnsV',
                         'https://drive.google.com/open?id=1ED9pqhx94UkcDVobLPZmYxfo_OdHiLu8',
                         'https://drive.google.com/open?id=1rPLu_J5hnS51qfnBjqK0eXW3QE5NcZm2'
                    );
                    showbtn();
                    
               },
               progamminginc : function(){

                    fbtn1 = 5;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1B7cBp1LRAZ7Ch_k_gHrR4eoUSQOxYKXw',
                         'https://drive.google.com/open?id=1ppQk5I9EXgZTmp5x9x8-Dg2rYNcGvvZR',
                         'https://drive.google.com/open?id=1p6zMWdlbbhRBO7v2Cc_5cc8LegcUiIwS',
                         'https://drive.google.com/open?id=1GV8KnsVQfkdNYyIwdUmi5AHxRHV9llze',
                         'https://drive.google.com/open?id=1UJReYs-0T-1FK_GU6gJ7fXpLB7lSrOax',
                         'https://drive.google.com/open?id=1Y2ih-Yz-GPK-zN8RMX2fBiws6wlnOEXf',
                         'https://drive.google.com/open?id=1LXuETuhd0J7bTklGjSTm7y2r3TEWpt-7',
                         'https://drive.google.com/open?id=1rhOOvcmnr2NAaSe1ocZkNAlqOsJlQaDm'
                    );
                    showbtn();
                    
               },
               communicationskills : function(){

                    fbtn1 = 5;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1DjnzHIx4VF86onO8be-dDmX6rl_2eeEI',
                         'https://drive.google.com/open?id=1ylvzZDJ3ID3KRt3KfDMHBCdrkLHKA9Nb',
                         'https://drive.google.com/open?id=17fnz33lpQrvKaBhdnrC5yzXimqElgZ_J',
                         'https://drive.google.com/open?id=1hdTL8d2C3itjYKrIOOGUvM6TYuPLRMhr',
                         'https://drive.google.com/open?id=19h8aKZ6ocIDbEBJQtFQh2EY8eAtuMg--',
                         'https://drive.google.com/open?id=1Dt_DNo0Si8AAaLRXyJu7PV-BA6ZtxFv6',
                         'https://drive.google.com/open?id=10y2wjR7shkMlFosoIknTADYlvYNm4WvD',
                         'https://drive.google.com/open?id=1GpjcTZyfprsN84-CLsWGC3chYjxAnhqs'
                    );
                    showbtn();
                    
               },
               engineeringmathematics : function(){

                    fbtn1 = 5;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1hFoI4_eG0BqsC69IawyAVv6K7mzw5I4e',
                         'https://drive.google.com/open?id=1FPGGydS1d8PKAp8zLxrlaTgI3FpUrQqt',
                         'https://drive.google.com/open?id=1A-n_CjaUEtHmShaRHbvy1E2Vk0ODMd2x',
                         'https://drive.google.com/open?id=1oVJJTAh5h5EmAI10SDK19zhd2fiTvffh',
                         'https://drive.google.com/open?id=1RO0DzNIkugDjIOOrj2aJ6yoBZhU56tJF',
                         'https://drive.google.com/open?id=18L1bjv1LjfcRXbW0ShuyieercVvnqovV',
                         'https://drive.google.com/open?id=14w5gEgoMlWi8smDel4f7tpLM3yajW8m2',
                         'https://drive.google.com/open?id=1rztLhaXRvwlnplQAQ7FP3FQck_bDUGIg'
                    );
                    showbtn();
                    
               },
               
          },
          semIII : {

               digitaltechniques : function(){

                    fbtn1 = 6;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1ryopcLeMmmA0AkTlyJKmcRWPTgLOLHQl',
                         'https://drive.google.com/open?id=1WMqDINot688BD3a6EYNC7_2bOcyOQ9IO',
                         'https://drive.google.com/open?id=1IRujfZa9zlUOnUbm_8kAqaHv_JjC-Vg7',
                         'https://drive.google.com/open?id=1cKtdxC487zBgiOZ_jmil-HkDvgVe5fPS',
                         'https://drive.google.com/open?id=1aCpxzxKXC5TJNP2VROwS7iVVdbRePRW5',
                         'https://drive.google.com/open?id=1T8fDLMtth_vI3fnH7aRs1qvdh0ugGBhx',
                         'https://drive.google.com/open?id=1Rw58c_UwqgWee1dBcH7hvn8520Tfs6pi',
                         'https://drive.google.com/open?id=1UTMfHrE0gztXKmmc4kSswKI7Kpvggjdy'
                    );
                    showbtn();
                    
               },
               electricaltechnology : function(){

                    fbtn1 = 6;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1D_Lb86vVjbGazj__7CPc1ahQTkufcXNL',
                         'https://drive.google.com/open?id=1Q7KyNu4YU4VanaJlwKBnTusEc0csmtdd',
                         'https://drive.google.com/open?id=1UjAexo_MeAfpApoQkZa0Ew5BaWWU2j9O',
                         'https://drive.google.com/open?id=1NpCNwbQyFRVvu3_Y7RuGsVQPDyBGS0E1',
                         'https://drive.google.com/open?id=1YNbxloFvAjTh4KJsVHhVxSgQ_bXPVYep',
                         'https://drive.google.com/open?id=1cdC8Xzu21FwlQcfEQcLKaBShP9fD25ho',
                         'https://drive.google.com/open?id=11sMqOzrOHOJBGYj23Y7yelgydVOEUg-u',
                         'https://drive.google.com/open?id=1ZTPPPjwzuhOJgjC1SKptPu-VS_dnKUml'
                    );
                    showbtn();
                    
               },
               appliedmathematics : function(){

                    fbtn1 = 6;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1rI049fDz7PLHwYraDXwYYqURj_vFob6h',
                         'https://drive.google.com/open?id=1XHVKuoG0DUqpyoP-OBtLnbByX8b4RIZJ',
                         'https://drive.google.com/open?id=1IN8gXaK2fmzuR-k51wd-0vTYInUCG8k5',
                         'https://drive.google.com/open?id=1J79iuVzQyoFndXS9-pKo1LIM2jA9b3o2',
                         'https://drive.google.com/open?id=1K9z-42G9j0dBQgJDpMz2_vuCZ8wNTEjM',
                         'https://drive.google.com/open?id=1MR2jUn8VSailKOlzodMRAVpjuUOS3hIk',
                         'https://drive.google.com/open?id=1SdaYQNl57EGGtNoAO-xxB1rqLl1VyfnP',
                         'https://drive.google.com/open?id=1xjHajw6PoYoherv97pqwxEVGKGnyGkgl',

                    );
                    showbtn();
                    
               },
               datastructure : function(){

                    fbtn1 = 6;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1BRTXbgVpUu1vgoC762xn3J7HL1YlJXlh',
                         'https://drive.google.com/open?id=1uKN8Uwlh_dKBKQQPHzrbYLayT_J2ZhO6',
                         'https://drive.google.com/open?id=1qiknsbC2-EjY5blS4YC-ZfVWhWZsAl61',
                         'https://drive.google.com/open?id=169M4-DRCYh_0Gq8iLCkcBT2LYlaDaz-x',
                         'https://drive.google.com/open?id=1YVNMKT45hD9JGPIRf5guVJevIVtsd9uW',
                         'https://drive.google.com/open?id=1PWwh_r5yF5n63aP6jKyXMpGCQAT00U-3',
                         'https://drive.google.com/open?id=1yOMWeRkpR7CYYJ0l658I_fI6JpALaw0n',
                         'https://drive.google.com/open?id=1yqB0AQYjO4LXdQD9dt-v8IpWjLuJshRMhttps://drive.google.com/open?id=1ZA_pU9SlMbhBlO-Jfy2pZepsTvTTmjmH'
                    );
                    showbtn();
                    
               },
               database : function(){

                    fbtn1 = 6;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1ZA_pU9SlMbhBlO-Jfy2pZepsTvTTmjmH',
                         'https://drive.google.com/open?id=1mZPYzZlsFQQqZ9cdcJNV8MuTDKAkFR5R',
                         'https://drive.google.com/open?id=1JUY2A0nF0TtqCcYWKSE4poUt7NM1fDFm',
                         'https://drive.google.com/open?id=1BFNaANuvIzoAGRjWucuw_HOrTgFc87bz',
                         'https://drive.google.com/open?id=1KCKvAo2QcnWnCSsNZrjH7SjIrQ1QIM04',
                         './Apology.html',
                         './Apology.html',
                         './Apology.html'
                    );
                    showbtn();
                    
               }
               
          },
          semIV : {

               computernetwork : function(){

                    fbtn1 = 7;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1yVK162OWukmRIpwSVV-k337PQ_Tz5atW',
                         'https://drive.google.com/open?id=18xf0Qnhn2dtN3Qcuob6hhkUULEx6b6oj',
                         'https://drive.google.com/open?id=1Y64SiBf5ItYi7umyVxveD02vX5BOwpFt',
                         'https://drive.google.com/open?id=1SS-XIcndUPlbpJO4qZx6TfyZNbFeeC_r',
                         'https://drive.google.com/open?id=10W4g44ws7uYh4UX9NhxMNeP7cibBmWGK',
                         'https://drive.google.com/open?id=1cAO2bjj4gk_dDkEHdkdf5UGyz7tDnlfz',
                         'https://drive.google.com/open?id=1kufEwgNXJnGcdOC8GKowU33twAZzwUAl',
                         'https://drive.google.com/open?id=1d0WculumxhiEbUYpsBsjPf8IG9WmhEKm'
                    );
                    showbtn();
                    
               },
               objectorientedprogramming : function(){

                    fbtn1 = 7;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1juYuu2vRhZy5aCnyjDBFWj3NMva5x649',
                         'https://drive.google.com/open?id=12H6DHZNlLwwldTerigqYBEBn4_BH3k3H',
                         'https://drive.google.com/open?id=1Nw2dKvrQedDLdH2QLi6IDtY5xD4o6TtT',
                         'https://drive.google.com/open?id=1AW4yRS2yX4qPVlcW83d5bAmgNtuuBsmM',
                         'https://drive.google.com/open?id=17zv15kz8HscVuutxmSy3WSpZ1uJkh2ky',
                         'https://drive.google.com/open?id=1Y6yUgmtdoi10DdbwQ8S_zdfVeEyA8VEy',
                         'https://drive.google.com/open?id=1YRucum_fF4V3G4dSIZ4zRsHj9-hnGxtc',
                         'https://drive.google.com/open?id=11_HTezR5_ZMgsbsaipsqqfgEE3pmbjsB'
                    );
                    showbtn();
                    
               },
               microprocessor : function(){

                    fbtn1 = 7;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1F2_WYYoKZGaVqh81-gUONHF1h0vBnsNP',
                         'https://drive.google.com/open?id=1htw7QFpOLeIrqekejtFNFjd5rllHYSbZ',
                         'https://drive.google.com/open?id=14q2vK2wzEn-jJ5WM1rsax_FFHFSKTVSd',
                         'https://drive.google.com/open?id=1mlnJjwCjsG_c2se21MtDSG0lx3aXsHv3',
                         'https://drive.google.com/open?id=1HphDqZaaltbA-FaNA2VwLP9yuAivERHv',
                         'https://drive.google.com/open?id=1z8ICdMItcXIs4GtJfjr37Tm7tKkNllwn',
                         'https://drive.google.com/open?id=1dtvwl-vB24JO-8jSxGaGQqUPu2XWkVkJ',
                         'https://drive.google.com/open?id=1TR5u-isG3Lh5abyQN1edBu8MTAkkUZSK'
                    );
                    showbtn();
                    
               },
               computerhardwareandmaintenance : function(){

                    fbtn1 = 7;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1KKkLgYk_qvPT6JSHcapiAXT1fDCsJfdh',
                         'https://drive.google.com/open?id=1qBaIlLyCEdtzvanNOLzDMP1Ev6fuMZi-',
                         'https://drive.google.com/open?id=1qZwtFrTRnpe0wcV-zzggL0ioBEOcQqn3',
                         'https://drive.google.com/open?id=10FpnFe5pm3zFMmXVrJvF-j54U4S55ufp',
                         'https://drive.google.com/open?id=1y4_fpAtgZJjKz9T-GEUaCiwo-ct6Pjgu',
                         'https://drive.google.com/open?id=1S6ubSaAsi_2wt_zveONgyf4GxIXNulfT',
                         'https://drive.google.com/open?id=1CBPFPFYb55CAJ8y4-Z8wIY3rQpusejCF',
                         'https://drive.google.com/open?id=1QtG-lHV-T31JdLl_3O_9n-ZZnt3qQ4u5'
                    );
                    showbtn();
                    
               }
               
          },
          semV : {

               operatingsystem : function(){

                    fbtn1 = 8;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=16-gVJmHD3yEj9eHnTd70XZ1hIaNCo-RW',
                         'https://drive.google.com/open?id=1vrCVaqmIa5heDFiAfiuO_tH_XFQrBXRI',
                         'https://drive.google.com/open?id=1Cww72fKysu6zMDjAOhMPWt63EY-GZMid',
                         'https://drive.google.com/open?id=17NE41B0f_bF25H3ORH-_o4lBIIwQEPQ6',
                         'https://drive.google.com/open?id=1nrB06EspNIGQzxLLYo6LMCuvaq46OFLd',
                         'https://drive.google.com/open?id=1wbMqONbQYK2BHUL6sLNsrYFEKKmKWSUb',
                         'https://drive.google.com/open?id=1Wse5o-ADgr6teBBvgPWNkbxNT4qegaSm',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               compuersecurity : function(){

                    fbtn1 = 8;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1S6jgFCOs9M4jWIgR6A-D0FEb3F2IDNla',
                         'https://drive.google.com/open?id=1-lqAGD1dVHsOMo2uSqJhH3jN3oBB2pHb',
                         'https://drive.google.com/open?id=1mX3h7S8zLlWZ5pHgfTwsqoNAJ8kiJCJ1',
                         'https://drive.google.com/open?id=1JWZwhaK2jT0rEXUIgldJkRUV4HAc64Nf',
                         'https://drive.google.com/open?id=1gBvfMMCkYyA3QVITj5-IuFlbUKdaqWFD',
                         'https://drive.google.com/open?id=1Ah8MRoa8NMVNb6vrA_APTo9LVxOF7Gic',
                         'https://drive.google.com/open?id=1AteNcJL6_OyInWdSd7U8-tp4I9qeEjch',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               javaprogramming : function(){

                    fbtn1 = 8;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1_a71_CfR9RH_LggG1ZTzCVKyfKf6HNyu',
                         'https://drive.google.com/open?id=1Dedcmc9FYr99Oamaqn0QnH607D-nnud_',
                         'https://drive.google.com/open?id=1C8JOvrt7vNHNVq5zmwDuyrjPwZdl5Jfv',
                         'https://drive.google.com/open?id=1XjfUz9raSTAzgwRnbkClR53RXmdYccyT',
                         'https://drive.google.com/open?id=12pnTj7-GlpQbwK_W53KJwlvx8P6z1UIv',
                         'https://drive.google.com/open?id=1Rvoio9rJImOVvEUszj71fGgIo_OUXo_k',
                         'https://drive.google.com/open?id=1SOXJ17polJDOowDFO9mke4JSX3MQq_Iz',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               softwareengineering : function(){

                    fbtn1 = 8;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1lwFobyoU6RIrlSth1B2fMePfgN2nfWuH',
                         'https://drive.google.com/open?id=1HmN6XA8-5nG8EGwYGFkduUZ_Om1GR9Zu',
                         'https://drive.google.com/open?id=1kfid8FeUrZR_JawHO8_h0vsZoQBpu1Yz',
                         'https://drive.google.com/open?id=1zfwqPNKx8iO-UPkoErSnPKW9LoUb7Wrn',
                         'https://drive.google.com/open?id=1Aamkg8E24Buvj1vCHUaUDVZ_xztVH0AF',
                         'https://drive.google.com/open?id=1n5QD-1NTdr7dztUGNvNhzAUX8XHOjSBN',
                         'https://drive.google.com/open?id=133AdlHAulQKCRdoX3O2J-fo3WbE_WrbL',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               systemprogramming : function(){

                    fbtn1 = 8;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1bfpvwwoW1qAdhp5Q3QtC3oSRFz0jhGCo',
                         'https://drive.google.com/open?id=1tMu3djzHYJDGy1ELF8KEtx4B17CMnoes',
                         'https://drive.google.com/open?id=1TiETWE0VioisOER38g3uqkJt9V5oVroM',
                         'https://drive.google.com/open?id=1d2PCdZj-C7J_FgRGJZAsouL9ftAf6CUs',
                         'https://drive.google.com/open?id=1nY0Lo-ZufN2GKVEsjHKESZtQfEJQm5nn',
                         'https://drive.google.com/open?id=1BJWQ-YF-hkCApO3UcQ-w5gZSFzR55T3-',
                         'https://drive.google.com/open?id=1ALeETHDebx040dLWXaniiveeMyNr1RU9',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               
          },
          semVI : {

               softwaretesting : function(){

                    fbtn1 = 9;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1LFDxIeK8gb0kDOkhpdH1m5jX4QKnOIOo',
                         'https://drive.google.com/open?id=1CR_cMXZwgyyxh5Q5OQo7fxnFoLUuAoCO',
                         'https://drive.google.com/open?id=1G0kwmRud7w0ntPeFq5T71OjMCSygx4lX',
                         'https://drive.google.com/open?id=1EbLVZJQ_41HBeDwthPe6Zan7DKdb5d-V',
                         'https://drive.google.com/open?id=1sTY3n0uNAiCL8wAZ9vYhy7ejOAJLUr8J',
                         'https://drive.google.com/open?id=1rMonUjXHdfn5ECNrVeYtdhjIT9kRGA09',
                         'https://drive.google.com/open?id=13T1i22ewkmYav4qYaccprMWJ0eH6eJ6w',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               emeddedsystem : function(){

                    fbtn1 = 9;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1gZf8TpNcSt7nUqYsou9lDwKOXUzh9QoQ',
                         'https://drive.google.com/open?id=1GPtvKWBxw9wjMA105_vNjQZbt6FzIhls',
                         'https://drive.google.com/open?id=1rvwfiH6Te-wYQpmFYj3TntwZ2YQpKkCN',
                         'https://drive.google.com/open?id=1rvwfiH6Te-wYQpmFYj3TntwZ2YQpKkCN',
                         'https://drive.google.com/open?id=10rbpIjIxsMQAUgu8bpopHt3hTipvAo2k',
                         'https://drive.google.com/open?id=1JHBc-xHq3Uv5-nsAZlCSDWBH0hJI6-yz',
                         'https://drive.google.com/open?id=14ZoccvBdx0iQCxaQ1ksEYBfIYIvPBzfA',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               advancedmicroprocessor : function(){

                    fbtn1 = 9;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1-YG3CYrHY4Bv3grbUv1iZ6-cS8NBh1n2',
                         'https://drive.google.com/open?id=12Sw5CHW1oXQGnN6jkQ9CP8JHh6uG7ei-',
                         'https://drive.google.com/open?id=1rqxMCgvkg2aNV1VGwsfmll7PqLn5KP9c',
                         'https://drive.google.com/open?id=136zTTlZXne3S27o2iJlBbXGuSONKht-J',
                         'https://drive.google.com/open?id=1ORD-_wh98K5Bqkqu4dw2ajiw_PKvot0k',
                         'https://drive.google.com/open?id=1RwflF4cR5QYggdflAoTQK0KvhE1LADDa',
                         'https://drive.google.com/open?id=1FpoQL3NRzvbTBbHOy9aGZQfD2rrGN1SO',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               database : function(){

                    fbtn1 = 9;
                    remove();
                    reset();
                    hoyear();
                    link(
                         './Apology.html',
                         'https://drive.google.com/open?id=1FKWrTbVxHTakwKnwNwYxDjglGM6sXqzz',
                         'https://drive.google.com/open?id=1ddIJGlBD4r103bxXWmXcoRc41sG1xbv3',
                         'https://drive.google.com/open?id=1oi4GTPSrBwAGiJgiVLw3WcQlRV_o5dg0',
                         'https://drive.google.com/open?id=1-undvcUA4zCqiXM0gP5ZBxlVJk53p_28',
                         'https://drive.google.com/open?id=108gR5CqpOKaagP0CpR8761bcizBfv9r9',
                         'https://drive.google.com/open?id=1KreiXZykxVisjQDK7MLAYccIH6ARNdOz',
                         'https://drive.google.com/open?id=15Hq5NJiI8UXhWWZtsjBxOG54kqBnIDLB',
                         './Apology.html'
                    );
                    showbtn();
                    
               },
               
          }
          
     },
     i : { 

          semI : {

               english : function(){

                    fbtn1 = 10;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://drive.google.com/open?id=1wlLMc7g82DFsjDRPzLhfcUZv3wLYAkUk',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               basicscience : function(){

                    fbtn1 = 10;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://a1k2s3.github.io/computer/Apology.html',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               basicmathematics : function(){

                    fbtn1 = 10;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://drive.google.com/open?id=1nBGdC8eV9GVIeco40NcfF_4mVsbOuZJI',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               }
               
          },
          semII : {

               basicelectronics : function(){

                    fbtn1 = 11;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://drive.google.com/open?id=1fbBANM6N7bbS4ammAoXWyhR68EpAcGfr',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               programminginc : function(){

                    fbtn1 = 11;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://drive.google.com/open?id=1tOiIRL8H4daThUqawm0vks7JbXxZIviT',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               appliedmathematics : function(){

                    fbtn1 = 11;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://drive.google.com/open?id=1IcRI_cPwyfksn9D3r_3cm6LMjc2mQ0NS',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               elementsofelectricalengineering : function(){

                    fbtn1 = 11;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://drive.google.com/open?id=1bAboWRObkIGG6rf-_TcHqBD3ufIduwzf',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               }
               
          },
          semIII : {

               datastructure : function(){

                    fbtn1 = 12;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://a1k2s3.github.io/computer/Apology.html',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               digitaltechniques : function(){

                    fbtn1 = 12;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         './Apology.html',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               computergraphics : function(){

                    fbtn1 = 12;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://a1k2s3.github.io/computer/Apology.html',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               objectorientedprogramming : function(){

                    fbtn1 = 12;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://a1k2s3.github.io/computer/Apology.html',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               },
               database : function(){

                    fbtn1 = 12;
                    remove();
                    reset();
                    hoyear();
                    link(
                         'l1',
                         'https://a1k2s3.github.io/computer/Apology.html',
                         'l3',
                         'l4',
                         'l5',
                         'l6',
                         'l7',
                         'l8',
                         'l9'
                    );
                    showbtn();
                    ischemebtn();
                    
               }
               
          }
          
     }
     
}



$('document').ready(function(){

     mainpage();




     $('.header .scheme').click(hscheme);
     $('.header .sem')   .click(hsem);
     $('.header .sub')   .click(hsub);




     $('.main .scheme .gscheme')   .click(mscheme.g);
     $('.main .scheme .ischeme')   .click(mscheme.i);


     $('.main .sem .semI')   .click(msem.I);
     $('.main .sem .semII')  .click(msem.II);
     $('.main .sem .semIII') .click(msem.III);
     $('.main .sem .semIV')  .click(msem.IV);
     $('.main .sem .semV')   .click(msem.V);
     $('.main .sem .semVI')  .click(msem.VI);


     $('.main .sub .gscheme .semI .english')         .click(msub.g.semI.english);
     $('.main .sub .gscheme .semI .basicphysics')    .click(msub.g.semI.basicphysics);
     $('.main .sub .gscheme .semI .basicchemistry')  .click(msub.g.semI.basicchemistry);
     $('.main .sub .gscheme .semI .basicmathematics').click(msub.g.semI.basicmathematics);

     $('.main .sub .gscheme .semII .basicelectronics')       .click(msub.g.semII.basicelectronics);
     $('.main .sub .gscheme .semII .appliedphysics')         .click(msub.g.semII.appliedphysics);
     $('.main .sub .gscheme .semII .appliedchemistry')       .click(msub.g.semII.appliedchemistry);
     $('.main .sub .gscheme .semII .basicelectronics')       .click(msub.g.semII.basicelectronics);
     $('.main .sub .gscheme .semII .progamminginc')          .click(msub.g.semII.progamminginc);
     $('.main .sub .gscheme .semII .communicationskills')    .click(msub.g.semII.communicationskills);
     $('.main .sub .gscheme .semII .engineeringmathematics') .click(msub.g.semII.engineeringmathematics);

     $('.main .sub .gscheme .semIII .digitaltechniques')    .click(msub.g.semIII.digitaltechniques);
     $('.main .sub .gscheme .semIII .electricaltechnology') .click(msub.g.semIII.electricaltechnology);
     $('.main .sub .gscheme .semIII .appliedmathematics')   .click(msub.g.semIII.appliedmathematics);
     $('.main .sub .gscheme .semIII .datastructure')        .click(msub.g.semIII.datastructure);
     $('.main .sub .gscheme .semIII .database')             .click(msub.g.semIII.database);

     $('.main .sub .gscheme .semIV .computernetwork')                .click(msub.g.semIV.computernetwork);
     $('.main .sub .gscheme .semIV .microprocessor')                 .click(msub.g.semIV.microprocessor);
     $('.main .sub .gscheme .semIV .objectorientedprogramming')      .click(msub.g.semIV.objectorientedprogramming);
     $('.main .sub .gscheme .semIV .computerhardwareandmaintenance') .click(msub.g.semIV.computerhardwareandmaintenance);

     $('.main .sub .gscheme .semV .operatingsystem')     .click(msub.g.semV.operatingsystem);
     $('.main .sub .gscheme .semV .compuersecurity')     .click(msub.g.semV.compuersecurity);
     $('.main .sub .gscheme .semV .javaprogramming')     .click(msub.g.semV.javaprogramming);
     $('.main .sub .gscheme .semV .softwareengineering') .click(msub.g.semV.softwareengineering);
     $('.main .sub .gscheme .semV .systemprogramming')   .click(msub.g.semV.systemprogramming);

     $('.main .sub .gscheme .semVI .softwaretesting')        .click(msub.g.semVI.softwaretesting);
     $('.main .sub .gscheme .semVI .emeddedsystem')          .click(msub.g.semVI.emeddedsystem);
     $('.main .sub .gscheme .semVI .advancedmicroprocessor') .click(msub.g.semVI.advancedmicroprocessor);
     $('.main .sub .gscheme .semVI .database')               .click(msub.g.semVI.database);


     $('.main .sub .ischeme .semI .english')          .click(msub.i.semI.english);
     $('.main .sub .ischeme .semI .basicscience')     .click(msub.i.semI.basicscience);
     $('.main .sub .ischeme .semI .basicmathematics') .click(msub.i.semI.basicmathematics);

     $('.main .sub .ischeme .semII .basicelectronics')                .click(msub.i.semII.basicelectronics);
     $('.main .sub .ischeme .semII .programminginc')                  .click(msub.i.semII.programminginc);
     $('.main .sub .ischeme .semII .appliedmathematics')  .click(msub.i.semII.appliedmathematics);
     $('.main .sub .ischeme .semII .elementsofelectricalengineering') .click(msub.i.semII.elementsofelectricalengineering);

     $('.main .sub .ischeme .semIII .datastructure')             .click(msub.i.semIII.datastructure);
     $('.main .sub .ischeme .semIII .digitaltechniques')         .click(msub.i.semIII.digitaltechniques);
     $('.main .sub .ischeme .semIII .computergraphics')          .click(msub.i.semIII.computergraphics);
     $('.main .sub .ischeme .semIII .objectorientedprogramming') .click(msub.i.semIII.objectorientedprogramming);
     $('.main .sub .ischeme .semIII .database')                  .click(msub.i.semIII.database);

     $('.fbtn2').click(mainpage);

     $('.fbtn1').click(function(){
          switch(fbtn1){
               case 1 : 
                    mainpage();
               break;
               case 2 :
                    mscheme.g();
               break;
               case 3 :
                    mscheme.i();
               break;
               case 4 : 
                    msem.I();
               break;
               case 5 : 
                    msem.II();
               break;
               case 6 : 
                    msem.III();
               break;
               case 7 : 
                    msem.IV();
               break;
               case 8 :
                    msem.V();
               break;
               case 9 : 
                    msem.VI();
               break;
               case 10 : 
                    msem.I();
               break;
               case 11 : 
                    msem.II();
               break;
               case 12 :
                    msem.III();
               break;
               
          }
          
     });

});
