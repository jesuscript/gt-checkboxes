(function($){
  $(document).ready(function(){
    $(".col_featured-ad input[type=\"checkbox\"]").change(function(e){
      if($(this).is(":checked")){
        var this_id = $(this).attr("id");
        $(this).parents("tr")
          .find(".col_featured-ad input[type=\"checkbox\"]")
          .each(function(){
            if($(this).attr("id") !== this_id){
              $(this).prop("checked", false);
            }
          });
      }
    });
  });
})(jQuery);