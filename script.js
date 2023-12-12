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
    //present time getter
    const fnow = new Date();
    //our setting time
    const fDateTime = new Date(fDate);
    //diff of present and our time in milliseconds
    const felapsedTime = fnow - fDateTime;

    //time difference arranger
    const fseconds = Math.floor(felapsedTime / 1000) % 60;
    const fminutes = Math.floor(felapsedTime / (1000 * 60)) % 60;
    const fhours = Math.floor(felapsedTime / (1000 * 60 * 60)) % 24;
    const fdays = Math.floor(felapsedTime / (1000 * 60 * 60 * 24));
    
    const fYear = fDateTime.getFullYear();
    const fcurrentYear = fnow.getFullYear();
    const fage = fcurrentYear - fYear;

    const ftimeString = `${fdays} days, ${fhours} hours, ${fminutes} minutes, ${fseconds} seconds`;
    const fageString = `Age: ${fage} years`;
    const fmonths = `Months : ${Math.floor(fdays/30)}`;


    const fPresentDayString = `Present Day : ${fdays+1}`;

  //elements 
    document.getElementById('ftime').textContent = ftimeString;
    document.getElementById('fPresentDay').textContent = fPresentDayString;
    document.getElementById('fCompletedMonths').textContent = fmonths;
}

const fDate = "2023-12-12T09:00:00";

// Update the clock every second
setIntervalf(() => {
    updatefClock(fDate);
}, 1000);

// Initial update
updatefClock(fDate);

