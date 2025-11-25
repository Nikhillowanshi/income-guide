document.addEventListener("DOMContentLoaded", () => {

    const helpBtn = document.querySelector(".help-btn");
    const slideBox = document.querySelector(".slide-box");
    const wrapper = document.querySelector(".wrapper");

    // Toggle open/close on button click
    helpBtn.addEventListener("click", (event) => {
        event.stopPropagation();    // prevent outside click from firing
        slideBox.classList.toggle("active");
    });

    // Click inside slide-box should NOT close it
    slideBox.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Click anywhere outside → close the box
    document.addEventListener("click", () => {
        slideBox.classList.remove("active");
    });

});
