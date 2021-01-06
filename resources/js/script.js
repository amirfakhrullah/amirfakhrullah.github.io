// DROPDOWN MENU -> change location to index.html

// let menu = document.getElementById('menu');

// const myFunction = () => {
//     let dropdown = document.getElementById('dropdown');
//     if (dropdown.style.display == 'none') {
//         dropdown.style.display = 'flex';
//     } else if (dropdown.style.display = 'flex') {
//         dropdown.style.display = 'none';
//     }
// }

// if (menu) {
//     menu.addEventListener('click', myFunction);
// }

// CHANGE GREETING LANGUAGES AT CERTAIN TIME INTERVAL

const multipleGreets = () => {
    let newGreet = '';
    let greet = document.querySelector('#greeting');
    switch (greet.innerHTML) {
        case 'Hello!':
            newGreet = 'Hai !';
            break;
        case 'Hai !':
            newGreet = 'Bon';
            break;
        case 'Bon':
            newGreet = 'Bonjour!';
            break;
        case 'Bonjour!':
            newGreet = 'Gu';
            break;
        case 'Gu':
            newGreet = 'Guten';
            break;
        case 'Guten':
            newGreet = 'Guten Tag!';
            break;
        case 'Guten Tag!':
            newGreet = 'Ho';
            break;
        case 'Ho':
            newGreet = 'Hola!';
            break;
        case 'Hola!':
            newGreet = '안';
            break;
        case '안':
            newGreet = '안녕';
            break;
        case '안녕':
            newGreet = '안녕하';
            break;
        case '안녕하':
            newGreet = '안녕하세';
            break;
        case '안녕하세':
            newGreet = '안녕하세요';
            break;
        case '안녕하세요':
            newGreet = 'こ';
            break;
        case 'こ':
            newGreet = 'こん';
            break;
        case 'こん':
            newGreet = 'こんに';
            break;
        case 'こんに':
            newGreet = 'こんにち';
            break;
        case 'こんにち':
            newGreet = 'こんにちは ';
            break;
        case 'こんにちは ':
            newGreet = 'O';
            break;
        case 'O':
            newGreet = 'Ola !';
            break;
        case 'Ola !':
            newGreet = 'Ci';
            break;
        case 'Ci':
            newGreet = 'Ciao !';
            break;
        case 'Ciao !':
            newGreet = 'He';
            break;
        case 'He':
            newGreet = 'Hello!';
            break;
    }
    greet.innerHTML = newGreet;
}

window.setInterval(multipleGreets, 400);
