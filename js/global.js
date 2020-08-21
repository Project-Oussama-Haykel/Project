(document).ready(function(){
    //factory function to do the array of object
    var makePlanet= function(name,mass,distance,position){
        return {
            name:name,
            mass:mass,
            distance:distance,
            position:position
        };
    }
var sun= makePlanet("sun",(1.989* Math.pow(10,30)),(150* Math.pow(10,6)), 'l');
     
var mercury= makePlanet("mercury", (3,285* Math.pow(10,23)), (48* Math.pow(10,6)), 'l');
    
var venus= makePlanet("venus", (4,867* Math.pow(10,24)), (4,867* Math.pow(10,24)), 'l');
   
var earth= makePlanet("earth", (5.9722* Math.pow(10,24)), 0, );
   
var moon= makePlanet("moon", (7.34767309* Math.pow(10,22)), 384400 );
   
var mars= makePlanet("mars", (6,39* Math.pow(10,23)), (54.6* Math.pow(10,6)), 'r');
   
var jupiter= makePlanet("jupiter", (1,898* Math.pow(10,27)), (588*+ Math.pow(10,6)), 'r');
    
var saturne = makePlanet("saturn", (5,683* Math.pow(10,26)), (1.2* Math.pow(10,9)), 'r');
    
var uranus=makePlanet("uranus", (8,681* Math.pow(10,25)), (2.6* Math.pow(10,9)), 'r');
   
var neptune=makePlanet("neptun", (1,024* Math.pow(10,26)), (4.3*Math.pow(10,9)), 'r');
   
var planets =[sun, mercury, venus, earth, mars, jupiter, saturne, uranus, neptune, moon];
//display planet distance is a function that given an array of object of planet and an element's ID,it loop through
//and return a distance between planet 
function displayplanet(planet, $id) {    
            var $planet = $('<span></span>');
            $planet.text('the distance between the actual planet and '+ planet.name+' is: '+ distance());            
            $planet.appendTo($id);
        }
        
};
var distance= function(accPlanet,newPlanet){
    if(newPlanet.position==='l'&&accPlanet.position==='l'){
        return Math.abs(accPlanet.distance-newPlanet.distance);
    }else if(accPlanet.position==='r'&&newPlanet.position==='r'){
        return Math.abs(accPlanet.distance-newPlanet.distance);
    }else if(accPlanet.position==='r'&&newPlanet.position==="l"){
        return accPlanet.distance+newPlanet.distance;
    }else if(accPlanet.position==='l'&&newPlanet.position==='r'){
        return accPlanet.distance+newPlanet.distance;
    }else if(accPlanet.position===undefined){
        return newPlanet.distance;
    }else if(newPlanet===undefined){
        return accPlanet.distance;
    }
};
//relative size is a function that display the proportionality between two planets
// and return the percentage between there;
  var proportionality= function (accPlanet,newPlanet){
      return ((accPlanet.mass/newPlanet.mass)*100).toFixed(2)+'%';
  };
})