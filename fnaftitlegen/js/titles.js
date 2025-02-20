"use strict";

/*
old method for getting titles
import data from '/fnaftitlegen/titles.json' assert {type: 'json'};
*/

async function returnTitles(){
	return await fetch("https://raw.githubusercontent.com/happydeijean/fnaftitlegenmonika/main/titles.json")
	.then(response => response.json())
	.then(data => {
		return data;
	});
}

export{returnTitles}
