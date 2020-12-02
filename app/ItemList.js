class ItemList{

    constructor(index,find,title,nama,umur,gender,status,container){
        this.index = index;
        this.find = find;
        this.title = title;
        this.nama = nama;
        this.umur = umur;
        this.gender = gender;
        this.status = status;
        this.container= container;

        this.paragraf = document.createElement("p");

    }


    createElement(){

     
        this.paragraf.innerHTML =`<table  style='height: 48px; width: 488px;border:1px solid black;'><tbody><tr><td style='width: 47px;' rowspan='2'><img src='${this.find}' alt='' width='54' height='50' /></td><td style='width: 265px;'>${this.title}</td><td style='width: 156px;'>&nbsp;</td></tr><tr><td style='width: 265px;'>${this.nama}</td><td style='width: 156px;'>&nbsp;&nbsp;<img style='float: right;' alt='' width='33' height='26' /></td></tr></tbody></table>`;
        this.paragraf.addEventListener("click",this.onclick.bind(this));
        return this.paragraf;

    }

    onclick(){
        this.container.remove(this.paragraf,this.index);
    }

    
    
}

export default ItemList