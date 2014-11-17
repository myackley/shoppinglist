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
		var itemBtns = "<div class=\"shopapp_list-btns\"><a href=\"#\" class=\"btn_icon shopapp_btn-check\"><span class=\"fa fa-check\"></span></a><a href=\"#\" class=\"btn_icon shopapp_btn-remove\"><span class=\"fa fa-close\"></span></a></div>"

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

	//		traverse to find this item in dom

	//		apply class to show as "purchased"

	//		remove the class if marked as "purchased" by accident

	// remove from list

	//		traverse to find this item in dom

	//		store the item

	//		append the item to shopapp_panel-viewremoved ul

});