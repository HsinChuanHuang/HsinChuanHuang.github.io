// let myVariable = document.querySelector('h2');
// alert('4 * 7 = ' + multiply(4,7));
// alert('20 * 20 = ' + multiply(20,20));
// alert('0.5 * 3 = ' + multiply(0.5,3));

// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');
// } else {
//   alert('Awww, but chocolate is my favorite');
// }

// document.querySelector('html').onclick = function() {
//   alert('又點...又...又...又點滑鼠 = =!');
// }

//圖片變換器
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rex.jpeg') {
      myImage.setAttribute ('src', 'images/Jerry.png');
    } else {
      myImage.setAttribute ('src', 'images/rex.jpeg');
    }
}


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null){
    setUserName();
  }else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '你好, ' + myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '你好, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
