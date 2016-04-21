var APIClient = {
	getTasks: function(successCallback, errorCallback) {
		$.ajax({
 		url: "/api/tasks/",
 		contentType: "application/json",
 		success: successCallback,
 		error: errorCallback
 	 });
	},
	addTask: function(task, successCallback, errorCallback) {
		$.ajax({
 		type: "post",
 		data: JSON.stringify(task),
 		url: "/api/tasks/",
 		contentType: "application/json",
 		success: successCallback,
 		error: errorCallback
 	})
	},
	updateTask: function(task, successCallback, errorCallback) {
		$.ajax({
 		type: "put",
 		data: JSON.stringify(task),
 		url: "/api/tasks/"+ task.id,
 		contentType: "application/json",
 		success: successCallback,
 		error: errorCallback
 	})
	},
	deleteTask: function(task, successCallback, errorCallback) {
		$.ajax({
 		type: "delete",
 		url: "/api/tasks/"+ task.id,
 		contentType: "application/json",
 		success: successCallback,
 		error: errorCallback
 	})
	}
};