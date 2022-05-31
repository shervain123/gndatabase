var item = load_json("/json/items.json")
var domain = load_json("/json/domain.json")
var item_group = load_json("/json/items_group.json")
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

    text.innerText = decodeURI(name)
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
    for(var i = 0; i < domain.length; i++){
        if(domain[i].type == "boss"){
            var do_container = document.createElement("div")
            var title = document.createElement("h3")
            var detail_main = document.createElement("div")
            var img_container = document.createElement("div")
            var img = document.createElement("img")
            var detail = document.createElement("div")
            var item1,item1_img

            img.src = domain[i].image
            img_container.appendChild(img)
            img_container.classList.add("domain_img")

            for(var a = 0; a < item.length; a++){
                if(domain[i].item == item[a].name) {item1 = item[a].name; item1_img = item[a].image}
                if(domain[i].item == "Storm Beads"){
                    console.log("pause")
                }
            }

            detail.appendChild(artifact_container(item1,item1_img))
            switch(domain[i].num_element){
                case "1" : detail.appendChild(element_group(domain[i].element1)); break
                case "2" : {
                    detail.appendChild(element_group(domain[i].element1)); 
                    detail.appendChild(element_group(domain[i].element2))
                    break
                }
                case "3" : {
                    detail.appendChild(element_group(domain[i].element1)); 
                    detail.appendChild(element_group(domain[i].element2))
                    detail.appendChild(element_group(domain[i].element3))
                    break
                }
                case "4" : {
                    detail.appendChild(element_group(domain[i].element1)); 
                    detail.appendChild(element_group(domain[i].element2))
                    detail.appendChild(element_group(domain[i].element3))
                    detail.appendChild(element_group(domain[i].element4))
                    break
                }
                case "5" : {
                    detail.appendChild(element_group(domain[i].element1)); 
                    detail.appendChild(element_group(domain[i].element2))
                    detail.appendChild(element_group(domain[i].element3))
                    detail.appendChild(element_group(domain[i].element4))
                    detail.appendChild(element_group(domain[i].element5))
                    break
                }
            }

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

            
        }
    }

}

function element_group(element){
    var main_container = document.createElement("div")
    var element1_container = document.createElement("div")
    var element1_img = document.createElement("img")

    var element2_container = document.createElement("div")
    var element2_img = document.createElement("img")

    var element3_container = document.createElement("div")
    var element3_img = document.createElement("img")

    var element4_container = document.createElement("div")
    var element4_img = document.createElement("img")

    var element1, element2, element3, element4

    for(var i = 0; i < item_group.length; i++){
        if(element == item_group[i].element){
            element1 = item_group[i].set_1
            element2 = item_group[i].set_2
            element3 = item_group[i].set_3
            element4 = item_group[i].set_4
        }
    }
    for(var i = 0; i < item.length; i++){
        if(element1 == item[i].name) element1_img.src = item[i].image
        else if(element2 == item[i].name) element2_img.src = item[i].image
        else if(element3 == item[i].name) element3_img.src = item[i].image
        else if(element4 == item[i].name) element4_img.src = item[i].image
    }

    element1_container.appendChild(element1_img)
    element1_container.appendChild(document.createTextNode(element1))

    element2_container.appendChild(element2_img)
    element2_container.appendChild(document.createTextNode(element2))

    element3_container.appendChild(element3_img)
    element3_container.appendChild(document.createTextNode(element3))

    element4_container.appendChild(element4_img)
    element4_container.appendChild(document.createTextNode(element4))

    main_container.classList.add("element_group")
    main_container.appendChild(element1_container)
    main_container.appendChild(element2_container)
    main_container.appendChild(element3_container)
    main_container.appendChild(element4_container)

    return main_container
}