function color_change(color,pos_num,type,save){
    var clo_class
    if(type == 0){
        switch(pos_num){
            case 1: clo_class = "color1-back"; break;
            case 2: clo_class = "color2-back"; break;
            case 3: clo_class = "color3-back"; break;
            case 4: clo_class = "color4-back"; break;
            case 5: clo_class = "color-hover"; break;
        }
    }else if(type == 1){
            switch(pos_num){
                case 1: clo_class = "color1"; break;
                case 2: clo_class = "color2"; break;
                case 3: clo_class = "color3"; break;
                case 4: clo_class = "color4"; break;
                case 5: clo_class = "color-hover-text"; break;
            }
        }
    document.documentElement.style.setProperty("--"+clo_class, color);
    if(save == 1) save_color(pos_num,color,type)
    
}

function gndatabase_style(){
    color_change("#000000",1,0,1)
    color_change("#ffffff",1,1,1)
    color_change("#ffffff",2,0,1)
    color_change("#000000",2,1,1)
    color_change("#c0c0c0",3,0,1)
    color_change("#000000",3,1,1)
    color_change("#808080",5,0,1)
    color_change("#ffffff",5,1,1)
    get_save_color()
}

function get_save_color(){
  var back_clo = localStorage.getItem("background_color")  
  var clo = localStorage.getItem("color")  
  if(back_clo == null|| clo == null){
      default_color()
  }else{
    var splitin = searchall(";",back_clo)
    var clo1_back = back_clo.slice(0,splitin[0])
    var clo2_back = back_clo.slice(splitin[0]+1,splitin[1])
    var clo3_back = back_clo.slice(splitin[1]+1,splitin[2])
    var clo4_back = back_clo.slice(splitin[2]+1,splitin[3])
    var clo5_back = back_clo.slice(splitin[3]+1,back_clo.length)

    var splitin = searchall(";",clo)
    var clo1 = clo.slice(0,splitin[0])
    var clo2 = clo.slice(splitin[0]+1,splitin[1])
    var clo3 = clo.slice(splitin[1]+1,splitin[2])
    var clo4 = clo.slice(splitin[2]+1,splitin[3])
    var clo5 = clo.slice(splitin[3]+1,clo.length)

    color_change(clo1_back,1,0)
    color_change(clo2_back,2,0)
    color_change(clo3_back,3,0)
    color_change(clo4_back,4,0)
    color_change(clo5_back,5,0)

    color_change(clo1,1,1)
    color_change(clo2,2,1)
    color_change(clo3,3,1)
    color_change(clo4,4,1)
    color_change(clo5,5,1)
  }
  set_preview_color()
}

function default_color(){
    console.log("using default colors")
    localStorage.removeItem("background_color")
    localStorage.removeItem("color")
    localStorage.setItem("background_color","#292f33;#43464a;#4e5357;#FF4C29;#c0c0c0")
    localStorage.setItem("color","#ffffff;#ffffff;#ffffff;#ffffff;#000000")
    get_save_color()
}

