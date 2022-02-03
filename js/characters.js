var character = load_json("/json/characters.json")
var weapon = load_json("/json/weapon.json")
var artifact = load_json("/json/artifact.json")
var item = load_json("/json/items.json")
var item_group = load_json("/json/items_group.json")
var talent = load_json("/json/talent.json")
var character_json
all()

function reload_json(){
    character = load_json("/json/characters.json")
    weapon = load_json("/json/weapon.json")
    artifact = load_json("/json/artifact.json")
    item = load_json("/json/items.json")
    item_group = load_json("/json/items_group.json")
    talent = load_json("/json/talent.json")
}

function reload_name(name){
    character = load_json("/json/characters.json")
    weapon = load_json("/json/weapon.json")
    artifact = load_json("/json/artifact.json")
    item = load_json("/json/items.json")
    item_group = load_json("/json/items_group.json")
    talent = load_json("/json/talent.json")
    all_name(name)
}

function all(){
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            character_json = character[i]
        }
    }
    name_info()
    img()
    other_btn()
    other_cha()
    other_info()
    build_link()
    material()
    if(character_json.build != 0){
    cha_build_artifact()
    cha_build_wea()
    document.getElementById("builds").classList.remove("hidea")
    document.getElementById("build_btn").classList.remove("hidea")
    }else{
        document.getElementById("builds").classList.add("hidea")
        document.getElementById("build_btn").classList.add("hidea")
    }
    

}

function all_name(name){
    cha_name = name
    all()
}

