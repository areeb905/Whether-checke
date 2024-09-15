
let btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    let ip = document.getElementById("ip");
    let name = document.getElementById("name");
    let h2 = document.getElementById("h2");
    let png=document.getElementById("png");
    let h4=document.getElementById("h4");

    let random=Math.floor(Math.random()*50)+1;
    console.log(random)
    name.innerText = ip.value;
    ip.value = " "   


    if(random <=10 ){                                                          
        random+=11;
    }     

    if(random >= 0 && random <=20){
       this.name.innerText = ip.value;
       png.innerHTML=  `☃️`;
       h2.innerHTML=`${random}<sup>0</sup>c`
       h4.innerText="It's to Cold"
    }
   
    if(random >= 20 && random <= 25){
       this.name.innerText = ip.value;
       png.innerHTML=  `⛅️`;
       h2.innerHTML=`${random}<sup>0</sup>c`
       h4.innerText="It pleasnat hot"
    }

    if(random >= 25 && random <= 30){
        this.name.innerText = ip.value;
        png.innerHTML=  `🌤`;
        h2.innerHTML=`${random}<sup>0</sup>c`
        h4.innerText="It's hot"
    }

    if(random >= 40 && random <=50){
        this.name.innerText = ip.value;
        png.innerHTML=  `☀️`;
        h2.innerHTML=`${random}<sup>0</sup>c`
        h4.innerText="It's too hot"
    }

})


               

                                                                                                                                                                                                                                                                         