function save_color(pos_num,clo_hex,clo_type){
    var back_clo = localStorage.getItem("background_color")  
  var clo = localStorage.getItem("color")  
  if(back_clo == null || clo == null){
      default_color() 
  }else{
    if(clo_type == 0){
        var splitin = searchall(";",back_clo)
        var clo1 = back_clo.slice(0,splitin[0])
        var clo2 = back_clo.slice(splitin[0]+1,splitin[1])
        var clo3 = back_clo.slice(splitin[1]+1,splitin[2])
        var clo4 = back_clo.slice(splitin[2]+1,splitin[3])
        var clo5 = back_clo.slice(splitin[3]+1,back_clo.length)
        if(pos_num == 1) clo1 = clo_hex
        else if(pos_num == 2) clo2 = clo_hex
        else if(pos_num == 3) clo3 = clo_hex
        else if(pos_num == 4) clo4 = clo_hex
        else if(pos_num == 5) clo5 = clo_hex
        var saves = clo1+";"+clo2+";"+clo3+";"+clo4+";"+clo5
        localStorage.removeItem("background_color")
        localStorage.setItem("background_color",saves)
    }else if(clo_type == 1){
        var splitin = searchall(";",clo)
        var clo1 = clo.slice(0,splitin[0])
        var clo2 = clo.slice(splitin[0]+1,splitin[1])
        var clo3 = clo.slice(splitin[1]+1,splitin[2])
        var clo4 = clo.slice(splitin[2]+1,splitin[3])
        var clo5 = clo.slice(splitin[3]+1,clo.length)
        if(pos_num == 1) clo1 = clo_hex
        else if(pos_num == 2) clo2 = clo_hex
        else if(pos_num == 3) clo3 = clo_hex
        else if(pos_num == 4) clo4 = clo_hex
        else if(pos_num == 5) clo5 = clo_hex
        var saves = clo1+";"+clo2+";"+clo3+";"+clo4+";"+clo5
        localStorage.removeItem("color")
        localStorage.setItem("color",saves)
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

function color_preview(){
    var clo1 = document.getElementById("color1")
    var clo1_back = document.getElementById("color1_back")
    var clo1_con = document.getElementById("color1_con")

    var clo2 = document.getElementById("color2")
    var clo2_back = document.getElementById("color2_back")
    var clo2_con = document.getElementById("color2_con")

    var clo3 = document.getElementById("color3")
    var clo3_back = document.getElementById("color3_back")
    var clo3_con = document.getElementById("color3_con")

    var clo4 = document.getElementById("color4")
    var clo4_back = document.getElementById("color4_back")
    var clo4_con = document.getElementById("color4_con")

    var clo5 = document.getElementById("color5")
    var clo5_back = document.getElementById("color5_back")
    var clo5_con = document.getElementById("color5_con")

    clo1_con.style.backgroundColor = clo1_back.value
    clo1_con.style.color = clo1.value

    clo2_con.style.backgroundColor = clo2_back.value
    clo2_con.style.color = clo2.value

    clo3_con.style.backgroundColor = clo3_back.value
    clo3_con.style.color = clo3.value

    clo4_con.style.backgroundColor = clo4_back.value
    clo4_con.style.color = clo4.value

    clo5_con.style.backgroundColor = clo5_back.value
    clo5_con.style.color = clo5.value
}

function set_preview_color(){

    var back_clo = localStorage.getItem("background_color")  
    var clo = localStorage.getItem("color")  

    var clo1 = document.getElementById("color1")
    var clo1_back = document.getElementById("color1_back")

    var clo2 = document.getElementById("color2")
    var clo2_back = document.getElementById("color2_back")

    var clo3 = document.getElementById("color3")
    var clo3_back = document.getElementById("color3_back")

    var clo4 = document.getElementById("color4")
    var clo4_back = document.getElementById("color4_back")

    var clo5 = document.getElementById("color5")
    var clo5_back = document.getElementById("color5_back")

    var splitin = searchall(";",back_clo)
    var color1_back = back_clo.slice(0,splitin[0])
    var color2_back = back_clo.slice(splitin[0]+1,splitin[1])
    var color3_back = back_clo.slice(splitin[1]+1,splitin[2])
    var color4_back = back_clo.slice(splitin[2]+1,splitin[3])
    var color5_back = back_clo.slice(splitin[3]+1,back_clo.length)

    var splitin = searchall(";",clo)
    var color1 = clo.slice(0,splitin[0])
    var color2 = clo.slice(splitin[0]+1,splitin[1])
    var color3 = clo.slice(splitin[1]+1,splitin[2])
    var color4 = clo.slice(splitin[2]+1,splitin[3])
    var color5 = clo.slice(splitin[3]+1,clo.length)

    clo1.value = color1
    clo1_back.value = color1_back

    clo2.value = color2
    clo2_back.value = color2_back

    clo3.value = color3
    clo3_back.value = color3_back

    clo4.value = color4
    clo4_back.value = color4_back

    clo5.value = color5
    clo5_back.value = color5_back

    color_preview()
}

get_save_color()

function apply_color(){
    var clo1 = document.getElementById("color1")
    var clo1_back = document.getElementById("color1_back")

    var clo2 = document.getElementById("color2")
    var clo2_back = document.getElementById("color2_back")

    var clo3 = document.getElementById("color3")
    var clo3_back = document.getElementById("color3_back")

    var clo4 = document.getElementById("color4")
    var clo4_back = document.getElementById("color4_back")

    var clo5 = document.getElementById("color5")
    var clo5_back = document.getElementById("color5_back")

    localStorage.removeItem("background_color")
    localStorage.setItem("background_color",clo1_back.value+";"+clo2_back.value+";"+clo3_back.value+";"+clo4_back.value+";"+clo5_back.value)
    localStorage.removeItem("color")
    localStorage.setItem("color",clo1.value+";"+clo2.value+";"+clo3.value+";"+clo4.value+";"+clo5.value)
    get_save_color()
}

function preset_select(){
    var preset = document.getElementById("preset")
    if(preset.value == 2) preset_preview("#292f33","#43464a","#4e5357","#FF4C29","#c0c0c0","#ffffff","#ffffff","#ffffff","#ffffff","#000000")
    else if(preset.value == 3) preset_preview("#000000","#ffffff","#c0c0c0","#FF4C29","#808080","#ffffff","#000000","#000000","#ffffff","#ffffff")
    else if(preset.value == 4) preset_preview("#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff")
    else if(preset.value == 5) preset_preview("#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000")
    else if(preset.value == 6) preset_preview("#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#000000","#000000")
    else if(preset.value == 7) preset_preview("#082032","#2c394b","#334756","#ff4c29","#506778","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff")
    else if(preset.value == 8) preset_preview("#0C4536","#12664F","#307473","#f95738","#94e8b4","#ffffff","#ffffff","#ffffff","#ffffff","#000000")
    else if(preset.value == 9) preset_preview("#326273","#5C9EAD","#FFFFFF","#E39774","#EEEEEE","#ffffff","#ffffff","#000000","#000000","#000000")
    else if(preset.value == 10) preset_preview("#000000","#141516","#1b1c1d","#6a1300","#191919","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff")
    else if(preset.value == 11) preset_preview("#333333","#1e1e1e","#252526","#FF4C29","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#000000")
    else if(preset.value == 12) preset_preview("#000000","#000000","#000000","#000000","#4b4b4b","#4b4b4b","#4b4b4b","#4b4b4b","#4b4b4b","#000000")
    else if(preset.value == 13) preset_preview("#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff")
}


function preset_preview(color1_back,color2_back,color3_back,color4_back,color5_back,color1,color2,color3,color4,color5){
    var clo1 = document.getElementById("color1")
    var clo1_back = document.getElementById("color1_back")
    var clo2 = document.getElementById("color2")
    var clo2_back = document.getElementById("color2_back")
    var clo3 = document.getElementById("color3")
    var clo3_back = document.getElementById("color3_back")
    var clo4 = document.getElementById("color4")
    var clo4_back = document.getElementById("color4_back")
    var clo5 = document.getElementById("color5")
    var clo5_back = document.getElementById("color5_back")

    clo1.value = color1
    clo1_back.value = color1_back
    clo2.value = color2
    clo2_back.value = color2_back
    clo3.value = color3
    clo3_back.value = color3_back
    clo4.value = color4
    clo4_back.value = color4_back
    clo5.value = color5
    clo5_back.value = color5_back
    color_preview()
}