var data;

function bgChange(x)
{
    var imgs = ['images/431.png', 'images/440.png', 'images/441.png', 'images/442.png'];
    document.getElementById("freddy").src = imgs[x];
}

function bgRand()
{
    var x=Math.floor(Math.random() * 100)
    switch (x)
    {
        case 99:
            bgChange(3);
            break;
        case 98:
            bgChange(2);
            break;
        case 97:
            bgChange(1);
            break;
    }
    if (x < 97)
    {
        bgChange(0);
    }
}
  
function genTitle()
{
    var grammar = tracery.createGrammar(data);
    var s = grammar.flatten("#origin#");
    if(s=="((origin))")
    {
        document.getElementById("gen").innerHTML = "Five Nights at Fetch Error";
    }else{
        document.getElementById("gen").innerHTML = s;
    }
    
}

function setData(input){
	data=input;
}