function Box(){
	
	//Declare the offset where a new box forming the tail of the current box will be placed 
	this.TAILOFFSETX = 300;
	this.TAILOFFSETY = 0;
	
	//Declare the offset where a new box forming the head of the current box will be placed
	this.HEADOFFSETX = -300;
	this.HEADOFFSETY = 0;
	
	this.TAILCONNECTIONOFFSETX =  101;
	this.TAILCONNECTIONOFFSETY = 41;
	
	this.HEADCONNECTIONOFFSETX =  101;
	this.HEADCONNECTIONOFFSETY = 41;
	
	this.id = null;
	this.value = "*";
	
	//Defaylt pacement for a new box on an empty canvas is 150x150.
	this.x = 350;
	this.y = 250;
	
	//Used for the mouse-down countdown timer
	this.interval = null;
	
	//Values used for the new box/arrow when extending the current box
	this.newExtensionDirection = null;
	this.newHeadValue = null;
	this.newTailValue = null;
	this.newRelatorValue = null;
	
	//Getters & setters
	this.setId = function(value){
		this.id = value;
	}
	
	this.getId =  function(){
		return this.id;
	}
	
	this.setValue = function(value){
		this.value = value;
		
		//update HTML representation if ther eis one
		var w = $("#b"+ this.id );
		if($("#b"+ this.id ).length == 1){
			$("#b"+ this.id )[0].innerText = value;
		}
	}
	
	this.getValue = function(){
		
		if(this.value){
			return this.value;
		}else{
			return "*";
		}
	}
	
	this.setX = function(value){
		this.x = value;
	}
	
	this.getX = function(){
		return this.x;
	}
	
	this.setY = function(value){
		this.y = value;
	}
	
	this.getY = function(){
		return this.y;
	}
	
	this.getHTML =  function(){
		//return '<div class="positionable draggable box" id = "b' + this.id +'"><div class="top">Move</div><div class="left">Head</div><div class="center"><input type="text" /></div><div class="right">Tail</div><div class="bottom">Info</div></div>';
		//return '<div class="positionable box" id = "b' + this.id +'"><div class="top">Move</div><div class="center"><input type="text" /></div></div>';
		return '<div class="positionable box" id = "b' + this.id +'">' + this.getValue() + '</div>';
	}
	
	//The x of where an tail arrow should conect with the box
	this.getTailConnectionX = function(){
		//return this.getX() + this.TAILCONNECTIONOFFSETX;
		var width = $("#b" + this.getId()).width();
		return this.getX() + 30 + (width / 2); 
	}
	
	//The y of where an tail arrow should conect with the box
	this.getTailConnectionY = function(){
		//return this.getY() + this.TAILCONNECTIONOFFSETY;
		var height = $("#b" + this.getId()).height();
		return this.getY() + 30 + (height / 2); 
	}
	
	
	//The x of where an head arrow should conect with the box
	this.getHeadConnectionX = function(){
		//return this.getX() + this.HEADCONNECTIONOFFSETX;
		var width = $("#b" + this.getId()).width();
		return this.getX() + 30+ (width / 2); 
	}
	
	//The y of where an tail arrow should conect with the box
	this.getHeadConnectionY = function(){
		//return this.getY() + this.HEADCONNECTIONOFFSETY;
		var height = $("#b" + this.getId()).height();
		return this.getY() + 30 + (height / 2); 
	}
	
	this.setNewHeadValue = function(value){
		this.newHeadValue = value;
	}
	
	this.setNewTailValue = function(value){
		this.newTailValue = value;
	}
	
	this.setNewRelatorValue = function(value){
		this.newRelatorValue = value;
	}
	
	//this.addHead = function(){
		//Get the old JSON query before doing anything else
		//var oldQuery = jQuery.tree.getJSON();
		
		//Create a new box for the tail, using the position of the head box and the tail offset
		//var newBox = jQuery.tree.newBox();
				
		//newBox.setX(this.getX() + this.HEADOFFSETX);
		//newBox.setY(this.getY() + this.HEADOFFSETY);
		
		
		//Create a new arrow for the tail, rendering it between the boxes
		//var arrow = jQuery.tree.newArrow();
				
		//arrow.setA(newBox);
		//arrow.setDirection(this);
		//arrow.setB(this);
		
		//var newQuery = jQuery.tree.getJSON();
		//var json = '{"baseQuery":'  + oldQuery + ',';
		//json = json + '"extendedQuery":' + newQuery + '}';		
		
		//var url = 'http://localhost:9998/mediator/query/suggestion/arrow';
		//var url = 'http://95.96.221.90:9998/mediator/query/suggestion/arrow';
		
		//$.ajax({
		//	type: 'POST',
		//	crossDomain:true,
		//	url: url,
		//	dataType:'json',
		//	data: json,
		//	success: function (data) {
		//		var suggestionList = new SuggestionList(70, 90, data, arrow);
		//		drawQueryResult(data);
		//	},
		//	error: function (xhr) {
		//		alert(xhr.responseText + '  ' + xhr.status + '  ' + xhr.statusText);
		//	}
		//});
		

		//var url = 'http://localhost:9998/mediator/query/suggestion/boxA';
		
		//$.ajax({
		//	type: 'POST',
		//	crossDomain:true,
		//	url: url,
		//	dataType:'json',
		//	data: json,
		//	success: function (data) {
		//		var suggestionList = new SuggestionList(70, 90, data, box);
		//		drawQueryResult(data);
		//	},
		//	error: function (xhr) {
		//		alert(xhr.responseText + '  ' + xhr.status + '  ' + xhr.statusText);
		//	}
		//});
	//}
	
	this.extend = function(direction){
		
		if(direction == "head" || direction == "tail"){
			this.newExtensionDirection = direction;
		}
		
		//Get the base JSON query before doing anything else
		var baseQuery = jQuery.tree.getJSON();
		
		if(this.newRelatorValue != null){
			if(this.newHeadValue != null && this.newExtensionDirection == "head"){
				//We have all the info we need to extend the box with a head
				
				//alert("new triple: " + this.newHeadValue + " " + this.newRelatorValue + " " + this.value);
				
				//Create a new box for the tail, using the position of the head box and the tail offset
				var newBox = jQuery.tree.newBox();
						
				newBox.setX(this.getX() + this.HEADOFFSETX);
				newBox.setY(this.getY() + this.HEADOFFSETY);
				newBox.setValue(this.newHeadValue);
				
				//Create a new arrow for the tail, rendering it between the boxes
				var arrow = jQuery.tree.newArrow();
						
				arrow.setA(newBox);
				arrow.setDirection(this);
				arrow.setB(this);
				arrow.setValue(this.newRelatorValue);
				
				newBox.draw();
				arrow.draw();
				arrow.refresh();
				
				this.newExtensionDirection = null;
				this.newHeadValue = null;
				this.newTailValue = null;
				this.newRelatorValue = null;
			}
			else if(this.newTailValue != null && this.newExtensionDirection == "tail"){
				//We have all the info we need to extend the box with a tail
				
				//alert("new triple: " + this.value + " " + this.newRelatorValue + " " + this.newTailValue);
				
				//Create a new box for the tail, using the position of the head box and the tail offset
				var newBox = jQuery.tree.newBox();
						
				newBox.setX(this.getX() + this.TAILOFFSETX);
				newBox.setY(this.getY() + this.TAILOFFSETY);
				newBox.setValue(this.newTailValue);
				
				//Create a new arrow for the tail, rendering it between the boxes
				var arrow = jQuery.tree.newArrow();
						
				arrow.setA(this);
				arrow.setDirection(newBox);
				arrow.setB(newBox);
				arrow.setValue(this.newRelatorValue);
				
				newBox.draw();
				arrow.draw();
				arrow.refresh();
				
				this.newExtensionDirection = null;
				this.newHeadValue = null;
				this.newTailValue = null;
				this.newRelatorValue = null;
			
			}else{
				if(this.newExtensionDirection == "head"){
					var extension =  '{"a":"*", "relator":"'  + this.newRelatorValue + '", "b":"' + this.value + '"}';
				}else if(this.newExtensionDirection == "tail"){
					var extension =  '{"a":"' + this.value + '", "relator":"' + this.newRelatorValue + '", "b":"*"}';
				}
					
				var json = '{"baseQuery":'  + baseQuery + ',';
				json = json + '"extension":' + extension + '}';
				
				//alert(json);
				
				//TODO: code to request data from mediator
				var data = jQuery.parseJSON('{"suggestion": [{"value": "Ik","count": "173"},{"value": "hij","count": "53"},{"value": "wij","count": "14"},{"value": "andere","count": "124"},{"value": "men","count": "54"},{"value": "dat","count": "434"},{"value": "ons","count": "173"},{"value": "hij","count": "53"},{"value": "wij","count": "14"},{"value": "andere","count": "124"},{"value": "men","count": "54"},{"value": "dat","count": "434"}]}');
					
				
				//Add menu for picking new arrow value
				if(this.newExtensionDirection == "head"){
					var list = new SuggestionList(this.getX() + -100, this.getY() + 50, data, this.newExtensionDirection, this.getId());
				}else{
					var list = new SuggestionList(this.getX() + 50, this.getY() + 50, data, this.newExtensionDirection, this.getId());
				}
			}
		}else{

			if(this.newExtensionDirection == "head"){
				var extension =  '{"a":"*", "relator":"*", "b":"' + this.value + '"}';
			}else if(this.newExtensionDirection == "tail"){
				var extension =  '{"a":"' + this.value + '", "relator":"*", "b":"*"}';
			}
			
			var json = '{"baseQuery":'  + baseQuery + ',';
			json = json + '"extension":' + extension + '}';
			
			//alert(json);
			
			//TODO: code to request data from mediator
			
			var data = jQuery.parseJSON('{"suggestion": [{"value": "SUBJ","count": "173"},{"value": "OBJ","count": "53"},{"value": "REL","count": "14"}]}');
			
			//Add menu for picking new arrow value
			if(this.newExtensionDirection == "head"){
				var list = new SuggestionList(this.getX() + -100, this.getY() + 50, data, "arrow", this.getId());
			}else{
				var list = new SuggestionList(this.getX() + 50, this.getY() + 50, data, "arrow", this.getId());	
			}
		}
	}
	
	
	//this.addTail = function(){			
	//	//Create a new box for the tail, using the position of the head box and the tail offset
	//	var newBox = jQuery.tree.newBox();
	//			
	//	newBox.setX(this.getX() + this.TAILOFFSETX);
	//	newBox.setY(this.getY() + this.TAILOFFSETY);
	//						
	//	newBox.draw();
	//		
	//	//Create a new arrow for the tail, rendering it between the boxes
	//	var arrow = jQuery.tree.newArrow();
	//			
	//	arrow.setA(this);
	//	arrow.setDirection(newBox);
	//	arrow.setB(newBox);
	//			
	//	arrow.draw();
	//			
	//	arrow.refresh();
	//}
	
	
	this.removeMe = function (){
		var arrow = jQuery.tree.getArrows(this);
			
		if(arrow.length != 0){
			var arrowId = arrow[0].getId();
		}
				
		if(jQuery.tree.removeBox(this)){
					
			//alert("Box " + id + " and arrow " + arrowId + " removed from the internal arrays.");
			$("#b" + this.getId()).remove();
			$("#a" + arrowId).remove();
			}else{
				//alert("Box not removed.");
			}
	}
	
	
	this.draw = function(){
	
		//We can't draw a box without a valid id
		if(this.id == null){
			alert("Box Id is null, returning...")
			return;
		}
		
		var selector = "#b" + this.id;
		var element = $(selector);
		if(element.length == 0){
			$("#query").append(this.getHTML());
		}
		
		//Make it draggable and set the position
		//$("#b" + this.id).draggable({handle: " .top"});
		//$("#b" + this.id).draggable();
		$("#b" + this.id).css("left", this.x + "px");
		$("#b" + this.id).css("top", this.y + "px");
		
		//Add a function to add a tail to the box. A tail  consists of a box and an arrow.
		//$("#b" + this.id + " .right").click(function(){
		//	
		//	//Find the id of the box in question, the box, and the tree
		//	var id = $(this).parent().attr("id");
		//	var id = new Number (id.replace("b", ""));
		//	var box  =  jQuery.tree.getBox(id);
		//
		//	//Create a new box for the tail, using the position of the head box and the tail offset
		//	var newBox = jQuery.tree.newBox();
			
		//	newBox.setX(box.getX() + box.TAILOFFSETX);
		//	newBox.setY(box.getY() + box.TAILOFFSETY);
						
		//	newBox.draw();
		
		//	//Create a new arrow for the tail, rendering it between the boxes
		//	var arrow = jQuery.tree.newArrow();
			
		//	arrow.setA(box);
		//	arrow.setDirection(newBox);
		//	arrow.setB(newBox);
				
		//	arrow.draw();
		//	
		//	arrow.refresh();
		//});
		
		//Add a function to add a head to the box. Just as a tail, a head consists of a box and an arrow.
		//$("#b" + this.id + " .left").click(function(){
		//	
		//	//Find the id of the box in question, the box, and the tree
		//	var id = $(this).parent().attr("id");
		//	var id = new Number (id.replace("b", ""));
		//	var box  =  jQuery.tree.getBox(id);
			
		//	//Create a new box for the tail, using the position of the head box and the tail offset
		//	var newBox = jQuery.tree.newBox();
		//	
		//	newBox.setX(box.getX() + box.HEADOFFSETX);
		//	newBox.setY(box.getY() + box.HEADOFFSETY);
			
		//	newBox.draw();
			
		//	//Create a new arrow for the tail, rendering it between the boxes
		//	var arrow = jQuery.tree.newArrow();
			
		//	arrow.setA(newBox);
		//	arrow.setDirection(box);
		//	arrow.setB(box);
				
		//	arrow.draw();
			
		//	arrow.refresh();
		//});
		
		$("#b" + this.id).mousedown(function(event){
			event.stopPropagation();
			jQuery.boxLastMousedown = this.id;
			jQuery.mouseDownX = event.pageX;
			jQuery.mouseDownY = event.pageY;
		});
		
		$("#b" + this.id).mouseup(function(event){
			event.stopPropagation();
			$("#query").off("mousemove"); 
			jQuery.boxLastMousedown = null;
			$(this).removeClass("draggable");

		});
		
		$("#b" + this.id).mouseover(function(event){
			jQuery.boxLastMouseover = this.id;
		});
		
		$("#b" + this.id).click(function(event){
		
			//Find the id of the box in question, the box, and the tree
			var id = $(this).attr("id");
			var id = new Number (id.replace("b", ""));
			var box  =  jQuery.tree.getBox(id);
			
			$("#b" + box.getId()).html('<input type="text" value="' + box.getValue() + '"/>');
			
			$("#b" + box.getId() + " input").blur(function(){
				box.setValue(this.value);
				$(this).parent().html(this.value);
			});
			
			$("#b" + box.getId() + " input").focus();
			
		});
		
		
		$("#b" + this.id).mouseleave(function(event){
			
			//Check if first mouse button was pressed
			if(event.which == 1 && this.id == jQuery.boxLastMousedown){
				
				//Find the id of the box in question, the box, and the tree
				var id = this.id;
				var id = new Number (id.replace("b", ""));
				var box  =  jQuery.tree.getBox(id);
				
				var x = event.pageX - jQuery.mouseDownX;
				var y = event.pageY - jQuery.mouseDownY;
				
				if((Math.abs(x) > 30) &&(Math.abs(y) < 10)){
					if(x < 0){
						//alert("Swiped left!");
						box.extend("head");
					}else{
						//alert("Swiped right!");
						box.extend("tail");
						//box.addTail();
					}
				}
				
				if((Math.abs(y) > 30) &&(Math.abs(x) < 10)){
					if(y < 0){
						//alert("Swiped up!");
						//$(".draggable").draggable("enable");
						var box = $("#b" + this.id);
						$(this).addClass("draggable");
						$("#query").on("mousemove", (function(event){
							var draggable = $(".draggable");
							draggable.css("left",  event.pageX - draggable.innerWidth()/2);
							draggable.css("top", event.pageY - draggable.innerHeight()/2);
							
							//Find the id of the box in question, the box, and the tree
							var id = $(".draggable")[0].id;
							var id = new Number (id.replace("b", ""));
							var box  =  jQuery.tree.getBox(id);
							
							//Update the X and Y of the moved box
							box.setX(event.pageX - draggable.innerWidth()/2);
							box.setY(event.pageY - draggable.innerHeight()/2);
							
							//Redraw the arrows
							var arrows = jQuery.tree.getArrows(box);
							for(var i = 0; i < arrows.length;i++){
								arrows[i].draw();
							}
							
						}));
					}else{
						//alert("Swiped down!");
						var data = jQuery.parseJSON('{"suggestion": [{"value": "denken","count": "173"},{"value": "vinden","count": "53"},{"value": "willen","count": "14"}]}');
						var list = new SuggestionList(box.getX() - 20, box.getY() + 50, data, "me", "b" + box.getId());
					}
				}
			}
		});
		
		
		
		//Update this.value when the html input field loses focus
		//$("#b" + this.id + " input").blur(function(){
		//	//Find the id of the box in question, the box, and the tree
		//	var id = $(this).parent().attr("id");
		//	var id = new Number (id.replace("b", ""));
		//	var box  =  jQuery.tree.getBox(id);
		//	
		//	//Set the value
		//	box.setValue(this.value);
		//});
		
		//Update the X and Y when dragged
		$( "#b" + this.id).bind( "drag", function(event, ui) {
			//Find the id of the box in question, the box, and the tree
			var id = this.id;
			var id = new Number (id.replace("b", ""));
			var box  =  jQuery.tree.getBox(id);
			
			//Update the X and Y of the moved box
			box.setX(ui.offset.left);
			box.setY(ui.offset.top);
			
			//Redraw the arrows
			var arrows = jQuery.tree.getArrows(box);
			for(var i = 0; i < arrows.length;i++){
				arrows[i].draw();
			}
		});
		
		//Enable dragging after a mousedown of X miliseconds
		//$( "#b" + this.id).bind("mousedown", function(){
		//	
		//	var id = $(this).attr("id");
		//	var id = new Number (id.replace("b", ""));
		//	var box  =  jQuery.tree.getBox(id);
			
		//	box.setInterval(window.setTimeout(function(){
		//		//alert("Waited long enough..." + box.getId());
		//		$("#b" + box.getId()).css("background-color","#f9f9f9");
		//		$("#b" + box.getId()).draggable();
		//		$("#b" + box.getId()).swipe( swipeNullOptions );
		//	},
		//	500));
		//});
		
		//$( "#b" + this.id).bind("mouseup", function(){
		//	
		//	var id = $(this).attr("id");
		//	var id = new Number (id.replace("b", ""));
		//	var box  =  jQuery.tree.getBox(id);
		//	
		//	if(box.getInterval() != null){
		//		window.clearTimeout(box.getInterval());
		//	}
			
			//$("#b" + box.getId()).css("background-color","#efefef");
			//$("#b" + box.getId()).draggable("destroy");
		//});
		
		//$( "#b" + this.id).bind("dragstop", function(){
			
		//	var id = $(this).attr("id");
		//	var id = new Number (id.replace("b", ""));
		//	var box  =  jQuery.tree.getBox(id);
			
		//	window.clearTimeout(box.getInterval());
			
		//	$("#b" + box.getId()).css("background-color","#efefef");
		//	$("#b" + box.getId()).draggable("destroy");
		//	$("#b" + this.id).swipe( swipeOptions );
			
		//});
				
		//Setting the swipe options
		//var swipeOptions=
		//{
		//	swipeLeft:addHead,
		//	swipeRight:addTail,
		//	swipeUp:removeBox,
		//	swipeStatus:cancelTimer,
		//	threshold:10
		//}
		
		//Setting the swipe options
		//var swipeNullOptions=
		//{
		//	swipeLeft:null,
		//	swipeRight:null,
		//	swipeUp:null,
		//	swipeStatus:null,
		//	threshold:10
		//}
		
		//Enable swiping for this box
		//$("#b" + this.id).swipe( swipeOptions );
		
		//Swipe handlers
		//function cancelTimer(event, phase, direction, distance){
		//	var id =  this.context.id;
		//	var id = new Number (id.replace("b", ""));
		//	var box  =  jQuery.tree.getBox(id);
		//	
		//	if((box.getInterval() != null) && (phase == "move")){
		//		window.clearTimeout(box.getInterval());
		//	}
		//}
	}
}
