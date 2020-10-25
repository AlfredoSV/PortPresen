(()=>{
    const pestañaClick = document.querySelector(".nav__ul"); 
    const pestaña1 = document.querySelector(".containerAcerca");
    const pestaña2 = document.querySelector(".containerPort");
    

    pestañaClick.addEventListener('click',function (e){
        console.log(e["target"].id);

        document.querySelector("#pest1").className = "nav__li";
        document.querySelector("#pest2").className = "nav__li";

        e["target"].className = "nav__li li--active";
        document.querySelector("#pest0").className = "nav__li nav__header";
        if(e["target"].id== "pest1" || e["target"].id== "pest0" ){
            pestaña1.style.display = "none";            
            pestaña2.style.display = "block";

            document.querySelector("#pest1").className = "nav__li li--active";
            
        }else if(e["target"].id== "pest2"){
            pestaña1.style.display = "block";
            pestaña2.style.display = "none";
        }
    });
    
})();

