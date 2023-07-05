function deleteClasses() {
    document
        .querySelector(".burger__main-menu")
        .classList.remove("burger__main-menu__active");
    document.querySelector(".sidebar").classList.remove("sidabar__active");
    document
        .querySelector("#sidebar__toggler")
        .classList.remove("sidebar__toggler__active");
}



document.querySelector("#more").onmouseover = function () {
    document.querySelector(".more__area").classList.add("more__area__active");
    document.querySelector(".close__more__area").style.display = "block";
    document.querySelector(".close__more__area").onmouseover = function () {
        document
            .querySelector(".more__area__active")
            .classList.remove("more__area__active");
        document.querySelector(".close__more__area").style.display = "none";
    };
};

document.querySelector("#burger").onclick = function () {
    activeBurger();
};

function activeBurger() {
    document
        .querySelector(".burger__main-menu")
        .classList.add("burger__main-menu__active");
    document.querySelector(".body").classList.add("hidden");
    document.querySelector(".burger__overlay").style.display = "block";
}

document.querySelector(".close").onclick = function () {
    closeBurger();
};

function closeBurger() {
    document
        .querySelector(".burger__main-menu")
        .classList.remove("burger__main-menu__active");
    document.querySelector(".body").classList.remove("hidden");
    document.querySelector(".burger__overlay").style.display = "none";
    document.querySelector(".burger__main-submenu").style.display = "none";
    document.querySelector("#burger-more").style.display = "block";
}



document.querySelector("#burger-more").onclick = function () {
    activeMoreBurger();
};

function activeMoreBurger() {
    document.querySelector(".burger__main-submenu").style.display = "flex";
    document.querySelector("#burger-more").style.display = "none";
}

window.addEventListener("click", function (e) {
    if (
        !document.querySelector("#burger").contains(e.target) &&
        !document.querySelector(".burger__main-menu__active").contains(e.target)
    ) {
        // РќРёР¶Рµ РєРѕРґ, РєРѕС‚РѕСЂС‹Р№ РЅСѓР¶РЅРѕ РІС‹РїРѕР»РЅРёС‚СЊ РїСЂРё СЃСЂР°Р±Р°С‚С‹РІР°РЅРёРё СЃРѕР±С‹С‚РёСЏ.
        document.querySelector(".burger__overlay").style = "display: none";
        document
            .querySelector(".burger__main-menu")
            .classList.remove("burger__main-menu__active");
        document.querySelector(".body").classList.remove("hidden");
    }
});