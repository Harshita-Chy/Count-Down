const endDate = "13 December 2028 00:06 AM";

document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input");
const modal = document.getElementById("finishModal");

let timerID = null;
// Show modal popup
function showModal() {
    modal.classList.add("show");
    closeBtn.focus();
}

// Hide modal
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});


const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    
    const diff = (end-now) / 1000;
     //diff is milieconds to seconds by dividing it by 1000
    if(diff<0){
     showModal();
     clearInterval(timerID);
     return;   
    };
    // Convert to days
    const day = Math.floor(diff/60/60/24);
    inputs[0].value = day;
    const hours =Math.floor(diff/60/60%24);
    inputs[1].value =  hours;
    const minutes = Math.floor(diff/60%60);
    inputs[2].value = minutes;
    const seconds = Math.floor(diff%60);
    inputs[3].value = seconds;
}

// initial log
clock();

timerID = setInterval(clock, 1000);