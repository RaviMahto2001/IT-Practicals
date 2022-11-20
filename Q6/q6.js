$(document).ready(function(){
    $("#f1").on('submit',function(e){
      e.preventDefault();
      $("body").css("background-color", "beige");
      const pet={};
      pet.Name=$("#pname").val();
      pet.Age=$("#page").val(); 
      pet.Weight=$("#pweight").val();
      pet.Type=$("#ptype").val();
      pet.Likes=$("#plike").val();  
      console.log(pet);
      const petJSON=JSON.stringify(pet);
      console.log(petJSON);
    });
  });
  