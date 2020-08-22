
//factory function to fill planet object.
    var makePlanet= function(name,mass,distance,position){
        return {
            name:name,
            mass:mass,
            distance:distance,
            position:position
        };
    }
var sun= makePlanet("Sun",(1.989* Math.pow(10,30)),(150* Math.pow(10,6)), 'l');
     
var mercury= makePlanet("Mercury", (3.285* Math.pow(10,23)), (48* Math.pow(10,6)), 'l');
    
var venus= makePlanet("Venus", (4.867* Math.pow(10,24)), (261* Math.pow(10,6)), 'l');
   
var earth= makePlanet("Earth", (5.9722* Math.pow(10,24)), 0, 0);
   
var moon= makePlanet("Moon", (7.34767309* Math.pow(10,22)), 384400);
   
var mars= makePlanet("Mars", (6.39* Math.pow(10,23)), (54.6* Math.pow(10,6)), 'r');
   
var jupiter= makePlanet("Jupiter", (1.898* Math.pow(10,27)), (588* Math.pow(10,6)), 'r');
    
var saturn = makePlanet("Saturn", (5.683* Math.pow(10,26)), (1.2* Math.pow(10,9)), 'r');
    
var uranus=makePlanet("Uranus", (8.681* Math.pow(10,25)), (2.6* Math.pow(10,9)), 'r');
   
var neptune=makePlanet("Neptune", (1.024* Math.pow(10,26)), (4.3*Math.pow(10,9)), 'r');
   
var planets =[sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, moon];
//display planet is a function that given a planet object and an element's ID, use distance function to calculate the distance between the actual
//planet and the planet argument, then display the output string to a div and append it to the element's id.

function displayPlanet(actual, planet, $id) {    
    var $planet = $('<div></div>');
    $planet.text('The distance between ' + actual.name + ' and ' + planet.name + ', is: ' + (distance(actual, planet)/Math.pow(10,6)) 
    + ' million kilometers.' + ' Also ' + actual.name + ' mass equals ' + proportionality(actual, planet) + ' of ' + planet.name + ' mass.');
    $planet.css('fontSize', '20px').css('backgroundColor', 'black');          
    $planet.appendTo($id);
}
        

var distance= function(accPlanet,newPlanet){
    if((newPlanet.position === 'l' && accPlanet.position === 'l') || (accPlanet.position === 'r' && newPlanet.position === 'r')){
        return Math.abs(accPlanet.distance - newPlanet.distance);
    }
    else if((accPlanet.position === 'r' && newPlanet.position === "l") || (accPlanet.position === 'l' && newPlanet.position === 'r')){
        return accPlanet.distance + newPlanet.distance;
    }else if(accPlanet.position === 0){
        return newPlanet.distance;
    }else if(newPlanet.position === 0){
        return accPlanet.distance;
    }
};
//relative size is a function that display the proportionality between two planets
// and return the percentage between them;
  var proportionality= function (accPlanet,newPlanet){
      return ((accPlanet.mass/newPlanet.mass)*100).toFixed(4)+'%';
  };
