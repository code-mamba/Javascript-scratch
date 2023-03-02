const states = 'ENUGU ABIA SOKOTO NIGER LAGOS OGUN BAYELSA AKWAIBOM ANAMBRA IMO EBONYI'.split(' ')
const routes =[
	['ENUGU', 'LAGOS'],
	['ENUGU', 'NIGER'],
	['NIGER', 'SOKOTO'],
	['NIGER', 'ANAMBRA'],
	['SOKOTO', 'ANAMBRA'],
	['OGUN', 'LAGOS'],
	['OGUN', 'ABIA'],
	['OGUN', 'EBONYI'],
	['OGUN', 'BAYELSA'],
	['EBONYI', 'ABIA'],
]
const connections = new Map()

states.forEach(state=>connections.set(state,[]))
console.log(connections)

routes.forEach(route=>{
	const departure = [...route][0]
	const destination = [...route][1]
	connections.get(destination).push(departure)
	connections.get(departure).push(destination)
})
console.log(connections)