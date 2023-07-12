// Obtener la fecha objetivo (19 de agosto de 2023 a las 3:30 PM)
const targetDate = new Date('2023-08-19T15:30:00');

// Función para actualizar el contador de tiempo
function updateCounter() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Calcular la diferencia en días, horas, minutos y segundos
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    // Mostrar el contador en el elemento HTML
    document.getElementById('dias').innerHTML = days;
    document.getElementById('horas').innerHTML = hours;
    document.getElementById('minutos').innerHTML = minutes;
    document.getElementById('segundos').innerHTML = seconds;

    if (currentDate === targetDate) {
        document.getElementById('dias').innerHTML = '00';
        document.getElementById('horas').innerHTML = '00';
        document.getElementById('minutos').innerHTML = '00';
        document.getElementById('segundos').innerHTML = '00';
    }

    // Actualizar el contador cada segundo
    setTimeout(updateCounter, 1000);
}

// Iniciar el contador
updateCounter();


const switchnav = document.getElementById('show-nav');
const mainm = document.getElementById('main');
const navigation = document.getElementById('navigation');
const bgimage = document.getElementById('bg-mn');
const dt = document.getElementById('dt');
const rs = document.getElementById('rs');
const lg = document.getElementById('lg');

let swonoff = false;

const turnoffnav = () =>{
    mainm.style.visibility = 'visible';
    navigation.style.visibility = 'hidden';
    bgimage.style.opacity = '1';
    swonoff = false;
}

switchnav.addEventListener('click', function () {
    if (swonoff === false) {
        mainm.style.visibility = 'hidden';
        navigation.style.visibility = 'visible';
        bgimage.style.opacity = '0.6';
        swonoff = true;
    } else {
        turnoffnav();
    }
});

dt.addEventListener('click', turnoffnav);
rs.addEventListener('click', turnoffnav);
lg.addEventListener('click', turnoffnav);
















