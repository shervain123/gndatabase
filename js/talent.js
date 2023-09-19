var character = load_json("json/characters.json")
load()
function create_image(name,image){
    var character_img_container = document.createElement("div")
    var name_container = document.createElement("div")
    var img_container = document.createElement("div")
    var images = document.createElement("img")
    var names = document.createElement("p")
    var link = document.createElement("a")
    link.href = "/characters/"+name.replace(" ","_")+".html#talent_ascension_mat"
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
}

function character_load(){
    var mon_mondstadt = document.getElementById("mon_mondstadt")
    var mon_liyue = document.getElementById("mon_liyue")
    var mon_inazuma = document.getElementById("mon_inazuma")

    var tue_mondstadt = document.getElementById("tue_mondstadt")
    var tue_liyue = document.getElementById("tue_liyue")
    var tue_inazuma = document.getElementById("tue_inazuma")

    var wed_mondstadt = document.getElementById("wed_mondstadt")
    var wed_liyue = document.getElementById("wed_liyue")
    var wed_inazuma = document.getElementById("wed_inazuma")

    var thu_mondstadt = document.getElementById("thu_mondstadt")
    var thu_liyue = document.getElementById("thu_liyue")
    var thu_inazuma = document.getElementById("thu_inazuma")

    var fri_mondstadt = document.getElementById("fri_mondstadt")
    var fri_liyue = document.getElementById("fri_liyue")
    var fri_inazuma = document.getElementById("fri_inazuma")

    var sat_mondstadt = document.getElementById("sat_mondstadt")
    var sat_liyue = document.getElementById("sat_liyue")
    var sat_inazuma = document.getElementById("sat_inazuma")

    for (i = 0; i < character.length; i++){
        if(character[i].talent == "monday"){
            if(character[i].talent_region == "Mondstadt"){
                mon_mondstadt.appendChild(create_image(character[i].name,character[i].image))
                thu_mondstadt.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].talent_region == "Inazuma"){
                mon_inazuma.appendChild(create_image(character[i].name,character[i].image))
                thu_inazuma.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].talent_region == "Liyue"){
                mon_liyue.appendChild(create_image(character[i].name,character[i].image))
                thu_liyue.appendChild(create_image(character[i].name,character[i].image))
            }
        }

        if(character[i].talent == "tuesday"){
            if(character[i].talent_region == "Mondstadt"){
                tue_mondstadt.appendChild(create_image(character[i].name,character[i].image))
                fri_mondstadt.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].talent_region == "Inazuma"){
                tue_inazuma.appendChild(create_image(character[i].name,character[i].image))
                fri_inazuma.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].talent_region == "Liyue"){
                tue_liyue.appendChild(create_image(character[i].name,character[i].image))
                fri_liyue.appendChild(create_image(character[i].name,character[i].image))
            }
        }

        if(character[i].talent == "wednesday"){
            if(character[i].talent_region == "Mondstadt"){
                wed_mondstadt.appendChild(create_image(character[i].name,character[i].image))
                sat_mondstadt.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].talent_region == "Inazuma"){
                wed_inazuma.appendChild(create_image(character[i].name,character[i].image))
                sat_inazuma.appendChild(create_image(character[i].name,character[i].image))
            }
            if(character[i].talent_region == "Liyue"){
                wed_liyue.appendChild(create_image(character[i].name,character[i].image))
                sat_liyue.appendChild(create_image(character[i].name,character[i].image))
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
        if(character[i].talent_region == "Mondstadt"){

            if(character[i].talent == "monday"){
                document.getElementById("freedom").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "tuesday"){
                document.getElementById("resistance").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "wednesday"){
                document.getElementById("ballad").appendChild(create_image(character[i].name,character[i].image))
            }
        }
        if(character[i].talent_region == "Liyue"){

            if(character[i].talent == "monday"){
                document.getElementById("prosperity").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "tuesday"){
                document.getElementById("diligence").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "wednesday"){
                document.getElementById("gold").appendChild(create_image(character[i].name,character[i].image))
            }
        }
        if(character[i].talent_region == "Inazuma"){

            if(character[i].talent == "monday"){
                document.getElementById("transience").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "tuesday"){
                document.getElementById("elegance").appendChild(create_image(character[i].name,character[i].image))
            }
            else if(character[i].talent == "wednesday"){
                document.getElementById("light").appendChild(create_image(character[i].name,character[i].image))
            }
        }
    }

}