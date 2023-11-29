import { services } from "./mydata.js"
console.log(services)


let hamburggerIcon = document.querySelector('.hamburgger');
let closeICon = document.querySelector('.close-nav-icon');
let Navigation = document.querySelector('.navigation');
let serviceSection = document.querySelector('.services1')
let filterSearch = document.querySelector('.filter')
let filteredArray = []
let paragraph1 = document.getElementById('p1')
let paragraph2 = document.getElementById('p2')
let paragraph3 = document.getElementById('p3')
let paragraph4 = document.getElementById('p4')
let Display = document.querySelector('.display');
let actualService = services;

hamburggerIcon.addEventListener('click', (e) => {
    Navigation.style.visibility = 'visible';
    hamburggerIcon.style.visibility = 'hidden';
    Navigation.style.transition = '2s';
    Navigation.style.margin = ['0 0 0 0.1%'];
    e.preventDefault()
})

closeICon.addEventListener('click', (e) => {
    Navigation.style.visibility = 'hidden';
    setTimeout(() =>{
        hamburggerIcon.style.visibility = 'visible'; 
    } ,700);
    // hamburggerIcon.style.visibility = 'visible';
    Navigation.style.transition = '1s';
    Navigation.style.margin = ['0 0 0 -100%'];

    e.preventDefault()
})


let servicesMap = () => {
    actualService.map((services) => {
        let div = document.createElement('div');
   
        let img = document.createElement('img');
        img.setAttribute('src',services.image);
        
        let h3 = document.createElement('h3');
        h3.setAttribute('class','service-title');
        h3.innerText = services.title;
        
        let paragraph = document.createElement('p');
        paragraph.setAttribute('class','service-description');
        paragraph.innerText = services.desc;
        
        let btn1 = document.createElement('button');
        btn1.setAttribute('class','learn-more');
        btn1.innerText = 'learn more';

        let btn2 = document.createElement('button');
        btn2.setAttribute('class','apply-more');
        btn2.innerText = 'apply now';

        let btn3 = document.createElement('button');
        btn3.setAttribute('class','comming-soon');
        btn3.innerText = "comming soon";
        
        div.append(img,h3,paragraph);
        
        if (services.button) {
            div.append(btn1,btn2);
        }else{
            div.appendChild(btn3);
        }
        
        
        serviceSection.appendChild(div);
    })
}
servicesMap()
// filter
    filterSearch.addEventListener('keyup',(ev) => {
        // console.log('i\'m here')
        serviceSection = "";
        filteredArray = [];
        actualService.filter((service) => {
            if( filterSearch.value !== ""){
                
                if(service.title.includes(filterSearch.value) || service.desc.includes(filterSearch.value)){
                    console.log('i\'m here')
                    filteredArray = [...filteredArray,service];
                    console.log(filteredArray);
                }
            } else return servicesMap();
        })
        
        // Display.innerHTML = filteredArray
        ev.preventDefault()
       
    })

           
      
           
    

// String methods \\
paragraph1 = "We are Africa's no. 1 technologies hub for \
student-centred education, commerce,\
workforce, and innovations.";

paragraph2 = " We integrate latest technologicies and expertise to bring about expertises \
across our affordable services."
paragraph3 = " Learn with the best, buy the best and reliable products born out of innovation, position yourself \
    for the global market place or source for best talents, and request for affordable ICT solutions from \
    our network of technologists.";
paragraph4 = " manifest your dreams...";

let paragraph5 = paragraph1.concat(" ");
// let paragraph6 = paragraph2.concat(" ");
// let paragraph7 = paragraph3.concat(" ");
console.log(paragraph5)

p1.innerHTML = paragraph1;
p2.innerHTML = paragraph2;
p3.innerHTML = paragraph3;
p4.innerHTML = paragraph4;
