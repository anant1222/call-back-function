function greeting(name){
  console.log('Hello',name)
}

function run(callback){
  var name = 'Anant'
  callback(name);
}

run(greeting)
