const isOk = false;

const init = (duration = 200) => {

  return new Promise((resolve, reject) => {

      setTimeout(() => {
        if(isOk){
          resolve({id: 1, fname: 'Neil', lname: 'Coutinho'});
        } else{
          reject(new Error('Something went wrong'));
        }

      }, duration);

  });



}
const start = async function(){
  try{
  	let data = await init(2000);
    console.log(data);
  } catch(e) {
  	console.log(e);
  }

  console.log('in the end')


};

start();
