const button = document.querySelector("#upgrade_plan_button");

button.addEventListener("click", () => {
    window.location.href = "./upgrade.html";
});

const aside = document.querySelector("aside");
    const openBtn = document.querySelector(".aside-button");
    const closeBtn = document.querySelector(".aside-cross-button");

    openBtn.addEventListener("click", () => {
        aside.style.display = "flex";
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        aside.style.display = "none";
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    });