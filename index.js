// Toutes les variables dont j'ai besoin
const presentationBox = document.querySelector('.presentation-box');

// Les diverses fonctions
const copyToClipboard = () => {
    navigator.clipboard.writeText("biache.thibaud@gmail.com");
}

const doSomethingElse = () => {
    const button = document.querySelector('.mail-btn');
    console.log(button)
    button.textContent = "Copié !";
    button.classList.add('mail-btn-clicked');
    setTimeout(() => {
        setTimeout(() => {
            button.textContent = "Copier mon email!";
        }, 1500);
        button.style.color = "#1A374D";
        button.classList.remove('mail-btn-clicked');
    }, 1500);
}

// Manipulation du DOM
presentationBox.style.height = (window.innerHeight + 40) + "px";