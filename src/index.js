
document.addEventListener("DOMContentLoaded", function getDogs(e){
  fetch ("http://localhost:3000/pups")
    .then(r => r.json())
    .then(data => addDogArray(data))
    

})

function addDogArray(data){
  for (let i = 0; i < data.length; i++)
  // console.log(data[i].name)
  addDogSpan(data[i])
  
}
function addDogSpan(dog){
  const dogBar = document.querySelector("#dog-bar")
  const dogSpan = document.createElement("span")
 
  dogSpan.innerText = dog.name
  dogSpan.dataset.id = dog.id
  // dogSpan.dataset.class = "dog-names"
  dogBar.append(dogSpan)
}

function dogClick(){
const spans = document.querySelector('#dog-bar')
spans.addEventListener('click', displayInfo)

// for(i=0; i<spans.length;i++){
//   spans[i].onclick = displayInfo;
//  }


function displayInfo(){
  console.log("woof")
}

}