// Fecha y hora de destino (puedes cambiar esto a cualquier fecha futura)
const countdownDate = new Date("March 20, 2029 00:00:00").getTime();

const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculos para obtener los días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar el contenido del contador en la página
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // Si el contador ha terminado, mostrar un mensaje
    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector('.countdown').innerHTML = "<h1>¡Tiempo Expirado!</h1>";
    }
}, 1000);

