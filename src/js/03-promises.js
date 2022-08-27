import Notiflix from 'notiflix';

const formSubmit = document.querySelector(".form")
const inputdelay = document.querySelector('[name="delay"]')
const inputstep = document.querySelector('[name="step"]')
const inputamount = document.querySelector('[name="amount"]')

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise ((resolve, reject)=>{
  setTimeout(() => {
  if (shouldResolve) {
    resolve({position, delay});

  } else {
    reject({position, delay});
 
  }
  }, delay);
});
};

formSubmit.addEventListener("submit", onFromSubmit)


function onFromSubmit (e){
  e.preventDefault()
  let delay = +inputdelay.value;
  let step = +inputstep.value;
  let amount = +inputamount.value;

  for(let position = 1; position <= amount; position +=1){
    createPromise(position,delay)
    .then(({position, delay}) =>{
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) =>{
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay+=step;
  };
  return;
  
}