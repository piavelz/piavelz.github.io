//Funcion que cambia el tamaño de la barra de navegador al hacer scroll
window.onscroll = function() {    
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").style.height = "30px";
    } else {
        document.getElementById("nav").style.height = "60px";
    }
};

//funcion que cambia el color de las letras del navegador segun posicion de scroll
document.addEventListener("scroll", function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        let top = section.offsetTop;
        let height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
        let sectionId = section.getAttribute("id");
        let navLink = document.querySelector('a[href="#' + sectionId + '"]');
        // Cambiar el color de todos los elementos del navbar a su color predeterminado
        document.querySelectorAll('nav a').forEach(function(link) {
            link.style.color = "var(--txt-clear)";
        });
        // Cambiar el color del texto de la sección visible en el navbar
        navLink.style.color = "var(--primary-color)"; 
        }
    });
    });


    
    let btnAboutMe = document.getElementById("btn-aboutMe");
    
    //Desplazamiento de seccion oculta "sobre mi"
    function aboutMe(btnAboutMe){
        var aboutMe = document.getElementById("sec-about-me");
        var imgAboutMe= document.getElementById("ph-about-me");
        var txtAboutMe = document.getElementById("txt-about-me");
        
    
        if(aboutMe.classList.contains("open")){
            btnAboutMe.innerHTML= "más sobre mí <span class='material-symbols-outlined'>expand_more</span>";
            aboutMe.classList.remove("open");
            aboutMe.style.height="0px";
            aboutMe.style.padding="0px";
            
            setTimeout(function(){
                txtAboutMe.style.visibility="hidden";
                imgAboutMe.style.visibility = "hidden";
                imgAboutMe.style.opacity="0";
                txtAboutMe.style.opacity="0";
            },500);
            
    
        }else{
            btnAboutMe.innerHTML="ocultar <span class='material-symbols-outlined'>expand_less</span>";
            aboutMe.classList.add("open");
            aboutMe.style.display="grid";
            aboutMe.style.height = "500px";
            aboutMe.style.padding = "20px";
            imgAboutMe.style.visibility = "visible";
            console.log("Tamaño ventana posicion "+ window.innerHeight);
            console.log("Tamaño funcion ScrollY"+ window.scrollY);
            //Scroll automatico al desplegar seccion "Sobre mi"
            if(window.scrollY< 240 ){
                window.scrollBy({
                    top : window.innerHeight * 0.5,
                    behavior:"smooth"
                });
            }
            
            setTimeout(function() {
                txtAboutMe.style.visibility = "visible";
                imgAboutMe.style.opacity = "1";
                txtAboutMe.style.opacity = "1";
            }, 500);
        }
    }
    
    btnAboutMe.addEventListener('click', function(){
        aboutMe(btnAboutMe);
    })
    
    
    




function copyMail(){
    let inputMail= document.getElementById("mail");
    var alertMail=document.getElementById("alert-copy-mail");
    inputMail.select();
    inputMail.setSelectionRange(0,99999);
    navigator.clipboard.writeText(inputMail.value);
    alertMail.textContent ="email copiado!";

}


function popup(){
    const closeBtn =document.getElementById("close-btn");
    let popupBack = document.getElementById("popup-back");
    let popup= document.getElementById("popup");
    let body = document.body;

    body.style.overflow="hidden";

    popupBack.style.display="block";
    popup.style.display="grid";

    popupBack.addEventListener('click',function(){
        popupBack.style.display="none";
        popup.style.display="none";
        body.style.overflow="auto";
        
    })
    
    closeBtn.addEventListener('click',function(){
        popupBack.style.display="none";
        popup.style.display="none";
        body.style.overflow="auto";
    })
}

document.getElementById("btn-popup").addEventListener('click',function(){
    popup();
})

document.getElementById("downloadCV").addEventListener('click', function(){
    const urlCV= "../img/curriculum_piavelasquez.pdf"
    const a = document.createElement('a');

    a.href = urlCV;
    a.download = "CV_PiaVelasquez";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

})

//carrucel de proyectos
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.contain-proyects');
    const cardWidth = document.querySelector('.card-proyect').offsetWidth + 20; // Ajustar el espacio entre tarjetas
    const cardsVisible = Math.floor(carousel.offsetWidth / cardWidth);
    let currentScrollPosition = 0;

    nextButton.addEventListener('click', function() {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        currentScrollPosition = Math.min(currentScrollPosition + cardWidth * cardsVisible, maxScroll);
        carousel.scrollTo({
            top: 0,
            left: currentScrollPosition,
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', function() {
        currentScrollPosition = Math.max(currentScrollPosition - cardWidth * cardsVisible, 0);
        carousel.scrollTo({
            top: 0,
            left: currentScrollPosition,
            behavior: 'smooth'
        });
    });
});

