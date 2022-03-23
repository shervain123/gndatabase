var character = load_json("/json/characters.json")
var weapon = load_json("/json/weapon.json")
var artifact = load_json("/json/artifact.json")
var item = load_json("/json/items.json")
var item_group = load_json("/json/items_group.json")
var talent = load_json("/json/talent.json")
var element, character_json
var anemo_detail = `<div id="talent_detail">
<div class="title_middle"><h3>Talent Detail</h3></div>

<div class="talent">
  <h4>Normal Attack</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/talent/Foreign_Ironwind.png"></div>
    <div class="talent_title"><p>Foreign Ironwind</p></div>
  </div>
  <div class="talent_info">
    <p class="talent_title">Normal Attack</p>
    <p> Performs up to 5 rapid strikes.</p>
    
    <p class="talent_title">Charged Attack</p>
    <p> Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</p>
    
    <p class="talent_title">Plunging Attack</p>
    <p> Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact. </p>
  
  </div>
  </div>

  <div class="talent">
    <h4>Elemental Skill</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/talent/Palm_Vortex.png"></div>
      <div class="talent_title"><p>Palm Vortex</p></div>
    </div>
    <div class="talent_info">
      <p class="talent_title">Press</p>
      <p> The vacuum vortex explodes when the skill duration ends, causing a greater amount of Anemo DMG over a larger area. </p>
      
      <p class="talent_title">Hold</p>
      <p>DMG and AoE will gradually increase.</p>
      <p class="talent_title">Elemental Absorption</p>
      <p>DMG and AoE will  If the vortex comes into contact with Hydro/Pyro/Cryo/Electro elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use.  increase.</p>
    
    </div>
  
</div>

<div class="talent">
  <h4>Elemental Burst</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/talent/Gust_Surge.png"></div>
    <div class="talent_title"><p>Gust Surge</p></div>
  </div>
  <div class="talent_info">
    <p>Guiding the path of the wind currents, you summon a forward-moving tornado that pulls objects and opponents towards itself, dealing Anemo DMG</p>
    <p class="talent_title">Elemental Absorption</p>
    <p> If the vortex comes into contact with Hydro/Pyro/Cryo/Electro elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use. </p>
  </div>

</div>
<div class="talent">
<h4>Passive Talent</h4>
<div class="talent_name">
  <div class="talent_img"><img src="/img/character/talent/Slitting_Wind.png"></div>
  <div class="talent_title"><p>Slitting Wind</p></div>
</div>
<div class="talent_info">
  <p>The last hit of a Normal Attack combo unleashes a wind blade, dealing 60% of ATK as Anemo DMG to all opponents in its path.</p>
</div>
</div>
<div class="talent">
<div class="talent_name">
<div class="talent_img"><img src="/img/character/talent/Second_Wind.png"></div>
<div class="talent_title"><p>Second Wind</p></div>
</div>
<div class="talent_info">
<p>Palm Vortex kills regenerate 2% HP for 5s. This effect can only occur once every 5s.</p>
</div>
</div>
</div>
<div id="constellation_detail">
<!--Ingore the class name they are pretty much the same-->
<div class="title_middle"><h3>Constellation</h3></div>
<div class="talent">
  <h4>Level 1</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/constellation/Raging_Vortex.png"></div>
    <div class="talent_title"><p>Raging Vortex</p></div>
  </div>
  <div class="talent_info">
    <p>Palm Vortex pulls in opponents and objects within a 5m radius. </p>
  </div>
  </div>
<div class="talent">
    <h4>Level 2</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/constellation/Uprising_Whirlwind.png"></div>
      <div class="talent_title"><p>Uprising Whirlwind</p></div>
    </div>
    <div class="talent_info">
      <p>Increases Energy Recharge by 16%. </p>
    </div>
  </div>
<div class="talent">
    <h4>Level 3</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/constellation/Sweeping_Gust.png"></div>
      <div class="talent_title"><p>Sweeping Gust</p></div>
    </div>
    <div class="talent_info">
      <p>Increases the Level of Gust Surge by 3.<br>Maximum upgrade level is 15. </p>
    </div>
</div>
<div class="talent">
  <h4>Level 4</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/constellation/Cherishing_Breezes.png"></div>
    <div class="talent_title"><p>Cherishing Breezes</p></div>
  </div>
  <div class="talent_info">
    <p>Reduces DMG taken while casting Palm Vortex by 10%. </p>
  </div>
</div>
<div class="talent">
<h4>Level 5</h4>
<div class="talent_name">
  <div class="talent_img"><img src="/img/character/constellation/Vortex_Stellaris.png"></div>
  <div class="talent_title"><p>Vortex Stellaris</p></div>
</div>
<div class="talent_info">
  <p>Increases the Level of Palm Vortex by 3.<br>Maximum upgrade level is 15. </p>
</div>
</div>
<div class="talent">
<h4>Level 6</h4>
<div class="talent_name">
<div class="talent_img"><img src="/img/character/constellation/Intertwined_Winds.png"></div>
<div class="talent_title"><p>Intertwined Winds</p></div>
</div>
<div class="talent_info">
<p>Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%.<br>If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.  </p>
</div>
</div>
</div>`

