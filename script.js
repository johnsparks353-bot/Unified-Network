function book(){
const test= document.querySelectorAll(button)
const dude= document.querySelector(h5)
test.innerHTML="is this anything?"
}


const sites = [
  {name: "CNN", url: "https://www.cnn.com/world"}]

let dashboard = document.getelementbyClass("dashboard")

sites.ForEach( site => { const card = document.createElement("div");
                        card.classlist.add("window");
                        card.innerHTML(`<h3> ${sites.name}</h3>
                        <img class="preview" alt="${site.name} preview">
                        <a href="${site.url}" target="_blank">Open</a>`})
                        
                        
