var dev_tool = ["dev_close()","unload()","reload()","debug_reload()","extanded_filter()","teams_selector()","load_save()","teams()","reset()","team_expand()"]
var developer_mode = 0
var closes = 0
var character = load_json("/json/characters.json")
var weapon = load_json("/json/weapon.json")
var teams_list = 0
const weekday = ["sunday","monday","tuesday","wednesday","monday","tuesday","wednesday"];

const d = new Date();
let today = weekday[d.getDay()];
function capitalize(string) {return string.charAt(0).toUpperCase() + string.slice(1);}
function refresh(){window.location.href = window.location.href}
function load_json(file){
   var request = new XMLHttpRequest();
   request.open("GET", file, false);
   request.send(null)
   var jason = JSON.parse(request.responseText);
   return jason
}
if(getCookie("load") != 1){
reload()
teams()
}
if(getCookie("developer") == 1){
    developer_mode = 9
    dev()
}
function reload(){
    unload()
    teams()
    developer_mode = 1
for (i = 0; i < character.length; i++){
    create_image(character[i].name,character[i].image,character[i].hex,character[i].region,character[i].weapon,character[i].element,character[i].rarity)
}
}
function create_image(name,image,code,region,wepon,element,rare){
    var parent = document.getElementById("character")
    var character_img_container = document.createElement("div")
    var name_container = document.createElement("div")
    var img_container = document.createElement("div")
    var images = document.createElement("img")
    var names = document.createElement("p")
    var link = document.createElement("a")
    link.href = "/character.html?cha="+code
    names.innerText = name
    images.src = image
    name_container.classList.add("name")
    img_container.classList.add("img")
    name_container.appendChild(names)
    img_container.appendChild(images)
    character_img_container.appendChild(img_container)
    character_img_container.appendChild(name_container)
    character_img_container.classList.add("character_img")
    link.id = name + " " + region + " " + wepon +" "+element+" "+rare+"☆ "+code
    link.appendChild(character_img_container)
    parent.appendChild(link)
}
function unload(){
    const thing = document.getElementById("character").getElementsByTagName("a")
    const things = document.getElementById("character").getElementsByClassName("dev_cha_info")
    const list = thing.length
    const lists = things.length
    for (i = 0; i < list; i++){
        thing[0].remove()
    }
    for (i = 0; i < lists; i++){
        things[0].remove()
    }
    document.getElementById("teams").innerHTML = ""
}

function debug_reload(){
    document.getElementById("teams").innerHTML=""
unload()
developer_mode = 1
for (i = 0; i < character.length; i++){
    var vare = Object.keys(character[i])
    var a = character[i]
    var text = ""
    var ah = ""
    for (let x of vare) {
        text += x + ": " + a[x] + "<br>";
        ah += a[x]+" "
      }
      dev_info(character[i].image,text,character[i].full_image,ah)
}
}

