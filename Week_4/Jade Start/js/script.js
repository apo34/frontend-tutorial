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
//    $(this).siblings().toggle();
    var inputToToggle =$(this).siblings("input, textarea")
    var child = this.children[0];
    if (inputToToggle.hasClass("active")){
      console.log("was active");
      inputToToggle.removeClass("active");
      inputToToggle.hide()
      child.innerHTML = "Pokaż"
    }
    else{
      inputToToggle.addClass("active");
      inputToToggle.show();
      child.innerHTML = "Ukryj"
    }
  })
  
  $("#showAllButton").click(function (e) {
    e.preventDefault();

    var pola = $(this).parents("form").find("input, textarea");
    //console.log(pola);
    for (var j = 0; j < pola.length; j++) {
      let i = pola[j];
      let spanToChange = $(i).parent().find("span")[0];
      //console.log(spanToChange);
      //console.log("j= ", j, i);
      if (this.innerHTML === "Pokaż wszystko") {
        //console.log(i, $(i));

        if (!$(i).hasClass("active")) {
          $(i).show();
          $(i).addClass("active");
          spanToChange.innerHTML = "Ukryj";
        }
      } else {
        if ($(i).hasClass("active")) {
          $(i).hide();
          $(i).removeClass("active");
          spanToChange.innerHTML = "Pokaż";
        }
      }
    }

    if (this.innerHTML === "Pokaż wszystko") {
      this.innerHTML = "Ukryj wszystko";
    } else {
      this.innerHTML = "Pokaż wszystko";
    }

  })
  
  $(document).on("submit", "form.contactForm", function(e){
    
    e.preventDefault();
    
    var message = '';
    var error = false;

    var fields = $(this).find('input, textarea, select').not('[type="submit"]');
    fields.removeClass('error valid');
    
    fields.each(function(){
      let actualValue = $(this).val();
      
      if ($(this).nodeName === "INPUT" && actualValue.length < 4) {
        $(this).addClass("error");
        error = true;
        message+= $(this).attr('placeholder') + '\n'
      }
      else if ($(this).nodeName === "TEXTAREA" && actualValue.length < 20){
        $(this).addClass("error");
        error = true;
        message+= $(this).attr('placeholder') + "Treść powinna być większa niż 20 znaków." + '\n'
      }
      else{
        $(this).addClass("valid");
      }
      
    });
    
    if(error){
      alert("Błąd\ntrzeba poprawic pola:\n" + message);
    }
    else{
      $(document).unbind("submit");
      $(this).submit();
    }
    
  })
  
});
