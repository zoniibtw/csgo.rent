const util = require('util');

async function getInventory(){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Monkey');
        }, 2000);
    });
};

async function wait(){
    let result = await getInventory();
    return result;
};


let unresolved = new Array();
for(let i = 0; i < 10; i++){
    unresolved.push(wait());
}

let promise = Promise.all(unresolved).then((values) => {
    console.log(values);
});


