//Mudar o nav quando der o scroll

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 91) {
          $(".navbar").addClass('changed');
        }
  
        else{
            $(".navbar").removeClass('changed'); 	
        }
    })
  });

  //Animar o menu hamburger ao click

  $(document).ready(function(){
    $('.navbar-mobile').click(function(){
        $(this).toggleClass('open');
        $('.list-nav').toggleClass('open');
    });
  });

  //Dropdown click

  $(document).ready(function(){
    $('.dropdown').click(function(){
        $('.dropdown-content').toggleClass('open');
    });
  });
