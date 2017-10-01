function getNumber(){
	return 1000000000;
}
onmessage = function(){
	console.log(1);
	postMessage(getNumber());
};