const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const newWords = words.filter(word=>word.length>6)
console.log(newWords)

function isBigEnough(value){
	return value>10
}

console.log([1,2,3,4,5,10,11].filter(isBigEnough))


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrimeNum(value){
	for(let i =2;value>i;i++){
		if(value%i==0){
			return false
		}
		else{
			return value>1
		}
	}
}

console.log(array.filter(isPrimeNum))
const arr = [ { id: 15 },
	{ id: -1 },
	{ id: 0 },
	{ id: 3 },
	{ id: 12.2 },
	{},
	{ id: null },
	{ id: NaN },
	{ id: "undefined" },]


const validNumbers = arr.filter(validNum=>validNum.id!=0 && isFinite(validNum.id) && validNum.id>0) 
console.log(validNumbers)

const inValidNumbers = arr.filter(Number=>Number.id<0&& (Number.id==null||Number.id == NaN||Number.id == undefined))
console.log(inValidNumbers)

const Words = ["spray", "limit", "exuberant", "destruction", "elite", "present"]
const filteredWords = words.filter(word=>word.includes("e"))
console.log(filteredWords)

const numbers = [25, 50, 75];

const numGreaterThan50 = numbers.filter(number=>number>=50)
console.log(numGreaterThan50)


array1 = [1,2,3,45,6,7,9,4,5,7,36,60]

const returnsEven = array1.filter(arr=>arr%2==0)
console.log(returnsEven)


const wording = ["dog", "wolf", "by", "family", "eaten", "camping"]

function fiveCharactersOfWords(array){
	const NewArray = array.filter(arr=>arr.length>5)
	console.log(NewArray)
}
fiveCharactersOfWords(wording)


function peopleWhoBelongToIlluminati(array){
	const filtered = array.filter((arr)=>arr.member==true)
	console.log(filtered)
}

peopleWhoBelongToIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
])


function ofAge(array){
	const filteredArray = array.filter(arr=>arr.age>18)
	console.log(filteredArray)
}

ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])
