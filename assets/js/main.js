
let conts = Array('containerPort','containerHabi');
let pests = Array('pest2','pest3',);
    
   const changePest = (cont,pest)=>{

    conts.forEach(function(elemento){
      
      document.querySelector('.'+elemento).style.display='none';
      	
    });

     pests.forEach(function(elemento){
      
      document.querySelector('#'+elemento).classList.remove('li--active');
      	
    });
    document.querySelector("."+cont).style.display = 'grid';
    document.querySelector("#"+pest).classList.add('li--active');
      

  }
  
changePest("containerPort","pest2");
    
