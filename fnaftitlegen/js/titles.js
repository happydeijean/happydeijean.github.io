"use strict";

import data from '/fnaftitlegen/titles.json' assert {type: 'json'};

function returnTitles(){
	return data;
}
export{returnTitles}