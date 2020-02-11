<?php

$xml = new DOMDocument;

$xml->load('myxml.xml');

if( $xml->validate() ){
	echo "It is a validated document.";
} else {
	echo "Error: Document is not vaildated.";
}