// let elem  = document.querySelector(".block");
// let h1 = document.createElement("h1");
// h1.innerHTML="jkjjkj";
// elem.appendChild(h1);
// console.log(h1);


let elem  = document.querySelector(".block");
let mainInput = document.querySelector('.inp');
let mainButton = document.querySelector('.but');

// let allDivLenght = allDiv.length;
// let p1;
// let btn;
// let inpVal;
// let allDiv;
// let div1;


// let allDiv= document.querySelectorAll(".d1");


// let pInDiv1 = div1.querySelector('p');

//
function getDivValue() {
    let allNumb= document.querySelectorAll(".numb");
    for (let i=0; i<allNumb.length; i++) {
        allNumb[i].innerHTML= i+1;
        // return p1.innerHTML=p1.innerHTML+ "5555";
    }
}

mainButton.addEventListener('click', function () {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newNumber = document.createElement("p");
    newNumber.className = "numb";
    newP.innerHTML=mainInput.value;
    let btn = document.createElement("button");
    btn.innerHTML = "delete";

    elem.appendChild(newDiv);
    newDiv.appendChild(newP);
    newDiv.appendChild(newNumber);
    newDiv.appendChild(btn);
    getDivValue();

    btn.addEventListener('click', function () {
        elem.removeChild(newDiv);
        getDivValue();
    })

});













// let arr2=[];
// let arr = (y.split(''));
// for (let i = 0; i<arr.length; i++){
//     if (arr[i]>i[0]) {
//         arr[i].push(arr2)
//     }
//     console.log(arr2);
// }

// if (div1.contains(p1)) {
//     if(p1) {
//         let arr = (p1.split(''));
//         console.log(arr);
//     }


// }

// let y = mainInput.value;

// div1.insertBefore(btn,div1.children[0]);