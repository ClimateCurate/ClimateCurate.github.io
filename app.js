const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
  

const text = `Your One Stop Solution For All Climate Compliance Needs!`;
const container = document.getElementById('section1');
let index = 0;

function addCalendly(){
  console.log('typeWriter');
  Calendly.initBadgeWidget({ url: 'https://calendly.com/justdhs/compliance-reporting-discussion', text: 'Schedule An Appointment With Us', color: '#0069ff', textColor: '#ffffff', branding: undefined }); 
  typeWriter()
}
function typeWriter() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust the speed here (in milliseconds)
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

