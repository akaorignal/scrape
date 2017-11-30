get.JSON("/all", function(data){
    console.log(data);
    for (var i=0; i< data.length; i++) {
        $("#results").append("<div>"+ data[i]+ "</div>");
    }
}

)