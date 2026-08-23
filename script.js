// ***************************** For navigation menu for mobile ************************

const menubtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");

menubtn.addEventListener("click",function(){
    navlinks.classList.toggle("show");
});

// ************************* For Form fill Message *******************************

const form = document.getElementById("contactform");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("Name").value;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        alert("🎉 Thank you, " + name + "! 😊\n\nYour message has been submitted successfully. ✅");
        form.reset();
    })
    .catch(() => {
        alert("Something went wrong.");
    });
});




/* *********************************************************************** */
/* Ai Video Tab Gallery */

const watchDemo = document.getElementById("watchDemo");

watchDemo.addEventListener("click", function () {
    window.location.href = "videos.html";
});



/* *********************************************************************** */
/* Video Editing Video Tab Gallery */

const editingDemo = document.getElementById("editingDemo");

editingDemo.addEventListener("click", function () {
    window.location.href = "editing.html";
});