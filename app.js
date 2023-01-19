const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

function comapreValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = "Congratulations! Your Birth Day is Lucky🎁";
  } else {
    output.innerText =
      "oopss! Your Birth Day is not lucky according to the programme...🤷‍♀️";
  }
}

function validateBirthDayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  comapreValues(sum, luckyNumber.value);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumber.addEventListener("click", validateBirthDayIsLucky);
