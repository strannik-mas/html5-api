onmessage = function(event){
	var work_object = {};
	work_object.type = 0;
	
	
	for(var i = 10; i<=event.data; i++){
		work_object.msg = Math.floor(i*100/event.data);
		
		postMessage(work_object);
	}
	
	work_object.msg = "Загрузка завершена";
	work_object.type = 1;
	postMessage(work_object);
};