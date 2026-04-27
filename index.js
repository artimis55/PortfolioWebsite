//Taskbar
//Bar
setTimeout(function(){
    document.getElementById('taskbar-bar').style.display = 'block';
}, 5899);
//Time
let dt = document.getElementById('current-date-time');
setInterval(() => {
    let d = new Date();
    dt.innerHTML = d.toLocaleString('en-GB'); 
},1000)
setTimeout(function(){
    document.getElementById('date-time').style.display = 'block';
}, 5975);


// Drag
function Drag(elementId){
    let newX = 0, newY = 0, startX = 0, startY = 0;
    const element = document.getElementById(elementId);

    if (!element) return;
    element.style.cursor = 'grab';
    element.addEventListener('mousedown', mouseDown);

    function mouseDown(e) {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        element.style.zIndex = 1000;
        element.style.cursor = 'grabbing';
    }

    function mouseMove(e) {
        newX = startX - e.clientX;
        newY = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;
        element.style.top = (element.offsetTop - newY) + 'px';
        element.style.left = (element.offsetLeft - newX) + 'px';
    }

    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        element.style.zIndex = '';
    }
}
window.addEventListener('DOMContentLoaded', () => {
    Drag('guide');
    Drag('welcome');
    Drag('apple');
    Drag('abtme-button');
    Drag('abtme')
    Drag('leadership-button');
    Drag('leadership-frame');
    Drag('leadership');
    Drag('achievements-button');
    Drag('service-button');
});


//Timer
document.addEventListener("DOMContentLoaded", () => {
    const gpopup = document.getElementById('guide');
    const gclosepopup = document.getElementById('guide-close');
    const wpopup = document.getElementById('welcome');
    const wclosepopup = document.getElementById('welcome-close');
    const apopup = document.getElementById('apple');
    const aclosepopup = document.getElementById('apple-close');

    const toggleModal = (modal, show) => {
        if (modal) modal.style.display = show ? "block" : "none";
    };

    setTimeout(() => {
        toggleModal(gpopup, true);
        toggleModal(wpopup, true);
        toggleModal(apopup, true);
    }, 6200);

    gclosepopup?.addEventListener('click', () => toggleModal(gpopup, false));
    wclosepopup?.addEventListener('click', () => toggleModal(wpopup, false));
    aclosepopup?.addEventListener('click', () => toggleModal(apopup, false));
});


//Button
setTimeout(function(){
    document.getElementById('abtme-button').style.display = 'block';
    document.getElementById('leadership-button').style.display = 'block';
    document.getElementById('achievements-button').style.display = 'block';
    document.getElementById('service-button').style.display = 'block';
}, 5975);

//AbtMe
const abtpopup = document.getElementById('abtme');
const abtclosepopup = document.getElementById('abtme-close');
const toggleModal = (modal, show) => {
        if (modal) modal.style.display = show ? "block" : "none";
    };
function abtopen() {
    abtpopup.style.display = 'block';
}

abtclosepopup?.addEventListener('click', () => toggleModal(abtpopup, false));


//Leadership
const leaframepopup = document.getElementById('leadership-frame');
const leapopup = document.getElementById('leadership');
const leaclosepopup = document.getElementById('leadership-close');
function leaopen() {
   leaframepopup.style.display = 'block';
    leapopup.style.display = 'block';
}

leaclosepopup?.addEventListener('click', () => toggleModal(leaframepopup, false));
leaclosepopup?.addEventListener('click', () => toggleModal(leapopup, false));