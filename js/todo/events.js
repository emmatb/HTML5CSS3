$(document).ready(function(){
	$("#add-task-form").on("submit", function(event){
 	var task = $("#task").val();
 	APIClient.addTask({"task": task}, function(data){console.log("TASK SAVED!", data)}, function(data){console.log("TASK ERROR!", data)});
 	reloadTasks();
 	return false; // return false == event.preventDefault();
 });
 $("#tasks-list").on("click", ".deleteTask", function(evt) {
		var task = {id: $(this).parent().data("taskId")};
		APIClient.deleteTask(task, function(data){console.log("TASK DELETED!", data)}, function(data){console.log("TASK DELETED ERROR!", data)})
	})
 $("#tasks-list").on("blur", "input", function(evt) {
		var task = {
			id: $(this).parent().data("taskId"),
			task: $(this).val()
		};
		APIClient.updateTask(task, function(data){console.log("TASK UPDATED!", data)}, function(data){console.log("TASK UPDATE ERROR!", data)})
	})
});