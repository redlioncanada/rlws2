<?
	//generates css for animation of slideshow
	//shows each image for 1s

	$animationName = "image";
	$animationEasing = "linear";
	$animationTiming = "infinite";
	$animationNumberOfElements = 12;
	$animationSelector = "> div:nth-child({})";
	$animationProperty = "opacity";
	$animationOn = "1";
	$animationOff = "0";

	$char = 'a';
	$divisor = 100/$animationNumberOfElements;

	$css1 = "";
	$css2 = "";

	for($i = 1; $i <= $animationNumberOfElements; $i++) {
		$name = $animationName . '-' . $char;
		$selector = str_replace("{}", $i, $animationSelector);
		$animation = "animation: " . $name . " " . $animationNumberOfElements . "s " . $animationEasing . " " . $animationTiming . ";";
		$css1 .= $selector . " {" . $animation . "}<br/>";

		$css2 .= "@keyframes " . $name . "{ ";
			$startPercent = number_format($divisor * ($i-1), 12);

			$endPercent = number_format(($divisor * $i), 12);
			if ($i == $animationNumberOfElements) {
				$endPercent -= .000000000001;
			} else {
				$endPercent += .000000000001;
			}

			$css2 .= $startPercent . "%" . " {" . $animationProperty . ":" . $animationOff . "} ";	//off
			$css2 .= number_format($startPercent+.000000000001, 12) . "%" . " {" . $animationProperty . ":" . $animationOn . "} ";	//on
			$css2 .= $endPercent . "%" . " {" . $animationProperty . ":" . $animationOn. "} ";	//on
			$css2 .= number_format($endPercent+.000000000001, 12) . "%" . " {" . $animationProperty . ":" . $animationOff . "}";	//off
		$css2 .= "}<br/>";

		$char++;	//why php, why?
	}

	echo $css1 . "<br/>" . $css2;
?>