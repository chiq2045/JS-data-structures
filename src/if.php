<?php
echo (
	true == 'false'
	? (
		true === 'false'
		? 'true is equivalent (==) to, and is equal (===) to, "false"'
		: 'true is equivalent (==) to, but is not equal (===) to, "false"'
	)
	: (
		true === 'false'
		? 'true is not equivalent (==) to, but is equal (===) to, "false"'
		: 'true is not equivalent (==) to, and is not equal (===) to, "false"'
	)
);
echo '<br>';

echo (
	true == false
	? 'false is equivalent to true'
	: 'false is not equivalent to true'
);
echo '<br>';

echo (
	true == 1
	? '1 is equivalent to true'
	: '1 is not equivalent to true'
);
echo '<br>';

echo (
	true == 0
	? '0 is equivalent to true'
	: '0 is not equivalent to true'
);
echo '<br>';

echo (
	1 == '2'
	? '"2" is equivalent to 1'
	: '"2" is not equivalent to 1'
);
echo '<br>';
echo (
	1 == '1'
	? '"1" is equivalent to 1'
	: '"1" is not equivalent to 1'
);
echo '<br>';
