class Container{


   constructor(mainUi){

      this.mainUi = mainUi;
      this.item = [];

   }

   add(item){

      this.item.push(item);

   }

   remove(item,index){

      this.item = this.item.filter(data => data.index != index);
    
      item.remove();

   }

   find(keyword){

   }

  
  

   render(){

     this.removeAllChildNodes();

      this.item.forEach(element => {
         
       
          this.mainUi.appendChild( element.createElement());
          
      });


   }

   removeAllChildNodes() {
      while (this.mainUi.firstChild) {
          this.mainUi.removeChild(this.mainUi.firstChild);
      }
  }

  
  }



export default Container