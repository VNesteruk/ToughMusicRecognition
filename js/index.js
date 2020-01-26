
$(document).ready(function () {
      $(".mainSection").hide();
           $("#btn0").click(function () {
               $(".startSection").hide(300);
               $(".mainSection").show(400)
           });
         $(".btn2").click(function () {
               $(".mainSection").hide(300);
               $(".startSection").show()
       });
    });

    $(document).ready(function () {
          $(".searchByText").hide();
               $("#btn3").click(function () {
                   $(".mainSection").hide(300);
                   $(".searchByText").show(400)
               });
             $("#btn4").click(function () {
                   $(".searchByText").hide(300);
                   $(".startSection").hide();
                   $(".mainSection").show()
           });
        });

        $(document).ready(function () {
              $(".searchByMusic").hide();
                   $("#btn5").click(function () {
                       $(".mainSection").hide(300);
                       $(".searchByMusic").show(400)
                   });
                 $("#btn6").click(function () {
                       $(".searchByMusic").hide(300);
                       $(".startSection").hide();
                       $(".mainSection").show()
               });
            });




        $(document).ready(function () {
              $(".mainSection").hide();
              $(".ifreamItem").hide();
              $("#searchBform").submit(function( event )
              {
                  event.preventDefault();
                  $(".ifreamItem").show(200);
              });
                 $("#serchA").click(function () {
                       $(".searchByText").show();
                       $(".startSection").hide();
                       $(".mainSection").hide()
               });
            });


//DEEZER
            // $(document).ready(function () {
            //       $("#deezirW").hide();
            //       $(".mainSection").hide();
            //       $("mediaBut").submit(function( event )
            //       {
            //
            //           $("#deezirW").show(200);
            //       });
            //          $("#serchA").click(function () {
            //                $(".searchByText").show();
            //                $(".startSection").hide();
            //                $(".mainSection").hide()
            //        });
            //     });




            $(document).ready(function () {
                  $("#stop").hide();
                       $("#start").click(function () {
                           $("#start").hide(0);
                           $("#stop").show(0)
                       });
                     $("#stop").click(function () {
                           $("#stop").hide(0);
                           $("#start").show()
                   });
                });



                $(document).ready(function () {
                      $(".hidenDeez").hide();
                           $("#mediaBut").click(function () {

                               $(".hidenDeez").show(0)
                           });
                         $("#stop").click(function () {
                               $("#stop").hide(0);
                               $("#start").show()
                       });
                    });
