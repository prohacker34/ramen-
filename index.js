
body=document.body
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu (1).jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "naruto", restaurant: "Menya", image:"images/naruto (1).jpg " , rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "nirvana", restaurant: "Ramen-ya", image: "images/nirvana (1).jpg"}
 ];


function displayRamens(){let ramenMenu=document.getElementById("ramen-menu")
    console.log(ramenMenu)


    ramens.forEach(function(ramen){
        let name = `<img src="${ramen.image}"alt="${ramen.name}"height = 100px width= 100px>`
        ramenMenu.innerHTML +=name })}
displayRamens()

function handleClick(event) {
let ramenDetails = document.querySelector("#ramen-details")
console.log(ramenDetails);
ramenDetails.addEventListener('click',()=>displayImage(div))
event.target.ramenDetails

}
function displayImage(div) {div.displayImage(image)



}
handleClick()

function submitListener(){ form=document.querySelector("form")
    console.log(form);
    form.addEventListener('submit',()=>displayImage(form))}
function displayImage(form) {form.display(image)

}



































