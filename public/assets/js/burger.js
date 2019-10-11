$(".devoir").on("click", function(event){
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type:"PUT"
    }).then(
        function(){
            location.reload();
        }
    )   
})

$("#addBurger").on("click", function(event){
    if($("#newBurgerInput").val().trim() === ""){
        console.log("Empty");
    }else{
        event.preventDefault();
        var newBurger ={
            name: $("#newBurgerInput").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                location.reload();
            }
        )
    }    
    $("#newBurgerInput").val("");

})