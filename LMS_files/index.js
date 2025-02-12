// Date time
{
    let serverTime = document.querySelector(".server-time strong");
    let now = new Date();
    let formattedDateTime = now.toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: undefined,
        hour12: false
    }).replace(",", " |");

    serverTime.innerHTML = formattedDateTime;
}

// TIMER
{
    let timer = document.querySelector("#timer");
    let time = 1 * 60 * 60; // 1 hour in seconds (3600 seconds)
    let interval = setInterval(function () {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        // Ensure two-digit formatting for hours, minutes, and seconds
        let formattedHours = hours < 10 ? "0" + hours : hours;
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        timer.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            timer.innerHTML = "00:00:00";
        }
    }, 1000);
}