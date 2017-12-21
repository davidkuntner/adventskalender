<script type="text/javascript">
  alert("Hi");
  $(function(){
    var dd = today.getDate();
    $("#dayOne").click(function(){
      if(dd>=1){
        $("dayOne").html("");
        $("dayOne").html("<img src='\\rsc\\jpg\\1._Turchen.jpg'/>");
      }
    });
    $("#dayTwo").click(function(){
      if(dd>=2){
        $("dayTwo").html("");
        $("dayTwo").html("<img src='\\rsc\\jpg\\2._Turchen.jpg'/>");
      }
    });
    $("#dayThree").click(function(){
      if(dd>=3){
        $("dayThree").html("");
        $("dayThree").html("<img src='\\rsc\\jpg\\3._Turchen.jpg'/>");
      }
    });
    $("#dayFour").click(function(){
      if(dd>=4){
        $("dayFour").html("");
        $("dayFour").html("<img src='\\rsc\\jpg\\4._Turchen.jpg'/>");
      }
    });
    $("#dayFive").click(function(){
      if(dd>=5){
        $("dayFive").html("");
        $("dayFive").html("<img src='\\rsc\\jpg\\5._Turchen.jpg'/>");
      }
    });
    $("#daySix").click(function(){
      if(dd>=6){
        $("daySix").html("");
        $("daySix").html("<img src='\\rsc\\jpg\\6._Turchen.jpg'/>");
      }
    });
    $("#daySeven").click(function(){
      if(dd>=7){
        $("daySeven").html("");
        $("daySeven").html("<img src='\\rsc\\jpg\\7._Turchen.jpg'/>");
      }
    });
    $("#dayEight").click(function(){
      if(dd>=8){
        $("dayEight").html("");
        $("dayEight").html("<img src='\\rsc\\jpg\\8._Turchen.jpg'/>");
      }
    });
    $("#dayNine").click(function(){
      if(dd>=9){
        $("dayNine").html("");
        $("dayNine").html("<img src='\\rsc\\jpg\\9._Turchen.jpg'/>");
      }
    });
    $("#dayTen").click(function(){
      if(dd>=10){
        $("dayTen").html("");
        $("dayTen").html("<img src='\\rsc\\jpg\\10._Turchen.jpg'/>");
      }
    });
    $("#dayEleven").click(function(){
      if(dd>=11){
        $("dayEleven").html("");
        $("dayEleven").html("<img src='\\rsc\\jpg\\11._Turchen.jpg'/>");
      }
    });
    $("#dayTwelve").click(function(){
      if(dd>=12){
        $("dayTwelve").html("");
        $("dayTwelve").html("<img src='\\rsc\\jpg\\12._Turchen.jpg'/>");
      }
    });
    $("#dayThirteen").click(function(){
      if(dd>=13){
        $("dayThirteen").html("");
        $("dayThirteen").html("<img src='\\rsc\\jpg\\13._Turchen.jpg'/>");
      }
    });
    $("#dayFourteen").click(function(){
      if(dd>=14){
        $("dayFourteen").html("");
        $("dayFourteen").html("<img src='\\rsc\\jpg\\14._Turchen.jpg'/>");
      }
    });
    $("#dayFifteen").click(function(){
      if(dd>=15){
        $("dayFifteen").html("");
        $("dayFifteen").html("<img src='\\rsc\\jpg\\15._Turchen.jpg'/>");
      }
    });
    $("#daySixteen").click(function(){
      if(dd>=16){
        $("daySixteen").html("");
        $("daySixteen").html("<img src='\\rsc\\jpg\\16._Turchen.jpg'/>");
      }
    });
    $("#daySeventeen").click(function(){
      if(dd>=17){
        $("daySeventeen").html("");
        $("daySeventeen").html("<img src='\\rsc\\jpg\\17._Turchen.jpg'/>");
      }
    });
    $("#dayEighteen").click(function(){
      if(dd>=18){
        $("dayEighteen").html("");
        $("dayEighteen").html("<img src='\\rsc\\jpg\\18._Turchen.jpg'/>");
      }
    });
    $("#dayNineteen").click(function(){
      if(dd>=19){
        $("dayNineteen").html("");
        $("dayNineteen").html("<img src='\\rsc\\jpg\\19._Turchen.jpg'/>");
      }
    });
    $("#dayTwenty").click(function(){
      if(dd>=20){
        $("dayTwenty").html("");
        $("dayTwenty").html("<img src='\\rsc\\jpg\\20._Turchen.jpg'/>");
      }
    });
    $("#dayTwentyone").click(function(){
      if(dd>=21){
        $("dayTwentyone").html("");
        $("dayTwentyone").html("<img src='\\rsc\\jpg\\21._Turchen.jpg'/>");
      }
    });
    $("#dayTwentytwo").click(function(){
      if(dd>=22){
        $("dayTwentytwo").html("");
        $("dayTwentytwo").html("<img src='\\rsc\\jpg\\22._Turchen.jpg'/>");
      }
    });
    $("#dayTwentythree").click(function(){
      if(dd>=23){
        $("dayTwentythree").html("");
        $("dayTwentythree").html("<img src='\\rsc\\jpg\\23._Turchen.jpg'/>");
      }
    });
    $("#dayTwentyfour").click(function(){
      if(dd>=24){
        $("dayTwentyfour").html("");
        $("dayTwentyfour").html("<img src='\\rsc\\jpg\\24._Turchen.jpg'/>");
      }
    });
    function Modal(var day){
      $("modaldiv").html("<div class='modal fade' id='myModal' role='dialog'><div class='modal-dialog modal-sm'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>"+day+"</h4></div><div class='modal-body'><p>This is a small modal.</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal' id='closeButton'>Close</button></div></div></div></div>");
      $("closeButton").click(function(){
        $("myModal").html("");
      })
    }
  });
</script>
