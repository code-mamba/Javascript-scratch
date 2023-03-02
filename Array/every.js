// every()
const isEverybeloww40 = (currentValue)=>currentValue<40
array1=[10, 30, 39, 29, 10, 13]
console.log(array1.every(isEverybeloww40))

const isBigEnough = (currentValue)=>currentValue>=10
const array2 =[1,2,3,4,5,6]
console.log(array1.every(isBigEnough))
console.log(array2.every(isBigEnough))

