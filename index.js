const os = require('os-utils');
const si = require('systeminformation');
const chi = require('child_process');

// define all values, you want to get back
valueObject = {
	currentLoad: "*"
}

function usersCallback(data) {
	if (data.currentLoad.currentload >= 20) {
		//console.log("is over 90")
		//si.services("mysql", (data => {
			//if (data[0].pcpu >= 10) {
				chi.exec('net stop mysql', function (error, stdout, stderr) {
					if (error !== null) {
						console.log('exec error: ' + error);
					}
					setTimeout(function () { chi.exec('net start mysql'); }, 2000);
				});
			//}
		//}))
	}
}

// now define the observer function
si.observe(valueObject, 3000, usersCallback);

//si.services("mysql", (data => console.log(data[0].pcpu)))
/* [
	{
		name: 'mysql',
		running: true,
		startmode: 'Auto',
		pids: ['10788'],
		pcpu: 0,
		pmem: 0
	}
] */

//CPU Usage (%): 0.8726145038167938
/* os.cpuUsage(function(v){
	console.log( 'CPU Usage (%): ' + v );
}); */

/* si.cpu()
    .then(data => console.log(data))
	.catch(error => console.error(error));
	 */
/* function functionName() {
	 return console.log("asdasdas")
}
const asd = si.currentLoad().then(data=>
{
	console.log(data.currentload)
	si.observe(asd,1,functionName)
	
}) */
