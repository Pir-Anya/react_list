import React, { Component } from 'react'
var jsonData = require('data.json');

class jsonDataObject extends Component {

render(){
    

    function loadJSON(jsonfile, callback) {   

        var jsonObj = new XMLHttpRequest();
        jsonObj.overrideMimeType("application/json");
        jsonObj.open('GET', "data.json", true);
        jsonObj.onreadystatechange = function () {
              if (jsonObj.readyState == 4 && jsonObj.status == "200") {
                callback(jsonObj.responseText);
              }
        };
        jsonObj.send(null);  
     }

    function load() {

        loadJSON(jsonData, function(response) {
            var data = JSON.parse(response);
            console.log(data);
        });
    }

    return (
	<h1>
      load();
	 </h1> 
	);  
}

}

export default jsonDataObject