var geo_detail = `<div id="talent_detail">
<div class="title_middle"><h3>Talent Detail</h3></div>

<div class="talent">
  <h4>Normal Attack</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/talent/Foreign_Rockblade.png"></div>
    <div class="talent_title"><p>Foreign Rockblade</p></div>
  </div>
  <div class="talent_info">
    <p class="talent_title">Normal Attack</p>
    <p> Performs up to 5 rapid strikes.</p>
    
    <p class="talent_title">Charged Attack</p>
    <p> Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</p>
    
    <p class="talent_title">Plunging Attack</p>
    <p> Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact. </p>
  
  </div>
  </div>

  <div class="talent">
    <h4>Elemental Skill</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/talent/Starfell_Sword.png"></div>
      <div class="talent_title"><p>Starfell Sword</p></div>
    </div>
    <div class="talent_info">
      <p> Disgorge a meteorite from the depths of the earth, dealing AoE Geo DMG.<br> The meteorite is considered a Geo Construct, and can be climbed or used to block attacks. </p>
      
      <p class="talent_title">Hold</p>
      <p>Adjust this skill's positioning.</p>
    
    </div>
  
</div>

<div class="talent">
  <h4>Elemental Burst</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/talent/Wake_of_Earth.png"></div>
    <div class="talent_title"><p>Wake of Earth</p></div>
  </div>
  <div class="talent_info">
    <p>Energizing the Geo elements deep underground, you set off expanding shockwaves.<br>Launches surrounding opponents back and deals AoE Geo DMG.</p>
    <p> A stone wall is erected at the edges of the shockwave.<br> The stone wall is considered a Geo Construct, and may be used to block attacks.  </p>
  </div>

</div>
<div class="talent">
<h4>Passive Talent</h4>
<div class="talent_name">
  <div class="talent_img"><img src="/img/character/talent/Shattered_Darkrock.png"></div>
  <div class="talent_title"><p>Shattered Darkrock</p></div>
</div>
<div class="talent_info">
  <p>Reduces Starfell Sword's CD by 2s.</p>
</div>
</div>
<div class="talent">
<div class="talent_name">
<div class="talent_img"><img src="/img/character/talent/Frenzied_Rockslide.png"></div>
<div class="talent_title"><p>Frenzied Rockslide</p></div>
</div>
<div class="talent_info">
<p>The final hit of a Normal Attack combo triggers a collapse, dealing 60% of ATK as AoE Geo DMG.</p>
</div>
</div>
</div>
<div id="constellation_detail">
<!--Ingore the class name they are pretty much the same-->
<div class="title_middle"><h3>Constellation</h3></div>
<div class="talent">
  <h4>Level 1</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/constellation/Invincible_Stonewall.png"></div>
    <div class="talent_title"><p>Invincible Stonewall</p></div>
  </div>
  <div class="talent_info">
    <p>Party members within the radius of Wake of Earth have their CRIT Rate increased by 10% and have increased resistance against interruption. </p>
  </div>
  </div>
<div class="talent">
    <h4>Level 2</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/constellation/Rockcore_Meltdown.png"></div>
      <div class="talent_title"><p>Rockcore Meltdown</p></div>
    </div>
    <div class="talent_info">
      <p>When the meteorite created by Starfell Sword is destroyed, it will also explode, dealing additional AoE Geo DMG equal to the amount of damage dealt by Starfell Sword. </p>
    </div>
  </div>
<div class="talent">
    <h4>Level 3</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/constellation/Will_of_the_Rock.png"></div>
      <div class="talent_title"><p>Will of the Rock</p></div>
    </div>
    <div class="talent_info">
      <p>Increases the Level of Wake of Earth by 3.<br>Maximum upgrade level is 15. </p>
    </div>
</div>
<div class="talent">
  <h4>Level 4</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/constellation/Reaction_Force.png"></div>
    <div class="talent_title"><p>Reaction Force</p></div>
  </div>
  <div class="talent_info">
    <p>The shockwave triggered by Wake of Earth regenerates 5 Energy for every opponent hit.<br>A maximum of 25 Energy can be regenerated in this manner at any one time. </p>
  </div>
</div>
<div class="talent">
<h4>Level 5</h4>
<div class="talent_name">
  <div class="talent_img"><img src="/img/character/constellation/Meteorite_Impact.png"></div>
  <div class="talent_title"><p>Meteorite Impact</p></div>
</div>
<div class="talent_info">
  <p>Increases the Level of Starfell Sword by 3.<BR>Maximum upgrade level is 15. </p>
</div>
</div>
<div class="talent">
<h4>Level 6</h4>
<div class="talent_name">
<div class="talent_img"><img src="/img/character/constellation/Everlasting_Boulder.png"></div>
<div class="talent_title"><p>Everlasting Boulder</p></div>
</div>
<div class="talent_info">
<p>The barrier created by Wake of Earth lasts 5s longer.<BR>The meteorite created by Starfell Sword lasts 10s longer.  </p>
</div>
</div>
</div>`

