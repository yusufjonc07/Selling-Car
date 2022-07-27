$(document).ready(function(){
//boshlang'ich page   
    
   
    $('.balon').animate({left:'100%'},2200,);
    
    $('.moto').on('click', function(){
           
            $(this).css('display','none');
            $('.car-tur, .big-car, .car-color').css('display','block');
        
        
    });
       
    $('.lar').on('click', function(){
           
            $('.moto').css('display','block');
            $('.moto').addClass('mx-auto mat');
            $('.moto').css('margin-top', '250px');
            $('.car-tur, .big-car, .car-color').css('display','none');
        
        
    });
       
        
       
       
       
//ortga qaytish
    
    
    
    
    
    
    
   $('.l-img').on('click', function(){
        $('.gentra').attr('src','cars/Lasetti/oq.png');
        $('.car-color div').css('display', 'inline-block');
        $('#narx').text('12000'+'$');
       
       //rang o'zgarishi
        $('.color').on('click', function(){
          let imgPath=$(this).attr('data-gentra');
            let narx=$(this).attr('data-gentra-narx');
          $('#narx').text(narx+'$');
          $('.gentra').attr('src',imgPath);
         
       });
       //narx 
       
       
       
   });
   $('.o-img').on('click', function(){
        $('.gentra').attr('src','cars/Malibu/oq.png');
        $('#narx').text('22000'+'$');
       $('.kok, .havorang, .kulrang, .shikalad, .qizil, .toqkulrang, .toqmalochni').css('display','none');
       $('.oq, .malochni, .qora').css('display','inline-block');
       //rang o'zgarishi
        $('.color').on('click', function(){
          let imgPath=$(this).attr('data-malibu');
          $('.gentra').attr('src',imgPath);
          let narx=$(this).attr('data-malibu-narx');
          $('#narx').text(narx+'$');
       }); 
     
       
   });
   $('.r-img').on('click', function(){
            $('.gentra').attr('src','cars/Tracker/oq.png');
             $('#narx').text('23000'+'$');
            $(' .kulrang, .shikalad, .qizil, .toqmalochni,.malochni').css('display','none');
            $('.toqkulrang, .kok, .havorang, .oq, .qora').css('display','inline-block');
       
      //rang o'zgarishi
            $('.color').on('click', function(){
                let imgPath=$(this).attr('data-trk');
                $('.gentra').attr('src',imgPath);
                let narx=$(this).attr('data-tracker-narx');
                $('#narx').text(narx+'$');
         
            
      
    });
       
   });
   

    
    
});


