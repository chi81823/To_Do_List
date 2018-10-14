$( document ).ready(function() {
    $(function () {
        $.ajax({
        	type : "GET",
        	url : window.location + "api/todolist/all",
        	success: function(result){
                $.each(result.data, function(index, todolist){
                    var toDoListRow = '<tr>' + index +
                                      '<td>' + todolist.id + '</td>' +
                                      '<td>' + todolist.name + '</td>' +
                                      '<td>' + todolist.content + '</td>' +
                                      '<td>' +
                                      '<input type="hidden" id="deleteId" value=' + todolist.id + '>' +
                                      '<a>' + '<button type="submit" >Delete</button>' + '</a>' +
                                      '</td>' + '</tr>';
                    $('#toDoListTable tbody').append(toDoListRow);
                });
        	},
        	error : function(e) {
        		alert("ERROR: ", e);
        		console.log("ERROR: ", e);
        	}
        });
     });

    $(document).on("click","a",function() {
        var todolistId = $(this).parent().find("#deleteId").val();
        var workingObject = $(this);

        $.ajax({
            type : "DELETE",
            url : window.location + "api/todolist/delete/" + todolistId,
            success: function(resultMsg){
            $("#resultMsgDiv").html("<p style='background-color:#67597E; color:white; padding:20px 20px 20px 20px'>" +
                                         "ToDoList with Id=" + todolistId +
                                         " is deleted successfully!" + "</p>");

            workingObject.closest("tr").remove();
            },
            error : function(e) {
                alert("ERROR: ", e);
                console.log("ERROR: ", e);
            }
        });
    });

	$("#getAllToDoListId").click(function(event){
		event.preventDefault();
		ajaxGet();
	});

	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "api/todolist/all",
			success: function(result){
                if(result.status == "Done"){
                    $('#getResultDiv ul').empty();
                    var custList = "";
                    $.each(result.data, function(i, todolist){
                        var todolist = "- ToDoList with Id = " + i + ", name = " + todolist.name + ", content = " + todolist.content + "<br>";
                        $('#getResultDiv .list-group').append(todolist)
                    });
                    console.log("Success: ", result);
                }else{
                    $("#getResultDiv").html("<strong>Error</strong>");
                    console.log("Fail: ", result);
                }
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});
	}
})