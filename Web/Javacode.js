$(function(){
    d = new Date();

    day = d.getUTCDate();
    month = d.getUTCMonth();

  $("#dayOne").click(function(){
    if(day>=1){
      $("#dayOne").html("<p class='invisible' ><p>");
      $("#dayOne").html("<img src='rsc\\jpg\\1_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (1 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet werden!")
    }
  });
  $("#dayTwo").click(function(){
    if(day>=2){
      $("#dayTwo").html("<p class='invisible' ><p>");
      $("#dayTwo").html("<img src='rsc\\jpg\\2_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (2 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayThree").click(function(){
    if(day>=3){
      $("#dayThree").html("<p class='invisible' ><p>");
      $("#dayThree").html("<img src='rsc\\jpg\\3_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (3 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayFour").click(function(){
    if(day>=4){
      $("#dayFour").html("<p class='invisible' ><p>");
      $("#dayFour").html("<img src='rsc\\jpg\\4_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (4 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayFive").click(function(){
    if(day>=5){
      $("#dayFive").html("<p class='invisible' ><p>");
      $("#dayFive").html("<img src='rsc\\jpg\\5_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (5 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#daySix").click(function(){
    if(day>=6){
      $("#daySix").html("<p class='invisible' ><p>");
      $("#daySix").html("<img src='rsc\\jpg\\6_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (6 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#daySeven").click(function(){
    if(day>=7){
      $("#daySeven").html("<p class='invisible' ><p>");
      $("#daySeven").html("<img src='rsc\\jpg\\7_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (7 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayEight").click(function(){
    if(day>=8){
      $("#dayEight").html("<p class='invisible' ><p>");
      $("#dayEight").html("<img src='rsc\\jpg\\8_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (8 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayNine").click(function(){
    if(day>=9){
      $("#dayNine").html("<p class='invisible' ><p>");
      $("#dayNine").html("<img src='rsc\\jpg\\9_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (9 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayTen").click(function(){
    if(day>=10){
      $("#dayTen").html("<p class='invisible' ><p>");
      $("#dayTen").html("<img src='rsc\\jpg\\10_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (10 - day) + " Tagen und "+ (12 - (month+1) ) +" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayEleven").click(function(){
    if(day>=11){
      $("#dayEleven").html("<p class='invisible' ><p>");
      $("#dayEleven").html("<img src='rsc\\jpg\\11_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (11 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayTwelve").click(function(){
    if(day>=12){
      $("#dayTwelve").html("<p class='invisible' ><p>");
      $("#dayTwelve").html("<img src='rsc\\jpg\\12_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (12 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayThirteen").click(function(){
    if(day>=13){
      $("#dayThirteen").html("<p class='invisible' ><p>");
      $("#dayThirteen").html("<img src='rsc\\jpg\\13_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (13 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayFourteen").click(function(){
    if(day>=14){
      $("#dayFourteen").html("<p class='invisible' ><p>");
      $("#dayFourteen").html("<img src='rsc\\jpg\\14_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (14 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayFifteen").click(function(){
    if(day>=15){
      $("#dayFifteen").html("<p class='invisible' ><p>");
      $("#dayFifteen").html("<img src='rsc\\jpg\\15_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (15 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#daySixteen").click(function(){
    if(day>=16){
      $("#daySixteen").html("<p class='invisible' ><p>");
      $("#daySixteen").html("<img src='rsc\\jpg\\16_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (16 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#daySeventeen").click(function(){
    if(day>=17){
      $("#daySeventeen").html("<p class='invisible' ><p>");
      $("#daySeventeen").html("<img src='rsc\\jpg\\17_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (17 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayEighteen").click(function(){
    if(day>=18){
      $("#dayEighteen").html("<p class='invisible' ><p>");
      $("#dayEighteen").html("<img src='rsc\\jpg\\18_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (18 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayNineteen").click(function(){
    if(day>=19){
      $("#dayNineteen").html("<p class='invisible' ><p>");
      $("#dayNineteen").html("<img src='rsc\\jpg\\19_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (19 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayTwenty").click(function(){
    if(day>=20){
      $("#dayTwenty").html("<p class='invisible' ><p>");
      $("#dayTwenty").html("<img src='rsc\\jpg\\20_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (20 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayTwentyone").click(function(){
    if(day>=21){
      $("#dayTwentyone").html("<p class='invisible' ><p>");
      $("#dayTwentyone").html("<img src='rsc\\jpg\\21_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (21 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayTwentytwo").click(function(){
    if(day>=22){
      $("#dayTwentytwo").html("<p class='invisible' ><p>");
      $("#dayTwentytwo").html("<img src='rsc\\jpg\\22_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (22 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayTwentythree").click(function(){
    if(day>=23){
      $("#dayTwentythree").html("<p class='invisible' ><p>");
      $("#dayTwentythree").html("<img src='rsc\\jpg\\23_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (23 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
  $("#dayTwentyfour").click(function(){
    if(day>=24){
      $("#dayTwentyfour").html("<p class='invisible' ><p>");
      $("#dayTwentyfour").html("<img src='rsc\\jpg\\24_Turchen.jpg'/>");
    }else {
      alert("Dieses Türchen kann erst in " + (24 - day) + " Tagen und "+ (12 - (month+1) )+" Monaten geöffnet geöffnet werden!")
    }
  });
});
