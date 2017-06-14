function SystemStart() {
    
    window.onload = function() {
      
        var getTypes = document.querySelector('#getTypes');
        var podsumuj = document.querySelector('#suma');
        
       var types = [];
            var i = 0;
            
            for (var type in RestaurantsBase) {
                types[i] = type;
                i++;
            }
      
      
        //pobiera typy restauracji - button
        getTypes.onclick = function() {
            
            var types = [];
            var i = 0;
            
//            for (var type in RestaurantsBase) {
//                types[i] = type;
//                i++;
//            }
            
            //tworzy select TYPOW restauracji
            var typy = narysujSelecta(types, 'typeRes');
            if (typy === false) {
                return;
            }
            
            var cnt = document.querySelector('#content');
            var cnt2 = document.querySelector('#content2');
            var cnt3 = document.querySelector('#content3');
            var cnt4 = document.querySelector('#content4');
            cnt.innerHTML = typy;
            
            //obiekt selekta TYPOW restauracji
            var selectTypow = document.querySelector('#typeRes');
            var selectRestauracji = [];
            var selectDan = [];
            
            //zmiana typu restauracji - tworzymy liste RESTAURACJI
            selectTypow.onchange = function() {
                var wybranyTyp = this.value;
                
                cnt3.innerHTML = "";
                
                var drugalista = stworzListe(RestaurantsBase,wybranyTyp);
                
                restauracje = narysujSelecta(drugalista, 'restaurants');
                cnt2.innerHTML = restauracje;
                selectRestauracji = document.querySelector("#restaurants");
                
                selectRestauracji.onchange = function() {
                
                    var wybranaRestauracja = this.value;
                    var wybranyTyp = selectTypow.value;
                    var trzeciaLista = stworzListe(RestaurantsBase[wybranyTyp],wybranaRestauracja);
                    cnt3.innerHTML = narysujSelecta(trzeciaLista,'rodzajedan');
                    
                    selectDan = document.querySelector("#rodzajedan");
                    
                    selectDan.onchange = function() {
                        
                        var wybranyRodzaj = this.value;
                        var czwartaLista = stworzListeCen(RestaurantsBase[wybranyTyp][wybranaRestauracja],wybranyRodzaj);
                        
                        cnt4.innerHTML = "";
                        for(var i=0;i<czwartaLista.length;i++){
                            cnt4.innerHTML += podajDanie(czwartaLista[i]); 
                        }
                        
                    }
                    
                    
                }
            };
            
           
            
            
        };
        
        podsumuj.onclick = function(){
            var itemy = document.querySelectorAll('.item');
            var suma = 0;
            
            for(var i=0;i<itemy.length;i++){
                
                var cena =  Number(itemy[i].childNodes[1].innerHTML);
                var ilosc =  parseInt(itemy[i].childNodes[2].value);
                
                if(ilosc<0 || isNaN(ilosc)){
                    ilosc=0;
                    itemy[i].childNodes[2].value = 0;
                }
                
                suma+=cena * ilosc;
                
            }
            this.value=suma;
            
        }
        
    var menuDiv = document.querySelector(".menu");
    menuDiv.innerHTML = "<h1>MENU</h1>";    
    var testTab = pokazListe(RestaurantsBase);
    //console.log(testTab, types);
    menuDiv.innerHTML += listaPoziomu(testTab); 
      
    var tar;
    var path = [];
    document.querySelector(".menu ul").addEventListener("click", function(e){
      testTab= [];
      var tar = e.target;
      testTab = pokazListe(RestaurantsBase.fastfood, tar.innerHTML);
      //console.log(testTab);
      console.log(tar.parentNode.parentNode.innerHTML);
      path.push(tar.innerHTML);
      console.log(path);
      tar.innerHTML += listaPoziomu(testTab);
      //tar.style.background = "red";

      });
    };

}

SystemStart();
