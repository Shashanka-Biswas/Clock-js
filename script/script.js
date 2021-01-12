console.log("script is connected");
const seccondsDiv = document.querySelector('.secconds');
const minuiesDiv = document.querySelector('.minuies');
const houresDiv = document.querySelector('.houres');

setInterval(timeD, 1000);
function timeD(){
    const now = new Date;
    let nowSecconds= now.getSeconds();
    let nowMinuites = now.getMinutes();
    let nowHoures = now.getHours();
    nowHoures = nowHoures == nowHoures%12 ? nowHoures : nowHoures%12;
    seccondsDiv.innerText = nowSecconds;
    minuiesDiv.innerText = nowMinuites;
    houresDiv.innerText = nowHoures;
    // console.log(nowSecconds);
    // console.log(nowMinuites);
    // console.log(nowHoures);
}

