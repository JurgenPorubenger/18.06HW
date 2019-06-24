// let elem  = document.querySelector(".block");
// let h1 = document.createElement("h1");
// h1.innerHTML="jkjjkj";
// elem.appendChild(h1);
// console.log(h1);



// let arr2=[];
// let arr = (y.split(''));
// for (let i = 0; i<arr.length; i++){
//     if (arr[i]>i[0]) {
//         arr[i].push(arr2)
//     }
//     console.log(arr2);
// }


// let elem  = document.querySelector(".block");
// let mainInput = document.querySelector('.inp');
// let mainButton = document.querySelector('.but');

// function getDivValue() {
//     let allNumb= document.querySelectorAll(".numb");
//     for (let i=0; i<allNumb.length; i++) {
//         allNumb[i].innerHTML= i+1;
//     }
// }

// mainButton.addEventListener('click', function () {
//     let newDiv = document.createElement("div");
//     let newP = document.createElement("p");
//     let newNumber = document.createElement("p");
//     newNumber.className = "numb";
//     newP.innerHTML=mainInput.value;
//     let btn = document.createElement("button");
//     btn.innerHTML = "delete";

//     elem.appendChild(newDiv);
//     newDiv.appendChild(newP);
//     newDiv.appendChild(newNumber);
//     newDiv.appendChild(btn);
//     getDivValue();

//     btn.addEventListener('click', function () {
//         elem.removeChild(newDiv);
//         getDivValue();
//     })

// });


let result  = document.querySelector(".result");
let mainInput1 = document.querySelector('.inp1');
let mainInput2 = document.querySelector('.inp2');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let divisButton = document.querySelector('.division');
let multButton = document.querySelector('.multiply');

let plusFunc = function() {
    return  this.inp1+this.inp2;
};
let minusFunc = function() {
    return  this.inp1-this.inp2;
};
let divisFunc = function() {
    return  this.inp1/this.inp2;
};
let multFunc = function() {
    return  this.inp1*this.inp2;
};
let obj = {
    inp1 : Number(mainInput1.value),
    inp2 : Number(mainInput2.value),
    ggg: 'ijij',
    plus : plusFunc,
    minus : minusFunc,
    division : divisFunc,
    multipl : multFunc,
};

plusButton.addEventListener('click', function() {
    
    // result.value = obj.plus();
    console.log(obj.inp1);
    // mainInput1.value = obj.plus();
    // mainInput2.value = '';
});
// minusButton.addEventListener('click', function() {
//     result.value = obj.minus();
//     mainInput1.value = obj.minus();
//     mainInput2.value = '';
// });
// divisButton.addEventListener('click', function() {
//     result.value = obj.division();
//     mainInput1.value = obj.division();
//     mainInput2.value = '';
// });
// multButton.addEventListener('click', function() {
//     result.value = obj.multipl();
//     mainInput1.value = obj.multipl();
//     mainInput2.value = '';
// });
