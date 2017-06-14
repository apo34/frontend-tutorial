function christmasTree(n){
  //n stands for tree height
  
  for(var i = 0; i <= n; i++){
    var s ='';
    for(var a = 1; a <= i; a++){
      s = s + '*';
    }
    console.log(s);
  }
  console.log('X');
  console.log('X');
}
//christmasTree(10);
//console.log(' ');

function printer(x, y){
  //first parameter is number, second is string
  for(var i = 0; i <= x; i++){
    var s ='';
    for(var a = 1; a <= i; a++){
      s = s + y;
    }
  }
  return s;
}

function christmasIsComing(n, step){
  var b = n * step;
  for(var i = 0; i <= n; (i++, b = b - step)){
    var a = 2 * step *  i + 1;
    //console.log(i, a);
    var firstPartSpaces = printer(b, ' ');
    var secondPartStars = printer(a, '*');
    console.log(firstPartSpaces + secondPartStars);
  }
  //console.log(printer'X');
  //console.log('X');
}

christmasIsComing(7, 3);