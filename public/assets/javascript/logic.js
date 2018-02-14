$( document ).ajaxError(function( event, jqxhr, settings, exception ) {  
    alert( "Triggered ajaxError handler." );  
});

$(document).ready(function() {
    console.log( "ready!" );

    // eat button
    $(".eat-it").click(function(event) {
    	event.preventDefault();
    	var burgerId = $(this).data("id");
    	var burgerName = $(this).data("name");
    	console.log("Attempting to eat " + burgerName + " id: " + burgerId);
    	var newDevourState = {
    		devoured: true
    	};

    	$.ajax("/api/burger/" + burgerId, {
    		type: "PUT",
    		data: burgerId
    	}).then(function() {
    		console.log("Successfully eaten " + burgerName);
    		location.reload();
    	})
    })

	$(".create-form").on("submit", function(event) {
	    // Make sure to preventDefault on a submit event.
	    event.preventDefault();
	    var newBurger = {
	       	burger_name: $("#burger").val().trim()
	               
	        };
			console.log("added: " + newBurger.burger_name)
	        // Send the POST request.
	        $.ajax("/api/burger", {
	            type: "POST",
	            data: newBurger
	        }).then(
	            function() {
	                console.log("created new burger");
	                // Reload the page to get the updated list
	                location.reload();
	            }
	        );
	    });


});