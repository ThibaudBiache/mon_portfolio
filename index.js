// Toutes les variables dont j'ai besoin
const presentationBox = document.querySelector('.presentation-box');

// Les diverses fonctions
const copyToClipboard = () => {
    navigator.clipboard.writeText("biache.thibaud@gmail.com");
}

const copyButtonStyleModif = () => {
    const button = document.querySelector('.mail-btn');
    console.log(button)
    button.textContent = "Copié !";
    button.classList.add('mail-btn-clicked');
    setTimeout(() => {
        setTimeout(() => {
            button.textContent = "Copiez mon email!";
        }, 110);
        button.style.color = "#1A374D";
        button.classList.remove('mail-btn-clicked');
    }, 800);
}

// Manipulation du DOM
presentationBox.style.height = (window.innerHeight + 40) + "px";