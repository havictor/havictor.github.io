
$(".navbar-burger").on("click", function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
})

$("#submitEmail").on("click", function() {
    //add firebase addon later?
    alert("Email servers down, please email manually to victorha@gmail.com")

})

$("#cancel").on("click", function() {
    var clear=confirm("Are you sure you want to clear all?");
    if (clear=true) {
        $("#name").val("");
        $("#email").val("");
        $("#emailMessage").val("");
    }
})