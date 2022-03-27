
$(document).ready(function(){
  $(".icon1").hover(function(){
      $(this).css("height", "100px").css("width", "100px")
  }, function(){
    $(this).css("height" , "25px").css("width" , "25");
  });
})

$(document).ready(function(){
  $(".icon2").hover(function(){
      $(this).css("height", "100px").css("width", "100px")
  }, function(){
    $(this).css("height" , "25px").css("width" , "25");
  });
})

$(document).ready(function(){
  $(".icon3").hover(function(){
      $(this).css("height", "100px").css("width", "100px")
  }, function(){
    $(this).css("height" , "25px").css("width" , "25");
  });
})

$(document).ready(function(){
  $(".icon4").hover(function(){
      $(this).css("height", "100px").css("width", "100px")
  }, function(){
    $(this).css("height" , "25px").css("width" , "25");
  });
})

$(document).ready(function(){
  $(".icon5").hover(function(){
      $(this).css("height", "100px").css("width", "100px")
  }, function(){
    $(this).css("height" , "25px").css("width" , "25");
  });
})





let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("repos1").innerHTML = gitObject[0].name;
    document.getElementById("repos2").innerHTML = gitObject[1].name;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/Lucysolimanrx1/repos", true);
gitHubRequest.send();