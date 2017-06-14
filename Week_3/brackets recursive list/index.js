function systemStart(){
  window.onload = function(){
    var mainMenu = document.querySelector(".mainMenu");
    console.log(mainMenu);
    console.log(mainBase);
    
    
    walker(mainBase, mainMenu);
    mainMenu.innerHTML = html;
  };  
  
  var html = "";
  function walker(base, place){
    
    
    html += "<ul>";
    for(var step in base){
      html += "<li>" + step;
     
      if(typeof base[step] === "object"){
        walker(base[step], place);
      }
      html += "</li>"
    }

    html += "</ul>";
    
  }
//  // function converts object to array (but why? who knows)
//  function walkerine(base){
//    var arr = Object.keys(base).map(function (key) { return base[key]; });
//    console.log(arr);
//    
//  }
  
}


systemStart();