console.log("script is connected");
const seccondsDiv = document.querySelector('.secconds');
const minuiesDiv = document.querySelector('.minuies');
const houresDiv = document.querySelector('.houres');
const ampnDiv = document.querySelector('.ampm');

setInterval(timeD, 1000);
function timeD() {
    const now = new Date;
    let nowSecconds = now.getSeconds();
    let nowMinuites = now.getMinutes();
    let nowHoures = now.getHours();
    let ampm = nowHoures > 12 ? "PM" : "AM";
    nowHoures = nowHoures == nowHoures % 12 ? nowHoures : nowHoures % 12;
    nowHoures = nowHoures == 0 ? 12: nowHoures;
    seccondsDiv.innerText = nowSecconds;
    minuiesDiv.innerText = nowMinuites;
    houresDiv.innerText = nowHoures;
    ampnDiv.innerText = ampm;
    // console.log(nowSecconds);
    // console.log(nowMinuites);
    // console.log(nowHoures);
}

