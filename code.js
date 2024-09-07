//TOGGLE(botón navegador) MENU E ICONOS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click',toggleMenu);

//QUITAR
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }
}

document.addEventListener('click', removeActiveLinkClass);

//TOGGLE(botón navegador) TEMA 
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme){
    bodyElement.classList.add('dark-theme');
};

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme','active');
    }else{
        localStorage.removeItem('darkTheme');
    }
};
themeToggleButton.addEventListener('click', toggleTheme);

// SCROLL REVEAL
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});
sr.reveal('.main-title',{origin:'top'});
sr.reveal('.scroll-reveal-left',{origin:'left'});
sr.reveal('.scroll-reveal-right',{origin:'right'});
sr.reveal('.tech-stack-item',{interval:250});
sr.reveal(`.section-title, .section-subtitle-container`,{
    origin:'top',
    interval:250
});
sr.reveal('.portfolio-card',{interval:500});
sr.reveal(`.form-container, .footer`,{
    origin:'top'
});

//EMAIL JS FORMULARIO
const contactForm = document.getElementById('contact_form'),
    contactMessage = document.getElementById('contact-message');
const sendEmail = (e) =>{
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_hyhvmsi', 'template_ohv2aw4', '#contact_form', 'UqkWuWRLYSWAFwFhe').then(() =>{
        //Mostrar mensaje enviado
        contactMessage.textContent = 'Mensaje enviado correctamente ✅'

        //Eliminar el mensaje después de 5 segundos
        setTimeout(() =>{
            contactMessage.textContent = ''}, 5000)
        
        //Limpiar los campos input
        contactForm.reset()
    }, () =>{
        //Mostrar mensaje de error
        contactMessage.textContent = 'Mensaje no enviado (error en el servidor) ❌'
    });
}
contactForm.addEventListener('submit', sendEmail)