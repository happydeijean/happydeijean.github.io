"use strict";

import data from '/titles.json' assert {type: 'json'};

function returnTitles(){
	return data;
}
export{returnTitles}