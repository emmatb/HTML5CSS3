function reloadTasks() {
	APIClient.getTasks(function(data){
		console.log("TASK LIST!", data);
 			var html = "";
 			for (var i in data) {
 				var task = data[i];
 				html += "<li data-task-id='" + task.id + "'  data-task-text='" + task.task + "'> <input type='text' value='" + task.task + "'/><button class='deleteTask'>Delete</button>" +"</li>";
 			}
 			$("#tasks-list").html(html);
 		}, function(data) {
 			console.log("TASK LISTS ERROR!", data);
 	});
}