// let elem  = document.querySelector(".block");
// let h1 = document.createElement("h1");
// h1.innerHTML="jkjjkj";
// elem.appendChild(h1);
// console.log(h1);


let elem  = document.querySelector(".block");
let i = document.querySelector('.inp');
let b = document.querySelector('.but');
// let fafa = document.querySelector('.fafa');
// let gaga = document.querySelector('.gaga');




b.addEventListener('click', function () {

    let y = i.value;

    let div1 = document.createElement("div");
    let p1 = document.createElement("p");
    let btn = document.createElement("button");
    // div1.insertBefore(btn,div1.children[0]);
    div1.classList.add("d1");
    div1.appendChild(btn);
    div1.appendChild(p1);
    p1.innerHTML=i.value;
    if (div1.contains(p1)) {
        if(p1) {
            let arr = (p1.split(''));
            console.log(arr);
        }


    }

    elem.appendChild(div1);
    let btnn = div1.querySelector('button');
    btnn.classList.add("btn2");
    btnn.addEventListener('click', function () {
        elem.removeChild(div1);
    })
    console.log(btnn);
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