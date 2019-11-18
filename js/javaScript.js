let menuTop = document.querySelectorAll('a[href*="#"]'),
    content = document.querySelectorAll(".starters-inner"),
    menu = document.querySelector(".menu-center"),
    menuLink = document.querySelectorAll(".menu-link__center");



for (let anchor of menuTop) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        let blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};



function hideContent(a) {
    for (let i = a; i < content.length; i++) {
        content[i].classList.remove("show");
        content[i].classList.add("hide");
        menuLink[i].classList.add("active");
        menuLink[i].classList.remove("active");
    };
};
hideContent(1);

function showContent(b) {
    if (content[b].classList.contains("hide")) {
        content[b].classList.remove("hide");
        menuLink[b].classList.add("active");
        content[b].classList.add("show");
    }
};

menu.addEventListener("click", function (e) {
    let target = e.target;
    if (target && target.classList.contains("menu-link__center")) {
        for (let i = 0; i < menuLink.length; i++) {
            if (target == menuLink[i]) {
                hideContent(0);
                showContent(i);
                break;
            }
        }
    }
});