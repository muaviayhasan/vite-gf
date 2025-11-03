import $ from "jquery";

$(document).ready(function() {
  $(document).on("click", ".sidebar-dropdown .child", function(e) {
    $(".sidebar-submenu.settings").slideDown();
  });

  $(document).on("click", ".sidebar-dropdown .slider-toggle", function() {
    if (
      $(this)
        .next(".sidebar-submenu")
        .hasClass("active")
    ) {
      $(this)
        .next(".sidebar-submenu")
        .slideUp();
      $(this)
        .next(".sidebar-submenu")
        .removeClass("active");
    } else {
      $(this)
        .next(".sidebar-submenu")
        .slideDown();
      $(this)
        .next(".sidebar-submenu")
        .addClass("active");
    }
  });

  $("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
  });
});
