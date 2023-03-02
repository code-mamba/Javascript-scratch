

function helloname(array){
	array.forEach(arr=>console.log('Hello',arr))
}

helloname(['John', 'Sara', 'Jack'])

function CopyItem(array){
	const emptyArr = []
	array.forEach(arr=>emptyArr.push(arr))
	console.log(emptyArr)
}
CopyItem(['John', 'Sara', 'Jack'])