var electro_detail = `<div id="talent_detail">
<div class="title_middle"><h3>Talent Detail</h3></div>

<div class="talent">
  <h4>Normal Attack</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/talent/Foreign_Thundershock.png"></div>
    <div class="talent_title"><p>Foreign Thundershock</p></div>
  </div>
  <div class="talent_info">
    <p class="talent_title">Normal Attack</p>
    <p> Performs up to 5 rapid strikes.</p>
    
    <p class="talent_title">Charged Attack</p>
    <p> Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</p>
    
    <p class="talent_title">Plunging Attack</p>
    <p> Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact. </p>
  
  </div>
  </div>

  <div class="talent">
    <h4>Elemental Skill</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/talent/Lightning_Blade.png"></div>
      <div class="talent_title"><p>Lightning Blade</p></div>
    </div>
    <div class="talent_info">
      <p class="talent_title">Press</p>
      <p>Unleashes three swift thunder shadows that deal Electro DMG to opponents and leave an Abundance Amulet behind after hitting an opponent.<br> 2 Abundance Amulets can be created initially. Using this skill will reset any Abundance Amulets that were generated. </p>
      
      <p class="talent_title">Abundance Amulets</p>
      <p>When a character is near an Abundance Amulet, they will absorb it and obtain the following effects: </p>

      <ul>
        <li>Restores Elemental Energy</li>
        <li>Increases Energy Recharge during the Abundance Amulet's duration.</li>

        </ul>
    
    </div>
  
</div>

<div class="talent">
  <h4>Elemental Burst</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/talent/Bellowing_Thunder.png"></div>
    <div class="talent_title"><p>Bellowing Thunder</p></div>
  </div>
  <div class="talent_info">
    <p>Call upon the protection of lightning, knocking nearby opponents back and dealing Electro DMG to them.</p>
    <p class="talent_title">Lightning Shroud</p>
    <p>When your active character's Normal or Charged Attacks hit opponents, they will call Falling Thunder forth, dealing Electro DMG. <br>When Falling Thunder hits opponents, it will regenerate Energy for that character. <br>One instance of Falling Thunder can be generated every 0.5s.  </p>
  </div>

</div>
<div class="talent">
<h4>Passive Talent</h4>
<div class="talent_name">
  <div class="talent_img"><img src="/img/character/talent/Thunderflash.png"></div>
  <div class="talent_title"><p>Thunderflash</p></div>
</div>
<div class="talent_info">
  <p>When another nearby character in the party obtains an Abundance Amulet created by Lightning Blade, Lightning Blade's CD is decreased by 1.5s.</p>
</div>
</div>
<div class="talent">
<div class="talent_name">
<div class="talent_img"><img src="/img/character/talent/Resounding_Roar.png"></div>
<div class="talent_title"><p>Resounding Roar</p></div>
</div>
<div class="talent_info">
<p>Increases the Energy Recharge effect granted by Lightning Blade's Abundance Amulet by 10% of the Traveler's Energy Recharge.</p>
</div>
</div>
</div>
<div id="constellation_detail">
<div class="title_middle"><h3>Constellation</h3></div>
<div class="talent">
  <h4>Level 1</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/constellation/Spring_Thunder_of_Fertility.png"></div>
    <div class="talent_title"><p>Spring Thunder of Fertility</p></div>
  </div>
  <div class="talent_info">
    <p>The number of Abundance Amulets that can be generated using Lightning Blade is increased to 3. </p>
  </div>
  </div>
<div class="talent">
    <h4>Level 2</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/constellation/Violet_Vehemence.png"></div>
      <div class="talent_title"><p>Violet Vehemence</p></div>
    </div>
    <div class="talent_info">
      <p>When Falling Thunder created by Bellowing Thunder hits an opponent, it will decrease their Electro RES by 15% for 8s. </p>
    </div>
  </div>
<div class="talent">
    <h4>Level 3</h4>
    <div class="talent_name">
      <div class="talent_img"><img src="/img/character/constellation/Distant_Crackling.png"></div>
      <div class="talent_title"><p>Distant Crackling</p></div>
    </div>
    <div class="talent_info">
      <p>Increases the Level of Bellowing Thunder by 3.<br>Maximum upgrade level is 15. </p>
    </div>
</div>
<div class="talent">
  <h4>Level 4</h4>
  <div class="talent_name">
    <div class="talent_img"><img src="/img/character/constellation/Fickle_Cloudstrike.png"></div>
    <div class="talent_title"><p>Fickle Cloudstrike</p></div>
  </div>
  <div class="talent_info">
    <p>When a character obtains Abundance Amulets generated by Lightning Blade, if this character's Energy is less than 35%, the Energy restored by the Abundance Amulets is increased by 100%. </p>
  </div>
</div>
<div class="talent">
<h4>Level 5</h4>
<div class="talent_name">
  <div class="talent_img"><img src="/img/character/constellation/Clamor_in_the_Wilds.png"></div>
  <div class="talent_title"><p>Clamor in the Wilds</p></div>
</div>
<div class="talent_info">
  <p>Increases the Level of Lightning Blade by 3.<br>Maximum upgrade level is 15. </p>
</div>
</div>
<div class="talent">
<h4>Level 6</h4>
<div class="talent_name">
<div class="talent_img"><img src="/img/character/constellation/World-Shaker.png"></div>
<div class="talent_title"><p>World-Shaker</p></div>
</div>
<div class="talent_info">
<p>Every 2 Falling Thunder attacks triggered by Bellowing Thunder will increase the DMG dealt by the next Falling Thunder by 200%, and will restore an additional 1 Energy to the current character.  </p>
</div>
</div>
</div>`
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

