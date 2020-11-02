
let conts = Array('containerAcerca','containerPort');
let pests = Array('pest1','pest2');
    
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
    
