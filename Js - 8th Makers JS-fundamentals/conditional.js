const getNumberSign = (num) => {
  if(num <0) {
    return 'zero'
  } else if(num > 0) {
    return 'positive'
  } else {
    return 'zero'
  }
};

getNumberSign(1);
getNumberSign(0);
getNumberSign(-1);


const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
}

module.exports = isValidLength;