// const dec = document.querySelector(".dec");
// const inc = document.querySelector(".inc");
// const reset = document.querySelector(".reset");
// const sum = document.querySelector(".sum")

// let count = 0;
// inc.addEventListener("click", () => {
// count ++;
// sum.textContent = count;
// if (count > 0){
//     sum.style.color = "green";
// }else if (count === 0){
//     sum.style.color = "black";
// }
// })
// dec.addEventListener("click", () => {
// count --;
// sum.textContent = count;
// if (count < 0){
//     sum.style.color = "red";
// }else if (count === 0){
//     sum.style.color = "black";
// }
// })
// reset.addEventListener("click", () => {
// count = 0;
// sum.textContent = count;
//  sum.style.color = "black";
// })




const sum = document.querySelector(".sum");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const style = e.currentTarget.classList;
        if(style.contains("dec")){
            count --;
        }else if(style.contains("inc")){
            count ++;
        }else{
            count = 0;
        }
        if (count > 0){
            sum.style.color = "green"
        }
        else if (count < 0){
            sum.style.color = "red"
        } else{
            sum.style.color = "black"
        }
        sum.textContent = count;
    })
})

