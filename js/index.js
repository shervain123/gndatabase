var dev_tool = ["unload()","reload()","dev_close()","debug_reload()","extanded_filter()"]
var developer_mode = 0
var closes = 0
var character = load_json("/json/characters.json")
function load_json(file){
   var request = new XMLHttpRequest();
   request.open("GET", file, false);
   request.send(null)
   var jason = JSON.parse(request.responseText);
   return jason
}
if(getCookie("load") != 1){
reload()
}
if(getCookie("developer") == 1){
    developer_mode = 9
    dev()
}
function reload(){
    unload()
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
    link.href = "/character.html?"+code
    names.innerText = name
    images.src = image
    name_container.classList.add("name")
    img_container.classList.add("img")
    name_container.appendChild(names)
    img_container.appendChild(images)
    character_img_container.appendChild(img_container)
    character_img_container.appendChild(name_container)
    character_img_container.classList.add("character_img")
    link.id = name + " " + region + " " + wepon +" "+element+" "+rare+" "+code
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
        console.log(thing[0])
    }
    for (i = 0; i < lists; i++){
        things[0].remove()
        console.log(things[0])
    }
    console.log("finished unloading")
}

function debug_reload(){
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
    developer_mode = developer_mode + 1
    
    if(developer_mode == 10){
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
            container.classList.add("navi_button")
            container.appendChild(icon)
            container.appendChild(title)
            click.appendChild(container)
            parent.appendChild(click)
        }

    }else if(developer_mode == 20){
        var parent = document.getElementById("developer_tools")
        developer_mode = 0
        closes = 1
        parent.remove()
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
    developer_mode = 19
    dev()
    closes =0
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