function book(){
const test= document.querySelector("button")
const dude= document.querySelector("h5")
dude.innerHTML="is this anything?"
}


const sites = [
  {name: "CNN", url: "https://www.cnn.com/world"},
  {name: "NPR", url: "https://www.npr.org/"}
]

let dashboard = document.getElementById("dashboard")

sites.forEach( site => { const card = document.createElement("div");
                        card.classList.add("window");
                        card.innerHTML=`<h3> ${site.name}</h3>
                        <img class="preview" alt="${site.name} preview">
                        <a href="${site.url}" target="_blank">Open</a>`;
                        const img = card.querySelector(".preview");
                        img.src = `https://api.screenshotmachine.com/?key=9863f3&url=${encodeURIComponent(site.url)}&dimension=1024x768`;
                       dashboard.appendChild(card);})
                        
                        
document.body.innerHTML += "<p style='color: lime; font-size: 24px;'>JS is linked!</p>";


const img = card.querySelector(".preview");