load()

function load(){
    var win = linkOptions()
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            character_json = character[i]
        }
    }
    if(win != "Anemo" && win != "Geo" && win != "Electro"){
        if(localStorage.getItem("telement") == null){
            console.log("last element was not found, using default...")
            element = "Anemo"
            localStorage.setItem("telement",element)
        }else{
            element = localStorage.getItem("telement")
            console.log(element)
        }
    }else{
        element = win
    }

    if(element == "Anemo"){
        anemo()
    }else if(element == "Geo"){
        geo()
    }else if(element == "Electro"){
        electro()
    }
    name_info()
    
    preloadImage(character_json.full_image)
    preloadImage(character_json.full_image_female)
    if(localStorage.getItem("timage") == null){
      localStorage.setItem("timage","Aether")
        console.log("Last character image not found, using default")
        aether()
    }else if(localStorage.getItem("timage") == "Aether"){
        aether()
        console.log("Aether")
    }else if(localStorage.getItem("timage") == "Lumine"){
        lumine()
        console.log("Lumine")
    }
    other_btn()
    other_info()
}

function name_info(){
    var name_title = document.createElement("h2")
    var name_detail = document.createElement("p")
    var name_title2 = document.createElement("h2")
    var name_detail2 = document.createElement("p")
    var parent = document.getElementById("character_info")
    var top = document.getElementById("character_info_top")
    var parent = document.getElementById("character_info")
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            name_title.innerText = character[i].name
            name_detail.innerText = character[i].rarity+" ☆ "+element+" • "+character[i].weapon+" • "+character[i].region
            name_title2.innerText = character[i].name
            name_detail2.innerText = character[i].rarity+" ☆ "+character[i].element+" • "+character[i].weapon+" • "+character[i].region
        }
    }
    name_detail.id = "cha_detail"
    parent.innerHTML=""
    parent.appendChild(name_title)
    parent.appendChild(name_detail)
    name_detail2.id = "cha_detail2"
    top.innerHTML=""
    top.appendChild(name_title2)
    top.appendChild(name_detail2)
}

function load_json(file){
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null)
    var jason = JSON.parse(request.responseText);
    return jason
}

function aether(){
    var img = document.getElementById("cha_img_full")
    var link = document.querySelector("link[rel~='icon']");
    link.href = character_json.image_male
    localStorage.setItem("timage","Aether")
    if(img.src.includes(character_json.full_image) == false){
        var btn_con = document.getElementById("selector")
        var btn = btn_con.getElementsByTagName("a")
        btn[0].style.backgroundColor = "#707070"
        btn[1].style.backgroundColor = ""
        img.style.opacity = "0"
        setTimeout(() => {
            img.src = character_json.full_image
            setTimeout(() => {
                img.style.opacity = ""
            }, 300);
        }, 250);
    }
}

function lumine(){
    var img = document.getElementById("cha_img_full")
    var link = document.querySelector("link[rel~='icon']");
    link.href = character_json.image_female
    localStorage.setItem("timage","Lumine")
    if(img.src.includes(character_json.full_image_female) == false){
        var btn_con = document.getElementById("selector")
        var btn = btn_con.getElementsByTagName("a")
        btn[1].style.backgroundColor = "#707070"
        btn[0].style.backgroundColor = ""
        img.style.opacity = "0"
        setTimeout(() => {
            img.src = character_json.full_image_female
            setTimeout(() => {
                img.style.opacity = ""
            }, 300);
        }, 250);
    }
}

function other_btn(){
    var parent = document.getElementById("element_cha")
    parent.innerHTML = ""
    parent.innerHTML = '<img src="/img/character/element/' + element.toLowerCase() + '.png">Other '+ element+' Character'
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
    build.href = "https://genshin-builds.com/character/"+character_json.name.toLowerCase().replace(" ","-")+"_"+element.toLowerCase()
    media.href = "https://genshin-impact.fandom.com/wiki/"+character_json.name.replace(" ","_")+"/Media"

    
    voicepver.innerText = "Voice-Over"
    build.innerText = "Builds"
    media.innerText = "Media"

    parent.appendChild(story)
    parent.appendChild(voicepver)
    parent.appendChild(build)
    parent.appendChild(media)
 }

