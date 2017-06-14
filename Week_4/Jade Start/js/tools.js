function tablePrinter(table) {
  var html = "[";
  for (var i = 0; i < table.length; i++) {
    html += table[i];
    if (i !== table.length - 1) {
      html += ", ";
    }
  }
  html += "]"
  return html;

}

function compare(onetab, twotab) {
  //console.log("bang")
  var result = [];
  var one = onetab;
  var two = twotab;
  for (var i = 0; i < two.length; i++) {
    let check = one.indexOf(two[i]);
    //console.log(check, one[check], two[i]);
    if (check !== -1) {
      result.push(one[check]);
      //      one.splice(check, 1);
      //      two.splice(i, 1);
    }
  }
  //console.log("one: ", one, "two: ", two);
  //console.log("result: ", result);
  return result;
}

function checkRepetitions(tab) {
  // function check if there are any repetitions in the array(tab), and returns the list of them
  var logic = true;
  var repetitions = [];
  for (var i = 0; i < tab.length; i++) {
    for (var j = 0; j < tab.length; j++) {
      //console.log(tab[i], tab[j], i, j);
      if (i === j) {
        continue;
      }
      if (tab[i] === tab[j]) {
        logic = false;
        repetitions.push(tab[j]);
        break;
      }
    }
  }
  return repetitions;
}

function removeRepetitions(tabla) {
  var tab = tabla;
  var repetitions = checkRepetitions(tab);
  //console.log("repetitions: ", repetitions);
  for (var i = 0; i < repetitions.length; i++) {
    let index = tab.indexOf(repetitions[i]);
    tab.splice(index, 1);
  }
  return tab;
}