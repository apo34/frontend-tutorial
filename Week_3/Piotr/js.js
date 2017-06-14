window.onload = function(){
    var naszDiv = document.querySelectorAll('.divel');
    console.log(naszDiv);
    console.log(naszDiv[0]);
    console.log(naszDiv[1]);
    
    
    naszDiv[0].innerText = "nowy tekst";
    var Div = naszDiv[0];
    for(var x in naszDiv[0]){

        document.write(x + '</br>');
        document.write(Div[x] + '</br> </br>');
        
    }

}

