<!DOCTYPE html>
<!--[if lt IE 7]>  <html class="ie ie6 lte9 lte8 lte7 no-js"> <![endif]-->
<!--[if IE 7]>     <html class="ie ie7 lte9 lte8 lte7 no-js"> <![endif]-->
<!--[if IE 8]>     <html class="ie ie8 lte9 lte8 no-js"> <![endif]-->
<!--[if IE 9]>     <html class="ie ie9 lte9 no-js"> <![endif]-->
<!--[if gt IE 9]>  <html class="no-js"> <![endif]-->
<!--[if !IE]><!--> <html class="no-js">             <!--<![endif]-->
<head>

	<meta charset="utf-8" />	
	
	<title>Charted Tweets</title>
	
	<meta name="description" content="My Twitter RT's plotted on Google charts for netmag" />
	<!-- Google will often use this as its description of your page/site. Make it good. -->
	
	<meta name="author" content="David Smith" />
	<meta name="copyright" content="Copyright David Smith 2011. All Rights Reserved." />

	<meta name="DC.title" content="%%Project Name%%" />
	<meta name="DC.subject" content="What you're about." />
	<meta name="DC.creator" content="David Smith" />
	
	<meta name="google-site-verification" content="" />
	<!-- Speaking of Google, don't forget to set your site up: http://google.com/webmasters -->

	<!-- Mobile viewport optimized: j.mp/bplateviewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="shortcut icon" href="_/images/favicon.png"/>
	<!-- This is the traditional favicon.
		 - size: 16x16 or 32x32
		 - transparency is OK
		 - see wikipedia for info on browser support: http://mky.be/favicon/ -->
	
	<link rel="apple-touch-icon" href="_/images/custom_icon.png"/>
	<!-- The is the icon for iOS's Web Clip.
		 - size: 57x57 for older iPhones, 72x72 for iPads, 114x114 for iPhone4's retina display (IMHO, just go ahead and use the biggest one)
		 - To prevent iOS from applying its styles to the icon name it thusly: apple-touch-icon-precomposed.png
		 - Transparency is not recommended (iOS will put a black BG behind the icon) -->

	<!-- address the mobile presentation
		 we suggest no default, as each project has its own needs
	<meta name="viewport" content="width=device-width, user-scalable=no" />
	-->
	
	<link rel="stylesheet" href="_/css/normalize.css" />
	<link rel="stylesheet" href="_/css/grid.css" />
	<link rel="stylesheet" href="_/css/typo.css" />
	<link rel="stylesheet" href="_/css/bootstrap.min.css" />
	<link rel="stylesheet" href="_/css/site.css" />





	
		
	<!-- Either Modernizr OR the HTML5 Shiv script is required if you want IE compatability, AND you want to use the new, 
		 more-semantic HTML5 elements (header, article, footer, etc) 
		 - we've only included Modernizr; HTML5 Shiv can be found here: http://html5shiv.googlecode.com -->
	
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    
</head>

<?php
	$jsonurl		= "http://twitter.com/statuses/user_timeline/get_dave.json?count=40";
	$json 			= file_get_contents($jsonurl,0,null,null);
	$json_output 	= json_decode($json,true);


	$tweet_dates = array();
	$curr_tweet_date = '';

	// Build up an array of number of Tweets by date
	foreach($json_output as $tweet){ 

		// Get workable timestamp from json
		$tweet_date = date("d/m/y",strtotime($tweet['created_at']));

		// if the tweets date doesn't match the previous tweets date then start a new key in the array
		if ($curr_tweet_date != $tweet_date) {
			$tweet_dates[$tweet_date] = 1;	// add a new key and set value to 1
			$curr_tweet_date = $tweet_date;	// set current date var
		} else { // if current tweet date matches prev
			$tweet_dates[$tweet_date]++; // increment date key value
		}	
	} // end foreach 



	// Reverse our array to ensure that the most recent Tweets are on the 
	// RHS of our area graph's XAxis
	$tweet_dates = array_reverse($tweet_dates,true);


?>


<body class="">

	<div class="page">

		<h1>Tweets by <a href="http://www.twitter.com/get_dave" target="_blank">@get_dave</a> by date</h1>

		<!--Div that will hold the pie chart-->
		<div id="chart_div"></div>

		<table class="table table-striped" id="tweet-table">
			<caption>@get_dave's Tweets by date</caption>
			<thead>
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Tweets</th>
				</tr>
			</thead>

			<tbody>
				
				<?php foreach($tweet_dates as $key => $value) {?> 
				<tr>					
					<td class="tweet-date"><?php echo $key?></td>
					<td class="tweet-count"><?php echo $value?></td>
				</tr>
				<?php } ?>
				

			</tbody>
		</table>

		


	</div>




<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.4.2.js"%3E%3C/script%3E'))</script>
<script src="_/js/debounce.js"></script>

<script src="_/js/functions.js"></script>


</body>
</html>
