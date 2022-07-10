const password = "ILoveCoding123";

if (password.length >= 10){
    console.log("success")
} else {
    console.log("failure")
}

function onlyLettersandNumbers(password){
    return /^[A-Za-z0-9]*$/.test(password);
}

console.log(onlyLettersandNumbers(password))