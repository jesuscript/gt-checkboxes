(function($){
  $(document).ready(function(){
    
    // only one "featured" checkbox can be checked at a time in a row:
    $(".col_featured-ad input[type=\"checkbox\"]").change(function(){
      if($(this).is(":checked")){
        var this_id = $(this).attr("id");

        $(this).parents("tr") // other featured boxes for this row:
          .find(".col_featured-ad input[type=\"checkbox\"]")
          .each(function(){
            if($(this).attr("id") !== this_id){
              $(this).prop("checked", false);
            }
          });
      }
    });

    // managing global checkboxes:
    $(".global-checkboxes input[type=\"checkbox\"]").change(function(){
      var td_index = 0;
      var this_id = $(this).attr("id");
      var is_checked = $(this).is(":checked");
      var td_class = $(this).parent().attr("class") 

      //get the parent's index:
      $(this).parents("tr")
        .find("td." + td_class)
        .each(function(index){
          //looking for the parent of the checked checkbox
          if($(this).find("input#"+this_id).length){
            td_index = index;
          }
        });
      
      // checking or unchecking all boxes in the column
      $("#your-ads tr:not(.global-checkboxes)").each(function(){
        $(this).find("td." + td_class + ":eq(" + td_index +
                     ") input[type=\"checkbox\"]")
          .prop("checked",is_checked)
          .trigger("change"); // prop()  doesn't trigger 'change' :(
      });


    });
  });
})(jQuery);