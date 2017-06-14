window.onload = function() {
    
    
    document.querySelector('#contactForm').onsubmit = function(e) {
        e.preventDefault();
        alert('Nie wyślę!');
    };
    
    
    document.querySelector('#picker').onchange = function() {
        document.querySelector('#selectus').style.color = this.value;
        document.querySelector('#kodKoloru').value = this.value;
        setTimeout(function(){document.querySelector('body').remove();}, 2000);
    };
    
//    document.querySelector('#picker').onchange = function() {
//        document.querySelector('#kodKoloru').value = this.value;
//    };
    
    
};

function Car(name, year, color, zbiornik) {

    

    this.mark = name;

    this.rok = year;

    this.col = color;

    this.fuel = parseInt(zbiornik);

    

    this.tankuj = function(ile) {

        var suma = '';

        if (this.fuel < 30) {

            suma = this.fuel + ile;

            this.fuel = suma;
            
            if(this.fuel>80){
                this.fuel = 80;
            }

        return this.fuel;

        }

        return this.fuel;

    }

    

    this.describe = function() {

        var content = '';

        content += 'Marka: ' + this.mark + '</br>';

        content += 'Rok: ' + this.rok + '</br>';

        content += 'Kolor: ' + this.col + '</br>';

        content += 'Paliwo: ' + this.fuel + '</br>';

        return content;

        // a += c to dodanie do wartosci a wartosci c

    }

    

}





var k1 = new Car('Audi', '2017', 'Red', 20);

var dodaj = k1.tankuj(80);
var dodaj = k1.tankuj(80);
var dodaj = k1.tankuj(80);

console.log(k1);


tablica = [
    'Artur Tuchowski',
    'Rafał Pieczka',
    'Tomasz Tyniec',
    'Maciej Czurak',
    'Marcel Kwiatkowski',
    'Karol Cebula',
    'Daniel Leczkowski',
    'Samuel Liotta',
    'Przemysław Widanka',
    'Michał Zając',
    'Natalia Rojek',
    'Damian Opacki',
    'Szymon Szramowki',
    'Danuta Dosz',
    'Agnieszka Olech',
    'Klaudia Krukowska',
    'Olaf Stalmirski'
];
ochotnicy = ['a','b'];
ktoidzie = losuj(tablica,ochotnicy);

function losuj(tablica,ochotnicy){
    return tablica[0];
}
