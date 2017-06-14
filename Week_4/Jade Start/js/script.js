function systemStart() {
  window.onload = function () {

    var submitButton = document.querySelector("#tabsubmit");

    //    console.log(workArea);
    submitButton.onclick = function (e) {
      e.preventDefault();
      var workArea = document.querySelector(".workArea");
      workArea.innerHTML = " ";
      var tabQ1 = document.querySelector("#tab1picker").value;
      var tabQ2 = document.querySelector("#tab2picker").value;
      if (tabQ1 > 100) {
        tabQ1 = 100;
        document.querySelector("#tab1picker").value = 100;
      }
      if (tabQ2 > 100) {
        tabQ2 = 100;
        document.querySelector("#tab2picker").value = 100;
      }
      //      console.log(tabQ1, tabQ2);

      var arrayOne = [];
      var arrayTwo = [];
      for (var i = 0; i < tabQ1; i++) {
        arrayOne[i] = Math.round(Math.random() * 100);
      }
      for (var i = 0; i < tabQ2; i++) {
        arrayTwo[i] = Math.round(Math.random() * 100);
      }
      //      console.log(arrayOne, arrayTwo);
      workArea.innerHTML += "</br> First tab: " + "<br/>" + tablePrinter(arrayOne);
      workArea.innerHTML += "</br> Second tab: " + "<br/>" + tablePrinter(arrayTwo);
      workArea.innerHTML += "</br><input type='button' value='Compare' id='compareButton'/> ";
      workArea.innerHTML += "<div class='compareResult'></div>";

      var compareButton = document.querySelector("#compareButton");
      var compareDiv = document.querySelector(".compareResult");

      compareButton.onclick = function () {
        //        compare(arrayOne, arrayTwo);
        var connectedArrays = ((arrayOne.concat(arrayTwo)));
        //        console.log("connected arrays: ", connectedArrays);
        var reducedArrays = removeRepetitions(connectedArrays);
        //        console.log("reduced arrays: ", reducedArrays);
        compareDiv.innerHTML = "";
        compareDiv.innerHTML += "<br/>" + "Common elements: " + "<br/>" + tablePrinter(compare(arrayOne, arrayTwo));
        compareDiv.innerHTML += "<br/>" + "Uniqe elements: " + "<br/>" + tablePrinter(removeRepetitions((arrayOne.concat(arrayTwo))));
        //        console.log("connected arrays: ", connectedArrays);
        //        console.log("reduced arrays: ", reducedArrays);
      }
    }
  }


}
systemStart();

$(document).ready(function () {
  //console.log("bang!");
  $(".slider").click(function () {
    console.log("bang");
    $(".sliderContent").toggle(700);
  });
  $("ul.tabs li a").click(function (e) {
    e.preventDefault;
    var rel = $(this).attr('data-rel');
    var lis = $(this).parents('ul').children();
    lis.removeClass('active');
    $(this).parent('li').addClass('active');
    $('.tab').hide().removeClass('active');
    $('div[data-rel=' + rel +']').fadeIn().addClass('active');
  });
  
  $("div.menu ul li a").click(function (e) {
    var sub = $(this).siblings();
    if (sub.length > 0) {
      e.preventDefault();
      sub.slideToggle();
    }
  });

  $("div.logo a").click(function (e) {
    e.preventDefault;
    $("#imageContainer").fadeToggle();
  })
  
  $("div.row label").click(function(){
    $(this).siblings().toggle();
    console.log(this.children);
    var child = this.children[0];
    if(child.innerHTML === "Pokaż"){
      child.innerHTML = "Ukryj"
    }
    else{
      child.innerHTML = "Pokaż"
    }
    
  })
});
