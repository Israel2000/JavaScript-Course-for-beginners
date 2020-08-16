// js way
// window.onload = function () {
//     alert("Hello World!");
//     document.getElementById("blackBox").style.display = "none";
// };


//jquery way
$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
    $("#item").css("background-color", "#ffffc3");
    //    by id
    $("#item").css({ "background-color": "yellow", "font-size": "200%" });
    //   by class
    $(".text-item").css({ "border": "2px", "solid": "green" });
    //  Events
    $("button").click(function () {
        $("div").hide();
    });
    // console
    $("p").click(function (params) {
        console.log("P tag is clicked!")
    })
    // update item
    const $item = $('.item-update');
    const htmlContent = '<p>Hello world</p>'
    $item.html(htmlContent);

});