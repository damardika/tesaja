import Container from "./Container"
import ItemList from "./ItemList"


let root = document.getElementById("root");
let container = new Container(root);
let index =0;
function bikinlist  (find,nama,umur,gender,status) {


  
    let item = new ItemList(index,find.value,nama.value,umur.value,gender.value,status.value,container);
    index++;
    container.add(item);
    container.render();

    
    
    

    
    

}


window.bikinlist = bikinlist;