/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

/*---------------------- This is the Tab of Content ----------------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*---------------------- This is the Toolbar Menu for Phone ----------------------*/
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

/*---------------------- This is the Google Doc script ----------------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbztRUKHRG4WEmZYJnVDSqSB6DHKSajKOsDHy0guJNV-CsU2SCqjHUPstrFPcJKYlVJn/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: "POST", body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message Sent Successfully";
                setTimeot(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
});


