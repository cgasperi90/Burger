$(document).ready(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        };
        console.log(newBurger);
        

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New Burger Made!");
            location.reload();
        });
    });

    $(".devour-btn").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);
        var devoured = $(this).data("devoured");

        var newDevoured = {
            devoured: devoured
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(function() {
            console.log("changed devour to", newDevoured);
            location.reload();
            
        })
    });
});