function toggleMenu() {
    const navlist = document.getElementById("navlist");
    const hamburger = document.querySelector(".hamburger");

    // Toggle the active class on the navlist
    navlist.classList.toggle("active");

    // Toggle the hamburger icon to indicate open or close
    if (navlist.classList.contains("active")) {
        hamburger.innerHTML = "&times;";  // Change to 'X' icon when open
    } else {
        hamburger.innerHTML = "&#9776;";  // Change back to hamburger icon when closed
    }
}