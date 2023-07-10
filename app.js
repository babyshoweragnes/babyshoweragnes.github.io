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










