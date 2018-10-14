$( document ).ready(function() {

    $("#todolistUpdateForm").submit(function(event) {
		event.preventDefault();
		ajaxPut();
	});

	function ajaxPut(){
	    var formData = {
	        id : $("#updateId").val(),
            name : $("#updateName").val(),
            content : $("#updateContext").val()
        }
        var id = $("#updateId").val();

        console.log("formData before PUT: " + formData);

        $.ajax({
        	type : "PUT",
        	contentType : "application/json",
        	url : window.location + "api/todolist/update/" + id,
        	data : JSON.stringify(formData),
        	dataType : 'json',
        	success : function(result) {
        	    if(result.status == "Done"){
                	$("#putResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" +
                							"Post Successfully! <br>" +
                							"---> Customer's Info: Name = " +
                							result.data.name + " ,Content = " +
                							result.data.content + "</p>");
                }else{
                	$("#putResultDiv").html("<strong>Error</strong>");
                }
                console.log(result);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    }
})