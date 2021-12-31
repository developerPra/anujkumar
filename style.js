// document.querySelector('.color-switcher-btn').onclick = () => {
//     document.querySelector('.color-switcher').classList.toggle('active');
// };

// let themeButtons = document.querySelectorAll(".theme-buttons");
// themeButtons.forEach(color => {
//     color.addEventListener("click", () => {
//         let dataColor = color.getAttribute('data-colors');
//         document.querySelector(":root").style.setProperty("--main-color", dataColor);
//     });
// });


$(document).ready(function () {
    $(".color-switcher-btn").on("click", function () {
        $(".color-switcher").toggleClass("active");
    });

    $(".theme-buttons").on("click", function () {
        let dataColor = $(this).attr("data-colors");
        $(":root").css("--main-color", dataColor);
    });
});
