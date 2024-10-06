// JavaScript function to handle tab switching
function showCategory(category) {
    // Hide all project categories
    var categories = document.getElementsByClassName("project-category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].classList.remove("active-category");
    }

    // Remove active class from all buttons
    var tabs = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Show selected category
    document.getElementById(category).classList.add("active-category");

    // Set the clicked tab to active
    event.currentTarget.classList.add("active");
}