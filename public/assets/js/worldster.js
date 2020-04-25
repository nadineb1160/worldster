$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newCountry = {
            country_name: $("#country").val().trim(),
            visited: $("[name=visited]:checked").val().trim()
        }
        console.log(newCountry);
        $.ajax("api/country", {
            type: "POST",
            data: newCountry
        }).then(
            function() {
                console.log("changes country to", newCountry);
                location.reload();
            }
        );
    });
    
    $(".change-visited").on("click", function(event) {
        var id = $(this).data("id");
        var newVisted = $(this).data("newvisited");

        var newVisitedState = {
            visited: newVisted
        };

        $.ajax("/api/country/" + id, {
            type: "PUT",
            data: newVisitedState
        }).then(
            function() {
                console.log("change visited to", newVisted);

                location.reload();
            }
        );
    });

    $(".delete-country").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/country/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("delete country", id);

                location.reload();
            }
        );
    });

});

