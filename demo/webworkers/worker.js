//подключение файлов
importScripts("numbers.js");

// worker.js - сам файл - объект Worker, поэтому можно сразу обращаться к его методам

onmessage = function (event) {
    //сообщение в event.data
    if(typeof event.data == "string")
        postMessage("Hello from worker " + event.data + "!");
    else{
		//только для Firefox
		var worker = new Worker("numbers.js");
		worker.onmessage = function(event){
			someLoop(event.data);
		}
		//эта строка перезаписывается
		worker.postMessage("");
		
	}
        
};

function someLoop(n) {
      for (var x = 1; x <= n; ++x);
      postMessage('Цикл закончен') ;
    }