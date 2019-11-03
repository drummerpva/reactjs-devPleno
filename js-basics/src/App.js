import React, {useEffect} from 'react';

//callback - função - vai ser chamada no futuro
//promise
//async - await - açúcar sintático

const setTimeoutPromise = (time, text) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(text);
    resolve();
  }, time);
});

const func = async () => {
  await setTimeoutPromise(2000, 'Olá 1');
  await setTimeoutPromise(1000, 'Olá 2');
  await setTimeoutPromise(1000, 'Olá 3');
  await setTimeoutPromise(1000, 'Olá 4');
  return "Douglas Poma";
};

function App() {
  useEffect(() => {
    func();


    /* setTimeoutPromise(2000, 'Olá 1')
      .then(() => setTimeoutPromise(1000, 'Olá 2'))
      .then(() => setTimeoutPromise(1000, 'Olá 3'))
      .then(() => setTimeoutPromise(1000, 'Olá 4')); */

    /* setTimeout(() => {
      console.log('Olá 1');
      setTimeout(() => {
        console.log("Olá 2");
      }, 1000);
    },2000); */
  });

  return (
    <div>
      <h1>Douglas Poma</h1>
    </div>
  );
}

export default App;
