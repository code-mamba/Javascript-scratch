// function waitforme(millisec) {
// 	return new Promise(resolve => {
// 	setTimeout(() => { console.log(resolve('s')) }, millisec);
// })
// 	}
	
// 	async function printy() {
//  for (let i = 0; i < 10; ++i) {
// 	 await waitforme(1000);
//  console.log(i);
//  }
//  console.log("end");
// 	}

// 	console.log("start");
// 	printy();
// 	console.log("Loop execution finished!)");



function waitforme(millisec) {
	return new Promise(resolve => {
	setTimeout(() => { resolve('') }, millisec);
})
	}


	async function printy() {
 for (let i = 0; i < 10; ++i) {
	  await waitforme(1000);
 console.log(i);
 }
	
	}

	console.log("Loop execution finished!)");
	printy();
	console.log("Loop execution finished!)");