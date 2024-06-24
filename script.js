document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            alert(" Ola !");
        });
    });

    const openLinksButton = document.getElementById("openLinksButton");
    openLinksButton.addEventListener("click", function() {
        window.open("https://kaemaeasy.com/novidades", "_blank");
        window.open("https://kaemaeasy.com/toda-a-loja", "_blank");
    });
});
