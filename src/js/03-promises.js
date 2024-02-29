import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromise = document.querySelector('.form');

formPromise.addEventListener('submit', e => {
  e.preventDefault();
  // let delayValue = evt.currentTarget.delay.value;
  // let stepValue = evt.currentTarget.step.value;
  // let amountValue = evt.currentTarget.amount.value;

  for (let i = 0; i < e.currentTarget.amount.value; i++) {
    let position = i + 1;

    let passedStep =
      Number(e.currentTarget.delay.value) +
      Number(e.currentTarget.step.value) * i;
    createPromise(position, passedStep)
      .then(value => {
        Notify.success(value);
      })
      .catch(value => {
        Notify.failure(value);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}