function preloadImage(url){new Image().src=url;}

function anemo(){
    var selector = document.getElementById("eselector")
    var btn = selector.getElementsByTagName("a")
    document.getElementById("detail_main").innerHTML = anemo_detail
    if(btn[0].style.backgroundColor != "rgb(112, 112, 112)"){
      localStorage.setItem("telement","Anemo")
        element = "Anemo"
        element_reload()
    }
    btn[0].style.backgroundColor = "#707070"
    btn[1].style.backgroundColor = ""
    btn[2].style.backgroundColor = ""
    linkOptionsChange("Anemo")
}

function geo(){
    var selector = document.getElementById("eselector")
    var btn = selector.getElementsByTagName("a")
    document.getElementById("detail_main").innerHTML = geo_detail
    if(btn[1].style.backgroundColor != "rgb(112, 112, 112)"){
      localStorage.setItem("telement","Geo")
        element = "Geo"
        element_reload()
    }
    btn[0].style.backgroundColor = ""
    btn[1].style.backgroundColor = "#707070"
    btn[2].style.backgroundColor = ""
    linkOptionsChange("Geo")
    
}

function electro(){
    var selector = document.getElementById("eselector")
    var btn = selector.getElementsByTagName("a")
    document.getElementById("detail_main").innerHTML = electro_detail
    if(btn[2].style.backgroundColor != "rgb(112, 112, 112)"){
      localStorage.setItem("telement","Electro")
        element = "Electro"
        element_reload()
    }
    btn[0].style.backgroundColor = ""
    btn[1].style.backgroundColor = ""
    btn[2].style.backgroundColor = "#707070"
    linkOptionsChange("Electro")
    
}

function element_reload(){
    var other_element = document.getElementById("element_cha")
    var cha_detail = document.getElementById("cha_detail")
    var top = document.getElementById("cha_detail2")
    cha_build_wea()
    cha_build_artifact()
    material()
    if(cha_detail == null){
        name_info();
        cha_detail = document.getElementById("cha_detail")
        top = document.getElementById("cha_detail2")
    }
    material_talent()
    other_element.style.opacity = "0"
    cha_detail.style.opacity = "0"
    top.style.opacity = "0"
    other_info()
    setTimeout(() => {
        other_btn()
        change_cha_detail_element()
        other_cha()
    }, 300);
    setTimeout(() => {
        other_element.style.opacity = "1"
        cha_detail.style.opacity = "1"
        top.style.opacity = "1"
    }, 350);
}

function change_cha_detail_element(){
    var name_detail = document.getElementById("cha_detail")
    var top = document.getElementById("cha_detail2")
    for (i = 0; i < character.length; i++){
        if(character[i].name == cha_name){
            name_detail.innerText = character[i].rarity+" ☆ "+element+" • "+character[i].weapon+" • "+character[i].region
            top.innerText = character[i].rarity+" ☆ "+element+" • "+character[i].weapon+" • "+character[i].region
        }
    }
}

