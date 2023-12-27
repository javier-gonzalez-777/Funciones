const ele = document.getElementById("ele1")
const pintar=function(color='blue'){
    console.log(color)
    ele.style.backgroundColor = color 
}

ele.addEventListener("click", ()=>{pintar('yellow')})


//function pintar(color = 'green'){
//   function pintar(color){
 //   ele.style.backgroundColor = 'red'
//}

