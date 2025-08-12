function updateLocalTime() {
    const timeElement = document.getElementById("localtime");
    const now = new Date();

    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = `${hours}:${minutes} ${ampm}`;
    timeElement.textContent = formattedTime;
}

updateLocalTime();
setInterval(updateLocalTime, 1000);