function dev(){
        dev_menu()
        for (i = 0; i < dev_tool.length; i++){
            var parent = document.getElementById("developer_tools")
            var tool = dev_tool[i]
            var click = document.createElement("a")
            var container = document.createElement("div")
            var title = document.createElement("p")
            var icon = document.createElement("i")
            title.innerText=tool
            title.classList.add("roboto-mono")
            icon.classList.add("material-icons")
            icon.classList.add("w3-quarter")
            icon.classList.add("mat_icons")
            icon.innerText = "code"
            click.onclick = new Function("event", dev_tool[i])
            click.href="javascript:void(0)"
            container.classList.add("navi_button_dev")
            container.appendChild(icon)
            container.appendChild(title)
            click.appendChild(container)
            parent.appendChild(click)
        }
}
function dev_check(){
    if(developer_mode == 10){
    alert("Developer tools enable")
    }else if(closes == 1){
        alert("Developer tools disable")
        closes = 0
    }

}
function dev_close(){
    var parent = document.getElementById("developer_tools")
    developer_mode = 0
    closes = 1
    parent.remove()
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

function dev_menu(){
    var main = document.getElementById("main")
    var navi_tool = document.createElement("div")
    var navi_butt = document.createElement("div")
    var title = document.createElement("p")
    var icon = document.createElement("i")
    navi_butt.classList.add("navi_text")
    navi_tool.id="developer_tools"
    navi_tool.classList.add("navi_right")
    navi_tool.classList.add("dark-1")
    title.innerText="Dev Tools"
    title.style.marginTop = "10px"
    title.classList.add("roboto-mono")
    icon.classList.add("material-icons")
    icon.classList.add("w3-quarter")
    icon.classList.add("mat_icons")
    icon.innerText = "code"
    navi_butt.appendChild(icon)
    navi_butt.appendChild(title)
    navi_tool.appendChild(navi_butt)
    main.appendChild(navi_tool)
  }
function dev_info(image,text,full_image,id){
    var parent = document.getElementById("character")
    var container = document.createElement("div")
    var container_img = document.createElement("div")
    var container_detail = document.createElement("div")
    var container_full_image = document.createElement("div")
    var img = document.createElement("img")
    var img_full = document.createElement("img")
    img.src=image
    img_full.src=full_image
    container_detail.innerHTML = text
    container.classList.add("dev_cha_info")
    container_img.appendChild(img)
    container_full_image.appendChild(img_full)
    container_full_image.classList.add("img")
    container_img.classList.add("img")
    container_detail.classList.add("detail")
    container_detail.classList.add("roboto-mono")
    container.appendChild(container_img)
    container.appendChild(container_full_image)
    container.appendChild(container_detail)
    container.id = id
    parent.appendChild(container)

}

function filter(type,container,filter_tag){
    var parent = document.getElementById(container)
    var child = parent.getElementsByTagName(filter_tag)
    
    if(type == "all"){type = ""}
    for (i = 0; i < child.length; i++){
        if(child[i].id.includes(type)){
            console.log(child[i])
            child[i].classList.remove("hidea")
            
        }else{
            child[i].classList.add("hidea")
        }
        
    }
}
function close_filter(){
    var filter = document.getElementById("filter")
    var filterbtn = document.getElementById("filter_expand_btn")
    var elem = document.querySelector('.filter');
    var style = getComputedStyle(elem);
    if(filter.style.height == "205px"){
        filter.style.height = ""; 
        filterbtn.style.backgroundColor = "";
        filter.style.backgroundColor = ""
    }
    else if(filter.style.height == "165px"){
        filter.style.height = ""; 
        filterbtn.style.backgroundColor = "";
        filter.style.backgroundColor = ""
    }
}
function extanded_filter(){
    var filter = document.getElementById("filter")
    var filterbtn = document.getElementById("filter_expand_btn")
    var elem = document.querySelector('.filter');
    var style = getComputedStyle(elem);
    if(filter.style.height == "205px"){
        filter.style.height = ""; 
        filterbtn.style.backgroundColor = "";
        filter.style.backgroundColor = ""
    }
    else if(filter.style.height == "165px"){
        filter.style.height = ""; 
        filterbtn.style.backgroundColor = "";
        filter.style.backgroundColor = ""
    }
    else if(style.height == "60px"){
        filter.style.height = "205px";
        filterbtn.style.backgroundColor = "#707070";
        filter.style.backgroundColor = "#232323"
    }
    else if(style.height == "44px"){
        filter.style.height = "165px";
        filterbtn.style.backgroundColor = "#707070";
        filter.style.backgroundColor = "#232323"
    }
}
function extand_filter(){
    var filter = document.getElementById("filter")
    var filterbtn = document.getElementById("filter_expand_btn")
    var elem = document.querySelector('.filter');
    var style = getComputedStyle(elem);
    if(style.height == "60px"){
        filter.style.height = "205px";
        filterbtn.style.backgroundColor = "#707070";
        filter.style.backgroundColor = "#232323"
    }
    else if(style.height == "44px"){
        filter.style.height = "165px";
        filterbtn.style.backgroundColor = "#707070";
        filter.style.backgroundColor = "#232323"
    }
}
function search(id,filter_id){
    var input = document.getElementById(id)
    var value = input.value.toUpperCase()
    var parent = document.getElementById(filter_id)
    var list = parent.getElementsByTagName("a")
    var txtValue
    for (i = 0; i < list.length; i++) {
        txtValue = list[i].id;
        if (txtValue.toUpperCase().indexOf(value) > -1) {
          list[i].classList.remove("hidea")
        } else {
            list[i].classList.add("hidea")
        }
      }
}
function select_team(character){
var character_parent = document.getElementsByClassName(character)
var child_container = character_parent[0].getElementsByClassName("character_img")
var img_container = child_container[0].getElementsByClassName("selected")
if(img_container[0].style.opacity == "1"){
    img_container[0].style.opacity = "0"
}else{
    img_container[0].style.opacity = "1"
    
}
save_character(character)
}
function load_selected_team(character){
    var character_parent = document.getElementsByClassName(character)
    var child_container = character_parent[0].getElementsByClassName("character_img")
    var img_container = child_container[0].getElementsByClassName("selected")
    img_container[0].style.opacity = "1"
    }
function teams_img(name,image,code,region,wepon,element,rare){
    var parent = document.getElementById("character")
    var character_img_container = document.createElement("div")
    var name_container = document.createElement("div")
    var img_container = document.createElement("div")
    var images = document.createElement("img")
    var names = document.createElement("p")
    var link = document.createElement("a")
    var selected_container = document.createElement("div")
    var selected = document.createElement("img")
    var without_space = name.replaceAll(" ","_")
    selected.src="/img/character/head/selected.png"
    link.href = "javascript:void(0)"
    link.onclick = new Function("event", "select_team('"+without_space+"')")
    names.innerText = name
    images.src = image
    name_container.classList.add("name")
    img_container.classList.add("img")
    selected_container.classList.add("selected")
    name_container.appendChild(names)
    selected_container.appendChild(selected)
    img_container.appendChild(images)
    character_img_container.appendChild(img_container)
    character_img_container.appendChild(selected_container)
    character_img_container.appendChild(name_container)
    character_img_container.classList.add("character_img")
    link.id = name + " " + region + " " + wepon +" "+element+" "+rare+"☆ "+code+" "+without_space
    link.classList.add(without_space)
    link.appendChild(character_img_container)
    parent.appendChild(link)
}
function teams_weapon_img(name,image,code,region,wepon,rare){
    var parent = document.getElementById("character")
    var character_img_container = document.createElement("div")
    var name_container = document.createElement("div")
    var img_container = document.createElement("div")
    var images = document.createElement("img")
    var names = document.createElement("p")
    var link = document.createElement("a")
    var selected_container = document.createElement("div")
    var selected = document.createElement("img")
    name = decodeURIComponent(name)
    var without_space = name.replaceAll(" ","_")
    selected.src="/img/character/head/selected.png"
    link.href = "javascript:void(0)"
    link.onclick = new Function("event", "select_weapon('"+code+"')")
    names.innerText = name
    images.src = image
    name_container.classList.add("name")
    img_container.classList.add("img")
    selected_container.classList.add("selected")
    name_container.appendChild(names)
    selected_container.appendChild(selected)
    img_container.appendChild(images)
    character_img_container.appendChild(img_container)
    character_img_container.appendChild(selected_container)
    character_img_container.appendChild(name_container)
    character_img_container.classList.add("character_img")
    link.id = name + " " + region + " " + wepon +" "+rare+"☆ "+code+" "+without_space
    link.classList.add(code)
    link.appendChild(character_img_container)
    
    parent.appendChild(link)
}
function teams_selector(){
    var main = document.getElementById("main")
    var selection_container = document.getElementById("add_container")
    var btn = document.getElementById("team_switch")
    var teams_container = document.getElementById("teams")
    if(main.style.backgroundColor == "rgb(112, 112, 112)"){
        main.style.backgroundColor = ""
        selection_container.innerHTML='<i class="material-icons-outlined"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">add_circle_outline</i>Add items'
        reload()
        btn.classList.add("hidea")
        close_filter()
        teams()
        document.getElementById("characters").innerText = "Character List"
    }else{
    main.style.backgroundColor = "#707070"
    selection_container.innerHTML='<i class="material-icons-outlined"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">check_circle_outline</i>Close'
    unload()
    teams_list = 0
    btn.classList.remove("hidea")
    extand_filter()
    character_list_team()
    load_character_save()
    
    team_expand(1)
    document.getElementById("characters").innerText = "Character List"
    }
    
}
function character_list_team(){
    teams_list = 0
    for (i = 0; i < character.length; i++){
        teams_img(character[i].name,character[i].image,character[i].hex,character[i].region,character[i].weapon,character[i].element,character[i].rarity)
    }
}
function weapon_list_team(){
    teams_list = 1
    for (i = 0; i < weapon.length; i++){
        if(weapon[i].ignore != "1"){
            teams_weapon_img(weapon[i].name,weapon[i].image,weapon[i].hex,weapon[i].region,weapon[i].weapon,weapon[i].rarity)
        }
        
    }
}
function team_switch(){
    var btn = document.getElementById("team_switch")
    if(teams_list == 0){
        teams_list = 1
        btn.innerHTML='<img src="img/icons/character.png">'
        btn.title = "Select Character"
        unload()
        weapon_list_team()
        load_weapon_save()
        document.getElementById("characters").innerText = "Weapon List"
    }else if(teams_list == 1){
        teams_list = 0
        
        btn.innerHTML='<img src="img/icons/weapon.png">'
        btn.title = "Select Weapon"
        unload()
        character_list_team()
        load_character_save()
        document.getElementById("characters").innerText = "Character List"
    }
}
function save_character(save_character){
    var last_save = getCookie("character")
    for (i = 0; i < character.length; i++){
        if(save_character.replace("_"," ") == character[i].name){
            if(last_save == null){last_save = ""}
            if(last_save.search(character[i].hex) == -1){
                document.cookie = "character="+last_save + "&" + character[i].hex
            }else{
                last_save = last_save.replace("&"+character[i].hex,"")
                document.cookie = "character="+last_save
            }
            
        }
    }
}

function searchall(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function load_character_save(){
    var last_save = getCookie("character")
    for (i = 0; i < character.length; i++){
            if(last_save == null){last_save = ""}
            if(last_save.search(character[i].hex) != -1){
                load_selected_team(character[i].name.replace(" ","_"))
            }
    }
}


function select_weapon(code){
    var weapon_parent = document.getElementsByClassName(code)
    var child_container = weapon_parent[0].getElementsByClassName("character_img")
    var img_container = child_container[0].getElementsByClassName("selected")
    if(img_container[0].style.opacity == "1"){
        img_container[0].style.opacity = "0"
    }else{
        img_container[0].style.opacity = "1"
        
    }
    save_weapon(code)
    }
function load_weapon_save(){
        var last_save = getCookie("weapon")
        for (i = 0; i < weapon.length; i++){
                if(last_save == null){last_save = ""}
                if(last_save.search(weapon[i].hex) != -1){
                    load_selected_team(weapon[i].hex)
                }
        }
    }
function save_weapon(code){
        var last_save = getCookie("weapon")
        for (i = 0; i < weapon.length; i++){
            if(code == weapon[i].hex){
                if(last_save == null){last_save = ""}
                if(last_save.search(weapon[i].hex) == -1){
                    document.cookie = "weapon="+last_save + "&" + weapon[i].hex
                }else{
                    last_save = last_save.replace("&"+weapon[i].hex,"")
                    document.cookie = "weapon="+last_save
                }
                
            }
        }
    }

function teams(){
    var team = document.getElementById("teams")
    var day_title = document.createElement("h2")
    var cha_cookie = getCookie("character")
    var wea_cookie = getCookie("weapon")
    var cookie_empty = 0
    team.innerHTML = ""
    day_title.classList.add("dark-1")
    day_title.style.margin = "0px"
    day_title.innerText = capitalize(today)
    team.appendChild(day_title)

    if(cha_cookie == null || cha_cookie === ""){
        cookie_empty = cookie_empty + 1
    }
    if(wea_cookie == null || wea_cookie === ""){
        cookie_empty = cookie_empty + 1
    }

    if(cookie_empty == 2){
        var none = document.createElement("p")
        none.innerText = "No items was selected, please select it from side menu."
        team.appendChild(none)
        
    }else{
        var last_save = getCookie("character")
        for (i = 0; i < character.length; i++){
            if(last_save == null){last_save = ""}
            if(last_save.search(character[i].hex) != -1){
            if(character[i].talent == today){
                teams_time_img(character[i].image,character[i].name,character[i].hex,"teams","/character.html?cha=")
            }else if(today == "sunday"){
                teams_time_img(character[i].image,character[i].name,character[i].hex,"teams","/character.html?cha=")
            }
        }
        }
        var last_save = getCookie("weapon")
        for (i = 0; i < weapon.length; i++){
            if(last_save == null){last_save = ""}
            if(last_save.search(weapon[i].hex) != -1){
            if(weapon[i].talent == today){
                teams_time_img(weapon[i].image,weapon[i].name,weapon[i].hex,"teams","/weapon.html?wea=")
            }else if(today == "sunday"){
                teams_time_img(weapon[i].image,weapon[i].name,weapon[i].hex,"teams","/weapon.html?wea=")
            }
        }
    }
    }
    if(cookie_empty != 2) check_blank()
    
}

function teams_time_img(image_file,name,hex,container,redir){
    var parent = document.getElementById(container)
    var character_img_container = document.createElement("div")
    var name_container = document.createElement("div")
    var img_container = document.createElement("div")
    var images = document.createElement("img")
    var names = document.createElement("p")
    var link = document.createElement("a")
    link.href = redir+hex
    names.innerText = decodeURIComponent(name)
    images.src = image_file
    name_container.classList.add("name")
    img_container.classList.add("img")
    name_container.appendChild(names)
    img_container.appendChild(images)
    character_img_container.appendChild(img_container)
    character_img_container.appendChild(name_container)
    character_img_container.classList.add("character_img")
    link.id = name + " " + hex
    link.appendChild(character_img_container)
    parent.appendChild(link)
}

function reset(){
    var menu = document.getElementById("team_btn")
    menu.innerHTML='<a><div class="navi_text">Are you sure ?</div></a><a><div class="navi_teams_clear" onclick="reset_yes()">yes</div></a><a><div class="navi_teams_cancel" onclick="reset_no()">no</div></a>'
}

function reset_yes(){
    var menu = document.getElementById("team_btn")
    menu.innerHTML='<a href="#teams"><div class="navi_button"><img src="img/icons/teams.png" style="width: 35px;margin-left:8px;margin-right:15px">Teams</div></a><a href="javascript:void(0)" onclick="teams_selector()"><div class="navi_button" id="add_container"><i class="material-icons-outlined"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">add_circle_outline</i>Add items</div></a><a href="javascript:void(0)" onclick="team_expand()"><div class="navi_button" id="expand"><i class="material-icons-outlined rotate_ani"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">expand_circle_down</i>Expand</div></a><a><div class="navi_button"><i class="material-icons"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">file_upload</i>Export</div></a><a href="javascript:void(0)" onclick="reset()"><div class="navi_button"><i class="material-icons-outlined"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">clear</i>Clear</div></a>'
    document.cookie = "character="
    document.cookie = "weapon="
    teams()
}

function reset_no(){
    var menu = document.getElementById("team_btn")
    menu.innerHTML='<a href="#teams"><div class="navi_button"><img src="img/icons/teams.png" style="width: 35px;margin-left:8px;margin-right:15px">Teams</div></a><a href="javascript:void(0)" onclick="teams_selector()"><div class="navi_button" id="add_container"><i class="material-icons-outlined"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">add_circle_outline</i>Add items</div></a><a href="javascript:void(0)" onclick="team_expand()"><div class="navi_button" id="expand"><i class="material-icons-outlined rotate_ani"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">expand_circle_down</i>Expand</div></a><a><div class="navi_button"><i class="material-icons"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">file_upload</i>Export</div></a><a href="javascript:void(0)" onclick="reset()"><div class="navi_button"><i class="material-icons-outlined"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">clear</i>Clear</div></a>'
    teams()
}

function check_blank(){
    var parent = document.getElementById("teams")
    var child = parent.getElementsByTagName("div")
    if(child.length == 0){
        var none = document.createElement("p")
        none.innerHTML="No domain is avalible for selected items for today."
        parent.appendChild(none)
    }
}
var starting_height

function team_expand(close=0){
    var teams_container = document.getElementById("teams")
    var days = ["monday","tuesday","wednesday","sunday"]
    var btn = document.getElementById("expand")
    var monday = document.createElement("div")
    var tuesday = document.createElement("div")
    var wednesday = document.createElement("div")
    var sunday = document.createElement("div")
    var day_monday = document.createElement("h2")    
    var day_tuesday = document.createElement("h2")
    var day_wednesday = document.createElement("h2")
    var day_sunday = document.createElement("h2")
    var cha_cookie = getCookie("character")
    var wea_cookie = getCookie("weapon")
    var box = document.querySelector(".teams")
    var box_style = getComputedStyle(box)
    var cha_empty, wea_empty
    
    if(cha_cookie == null || cha_cookie == "") cha_empty = 1
    if(wea_cookie == null || wea_cookie == "") wea_empty=1
    
    if(btn.getElementsByTagName("i")[0].style.transform == "rotate(180deg)" || close == 1){
        teams_container.style.height = starting_height
        setTimeout(function(){
            teams_container.style.height = ""
            teams_container.innerHTML = ""
            btn.innerHTML='<i class="material-icons-outlined rotate_ani"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;">expand_circle_down</i>Expand'
            if(close != 1) teams()
        },200)
    }else{
        btn.innerHTML='<i class="material-icons-outlined rotate_ani"style="font-size: 24px;margin-left:10px;margin-right:15px;vertical-align: bottom;Transform: rotate(180deg)">expand_circle_down</i>Close'
        starting_height = box_style.height
    day_monday.classList.add("dark-1")    
    day_tuesday.classList.add("dark-1")    
    day_wednesday.classList.add("dark-1")    
    day_sunday.classList.add("dark-1")    

    day_monday.style.margin = "0px"    
    day_tuesday.style.margin = "0px"
    day_wednesday.style.margin = "0px"
    day_sunday.style.margin = "0px"  

    day_monday.innerText = "Monday / Thursday"
    day_tuesday.innerText = "Tuesday / Friday"
    day_wednesday.innerText = "Wednesday / Saturday"
    day_sunday.innerText = "Sunday"    
    teams_container.innerHTML=""

    monday.id="monday"
    tuesday.id="tuesday"
    wednesday.id="wednesday"
    sunday.id="sunday"    

    monday.appendChild(day_monday)    
    tuesday.appendChild(day_tuesday)        
    wednesday.appendChild(day_wednesday)    
    sunday.appendChild(day_sunday)        

    teams_container.appendChild(monday)
    teams_container.appendChild(tuesday)
    teams_container.appendChild(wednesday)
    teams_container.appendChild(sunday)
    if(cha_empty != 1){
    for (i = 0; i < character.length; i++){
        if(cha_cookie.search(character[i].hex) >= 1){
            if(character[i].talent == "monday"){
                teams_time_img(character[i].image,character[i].name,character[i].hex,"monday","/character.html?cha=")
            }
            if(character[i].talent == "tuesday"){
                teams_time_img(character[i].image,character[i].name,character[i].hex,"tuesday","/character.html?cha=")
            }
            if(character[i].talent == "wednesday"){
                teams_time_img(character[i].image,character[i].name,character[i].hex,"wednesday","/character.html?cha=") 
            }
            teams_time_img(character[i].image,character[i].name,character[i].hex,"sunday","/character.html?cha=")
        }
    }
    }
    if(wea_empty != 1){
    for (i = 0; i < weapon.length; i++){
        if(wea_cookie.search(weapon[i].hex) >= 1){
            if(weapon[i].talent == "monday"){
                teams_time_img(weapon[i].image,weapon[i].name,weapon[i].hex,"monday","/weapon.html?wea=")
            }
            if(weapon[i].talent == "thursday"){
                teams_time_img(weapon[i].image,weapon[i].name,weapon[i].hex,"thursday","/weapon.html?wea=")
            }
            if(weapon[i].talent == "wednesday"){
                teams_time_img(weapon[i].image,weapon[i].name,weapon[i].hex,"wednesday","/weapon.html?wea=")
            }
            teams_time_img(weapon[i].image,weapon[i].name,weapon[i].hex,"sunday","/weapon.html?wea=")
        }
    }
    }
    for (i = 0; i < days.length; i++){
        var a = document.getElementById(days[i])
        var child = a.getElementsByTagName("div")
        if(child.length == 0){
            var none = document.createElement("p")
            none.innerHTML="No domain is avalible for selected items for this day."
            a.appendChild(none)
        }
    }
    var ending_height = box_style.height
    
    teams_container.style.height = starting_height
    setTimeout(function(){teams_container.style.height = ending_height},100)
    }
    
}
