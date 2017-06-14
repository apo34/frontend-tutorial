window.onload = function() {

    var mojDivel = document.querySelector('#divel');
    
    mojDivel.onclick = function() {
        alert('klikło się');
        console.log(this);
        this.style.color = 'red';
    };
    
    
   
    var linki = document.querySelectorAll('.links a');
    
    for (var i = 0; i < linki.length; i++) {
        linki[i].onclick = function(e) {
            e.preventDefault();
            alert('Nigdzie nie pójdziesz');
            this.style.color = 'red';
        };
    }
    
    
    
    var input = document.querySelector('#maineInput');
    
    input.onchange = function() {
        var aktualna = this.value;
        var pociety = aktualna.split('');
        console.log(aktualna, pociety);
    };
    
    
    var lancuszydlo = new String('jestem se strinem');
    var jaTysz = 'jestem se strinem';
    
    
};

//console.log(window);
//console.log(this);


function Kursant(imie, nazwisko, skille) {
    
    this.name = imie;
    this.surname = nazwisko;
    this.skills = skille;
    
    this.describe = function() {
        var content = '';
        content += 'Imię: ' + this.name + '<br/>';
        content += 'Nazwisko: ' + this.surname + '<br/>';
        content += 'Umiejętności: ' + this.skills + '/10<br/>';
        return content;
    };
    
    this.setNewSkills = function(newSkills) {
        this.skills = newSkills;
    };
    
}


var k1 = new Kursant('Piotr', 'Mariański', 3);
var k2 = new Kursant('Piotr 2222');
console.log(k1);
console.log(k2);


var obiekt = {
    atrybutung: 'wartościung'
};


var opis = k1.describe();
document.write(opis);

opis = k2.describe();
document.write(opis);


document.write(k2.skills);
k2.setNewSkills(4);
document.write(k2.skills);


var str = 'znakungi';
console.log(str[0]);

var str2 = new String('znakungi');
console.log(str2);