function name_info(){
    var name_title = document.createElement("h2")
    var name_detail = document.createElement("p")
    var parent = document.getElementById("character_info")
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            name_title.innerText = character[i].name
            name_detail.innerText = character[i].rarity+" ☆ "+character[i].element+" • "+character[i].weapon+" • "+character[i].region
        }
    }
    parent.innerHTML=""
    parent.appendChild(name_title)
    parent.appendChild(name_detail)
}


 function other_btn(){
    var parent = document.getElementById("element_cha")
    parent.innerHTML = ""
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            parent.innerHTML = '<img src="/img/character/element/' + character[i].element.toLowerCase() + '.png">Other '+ character[i].element+' Character'
        }
    }
 }

 function img(){
    var parent = document.getElementsByClassName("cha_img")[0]
    var imgs = parent.getElementsByTagName("img")[0]
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            imgs.src = character[i].full_image
            imgs.alt = character[i].full_image
        }
    }
 }

 function load_json(file){
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null)
    var jason = JSON.parse(request.responseText);
    return jason
 }


 function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return '';
  }

  function getMetap(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('property') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return '';
  }

 function other_cha(){
    var parent = document.getElementsByClassName("other_cha")[0]
    document.getElementById("other_ti").innerText = "Other "+character_json.element+" Character"
    parent.innerHTML = ""
    var element
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            element = character[i].element
        }
    }
    for (i = 0; i < character.length; i++){
        if(character[i].element == element && character[i].name != cha_name){
            parent.appendChild(create_image(character[i].name,character[i].image))
        }
    }
 }

 function other_info(){
    var parent = document.getElementsByClassName("resources_btn_container")[0]
    var story = document.createElement("a")
    var voicepver = document.createElement("a")
    var build = document.createElement("a")
    var media = document.createElement("a")
    
    parent.innerHTML = ""
    story.target = "blank"
    voicepver.target = "blank"
    build.target = "blank"
    media.target = "blank"

    if(character_json.lore == "1"){
        story.href = "https://genshin-impact.fandom.com/wiki/"+character_json.name.replace(" ","_")+"/Lore"
        story.innerText = "Lore"
    }else{
    story.href = "https://genshin-impact.fandom.com/wiki/"+character_json.name.replace(" ","_")+"/Story"
    story.innerText = "Story"
    }
    voicepver.href = "https://genshin-impact.fandom.com/wiki/"+character_json.name.replace(" ","_")+"/Voice-Overs"
    build.href = "https://genshin-builds.com/character/"+character_json.name.toLowerCase().replace(" ","-")
    media.href = "https://genshin-impact.fandom.com/wiki/"+character_json.name.replace(" ","_")+"/Media"

    
    voicepver.innerText = "Voice-Over"
    build.innerText = "Builds"
    media.innerText = "Media"

    parent.appendChild(story)
    parent.appendChild(voicepver)
    parent.appendChild(build)
    parent.appendChild(media)
 }

 function create_image(name,image){
    var character_img_container = document.createElement("div")
    var name_container = document.createElement("div")
    var img_container = document.createElement("div")
    var images = document.createElement("img")
    var names = document.createElement("p")
    var link = document.createElement("a")
    link.href = "/characters/"+name.replace(" ","_")+".html"
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

function cha_build_wea(){
    var weapon_parent = document.getElementById("weapon")
    var weapon_title = document.createElement("h4")
    var weapon_img_name_container = document.createElement("div")
    var weapon_name_container = document.createElement("div")
    var weapon_image_container = document.createElement("div")
    var weapon_image = document.createElement("img")
    var weapon_name_container = document.createElement("div")
    var weapon_name = document.createElement("p")
    var weapon_info_container = document.createElement("div")
    var weapon_info = document.createElement("p")
    document.getElementById("build_type").innerText = character_json.build_type
    var weapons
    for (i = 0; i < weapon.length; i++){
        if(weapon[i].name == character_json.weapon_build){
            weapons = weapon[i]
        }
    }
    weapon_image.src=weapons.image
    weapon_image_container.classList.add("weapon_img")
    weapon_image_container.appendChild(weapon_image)

    weapon_name.innerText = decodeURIComponent(weapons.name)
    weapon_name_container.classList.add("talent_title")
    weapon_name_container.appendChild(weapon_name)

    weapon_img_name_container.classList.add("talent_name")
    weapon_img_name_container.appendChild(weapon_image_container)
    weapon_img_name_container.appendChild(weapon_name_container)

    weapon_info.innerHTML = weapons.ability_detail
    weapon_info_container.classList.add("talent_info")
    weapon_info_container.appendChild(weapon_info)

    weapon_title.innerText = "Weapon"

    weapon_parent.innerHTML = ""
    weapon_parent.appendChild(weapon_title)
    weapon_parent.appendChild(weapon_img_name_container)
    weapon_parent.appendChild(weapon_info_container)

}

function cha_build_artifact(){
    var weapon_parent = document.getElementById("artifact")
    var weapon_title = document.createElement("h4")
    var weapon_img_name_container = document.createElement("div")
    var weapon_name_container = document.createElement("div")
    var weapon_image_container = document.createElement("div")
    var weapon_image = document.createElement("img")
    var weapon_name_container = document.createElement("div")
    var weapon_name = document.createElement("p")
    var weapon_info_container = document.createElement("div")
    var artifact_info = document.createElement("p")
    var artifact_info_2 = document.createElement("p")
    var container_1 = document.createElement("div")
    var weapons, artifact_2
    if(character_json.artifact_build_2 != null) artifact_2 = 1
    for (i = 0; i < artifact.length; i++){
        if(artifact[i].name == character_json.artifact_build){
            weapons = artifact[i]
        }
    }
    weapon_image.src=weapons.image
    weapon_image_container.classList.add("weapon_img")
    weapon_image_container.appendChild(weapon_image)

    weapon_name.innerText = decodeURIComponent(weapons.name)
    weapon_name_container.classList.add("talent_title")
    weapon_name_container.appendChild(weapon_name)

    weapon_img_name_container.classList.add("talent_name")
    weapon_img_name_container.appendChild(weapon_image_container)
    weapon_img_name_container.appendChild(weapon_name_container)

    if(artifact_2 != 1){
    artifact_info.innerText = "(2) "+weapons.set_1
    artifact_info_2.innerText = "(4) "+weapons.set_2
    weapon_info_container.classList.add("talent_info")
    weapon_info_container.appendChild(artifact_info)
    weapon_info_container.appendChild(artifact_info_2)
    }else{
    artifact_info.innerText = "(2) "+weapons.set_1
    weapon_info_container.classList.add("talent_info")
    weapon_info_container.appendChild(artifact_info)
    }
    weapon_title.innerText = "Artifact"

    weapon_parent.innerHTML = ""
    if(artifact_2 != 1){
    weapon_parent.appendChild(weapon_title)
    weapon_parent.appendChild(weapon_img_name_container)
    weapon_parent.appendChild(weapon_info_container)
    }else{
    weapon_parent.appendChild(weapon_title)
    container_1.appendChild(weapon_img_name_container)
    container_1.appendChild(weapon_info_container)
    weapon_parent.appendChild(container_1)
    }

    if(artifact_2 == 1){
    var weapon_img_name_container = document.createElement("div")
    var weapon_name_container = document.createElement("div")
    var weapon_image_container = document.createElement("div")
    var weapon_image = document.createElement("img")
    var weapon_name_container = document.createElement("div")
    var weapon_name = document.createElement("p")
    var weapon_info_container = document.createElement("div")
    var artifact_info = document.createElement("p")
    var container_2 = document.createElement("div")
    var weapons
    for (i = 0; i < artifact.length; i++){
        if(artifact[i].name == character_json.artifact_build_2){
            weapons = artifact[i]
        }
    }
    weapon_image.src=weapons.image
    weapon_image_container.classList.add("weapon_img")
    weapon_image_container.appendChild(weapon_image)

    weapon_name.innerText = decodeURIComponent(weapons.name)
    weapon_name_container.classList.add("talent_title")
    weapon_name_container.appendChild(weapon_name)

    weapon_img_name_container.classList.add("talent_name")
    weapon_img_name_container.appendChild(weapon_image_container)
    weapon_img_name_container.appendChild(weapon_name_container)

    artifact_info.innerText = "(2) "+weapons.set_1
    weapon_info_container.classList.add("talent_info")
    weapon_info_container.appendChild(artifact_info)

    container_2.appendChild(weapon_img_name_container)
    container_2.appendChild(weapon_info_container)
    weapon_parent.appendChild(container_2)
    }
}

function build_link(){
    var link = document.getElementsByClassName("build_link")
    link[0].href = "https://genshin-builds.com/character/" + character_json.name.toLowerCase().replace(" ","_")
    if(character_json.name.includes(" ")){
    link[1].href = "https://genshin.gg/characters/" + character_json.name_gengg
    }else{
        link[1].href = "https://genshin.gg/characters/" + character_json.name
    }
}

function material(){
    var gemstone_1,gemstone_2,gemstone_3,gemstone_4,comasc_1,comasc_2,comasc_3,talent_1,talent_2,talent_3,local_asc,boss_asc,talent_asc
    var gemstone_img_1,gemstone_img_2,gemstone_img_3,gemstone_img_4,comasc_img_1,comasc_img_2,comasc_img_3,talent_img_1,talent_img_2,talent_img_3,local_asc_img,boss_asc_img,talent_asc_img
    var parent_ascension = document.getElementById("ascension_mat")
    var parent_talent = document.getElementById("talent_ascension_mat")
    parent_ascension.innerHTML = ""
    parent_talent.innerHTML = ""
    for (i = 0; i < item_group.length; i++){
        if(item_group[i].element == character_json.element){
            gemstone_1 = item_group[i].set_1
            gemstone_2 = item_group[i].set_2
            gemstone_3 = item_group[i].set_3
            gemstone_4 = item_group[i].set_4
        }
        if(item_group[i].name == character_json.common_asc){
            comasc_1 = item_group[i].set_1
            comasc_2 = item_group[i].set_2
            comasc_3 = item_group[i].set_3
        }
    }
    for (i = 0; i < item.length; i++){
        if(item[i].name == gemstone_1) gemstone_img_1 = item[i].image
        else if(item[i].name == gemstone_2) gemstone_img_2 = item[i].image
        else if(item[i].name == gemstone_3) gemstone_img_3 = item[i].image
        else if(item[i].name == gemstone_4) gemstone_img_4 = item[i].image
        else if(item[i].name == comasc_1) comasc_img_1 = item[i].image
        else if(item[i].name == comasc_2) comasc_img_2 = item[i].image
        else if(item[i].name == comasc_3) comasc_img_3 = item[i].image
        else if(item[i].name == character_json.local_asc){ local_asc = item[i].name; local_asc_img = item[i].image;}
        else if(item[i].name == character_json.boss_asc){ boss_asc = item[i].name;boss_asc_img = item[i].image}
        else if(item[i].name == character_json.boss_talent){talent_asc = item[i].name; talent_asc_img = item[i].image}
    }
    for (i = 0; i < talent.length; i++){
        if(talent[i].region == character_json.talent_region && talent[i].time == character_json.talent){
            talent_1 = talent[i].name_1
            talent_2 = talent[i].name_2
            talent_3 = talent[i].name_3
            talent_img_1 = talent[i].img_1
            talent_img_2 = talent[i].img_2
            talent_img_3 = talent[i].img_3
        }
    }

    comasc_1 = decodeURIComponent(comasc_1)
    comasc_2 = decodeURIComponent(comasc_2)
    comasc_3 = decodeURIComponent(comasc_3)
    talent_1 = decodeURIComponent(talent_1)
    talent_2 = decodeURIComponent(talent_2)
    talent_3 = decodeURIComponent(talent_3)
    local_asc = decodeURIComponent(local_asc)
    boss_asc = decodeURIComponent(boss_asc)
    talent_asc = decodeURIComponent(talent_asc)

    parent_ascension.appendChild(title("Ascension Materials"))
    var asc_1 =  material_container()
    asc_1.appendChild(material_title("Ascension 1"))
    asc_1.appendChild(material_creator(gemstone_img_1,"1x \u00A0\u00A0\u00A0"+gemstone_1))
    asc_1.appendChild(material_creator(local_asc_img,"3x \u00A0\u00A0"+local_asc))
    asc_1.appendChild(material_creator(comasc_img_1,"3x \u00A0\u00A0"+comasc_1))

    var asc_2 =  material_container()
    asc_2.appendChild(material_title("Ascension 2"))
    asc_2.appendChild(material_creator(gemstone_img_2,"3x \u00A0\u00A0"+gemstone_2))
    asc_2.appendChild(material_creator(local_asc_img,"10x \u00A0\u00A0"+local_asc))
    asc_2.appendChild(material_creator(comasc_img_1,"15x \u00A0\u00A0"+comasc_1))
    asc_2.appendChild(material_creator(boss_asc_img,"2x \u00A0\u00A0"+boss_asc))

    var asc_3 =  material_container()
    asc_3.appendChild(material_title("Ascension 3"))
    asc_3.appendChild(material_creator(gemstone_img_2,"6x \u00A0\u00A0"+gemstone_2))
    asc_3.appendChild(material_creator(local_asc_img,"20x \u00A0\u00A0"+local_asc))
    asc_3.appendChild(material_creator(comasc_img_2,"12x \u00A0\u00A0"+comasc_2))
    asc_3.appendChild(material_creator(boss_asc_img,"4x \u00A0\u00A0"+boss_asc))

    var asc_4 =  material_container()
    asc_4.appendChild(material_title("Ascension 4"))
    asc_4.appendChild(material_creator(gemstone_img_3,"3x \u00A0\u00A0"+gemstone_3))
    asc_4.appendChild(material_creator(local_asc_img,"30x \u00A0\u00A0"+local_asc))
    asc_4.appendChild(material_creator(comasc_img_2,"18x \u00A0\u00A0"+comasc_2))
    asc_4.appendChild(material_creator(boss_asc_img,"8x \u00A0\u00A0"+boss_asc))

    var asc_5 =  material_container()
    asc_5.appendChild(material_title("Ascension 5"))
    asc_5.appendChild(material_creator(gemstone_img_3,"6x \u00A0\u00A0"+gemstone_3))
    asc_5.appendChild(material_creator(local_asc_img,"45x \u00A0\u00A0"+local_asc))
    asc_5.appendChild(material_creator(comasc_img_3,"12x \u00A0\u00A0"+comasc_3))
    asc_5.appendChild(material_creator(boss_asc_img,"12x \u00A0\u00A0"+boss_asc))

    var asc_6 =  material_container()
    asc_6.appendChild(material_title("Ascension 5"))
    asc_6.appendChild(material_creator(gemstone_img_4,"6x \u00A0\u00A0"+gemstone_4))
    asc_6.appendChild(material_creator(local_asc_img,"60x \u00A0\u00A0"+local_asc))
    asc_6.appendChild(material_creator(comasc_img_3,"24x \u00A0\u00A0"+comasc_3))
    asc_6.appendChild(material_creator(boss_asc_img,"20x \u00A0\u00A0"+boss_asc))

    parent_ascension.appendChild(asc_1)
    parent_ascension.appendChild(asc_2)
    parent_ascension.appendChild(asc_3)
    parent_ascension.appendChild(asc_4)
    parent_ascension.appendChild(asc_5)
    parent_ascension.appendChild(asc_6)

    parent_talent.appendChild(title("Talent Ascension Materials"))

    var asc_1 =  material_container()
    asc_1.appendChild(material_title("Ascension 1"))
    asc_1.appendChild(material_creator(talent_img_1,"3x \u00A0\u00A0\u00A0"+talent_1))
    asc_1.appendChild(material_creator(comasc_img_1,"6x \u00A0\u00A0"+comasc_1))

    var asc_2 =  material_container()
    asc_2.appendChild(material_title("Ascension 2"))
    asc_2.appendChild(material_creator(talent_img_2,"2x \u00A0\u00A0\u00A0"+talent_2))
    asc_2.appendChild(material_creator(comasc_img_2,"3x \u00A0\u00A0"+comasc_2))

    var asc_3 =  material_container()
    asc_3.appendChild(material_title("Ascension 3"))
    asc_3.appendChild(material_creator(talent_img_2,"4x \u00A0\u00A0\u00A0"+talent_2))
    asc_3.appendChild(material_creator(comasc_img_2,"4x \u00A0\u00A0"+comasc_2))

    var asc_4 =  material_container()
    asc_4.appendChild(material_title("Ascension 4"))
    asc_4.appendChild(material_creator(talent_img_2,"6x \u00A0\u00A0\u00A0"+talent_2))
    asc_4.appendChild(material_creator(comasc_img_2,"6x \u00A0\u00A0"+comasc_2))

    var asc_5 =  material_container()
    asc_5.appendChild(material_title("Ascension 5"))
    asc_5.appendChild(material_creator(talent_img_2,"9x \u00A0\u00A0\u00A0"+talent_2))
    asc_5.appendChild(material_creator(comasc_img_2,"9x \u00A0\u00A0"+comasc_2))

    var asc_6 =  material_container()
    asc_6.appendChild(material_title("Ascension 6"))
    asc_6.appendChild(material_creator(talent_img_3,"4x \u00A0\u00A0\u00A0"+talent_3))
    asc_6.appendChild(material_creator(comasc_img_3,"4x \u00A0\u00A0"+comasc_3))
    asc_6.appendChild(material_creator(talent_asc_img,"1x \u00A0\u00A0\u00A0"+talent_asc))

    var asc_7 =  material_container()
    asc_7.appendChild(material_title("Ascension 7"))
    asc_7.appendChild(material_creator(talent_img_3,"6x \u00A0\u00A0\u00A0"+talent_3))
    asc_7.appendChild(material_creator(comasc_img_3,"6x \u00A0\u00A0"+comasc_3))
    asc_7.appendChild(material_creator(talent_asc_img,"1x \u00A0\u00A0\u00A0"+talent_asc))

    var asc_8 =  material_container()
    asc_8.appendChild(material_title("Ascension 8"))
    asc_8.appendChild(material_creator(talent_img_3,"12x \u00A0\u00A0\u00A0"+talent_3))
    asc_8.appendChild(material_creator(comasc_img_3,"9x \u00A0\u00A0"+comasc_3))
    asc_8.appendChild(material_creator(talent_asc_img,"2x \u00A0\u00A0"+talent_asc))

    var asc_9 =  material_container()
    asc_9.appendChild(material_title("Ascension 9"))
    asc_9.appendChild(material_creator(talent_img_3,"16x \u00A0\u00A0\u00A0"+talent_3))
    asc_9.appendChild(material_creator(comasc_img_3,"12x \u00A0\u00A0"+comasc_3))
    asc_9.appendChild(material_creator(talent_asc_img,"2x \u00A0\u00A0"+talent_asc))
    asc_9.appendChild(material_creator("/img/items/talent/Crown_of_Insight.png","1x \u00A0\u00A0\u00A0"+"Crown of Insight"))

    parent_talent.appendChild(asc_1)
    parent_talent.appendChild(asc_2)
    parent_talent.appendChild(asc_3)
    parent_talent.appendChild(asc_4)
    parent_talent.appendChild(asc_5)
    parent_talent.appendChild(asc_6)
    parent_talent.appendChild(asc_7)
    parent_talent.appendChild(asc_8)
    parent_talent.appendChild(asc_9)
}

function material_creator(img,name){
    var material_container = document.createElement("div")
    var material_img = document.createElement("img")
    var text = document.createTextNode(name)
    material_img.src = img
    material_container.appendChild(material_img)
    material_container.appendChild(text)
    material_container.classList.add("material")
    return material_container
}

function material_title(title){
    var container = document.createElement("div")
    var ti = document.createElement("h4")
    ti.innerText = title
    container.appendChild(ti)
    container.classList.add("inner_title")
    return container
}

function material_container(){
    var con = document.createElement("div")
    con.id = "ascension"
    return con
}

function title(text){
    var con = document.createElement("div")
    var ti = document.createElement("h3")
    ti.innerHTML = text
    con.appendChild(ti)
    con.classList.add("title_middle")
    return con
}




 function refresh(){window.location.href = ""}