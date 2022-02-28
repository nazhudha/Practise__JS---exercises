console.log('test working')

// VERSION ONE uncomment below  --------------

// setTimeout(() => {
//    document.body.style.backgroundColor = "orange";
//    setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "green"
//      }, 1000);
//  }, 1000);
// }, 1000);


// VERSION TWO uncomment below -------------- 

// const newColorDelay = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//      }, delay)
// }

// newColorDelay("green", 1000, () => {
//     newColorDelay("orange", 1000, () => {
//         newColorDelay("blue", 1000, () => {
//         });
//     });
// });


// VERSION THREE & FOURL KEEP THIS CODE =====================
const newColorDelay = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    } )   
};
// VERSION THREE & FOURL KEEP THIS CODE =====================

// VERSION THREE uncomment below (USING PROMISE) ------- 

// newColorDelay ('red', 1000)
//     .then(() => newColorDelay ('orange', 1000))
//     .then(() => newColorDelay ('Yellow', 1000))
//     .then(() => newColorDelay ('Green', 1000))
//     .then(() => newColorDelay ('Blue', 1000))



// VERSION FOUR uncomment below (USING ASYNC & AWAIT) ------- 
const awaitFunction = async () => {
    await newColorDelay ('red', 1000)
    await newColorDelay ('orange', 1000)
    await newColorDelay ('yellow', 1000)
    await newColorDelay ('green', 1000)
   await newColorDelay ('blue', 1000)
   return "ALL done"
}

awaitFunction().then(msg => console.log("End of rainbow: msg = ", msg))

// ASYNC Practise ------- 

const login = async (userName, password) => {
    if(!userName || !password) throw "Missing Credentials"
    if(password === 'password') return 'Welcome! Logged in!'
    throw "invalid Passoword"
};

login('test name', 'password')
    .then(msg => {
        console.log('username Logged IN')
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })