function updateClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();

    // Calculate angles for the hands
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = minutes * 6 + (seconds / 60) * 6;
    const secondAngle = seconds * 6;

    // Apply the rotation to the hands
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock at the start
updateClock();
