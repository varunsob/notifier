<?php
	require('Pusher.php');

	$options = array(
		'cluster' => 'ap1',
		'encrypted' => true
	);

	$pusher = new Pusher(
		'37600a0c07592d0a28f3',
		'5ac2d3b3e9271689647a',
		'269271',
		$options
	);
	
	$response = $pusher->trigger('notification_channel', 'on_focus', $_GET);
?>