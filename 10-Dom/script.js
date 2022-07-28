function changeMode(){
    changeClasses();
    changeText();
    
}
function changeClasses() {
    button.classList.toggle(darkmodeClass);
    h1.classList.toggle(darkmodeClass);
    body.classList.toggle(darkmodeClass);
    footer.classList.toggle(darkmodeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkmodeClass)){
        button.innerHTML = "LightMode";
        h1.innerHTML = darkMode + " ON";
        return;
    }
        button.innerHTML = "DarkMode";
        h1.innerHTML = lightMode + " ON";
}

const darkmodeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);