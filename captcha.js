$(document).ready(function(){
    $("#pogg").addClass("hidden")

    const random = Math.ceil( Math.random()*100)
    $(".randomnumber").text(` ${random}`)

   const userinput = $("#captchavalue").on("keyup", function(){
    const userinput = parseInt(($(this).val()))
    
     if (userinput == random){
        $("#pogg").removeClass("hidden")
        $("#yeahh").addClass("hidecaptcha")
     }

   })



})