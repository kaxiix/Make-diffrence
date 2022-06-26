$.get("https://sheetdb.io/api/v1/scfeddl6holm1/count=1", function(data){
    console.log(data)
})


$(document).ready(function(){
    

  var form = document.getElementById('donateform');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("donateform")),
    }).then(
        response => response.json()
    ).then((html) => {
      
      window.location.replace("seek.html")
    });
  });
   
   
})