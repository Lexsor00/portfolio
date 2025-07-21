// Script para mis servicios
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            setTimeout(() => {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('fade-in');
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, 50);
            }, delay * 200); 
        } else {
            entry.target.classList.remove('fade-in', 'show');
            entry.target.classList.add('hidden');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.item--animado').forEach(el => {
    observer.observe(el);
});

// Script para Carrusel de proyects
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 900)
}

// Variables para el primer menú
var enlace = document.querySelector('.des__link');
var cerrarMenu = document.getElementById('cerrar-menu');
var menu = document.getElementById('menu');

// Variables para el segundo menú
var enlaceMenu2 = document.querySelector('.abrir-menu2');
var cerrarMenu2 = document.getElementById('cerrar-menu2');
var menu2 = document.getElementById('menu2');

// Abre o cierra el primer menú al hacer clic en el enlace
enlace.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.add('menu-visible');
});

// Cierra el primer menú al hacer clic en el botón de cerrar
cerrarMenu.addEventListener('click', function() {
    menu.classList.remove('menu-visible'); 
});

// Abre o cierra el segundo menú al hacer clic en el enlace
enlaceMenu2.addEventListener('click', function(event) {
    event.preventDefault();
    menu2.classList.add('menu-visible');
});

// Cierra el segundo menú al hacer clic en el botón de cerrar
cerrarMenu2.addEventListener('click', function() {
    menu2.classList.remove('menu-visible'); 
});

// Variables del cambio de idioma
const languageToggle = document.getElementById('language-toggle');
const languageToggleMobile = document.getElementById('language-toggle-mobile');
const languageOptions = document.querySelectorAll('.language-option');

