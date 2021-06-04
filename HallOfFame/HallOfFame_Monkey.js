
wait();

async function getInventory(){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Monkey');
        }, 2000);
    });
};

async function wait(){
    let result = await getInventory();
    console.log(result);
};