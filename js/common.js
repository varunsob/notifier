$(document).ready(function(){
	// Publish event if any form input is focused
	$(".frmInput").on("focusin", function(){
		$.ajax({
			type: "GET",
			url: "notifier.php",
			data: "uuid="+uuid+"&field="+this.name,
			success: function(result) {
				// Nothing needs to be done if notification was published successfully.
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				// Show error if the call to publish notification was unsuccessful.
				alert("Status: " + textStatus); alert("Error: " + errorThrown); 
			}
		});
	});

	// Remove notification message if clicked anywhere outside the form inputs
	$(document).click(function(e) {
		if ($(e.target).is('.frmInput')) {
			return;
		} else {
			$.ajax({
				type: "GET",
				url: "notifier.php",
				data: "uuid="+uuid+"&field=clearall",
				success: function(result) {
					// Nothing needs to be done if notification was published successfully.
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					// Show error if the call to publish notification was unsuccessful.
					alert("Status: " + textStatus); alert("Error: " + errorThrown); 
				}
			});
		}
	});
});

// Calculating UUID
function uuid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4();
}

//Global UUID for each user.
var uuid = uuid();

// Static Message and Field mapping
var msg = "Another user is editing ";
var fieldList = {fname : 'First Name', lname : 'Last Name', gender : 'Gender'};

// Create pusher object and subscribe to channel
var pusher = new Pusher('37600a0c07592d0a28f3', {
	cluster: 'ap1',
	encrypted: true
});

var channel = pusher.subscribe('notification_channel');

// Bind channel to get which field is focused
channel.bind('on_focus', function(data) {
	if(uuid != data.uuid) {
		if(data.field == 'clearall') {
			$("#message").html("").css("display","none");
		} else {
			$("#message").css("display","block").html(msg + fieldList[data.field]);
		}
	}
});