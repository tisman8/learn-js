// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    console.log(this.errMsg);
}

const fakeObject = {
    msg: 'Some message that will not be logged',
    errMsg: 'This message will get logged'
}

const fakeObject2 = {
    propertyThis: 'not gonna get logged',
    errMsg: 'Hello! How are you?'
}

logMsg.call(fakeObject);
logMsg.call(fakeObject2);