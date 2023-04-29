import { Notify } from 'notiflix/build/notiflix-notify-aio';
function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
     if (shouldResolve) {
    res({position, delay})
  } else {
    rej({position, delay})
  }
  }, delay)
 })
}
const form = document.querySelector('.form')
const delayInput = document.querySelector('[name="delay"]')
const stepInput = document.querySelector('[name="step"]')
const amountInput = document.querySelector('[name="amount"]')
form.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault()
  const amount = Number(amountInput.value)
  const delay = Number(delayInput.value)
  const step = Number(stepInput.value)
  for (let index = 0; index < amount; index += 1) {
    const promise = createPromise(index + 1, delay + step*index);
    promise
      .then(({ position, delay }) => { Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); })
      .catch(({ position, delay }) => { Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); })
  }
  event.currentTarget.reset()
}