const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.navbar__item')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

for(let i =0;i<menuItems.length ; i++){
  menuItems[i].addEventListener('click', function () {
    if(menuLinks.classList.contains("active")){
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    }
  })
}
  

const text = `Your one stop solution to research, discover and connect with climate project developers from across the world!`;
const container = document.getElementById('section1');
let index = 0;

function addCalendly(){
  console.log('typeWriter');
  Calendly.initBadgeWidget({ url: 'https://calendly.com/justdhs/compliance-reporting-discussion', text: 'Schedule An Appointment With Us', color: '#0069ff', textColor: '#ffffff', branding: undefined }); 
  console.log(menuItems.length)
  typeWriter()
}
function typeWriter() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // Adjust the speed here (in milliseconds)
  }
}

window.onload = addCalendly;

window.addEventListener('wheel', function() {
    // console.log(this.document.body.scrollTop);
    const navbar = document.getElementById('navbar');
    if (this.document.body.scrollTop > 50) { // Adjust this value based on when you want the change to happen
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }
  });

// window.onscroll = function() {
//   console.log("scrolling");
//   myFunction()
// };
