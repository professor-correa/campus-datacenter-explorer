let access_icon = document.getElementsByClassName("accessibility-icon")[0];
let access_open = document.getElementsByClassName("accessibility-open")[0];

let html = document.getElementById("html");
let plus = document.getElementById("plus-sign");
let minus = document.getElementById("minus-sign");
let close = document.getElementById("close");
let overlay = document.getElementById("overlay");
let bar = document.getElementsByClassName("bar")[0];

access_icon.addEventListener("click", () => {

    if (access_open.style.display == "") {
        access_icon.style.display = "none";
        access_open.style.display = "flex";

        overlay.style.display = "flex";
        overlay.style.zIndex = "2147483645";
    }
});

function closeMenu() {
    access_open.style.display = "";
    access_icon.style.display = "flex";

    overlay.style.zIndex = -1;
};

close.addEventListener("click", () => {
    closeMenu();
});

overlay.addEventListener("click", () => {
    closeMenu();
})

plus.addEventListener("click", () => {

    if (html.style.fontSize == "16px") {
        html.style.fontSize = "18px";
        bar.style.setProperty('--length', '35%');
        plus.style.cursor = "pointer"
        minus.style.cursor = "pointer"
    } else if (html.style.fontSize == "18px") {
        html.style.fontSize = "20px";
        bar.style.setProperty('--length', '70%');
        plus.style.cursor = "pointer"
    } else if (html.style.fontSize == "20px") {
        html.style.fontSize = "22px";
        bar.style.setProperty('--length', '100%');
        plus.style.cursor = "default"
    }
});

minus.addEventListener("click", () => {

    if (html.style.fontSize == "22px") {
        html.style.fontSize = "20px";
        bar.style.setProperty('--length', '70%');
        plus.style.cursor = "pointer"
    } else if (html.style.fontSize == "20px") {
        html.style.fontSize = "18px";
        bar.style.setProperty('--length', '35%');
    } else if (html.style.fontSize == "18px") {
        html.style.fontSize = "16px";
        bar.style.setProperty('--length', '10%');
        minus.style.cursor = "default"
        plus.style.cursor = "pointer"
    }
});

let monochromatic = document.getElementById("monochromatic");
let high_saturation = document.getElementById("high-saturation");
let low_saturation = document.getElementById("low-saturation");
let high_contrast = document.getElementById("high-contrast");
let lower_contrast = document.getElementById("lower-contrast");

let btn_access = document.querySelectorAll('.btn-accessibility');
btn_access.forEach(btn => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('btn-active');

    btn_access.forEach(b => b.classList.remove('btn-active'));

    if (!isActive) {
      btn.classList.add('btn-active');
    }
  });
});

function removeClasses() {
    html.classList.remove("high-saturation", "low-saturation", "monochromatic");
};

function removeContrast() {
    let lowerContrast = document.getElementById("lower_contrast");
    let highContrast = document.getElementById("high_contrast");

    if (lowerContrast != null) {
        lowerContrast.remove();
    } else if (highContrast != null) {
        highContrast.remove();
    }
}

monochromatic.addEventListener("click", () => {
    removeContrast();
    html.classList.remove("high-saturation", "low-saturation");
    html.classList.toggle('monochromatic');
});

high_saturation.addEventListener("click", () => {
    removeContrast();
    html.classList.remove("low-saturation", "monochromatic");
    html.classList.toggle('high-saturation');
});

low_saturation.addEventListener("click", () => {
    removeContrast();
    html.classList.remove("high-saturation", "monochromatic");
    html.classList.toggle('low-saturation');
});

high_contrast.addEventListener("click", function () {
    let highContrast = document.getElementById("high_contrast");

    if (!highContrast) {
        removeContrast();
        removeClasses();

        highContrast = document.createElement("style");
        highContrast.id = "high_contrast";
        highContrast.innerHTML = `
        * {
        color: yellow !important;
        background-color: var(--grey-c1000) !important;
        }
        `;
        document.head.appendChild(highContrast);
    } else {
        highContrast.remove();
    }
});

lower_contrast.addEventListener("click", function () {
    let lowerContrast = document.getElementById("lower_contrast");

    if (!lowerContrast) {
        removeContrast();
        removeClasses();

        lowerContrast = document.createElement("style");
        lowerContrast.id = "lower_contrast";
        lowerContrast.innerHTML = `
        * {
        color: #5C4033 !important;
        background-color: #F5DEB3 !important;
        }
        `;
        document.head.appendChild(lowerContrast);
    } else {
        lowerContrast.remove();
    }
});