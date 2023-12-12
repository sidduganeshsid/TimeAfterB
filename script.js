function updateClock(birthDate) {
    const now = new Date();
    const birthDateTime = new Date(birthDate);
    const elapsedTime = now - birthDateTime;

    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    const birthYear = birthDateTime.getFullYear();
    const currentYear = now.getFullYear();
    const age = currentYear - birthYear;

    const timeString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    // const ageString = "";
    // if(age==1)
    // {
    //     ageString = `Age: ${age} year`;
    // }
    // else
    // {
    const ageString = `Age: ${age} years`;
    const months = `Months : ${Math.floor(days/30)}`;

    // }
    const PresentDayString = `Present Day : ${days+1}`;

    var UserName = "Siddu Ganesh Musa";
    document.getElementById('name').textContent = UserName;
    document.getElementById('time').textContent = timeString;
    if(age>=1)
    document.getElementById('age').textContent = ageString;
    else
    document.getElementById('age').textContent = "";
    document.getElementById('PresentDay').textContent = PresentDayString;
    document.getElementById('CompletedMonths').textContent = months;
}
//my b.tech completed on Octerber 19
// Replace this with your birth date and time in "YYYY-MM-DDTHH:MM:SS" format
const birthDate = "2023-07-08T00:00:00";

// Update the clock every second
setInterval(() => {
    updateClock(birthDate);
}, 1000);

// Initial update
updateClock(birthDate);


function updatefClock(fDate) {
    const now = new Date();
    const fDateTime = new Date(fDate);
    const elapsedTime = now - fDateTime;

    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    const fYear = fDateTime.getFullYear();
    const currentYear = now.getFullYear();
    const age = currentYear - fYear;

    const timeString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    const ageString = `Age: ${age} years`;
    const months = `Months : ${Math.floor(days/30)}`;


    const fPresentDayString = `Present Day : ${days+1}`;

  
    document.getElementById('ftime').textContent = timeString;
    // if(age>=1)
    // document.getElementById('fage').textContent = ageString;
    // else
    // document.getElementById('fage').textContent = ageString;
    document.getElementById('fPresentDay').textContent = fPresentDayString;
    document.getElementById('fCompletedMonths').textContent = months;
}
//my b.tech completed on Octerber 19
// Replace this with your birth date and time in "YYYY-MM-DDTHH:MM:SS" format
const fDate = "2023-12-09T00:00:00";

// Update the clock every second
setInterval(() => {
    updatefClock(fDate);
}, 1000);

// Initial update
updatefClock(fDate);

