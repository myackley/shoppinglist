$(document).ready(function() {
	
	// init select2
	// $("#additem_qty").select2({
	// 	minimumResultsForSearch: -1,
	// 	placeholder: "1",
	// 	initSelection: function(element, callback) {}
	// });



	// add item
	var addItem = function() {

		var itemName = $("#additem_item").val();
		var itemQuantity = $("#additem_qty option:selected").val();
		var listitem = "";
		var itemBtns = "<div class=\"shopapp_list-btns\"><button type=\"button\" class=\"btn_icon shopapp_btn-check\"><span class=\"fa fa-check\"></span></button><button type=\"button\" class=\"btn_icon shopapp_btn-remove\"><span class=\"fa fa-close\"></span></button></div>"

		if ( itemName != "" || itemName.length > 2 ) {
			$(".valid_additem").css("display","none");

			//	format values into list item
			listitem = "<li><div class=\"shopapp_list-item\"><p><span>"+itemQuantity+"</span>"+itemName+"</p></div>"+itemBtns+"</li>";

			//	append to shopapp_list ul
			$(".shopapp_list ul").append(listitem);
			
		} else {
			$(".valid_additem").css("display","block");
		}

	}

	$(".btn_submit").on("click", addItem);
	$(".btn_cancel").on("click", function() {
		$("#additem_item").val("");
		$("#additem_qty").val("1");
	});

	// mark as "purchased"
	$(".shopapp_list ul").on("click", ".shopapp_btn-check", function (event) {
		event.preventDefault();

		// apply class to show as "purchased"
		if ( $(this).hasClass("purchased") == true ) {
			$(this).removeClass("purchased");
		} else if ( $(this).hasClass("purchased") == false ) {
			//	remove the class if marked as "purchased" by accident
			$(this).addClass("purchased");
		} else {
			return false;
		}

	});

	// remove from list
	$(".shopapp_list ul").on("click", ".shopapp_btn-remove", function (event) {
		event.preventDefault();	

		//	store the item
		var moveItem = $(this).closest("li");

		//  remove from list
		$(this).closest("li").remove();

		//	append the item to shopapp_panel-viewremoved ul
		$(".shopapp_panel-viewremoved ul").append(moveItem);
		

	});

});