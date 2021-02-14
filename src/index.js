const renderDropdownMenus = function () {
    // Applies classes to each element of the menu
    const dropdowns = document.querySelectorAll(".dropdown-menu");
    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i]
            .querySelector("button")
            .classList.add("dropdown-open-button");
        dropdowns[i].querySelector("ul").classList.add("dropdown-list");
        dropdowns[i].querySelector("ul").style.display = "none"; // Menu initally set to NOT be visible
        const listButtons = dropdowns[i].querySelectorAll("li");
        for (j = 0; j < listButtons.length; j++) {
            listButtons[j].classList.add("dropdown-list-button");
        }
    }
};

const clearDropdownMenus = function () {
    // Clears all open dropdown menus
    const dropdownLists = document.querySelectorAll(".dropdown-list");
    for (k = 0; k < dropdownLists.length; k++) {
        dropdownLists[k].classList.remove("show");
        dropdownLists[k].style.display = "none"; // Sets menu to NOT be visible
    }
};

const dropdown = (function () {
    renderDropdownMenus();
    document.addEventListener("mousedown", function (e) {
        if (
            e.target.matches(".dropdown-open-button") &&
            !e.target.parentNode.querySelector("ul").matches(".show")
        ) {
            clearDropdownMenus();
            e.target.parentNode.querySelector("ul").classList.add("show");
            e.target.parentNode.querySelector("ul").style.display = "";
        } else {
            clearDropdownMenus();
        }
    });
})();
