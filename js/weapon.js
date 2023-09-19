var character = load_json("json/weapon.json")
//yes it is using the same code as the talent because they are the same
load()
function create_image(name,image){
    var character_img_container = document.createElement("div")
    var name_container = document.createElement("div")
    var img_container = document.createElement("div")
    var images = document.createElement("img")
    var names = document.createElement("p")
    var link = document.createElement("a")
    names.innerText = name
    images.src = image
    name_container.classList.add("name")
    img_container.classList.add("img")
    name_container.appendChild(names)
    img_container.appendChild(images)
    character_img_container.appendChild(img_container)
    character_img_container.appendChild(name_container)
    character_img_container.classList.add("character_img")
    link.appendChild(character_img_container)
    return link
}

function load_json(file){
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null)
    var jason = JSON.parse(request.responseText);
    return jason
 }

function load(){
    character_load()
    day_check()
    talent_detail()
    redirect()
}

function character_load(){
    var mon_mondstadt = document.getElementById("mon_mondstadt")
    var mon_liyue = document.getElementById("mon_liyue")
    var mon_inazuma = document.getElementById("mon_inazuma")
    var mon_sumeru = document.getElementById("mon_sumeru")

    var tue_mondstadt = document.getElementById("tue_mondstadt")
    var tue_liyue = document.getElementById("tue_liyue")
    var tue_inazuma = document.getElementById("tue_inazuma")
    var tue_sumeru = document.getElementById("tue_sumeru")

    var wed_mondstadt = document.getElementById("wed_mondstadt")
    var wed_liyue = document.getElementById("wed_liyue")
    var wed_inazuma = document.getElementById("wed_inazuma")
    var wed_sumeru = document.getElementById("wed_sumeru")

    var thu_mondstadt = document.getElementById("thu_mondstadt")
    var thu_liyue = document.getElementById("thu_liyue")
    var thu_inazuma = document.getElementById("thu_inazuma")
    var thu_sumeru = document.getElementById("thu_sumeru")

    var fri_mondstadt = document.getElementById("fri_mondstadt")
    var fri_liyue = document.getElementById("fri_liyue")
    var fri_inazuma = document.getElementById("fri_inazuma")
    var fri_sumeru = document.getElementById("fri_sumeru")

    var sat_mondstadt = document.getElementById("sat_mondstadt")
    var sat_liyue = document.getElementById("sat_liyue")
    var sat_inazuma = document.getElementById("sat_inazuma")
    var sat_sumeru = document.getElementById("sat_sumeru")

    for (i = 0; i < character.length; i++){
        if(character[i].talent == "monday"){
            if(character[i].region == "Mondstadt"){
                mon_mondstadt.appendChild(create_image(character[i].name,character[i].image))
                thu_mondstadt.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Inazuma"){
                mon_inazuma.appendChild(create_image(character[i].name,character[i].image))
                thu_inazuma.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Liyue"){
                mon_liyue.appendChild(create_image(character[i].name,character[i].image))
                thu_liyue.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Sumeru"){
                mon_sumeru.appendChild(create_image(character[i].name,character[i].image))
                thu_sumeru.appendChild(create_image(character[i].name,character[i].image))
            }
        }

        if(character[i].talent == "tuesday"){
            if(character[i].region == "Mondstadt"){
                tue_mondstadt.appendChild(create_image(character[i].name,character[i].image))
                fri_mondstadt.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Inazuma"){
                tue_inazuma.appendChild(create_image(character[i].name,character[i].image))
                fri_inazuma.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Liyue"){
                tue_liyue.appendChild(create_image(character[i].name,character[i].image))
                fri_liyue.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Sumeru"){
                tue_sumeru.appendChild(create_image(character[i].name,character[i].image))
                fri_sumeru.appendChild(create_image(character[i].name,character[i].image))
            }
        }

        if(character[i].talent == "wednesday"){
            if(character[i].region == "Mondstadt"){
                wed_mondstadt.appendChild(create_image(character[i].name,character[i].image))
                sat_mondstadt.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Inazuma"){
                wed_inazuma.appendChild(create_image(character[i].name,character[i].image))
                sat_inazuma.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Liyue"){
                wed_liyue.appendChild(create_image(character[i].name,character[i].image))
                sat_liyue.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].region == "Sumeru"){
                wed_sumeru.appendChild(create_image(character[i].name,character[i].image))
                sat_sumeru.appendChild(create_image(character[i].name,character[i].image))
            }
        }
    }
}

function day_check(){
    const d = new Date();
    let day = d.getDay();
    console.log(day)
    switch(day){
        case 1 :
            document.getElementById("mon_btn").src = "img/icons/cal_today.png"
            break
        case 2 :
            document.getElementById("tue_btn").src = "img/icons/cal_today.png"
            break
        case 3 :
            document.getElementById("wed_btn").src = "img/icons/cal_today.png"
            break
        case 4 :
            document.getElementById("thu_btn").src = "img/icons/cal_today.png"
            break
        case 5 :
            document.getElementById("fri_btn").src = "img/icons/cal_today.png"
            break
        case 6 :
            document.getElementById("sat_btn").src = "img/icons/cal_today.png"
            break
        case 0 :
            document.getElementById("sun_btn").src = "img/icons/cal_today.png"
            break
    }
}

function talent_detail(){
    for (i = 0; i < character.length; i++){
        if(character[i].region == "Mondstadt"){

            if(character[i].talent == "monday"){
                document.getElementById("decarabian").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "tuesday"){
                document.getElementById("boreal").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "wednesday"){
                document.getElementById("gladiator").appendChild(create_image(character[i].name,character[i].image))
            }
        }
        if(character[i].region == "Liyue"){

            if(character[i].talent == "monday"){
                document.getElementById("guyun").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "tuesday"){
                document.getElementById("elixir").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "wednesday"){
                document.getElementById("aerosiderite").appendChild(create_image(character[i].name,character[i].image))
            }
        }
        if(character[i].region == "Inazuma"){

            if(character[i].talent == "monday"){
                document.getElementById("branches").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "tuesday"){
                document.getElementById("narukami").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "wednesday"){
                document.getElementById("oni_mask").appendChild(create_image(character[i].name,character[i].image))
            }
        }
        if(character[i].region == "Sumeru"){

            if(character[i].talent == "monday"){
                document.getElementById("talisman_of_the_forest_dew").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "tuesday"){
                document.getElementById("oasis_gardens").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "wednesday"){
                document.getElementById("scorching_might").appendChild(create_image(character[i].name,character[i].image))
            }
        }
    }

}

function redirect() {
    var link = window.location.href
    if(link.indexOf("?wea=")){
        var split = link.slice(link.search("wea=")+4,link.length)
        console.log(split)
        for (i = 0; i < character.length; i++){
            if(character[i].hex == split){
                var redir = character[i].name
                window.location.href = "https://genshin-impact.fandom.com/wiki/"+redir.replaceAll(" ","_")
            }
        }
    }
}