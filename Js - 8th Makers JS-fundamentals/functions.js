const aFunction = () => {
  return 123;
}

const newFunction = (aFunction) => {
    return aFunction()
}

// NEW  ----------->>>>>>
const lowercaseMessage = (msg) => {
  return msg.toLowerCase();
}

const transform = (str, func) => {
  return func(str);
}

transform('WHY ARE YOU SHOUTING?', lowercaseMessage);


// CHALLENGE  ----------->>>>>>

const notifyByEmail = (email) => {
  return `Email sent to ${email}`
}

const notifyByText = (num) => {
  return `Text sent to ${num}`
}

const notify = (input, func) => {
  return func(input) 
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));

setTimeout(notifyByText('+1111'), 3000)


// CHALLENGE  ----------->>>>>>

const printMessage = () => {
  console.log('Hello there');
}

const executeAfterDelay = (delay, func) => {
    return setTimeout(func, delay * 1000)
}

executeAfterDelay(3, printMessage)