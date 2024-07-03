const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
  

const text = `Your One Stop Solution For All Climate Compliance Needs`;
const container = document.getElementById('section1');
let index = 0;

function typeWriter() {
  Calendly.initBadgeWidget({ url: 'https://calendly.com/justdhs/compliance-reporting-discussion', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: undefined }); 
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust the speed here (in milliseconds)
  }
}

window.onload = typeWriter;
