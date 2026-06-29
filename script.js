function book(){
const test= document.querySelector("button")
const dude= document.querySelector("h5")
dude.innerHTML="is this anything?"
}


const sites = [
  {name: "CNN", url: "https://www.cnn.com/world"}]

let dashboard = document.getElementById("dashboard")

sites.forEach( site => { const card = document.createElement("div");
                        card.classList.add("window");
                        card.innerHTML=`<h3> ${site.name}</h3>
                        <img class="preview" alt="${site.name} preview">
                        <a href="${site.url}" target="_blank">Open</a>`;
                        img.src = `https://screenshotmachine.com/screenshot?url=${encodeURIComponent(site.url)}&key=9863f3`;
                       dashboard.appendChild(card);})
                        
                        
document.body.innerHTML += "<p style='color: lime; font-size: 24px;'>JS is linked!</p>";


const img = card.querySelector(".preview");

