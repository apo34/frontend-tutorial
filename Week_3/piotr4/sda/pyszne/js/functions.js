function narysujSelecta(tablicaZmiennych, rodzaj) {
    
    if (typeof(rodzaj)  !== 'string') {
        alert('niewłaściwy rodzaj typu głupolku');
        return false;
    }
    
    var html = '';
    html += '<select id="' + rodzaj + '" >';
    html += '<option value="">Wybierz...</option>';
    
        for (var i = 0; i < tablicaZmiennych.length; i++) {
            var nazwa = tablicaZmiennych[i];
            html += '<option value="' + nazwa + '">' + nazwa + '</option>';
        }
    html += '</select>';
    
    return html;
    
}

function stworzListe(baza,rodzaj){
    
    var listaDlaTypu = baza[rodzaj];

    var rest = [];
    var i = 0;
    for (var restauracja in listaDlaTypu) {
        rest[i] = restauracja;
        i++;
    }
    
    return rest;
}

function stworzListeCen(baza,rodzaj){
    
    var listaDlaTypu = baza[rodzaj];
    console.log(listaDlaTypu);
    var rest = [];
    var i = 0;
    for (var restauracja in listaDlaTypu) {
        rest[i] = [ restauracja,listaDlaTypu[restauracja]];
        i++;
    }
    
    return rest;
}

function podajDanie(element){
    
    var html = '<div class="item">';
    
    html += '<span>' + element[0] + ' </span>';
    html += '<span>' + element[1] + ' </span>';
    html += '<input class="ilosc" value="0" type="text" name="ilosc[0]" style="width:30px" />';
                
    html += '</div>';
    
    return html;
}

function listaPoziomu(lista){
    var html = "<ul style='list-style: none; padding: 0; margin: 0;'>";
    for(var i = 0; i < lista.length; i++){
      html  += "<li style='padding: 0 15px;'>" + lista[i] + "</li>";
    }
  html += "</ul>";
  
  return html
}

function pokazListe(tablicaZmiennych){
    
    var types = [];
            var i = 0;
            for (var type in tablicaZmiennych) {
                types[i] = type;
                i++;
            }
    var nazwa = [];
    for (var i = 0; i < type.length; i++) {
    nazwa.push(types[i]);
}


return nazwa;
}




//var ja = 'Piotr Mariański';
//
//var ja2 = 'Piotr';
//ja2 += ' ';
//ja2 += 'Mariański';