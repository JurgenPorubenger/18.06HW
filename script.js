// let elem  = document.querySelector(".block");
// let h1 = document.createElement("h1");
// h1.innerHTML="jkjjkj";
// elem.appendChild(h1);
// console.log(h1);


let elem  = document.querySelector(".block");
let mainInput = document.querySelector('.inp');
let mainButton = document.querySelector('.but');

mainButton.addEventListener('click', function () {
    let y = mainInput.value;
    let div1 = document.createElement("div");
    let p1 = document.createElement("p");
    let btn = document.createElement("button");
    // div1.insertBefore(btn,div1.children[0]);
    function divAppendChildAndClass() {
        div1.classList.add("d1");
        let allDiv= document.querySelectorAll(".d1");
        div1.appendChild(btn);
        div1.appendChild(p1);
        p1.innerHTML=y;
        elem.appendChild(div1);
        let allDivLenght = allDiv.length;
        let pInDiv1 = div1.querySelector('p');
        pInDiv1.innerHTML= pInDiv1.innerHTML+ ""+allDivLenght;
        for (let i = 0; i<allDivLenght; i++) {
       
        }
    }
    divAppendChildAndClass();
    let smallButton = div1.querySelector('button');
    smallButton.classList.add("btn2");
    smallButton.addEventListener('click', function () {
        elem.removeChild(div1);
        
    })
    
    // if (div1.contains(p1)) {
    //     if(p1) {
    //         let arr = (p1.split(''));
    //         console.log(arr);
    //     }


    // }


    
    // console.log(btnn);
    // elem.insertBefore(h1,elem.children[0]);
    // fafa.removeChild(gaga);
});








// let arr2=[];
// let arr = (y.split(''));
// for (let i = 0; i<arr.length; i++){
//     if (arr[i]>i[0]) {
//         arr[i].push(arr2)
//     }
//     console.log(arr2);
// }