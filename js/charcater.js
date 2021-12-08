var character = load_json("/json/characters.json")
function load_json(file){
   var request = new XMLHttpRequest();
   request.open("GET", file, false);
   request.send(null)
   var jason = JSON.parse(request.responseText);
   return jason
}

var link = window.location.href
link = link.slice(link.search("cha=")+4,link.search("cha=")+6)
console.log(link)
for (i = 0; i < character.length; i++){
    if(character[i].hex == link){
        console.log(character[i].name)
        var vare = Object.keys(character[i])
        var a = character[i]
        var link = document.querySelector("link[rel~='icon']");
        link.href = character[i].image
        var text = ""
        for (let x of vare) {
            text += x + ": " + a[x] + "<br>";
        }
        image_creator(character[i].name,character[i].full_image,character[i].rarity,character[i].weapon,character[i].element,character[i].region,text)
        document.title = "Gimpact "+character[i].name

    }
}

function image_creator(name,image_file,rarity,weapon,element,region,json){
    var parent = document.getElementById("character_info")
    var img_container = document.createElement("div")
    var detail_container = document.createElement("div")
    var img = document.createElement("img")
    var h1 = document.createElement("h1")
    var h4 = document.createElement("h4")
    var p =  document.createElement("p")
    h1.innerText = name
    h4.innerText = rarity + " ☆ " + element + " • " + weapon + " • " + region
    p.innerHTML = json
    p.classList.add("roboto-mono")
    detail_container.appendChild(h1)
    detail_container.appendChild(h4)
    detail_container.appendChild(p)
    detail_container.classList.add("detail")
    img.src=image_file
    img_container.appendChild(img)
    img_container.classList.add("full_image")
    parent.appendChild(img_container)
    parent.appendChild(detail_container)
}