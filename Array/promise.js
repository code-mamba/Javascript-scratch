// function getUser(){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve([
// 				{ username: 'john', email: 'john@test.com' },
// 				{ username: 'jane', email: 'jane@test.com' },
// 			])
// 		},2000)
// 	})
// }

// function onFullFilled(users){
// 	console.log(users)
// }
// const promise = getUser();

// promise.then(onFullFilled)

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");