function other_cha(){
    var parent = document.getElementsByClassName("other_cha")[0]
    document.getElementById("other_ti").innerText = "Other "+character_json.element+" Character"
    parent.innerHTML = ""
    for (i = 0; i < character.length; i++){
        if(element == character[i].element && character[i].name != cha_name){
            parent.appendChild(create_image(character[i].name,character[i].image))
        }
    }
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

 function material_title(title){
    var container = document.createElement("div")
    var ti = document.createElement("h4")
    ti.innerText = title
    container.appendChild(ti)
    container.classList.add("inner_title")
    return container
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

function material(){
    var gemstone_1,gemstone_2,gemstone_3,gemstone_4,comasc_1,comasc_2,comasc_3,local_asc
    var gemstone_img_1,gemstone_img_2,gemstone_img_3,gemstone_img_4,comasc_img_1,comasc_img_2,comasc_img_3,local_asc_img
    var parent_ascension = document.getElementById("ascension_mat")
    parent_ascension.innerHTML = ""
    for (i = 0; i < item_group.length; i++){
        if(item_group[i].element == character_json.gemstone){
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
    }

    comasc_1 = decodeURIComponent(comasc_1)
    comasc_2 = decodeURIComponent(comasc_2)
    comasc_3 = decodeURIComponent(comasc_3)
    local_asc = decodeURIComponent(local_asc)

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

    var asc_3 =  material_container()
    asc_3.appendChild(material_title("Ascension 3"))
    asc_3.appendChild(material_creator(gemstone_img_2,"6x \u00A0\u00A0"+gemstone_2))
    asc_3.appendChild(material_creator(local_asc_img,"20x \u00A0\u00A0"+local_asc))
    asc_3.appendChild(material_creator(comasc_img_2,"12x \u00A0\u00A0"+comasc_2))

    var asc_4 =  material_container()
    asc_4.appendChild(material_title("Ascension 4"))
    asc_4.appendChild(material_creator(gemstone_img_3,"3x \u00A0\u00A0"+gemstone_3))
    asc_4.appendChild(material_creator(local_asc_img,"30x \u00A0\u00A0"+local_asc))
    asc_4.appendChild(material_creator(comasc_img_2,"18x \u00A0\u00A0"+comasc_2))

    var asc_5 =  material_container()
    asc_5.appendChild(material_title("Ascension 5"))
    asc_5.appendChild(material_creator(gemstone_img_3,"6x \u00A0\u00A0"+gemstone_3))
    asc_5.appendChild(material_creator(local_asc_img,"45x \u00A0\u00A0"+local_asc))
    asc_5.appendChild(material_creator(comasc_img_3,"12x \u00A0\u00A0"+comasc_3))

    var asc_6 =  material_container()
    asc_6.appendChild(material_title("Ascension 5"))
    asc_6.appendChild(material_creator(gemstone_img_4,"6x \u00A0\u00A0"+gemstone_4))
    asc_6.appendChild(material_creator(local_asc_img,"60x \u00A0\u00A0"+local_asc))
    asc_6.appendChild(material_creator(comasc_img_3,"24x \u00A0\u00A0"+comasc_3))

    parent_ascension.appendChild(asc_1)
    parent_ascension.appendChild(asc_2)
    parent_ascension.appendChild(asc_3)
    parent_ascension.appendChild(asc_4)
    parent_ascension.appendChild(asc_5)
    parent_ascension.appendChild(asc_6)
}

function material_talent(){
    var parent_talent = document.getElementById("talent_ascension_mat")
    var talent_1_1,talent_1_2,talent_1_3,talent_2_1,talent_2_2,talent_2_3,talent_3_1,talent_3_2,talent_3_3,local_1,local_2,local_3,talent_boss
    var talent_1_1_image,talent_1_2_image,talent_1_3_image,talent_2_1_image,talent_2_2_image,talent_2_3_image,talent_3_1_image,talent_3_2_image,talent_3_3_image,local_1_image,local_2_image,local_3_image,talent_boss_image
    if(element == "Anemo"){
    talent_boss = character_json.mondstadt_talent_boss
    for(i = 0; i < item_group.length; i++){
        if(item_group[i].name == character_json.mondstadt_talent){
            local_1 = item_group[i].set_1
            local_2 = item_group[i].set_2
            local_3 = item_group[i].set_3
        }
    }
    for(i = 0; i < talent.length; i++){
        if(character_json.mondstadt_talent_1 == talent[i].name){
            talent_1_1 = talent[i].name_1
            talent_1_2 = talent[i].name_2
            talent_1_3 = talent[i].name_3
            talent_1_1_image = talent[i].img_1
            talent_1_2_image = talent[i].img_2
            talent_1_3_image = talent[i].img_3
        }else if(character_json.mondstadt_talent_2 == talent[i].name){
            talent_2_1 = talent[i].name_1
            talent_2_2 = talent[i].name_2
            talent_2_3 = talent[i].name_3
            talent_2_1_image = talent[i].img_1
            talent_2_2_image = talent[i].img_2
            talent_2_3_image = talent[i].img_3
        }else if(character_json.mondstadt_talent_3 == talent[i].name){
            talent_3_1 = talent[i].name_1
            talent_3_2 = talent[i].name_2
            talent_3_3 = talent[i].name_3
            talent_3_1_image = talent[i].img_1
            talent_3_2_image = talent[i].img_2
            talent_3_3_image = talent[i].img_3
        }
    }
    for(i = 0; i < item.length; i++){
        if(item[i].name == local_1) local_1_image = item[i].image
        else if(item[i].name == local_2) local_2_image = item[i].image
        else if(item[i].name == local_3) local_3_image = item[i].image
        else if(item[i].name == talent_boss) talent_boss_image = item[i].image
    }
}else if(element == "Geo"){
    talent_boss = character_json.liyue_talent_boss
    for(i = 0; i < item_group.length; i++){
        if(item_group[i].name == character_json.liyue_talent){
            local_1 = item_group[i].set_1
            local_2 = item_group[i].set_2
            local_3 = item_group[i].set_3
        }
    }
    for(i = 0; i < talent.length; i++){
        if(character_json.liyue_talent_1 == talent[i].name){
            talent_1_1 = talent[i].name_1
            talent_1_2 = talent[i].name_2
            talent_1_3 = talent[i].name_3
            talent_1_1_image = talent[i].img_1
            talent_1_2_image = talent[i].img_2
            talent_1_3_image = talent[i].img_3
        }else if(character_json.liyue_talent_2 == talent[i].name){
            talent_2_1 = talent[i].name_1
            talent_2_2 = talent[i].name_2
            talent_2_3 = talent[i].name_3
            talent_2_1_image = talent[i].img_1
            talent_2_2_image = talent[i].img_2
            talent_2_3_image = talent[i].img_3
        }else if(character_json.liyue_talent_3 == talent[i].name){
            talent_3_1 = talent[i].name_1
            talent_3_2 = talent[i].name_2
            talent_3_3 = talent[i].name_3
            talent_3_1_image = talent[i].img_1
            talent_3_2_image = talent[i].img_2
            talent_3_3_image = talent[i].img_3
        }
    }
    for(i = 0; i < item.length; i++){
        if(item[i].name == local_1) local_1_image = item[i].image
        else if(item[i].name == local_2) local_2_image = item[i].image
        else if(item[i].name == local_3) local_3_image = item[i].image
        else if(item[i].name == talent_boss) talent_boss_image = item[i].image
    }
}else if(element == "Electro"){
    talent_boss = character_json.inazuma_talent_boss
    for(i = 0; i < item_group.length; i++){
        if(item_group[i].name == character_json.inazuma_talent){
            local_1 = item_group[i].set_1
            local_2 = item_group[i].set_2
            local_3 = item_group[i].set_3
        }
    }
    for(i = 0; i < talent.length; i++){
        if(character_json.inazuma_talent_1 == talent[i].name){
            talent_1_1 = talent[i].name_1
            talent_1_2 = talent[i].name_2
            talent_1_3 = talent[i].name_3
            talent_1_1_image = talent[i].img_1
            talent_1_2_image = talent[i].img_2
            talent_1_3_image = talent[i].img_3
        }else if(character_json.inazuma_talent_2 == talent[i].name){
            talent_2_1 = talent[i].name_1
            talent_2_2 = talent[i].name_2
            talent_2_3 = talent[i].name_3
            talent_2_1_image = talent[i].img_1
            talent_2_2_image = talent[i].img_2
            talent_2_3_image = talent[i].img_3
        }else if(character_json.inazuma_talent_3 == talent[i].name){
            talent_3_1 = talent[i].name_1
            talent_3_2 = talent[i].name_2
            talent_3_3 = talent[i].name_3
            talent_3_1_image = talent[i].img_1
            talent_3_2_image = talent[i].img_2
            talent_3_3_image = talent[i].img_3
        }
    }
    for(i = 0; i < item.length; i++){
        if(item[i].name == local_1) local_1_image = item[i].image
        else if(item[i].name == local_2) local_2_image = item[i].image
        else if(item[i].name == local_3) local_3_image = item[i].image
        else if(item[i].name == talent_boss) talent_boss_image = item[i].image
    }
}
    parent_talent.innerHTML = ""
    talent_1_1 = decodeURIComponent(talent_1_1)
    talent_1_2 = decodeURIComponent(talent_1_2)
    talent_1_3 = decodeURIComponent(talent_1_3)
    talent_2_1 = decodeURIComponent(talent_2_1)
    talent_2_2 = decodeURIComponent(talent_2_2)
    talent_2_3 = decodeURIComponent(talent_2_3)
    talent_3_1 = decodeURIComponent(talent_3_1)
    talent_3_2 = decodeURIComponent(talent_3_2)
    talent_3_3 = decodeURIComponent(talent_3_3)
    local_1 = decodeURIComponent(local_1)
    local_2 = decodeURIComponent(local_2)
    local_3 = decodeURIComponent(local_3)
    talent_boss = decodeURIComponent(talent_boss)

    parent_talent.appendChild(title("Talent Ascension Materials"))

    var asc_1 =  material_container()
    asc_1.appendChild(material_title("Ascension 1"))
    asc_1.appendChild(material_creator(talent_1_1_image,"3x \u00A0\u00A0\u00A0"+talent_1_1))
    asc_1.appendChild(material_creator(local_1_image,"6x \u00A0\u00A0"+local_1))

    var asc_2 =  material_container()
    asc_2.appendChild(material_title("Ascension 2"))
    asc_2.appendChild(material_creator(talent_2_2_image,"2x \u00A0\u00A0\u00A0"+talent_2_2))
    asc_2.appendChild(material_creator(local_2_image,"3x \u00A0\u00A0"+local_2))

    var asc_3 =  material_container()
    asc_3.appendChild(material_title("Ascension 3"))
    asc_3.appendChild(material_creator(talent_3_2_image,"4x \u00A0\u00A0\u00A0"+talent_3_2))
    asc_3.appendChild(material_creator(local_2_image,"4x \u00A0\u00A0"+local_2))

    var asc_4 =  material_container()
    asc_4.appendChild(material_title("Ascension 4"))
    asc_4.appendChild(material_creator(talent_1_2_image,"6x \u00A0\u00A0\u00A0"+talent_1_2))
    asc_4.appendChild(material_creator(local_2_image,"6x \u00A0\u00A0"+local_2))

    var asc_5 =  material_container()
    asc_5.appendChild(material_title("Ascension 5"))
    asc_5.appendChild(material_creator(talent_2_2_image,"9x \u00A0\u00A0\u00A0"+talent_2_2))
    asc_5.appendChild(material_creator(local_2_image,"9x \u00A0\u00A0"+local_2))

    var asc_6 =  material_container()
    asc_6.appendChild(material_title("Ascension 6"))
    asc_6.appendChild(material_creator(talent_3_3_image,"4x \u00A0\u00A0\u00A0"+talent_3_3))
    asc_6.appendChild(material_creator(local_3_image,"4x \u00A0\u00A0"+local_3))
    asc_6.appendChild(material_creator(talent_boss_image,"1x \u00A0\u00A0\u00A0"+talent_boss))

    var asc_7 =  material_container()
    asc_7.appendChild(material_title("Ascension 7"))
    asc_7.appendChild(material_creator(talent_1_3_image,"6x \u00A0\u00A0\u00A0"+talent_1_3))
    asc_7.appendChild(material_creator(local_3_image,"6x \u00A0\u00A0"+local_3))
    asc_7.appendChild(material_creator(talent_boss_image,"1x \u00A0\u00A0\u00A0"+talent_boss))

    var asc_8 =  material_container()
    asc_8.appendChild(material_title("Ascension 8"))
    asc_8.appendChild(material_creator(talent_2_3_image,"12x \u00A0\u00A0\u00A0"+talent_2_3))
    asc_8.appendChild(material_creator(local_3_image,"9x \u00A0\u00A0"+local_3))
    asc_8.appendChild(material_creator(talent_boss_image,"2x \u00A0\u00A0"+talent_boss))

    var asc_9 =  material_container()
    asc_9.appendChild(material_title("Ascension 9"))
    asc_9.appendChild(material_creator(talent_3_3_image,"16x \u00A0\u00A0\u00A0"+talent_3_3))
    asc_9.appendChild(material_creator(local_3_image,"12x \u00A0\u00A0"+local_3))
    asc_9.appendChild(material_creator(talent_boss_image,"2x \u00A0\u00A0"+talent_boss))
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

function title(text){
    var con = document.createElement("div")
    var ti = document.createElement("h3")
    ti.innerHTML = text
    con.appendChild(ti)
    con.classList.add("title_middle")
    return con
}

function material_container(){
    var con = document.createElement("div")
    con.id = "ascension"
    return con
}

function linkOptions(){
    var link = document.location.href
    var split = link.slice(link.search(".html?")+6,link.length)
    if(split == link) split = null
    return split
}

function linkOptionsChange(options){
    var link = document.location.href
    var split = link.slice(0,link.search(".html?")+5)
    window.history.pushState('', 'New Page Title', split+"?"+options);
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
    var weapons
    if(element == "Anemo"){
      document.getElementById("build_type").innerText = character_json.anemo_build_type
        for (i = 0; i < weapon.length; i++){
            if(weapon[i].name == character_json.anemo_build_weapon){
                weapons = weapon[i]
            }
        }
    }else if(element == "Geo"){
      document.getElementById("build_type").innerText = character_json.geo_build_type
        for (i = 0; i < weapon.length; i++){
            if(weapon[i].name == character_json.geo_build_weapon){
                weapons = weapon[i]
            }
        }
    }if(element == "Electro"){
      document.getElementById("build_type").innerText = character_json.electro_build_type
        for (i = 0; i < weapon.length; i++){
            if(weapon[i].name == character_json.electro_build_weapon){
                weapons = weapon[i]
            }
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
    if(element == "Anemo"){
    if(character_json.anemo_build_artifact_2 != null) artifact_2 = 1
    for (i = 0; i < artifact.length; i++){
        if(artifact[i].name == character_json.anemo_build_artifact){
            weapons = artifact[i]
        }
    }
    }else if(element == "Geo"){
        if(character_json.geo_build_artifact_2 != null) artifact_2 = 1
        for (i = 0; i < artifact.length; i++){
            if(artifact[i].name == character_json.geo_build_artifact){
                weapons = artifact[i]
            }
        }
    }else if(element == "Electro"){
        if(character_json.electro_build_artifact_2 != null) artifact_2 = 1
        for (i = 0; i < artifact.length; i++){
            if(artifact[i].name == character_json.electro_build_artifact){
                weapons = artifact[i]
            }
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
    if(element == "Anemo"){
        for (i = 0; i < artifact.length; i++){
            if(artifact[i].name == character_json.anemo_build_artifact_2){
                weapons = artifact[i]
            }
        }
        }else if(element == "Geo"){
            for (i = 0; i < artifact.length; i++){
                if(artifact[i].name == character_json.geo_build_artifact_2){
                    weapons = artifact[i]
                }
            }
        }else if(element == "Electro"){
            for (i = 0; i < artifact.length; i++){
                if(artifact[i].name == character_json.electro_build_artifact_2){
                    weapons = artifact[i]
                }
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
