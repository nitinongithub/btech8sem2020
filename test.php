<?php

$xml = new DOMDocument;
$xml->load('metadata.xml');

if( $xml->validate() ){
	echo "Valid Document";
} else {
	echo "Error: Not a valid Document.";
}
