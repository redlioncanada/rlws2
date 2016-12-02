<?
	//generates css for animation of slideshow
	//shows each image for 1s

	$animationName = "image";
	$animationEasing = "linear";
	$animationTiming = "infinite";
	$animationTotalTime = 30;
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
		$animation = "animation: " . $name . " " . $animationTotalTime . "s " . $animationEasing . " " . $animationTiming . ";";
		$css1 .= $selector . " {" . $animation . "}<br/>";

		$css2 .= "@keyframes " . $name . "{ ";
			for ($j = 0; $j <= $animationNumberOfElements; $j++) {
				$percent = $j*$divisor;

				if ($j == $i-1 || ($i == 1 && intval($percent) == 100)) {
					$css2 .= $percent . "%" . " {" . $animationProperty . ":" . $animationOn . "} ";	//on
				} else {
					$css2 .= $percent . "%" . " {" . $animationProperty . ":" . $animationOff . "} ";	//off
				}
			}
		$css2 .= "}<br/>";
		$char++;	//why php, why?
	}

	echo $css1 . "<br/>" . $css2;
?>