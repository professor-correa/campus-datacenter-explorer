class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    closeMenu() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.navLinks.forEach((link) => {
            link.addEventListener("click", () => this.closeMenu());
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
            console.log("Working")
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu-trigger", 
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();