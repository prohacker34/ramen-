body=document.body
body.style.display='flex'
body.style.justifySelf='center'
body.style.flexDirection='column'

h1 =document.querySelector('h1')
h1.style.backgroundColor='black'
h1.style.color='white'
h1.style.length='500px'



const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu (1).jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "naruto", restaurant: "Menya", image:"images/naruto (1).jpg " , rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "nirvana", restaurant: "Ramen-ya", image: "images/nirvana (1).jpg"}
 ];

function displayRamens(){let ramenMenu=document.getElementById("#ramen-menu")
    console.log(ramenMenu)

    ramens.forEach(function(ramen){
        let name = `<img src="${ramen.image}"alt="${ramen.name}"height = 100px width= 100px>`
        ramenMenu.innerHTML +=name })}
displayRamens()


function handleClick() {document.addEventListener('DOMContent loaded',()=>{
    document.querySelector('form').addEventListener('submit',(event)=>{
        event.preventDefault( )
} )})



}


function submitListener() { document.querySelector("#ramen-details").addEventListener('submit'(
    (e)=>{addNewRamenImage(  )}
))

}
































