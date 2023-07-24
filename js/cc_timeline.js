/* 
  Purpose: this script initializes the TimeGlider object and adds event handlers.
  Author: Gerardo Armendariz
  Date: 7-17-2013 
**/
   var TG = window.TG = "";
   var TG_instance = {};
   
	$(function () { 
        
        //$( "#dialog" ).dialog();
        //$( "#keywords_dialog_opener" ).on( "click", function() {
        //    $( "#keywords_dialog" ).dialog( "open" );
        //});

		TG = $("#timeline_container").timeline({
				eventHover: function($ev, ev) {
					//console.log("ev hover:", ev.startdate);
					// select the climate values when user hover over an event in the timeline
					setSelectionOnChart(ev.startdate, ev.enddate);
					//alert(ev.date);
				},
				"min_zoom":1, 
				"max_zoom":60, 
				"timezone":"-07:00",
				"icon_folder":"timeglider/icons/",
				"data_source":"json/Conservation_History_Timeline_11032022.json",
				"show_footer":true,
				"display_zoom_level":true,
				"mousewheel":"zoom", // zoom | pan | none
				"constrain_to_data":true,
				"inverted":true,
				"image_lane_height":100,
				"legend":{type:"checkboxes"}, // default | checkboxes
				/* this will load the tags mediator */
				/*"loaded":function(timelines, med) {
					timelineReady(med);
				}*/
				"loaded":function () { 
					setTimeout(function(){
						var img2 = $('img.TG-legend-icon[src$="circle_green.png"]');
						img2.trigger("mouseup");						
					},1000);
				 }
		}).resizable({
			stop:function(){ 
				// $(this).data("timeline").resize();
			}
		});

		function timelineReady(mediator) {

			var tags = mediator.getTagList();
			
			// CREATE TAG BUTTONS
			var $tags = $("#tags");
			_.each(tags, function(t) {
				$tags.append("<li data-tag_name='" + t.name  + "'>" + t.name + " (" + t.count + ")</li>");
			});

			$("#tags li").on("click", function() {
				
				var tags_arr = [], tags_str = "";
				$(this).toggleClass("selected");
				$("#tags li").each(function(li) {
					var tname = $(this).data("tag_name");
					if ($(this).hasClass("selected")) {
						tags_arr.push(tname)
					}
				});
				tags_str = tags_arr.join(",");	
				mediator.setFilters({origin:"tags", tags: tags_str});
			});	
		}


		TG_instance = TG.data("timeline");

		timeglider.eventActions = {
			nagavigateTo:function(obj) {
				// event object must have a "navigateTo"
				// element with zoom, then ISO date delimited
				// with a pipe |  one can use
				var nav = obj.navigateTo;
				TG_instance.goTo(nav.focus_date,nav.zoom_level);
				
				setTimeout(function () {
					$el = $(".timeglider-timeline-event#" + obj.id);
					$el.find(".timeglider-event-spanner").css({"border":"1px solid green"});
				}, 50);
				
			}
		}
		
		/*
		var ico = window.ico;
    
		window.pizzaShack = {
			clicker: function(TG_event) {
				alert("you clicked on " + TG_event.title);
			}
		};

		$(".goto").click(function() {
			var d = $(this).attr("date");
			var z = $(this).attr("zoom");
			TG_instance.goTo(d,z);
		});
		
		$(".zoom").click(function() {
			var z = Number($(this).attr("z"));
			TG_instance.zoom(z);
		});
		
		TG_instance.panButton($(".pan-left"), "left");
		TG_instance.panButton($(".pan-right"), "right");
		
		$("#getScope").click(function() {
			
			var so = TG_instance.getScope();
						
			var ml = "RETURNS: <br><br>container (jquery dom object): " + so.container.toString()
			+ "<br>focusDateSec (TG sec):" + so.focusDateSec
			+ "<br>focusMS (js timestamp): " + so.focusMS
			+ "<br>leftMS (js timestamp): " + so.leftMS
			+ "<br>left_sec (TG sec): " + so.left_sec
			+ "<br>rightMS (js timestamp): " + so.rightMS
			+ "<br>right_sec (TG sec): " + so.right_sec
			+ "<br>spp (seconds per pixel): " + so.spp
			+ "<br>timelineBounds (object, left- & right-most in TG sec): " + JSON.stringify(so.timelineBounds)
			+ "<br>timelines (array of ids): " + JSON.stringify(so.timelines);
			
			var d = new Date(so.focusMS)
			
			ml += "<br><br>Date using focusMS:" + d.toString('yyyy-MM-dd');
			
			$(".scope-view").html(ml);	
		});

		$("#loadData").click(function() {
			var src = $("#loadDataSrc").val();
			
			var cb_fn = function(args, timeline) {
				// called after parsing data, after load
				debug.log("args", args, "timeline", timeline[0].id);
			};
			var cb_args = {}; // {display:true};
			
			TG_instance.getMediator().emptyData();
			TG_instance.loadTimeline(src, function(){debug.log("cb!");}, true);
			
			$("#reloadDataDiv").hide();
		});
		
		$("#reloadTimeline").click(function() {
			TG_instance.reloadTimeline("js_history", "json/Conservation_History_Timeline_6152013.json");
		});
	
		$("#refresh").click(function() {
			debug.log("timeline refreshed!");
			TG_instance.refresh();
		});
		
		$("#scrolldown").bind("click", function() {
			$(".timeglider-timeline-event").animate({top:"+=100"})
		})
		
		$("#scrollup").bind("click", function() {
			$(".timeglider-timeline-event").animate({top:"-=100"})
		})

		$("#adjustNow").click(function() {
			TG_instance.adjustNowEvents();
		});	
		
		$("#addEvent").click(function() {
		
			var rando = Math.floor((Math.random()*1000)+1); 
			var impo = Math.floor((Math.random()*50)+20); 
			
			var obj = {
				id:"new_" + rando,
				title:"New Event!",
				startdate:"today",
				importance:impo,
				icon:"star_red.png",
				timelines:["js_history"]
			}
			
			TG_instance.addEvent(obj, true);
			
		});	

		$("#updateEvent").click(function() {
			
			var updatedEventModel = {
				id:"deathofflash",
				title: "Flash struggles to survive in the age of HTML5."
			}
			
			TG_instance.updateEvent(updatedEventModel);

		});	
		
		$(".method").each(function() {
			$(this).find("h4").addClass("clearfix");
			
			// $(this).prepend("<div class='dragger'>drag me</div>");
		});
		
		
		// $("#sorters").sortable({"handle":".dragger"});
		// $("#sorters").disableSelection();
		
		// $(".method").draggable();
	*/
		//$("#climate_container").toggle();
    }); // end document-ready

function toggleClimate()
{
	$("#climate_container").toggle('slow');

	text = $("#toggle_climate_label").text();
	$("#toggle_climate_label").text(text == "Hide Climate Data"?"Show Climate Data":"Hide Climate Data");
}
