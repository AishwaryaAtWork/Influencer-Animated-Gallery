let svgCircle= document.getElementById('svgCircle');
let step1= document.getElementById('step1');
let step2= document.getElementById('step2');
let step3= document.getElementById('step3');
let step4= document.getElementById('step4');
let step5= document.getElementById('step5');
let main= document.getElementById('main');
let userBox= document.getElementById('userBox');

main.style.background = 'url(src/img-1.jpg)';
main.style.backgroundSize= 'cover';
main.style.backgroundPosition= 'center';

step1.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset= '1004';
    main.style.background = 'url(src/img-2.jpg)';
    main.style.backgroundSize= 'cover';
    main.style.backgroundPosition= 'center';
    userBox.style.top='-350px';

});

step2.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset= '753';
    main.style.background = 'url(src/img-3.jpg)';
    main.style.backgroundSize= 'cover';
    main.style.backgroundPosition= 'center';
    userBox.style.top='-800px';
});

step3.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset= '502';
    main.style.background = 'url(src/img-4.jpg)';
    main.style.backgroundSize= 'cover';
    main.style.backgroundPosition= 'center';
    userBox.style.top='-1250px';
});

step4.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset= '251';
    main.style.background = 'url(src/img-5.jpg)';
    main.style.backgroundSize= 'cover';
    main.style.backgroundPosition= 'center';
    userBox.style.top='-1700px';
});

step5.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset= '0';
    main.style.background = 'url(src/img-1.jpg)';
    main.style.backgroundSize= 'cover';
    main.style.backgroundPosition= 'center';
    userBox.style.top='100px';
});