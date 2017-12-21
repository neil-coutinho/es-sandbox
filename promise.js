const isOk = true;

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

const start = () => {
  init(2000).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });

  console.log('in the end');
}



start();
