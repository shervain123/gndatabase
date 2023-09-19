var artifact = load_json("json/artifact.json")
var domain = load_json("json/domain.json")
domain_detail()
function load_json(file){
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null)
    var jason = JSON.parse(request.responseText);
    return jason
 }

function artifact_container(name,img){
    var continer_img = document.createElement("div")
    var continer_text = document.createElement("div")
    var image = document.createElement("img")
    var text = document.createElement("p")
    var continer = document.createElement("div")

    text.innerText = name
    continer_text.appendChild(text)

    image.src = img
    continer_img.appendChild(image)

    continer.appendChild(continer_img)
    continer.appendChild(continer_text)
    continer.classList.add("artifact")
    return continer
}

function domain_detail(){
    var mondstadt_container = document.getElementById("domain_mondstadt")
    var liyue_container = document.getElementById("domain_liyue")
    var inazuma_container = document.getElementById("domain_inazuma")
    var sumeru_container = document.getElementById("domain_sumeru")
    for(var i = 0; i < domain.length; i++){
        if(domain[i].type == "artifact"){
            var do_container = document.createElement("div")
            var title = document.createElement("h3")
            var detail_main = document.createElement("div")
            var img_container = document.createElement("div")
            var img = document.createElement("img")
            var detail = document.createElement("div")
            var item1,item2,item3,item4,item1_img,item2_img,item3_img,item4_img

            img.src = domain[i].image
            img_container.appendChild(img)
            img_container.classList.add("domain_img")

            for(var a = 0; a < artifact.length; a++){
                if(domain[i].item1 == artifact[a].name) {item1 = artifact[a].name; item1_img = artifact[a].image}
            else if(domain[i].item2 == artifact[a].name) {item2 = artifact[a].name; item2_img = artifact[a].image}
            else if(domain[i].item3 == artifact[a].name) {item3 = artifact[a].name; item3_img = artifact[a].image}
            else if(domain[i].item4 == artifact[a].name) {item4 = artifact[a].name; item4_img = artifact[a].image}
            }
            detail.appendChild(artifact_container(item1,item1_img))
            detail.appendChild(artifact_container(item2,item2_img))
            detail.appendChild(artifact_container(item3,item3_img))
            detail.appendChild(artifact_container(item4,item4_img))
            detail.classList.add("detail")


            detail_main.classList.add("con")
            detail_main.appendChild(img_container)
            detail_main.appendChild(detail)

            title.innerText = domain[i].name
            do_container.classList.add("domain")
            do_container.appendChild(title)
            do_container.appendChild(detail_main)
            if(domain[i].region == "Mondstadt") mondstadt_container.appendChild(do_container)
            else if(domain[i].region == "Liyue") liyue_container.appendChild(do_container)
            else if(domain[i].region == "Inazuma") inazuma_container.appendChild(do_container)
            else if(domain[i].region == "Sumeru") sumeru_container.appendChild(do_container)
            
        }
    }
}