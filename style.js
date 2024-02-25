let array = ["blue","pink", "yellow","green","red","orange","white","black","brown"];

let getcolor = function(){
       let no = Math.floor(Math.random() * array.length);
        return document.getElementById('color').style.background = array[no];
}

