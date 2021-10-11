
function route() {
    let hashTag = window.location.hash;
    let pageId = hashTag.replace("#/", "");

    if(pageId == "") {
        MODEL.changePage("home");
    }else {
        MODEL.changePage(pageId);
    }
}

function initListeners() {
    //when the hashtag in the URL changes, run the route function
    $(window).on("hashchange", route);

    //when the hamburger menu is clicked, display the mobile nav
    $("nav .hamburger").click(function(){
        $(".mobile-nav").css("display", "flex");
        $(".mobile-nav").css("animation", "nav-in 1s");
    });

    //when the background of a mobile nav is clicked, remove it
    $("body").on("click", ".mobile-nav", function(e) {
        $(".mobile-nav").css("animation", "nav-out 1s");
        setTimeout(() => {
            $(".mobile-nav").css("display", "none");
        }, 1000);
    });

    //run the route function once when the page loads
    route();
}

$(document).ready(function() {
    initListeners();
    // route();
});