// Traducciones
const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.services": "Servicios",
        "nav.minecraft": "Minecraft",
        "nav.skills": "Skills",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "home.title": "Developer & Creador Digital",
        "home.subtitle": "Transformando ideas en experiencias digitales únicas y modernas",
        "home.projects": "Ver Proyectos",
        "home.contact": "Contactar",
        "services.title": "Mis Servicios",
        "services.webdev": "Desarrollo Web",
        "services.webdev_desc": "Creación de sitios web modernos y responsivos.",
        "services.uiux": "Diseño UI/UX",
        "services.uiux_desc": "Interfaces y experiencias del usuario excepcionales.",
        "services.seo": "SEO",
        "services.seo_desc": "Optimización y mejora de la visibilidad online.",
        "minecraft.title": "Servicios Minecraft",
        "minecraft.plugin_config": "Configuración de Plugins",
        "minecraft.plugin_config_desc": "Instalación y configuración profesional de plugins para tu servidor.",
        "minecraft.plugin_modeling": "Modelado 3d",
        "minecraft.plugin_modeling_desc": "Creo modelos con animaciones al gusto.",
        "minecraft.server_config": "Configuración de Servidores",
        "minecraft.server_config_desc": "Configuración completa y optimización de servidores Minecraft.",
        "minecraft.bungee": "Network Bungee",
        "minecraft.bungee_desc": "Configuración profesional de redes BungeeCord/Velocity.",
        "minecraft.geyser": "Configuración de GeyserMC",
        "minecraft.geyser_desc": "Integración de jugadores Bedrock en servidores Java.",
        "minecraft.tebex": "Tienda Tebex",
        "minecraft.tebex_desc": "Implementación y personalización de tiendas online.",
        "minecraft.tebex_themes": "Temas Tebex",
        "minecraft.tebex_themes_desc": "Instalación y personalización de temas para tu tienda Tebex.",
        "minecraft.websites": "Sitios Web",
        "minecraft.websites_desc": "Desarrollo de sitios web para ti o tu servidor.",
        "skills.title": "Mis Skills",
        "projects.title": "Proyectos Destacados",
        "projects.lexhub_desc": "Al hacer click podrás observar las diversas webs diseñadas.",
        "projects.click_see": "Click para ver!",
        "projects.minecraft_network": "Network Minecraft",
        "projects.minecraft_network_desc": "Red de servidores Minecraft con soporte multiplataforma, tienda integrada y sistema de rangos.",
        "projects.setups_desc": "Al hacer click podrás observar los diversos setups creados por mi.",
        "projects.forum_web": "Web Foro",
        "projects.restaurant_web": "Web Restaurante",
        "projects.rental_web": "Web Rental",
        "projects.hosting_web": "Web Hosting",
        "projects.click_go": "Click para ir!",
        "contact.title": "Contacto",
        "contact.project_title": "¡Cuentame sobre tu proyecto!",
        "contact.project_desc": "Estoy disponible para freelance. Contáctame y conversemos sobre cómo puedo ayudarte. Respondo en un periodo de 24h",
        "contact.location": "Ubicación",
        "contact.form_title": "Formulario de Contacto",
        "contact.name": "Nombre",
        "contact.email": "Email",
        "contact.phone": "Teléfono",
        "contact.message": "Mensaje",
        "contact.submit": "Enviar Formulario",
        "footer.rights": "All rights reserved"
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.minecraft": "Minecraft",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "home.title": "Developer & Digital Creator",
        "home.subtitle": "Transforming ideas into unique and modern digital experiences",
        "home.projects": "View Projects",
        "home.contact": "Contact",
        "services.title": "My Services",
        "services.webdev": "Web Development",
        "services.webdev_desc": "Creation of modern and responsive websites.",
        "services.uiux": "UI/UX Design",
        "services.uiux_desc": "Exceptional user interfaces and experiences.",
        "services.seo": "SEO",
        "services.seo_desc": "Optimization and improvement of online visibility.",
        "minecraft.title": "Minecraft Services",
        "minecraft.plugin_config": "Plugin Configuration",
        "minecraft.plugin_config_desc": "Professional installation and configuration of plugins for your server.",
        "minecraft.plugin_modeling": "3D Modeling",
        "minecraft.plugin_modeling_desc": "I create models with animations to your liking.",
        "minecraft.server_config": "Server Configuration",
        "minecraft.server_config_desc": "Complete setup and optimization of Minecraft servers.",
        "minecraft.bungee": "Bungee Network",
        "minecraft.bungee_desc": "Professional configuration of BungeeCord/Velocity networks.",
        "minecraft.geyser": "GeyserMC Configuration",
        "minecraft.geyser_desc": "Integration of Bedrock players into Java servers.",
        "minecraft.tebex": "Tebex Store",
        "minecraft.tebex_desc": "Implementation and customization of online stores.",
        "minecraft.tebex_themes": "Tebex Themes",
        "minecraft.tebex_themes_desc": "Installation and customization of themes for your Tebex store.",
        "minecraft.websites": "Websites",
        "minecraft.websites_desc": "Website development for you or your server.",
        "skills.title": "My Skills",
        "projects.title": "Featured Projects",
        "projects.lexhub_desc": "Click to see the various designed websites.",
        "projects.click_see": "Click to see!",
        "projects.minecraft_network": "Minecraft Network",
        "projects.minecraft_network_desc": "Minecraft server network with cross-platform support, integrated store and rank system.",
        "projects.setups_desc": "Click to see the various setups I've created.",
        "projects.forum_web": "Forum Web",
        "projects.restaurant_web": "Restaurant Web",
        "projects.rental_web": "Rental Web",
        "projects.hosting_web": "Hosting Web",
        "projects.click_go": "Click to go!",
        "contact.title": "Contact",
        "contact.project_title": "Tell me about your project!",
        "contact.project_desc": "I'm available for freelance work. Contact me and let's talk about how I can help you. I respond within 24 hours.",
        "contact.location": "Location",
        "contact.form_title": "Contact Form",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.message": "Message",
        "contact.submit": "Submit Form",
        "footer.rights": "All rights reserved"
    }
}

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Actualizar el atributo lang del html
    document.documentElement.lang = lang;
    
    // Cambiar la clase active en los botones de idioma
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Traducir todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Guardar preferencia de idioma en localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Event listeners para los botones de idioma
languageToggle.addEventListener('click', (e) => {
    if (e.target.classList.contains('language-option')) {
        const lang = e.target.dataset.lang;
        changeLanguage(lang);
    }
});

languageToggleMobile.addEventListener('click', (e) => {
    if (e.target.classList.contains('language-option')) {
        const lang = e.target.dataset.lang;
        changeLanguage(lang);
    }
});

// Cargar idioma guardado o usar español por defecto
const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(savedLanguage);
