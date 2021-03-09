

function searchForAMovie() {
var api = 'https://api.themoviedb.org/3/search/movie?api_key=1d28a1c3b509529907815efec31f6ecb&language=en-US&query=';
var query = document.getElementById("search-input").value;

if(query.length >2 ) {
    var url = api + query;
console.log(url);
var json_obj = JSON.parse(Get(url));

// NO MATCH FOUND 
if(json_obj.results.length===0) {
    console.log("No match found");
    var input = document.getElementById("moviess");
    var creatsElement = document.createElement("option");
    creatsElement.value ="No match found";
    input.appendChild(creatsElement);

}



//ADD TO DROPDOWN LIST
for(var i = 0; i < 8; i++) {
        var input = document.getElementById("moviess");

        var creatsElement = document.createElement("option");
        var year = json_obj.results[i].release_date.split("-", 1);
        creatsElement.innerHTML = json_obj.results[i].vote_average + " Rating, " + year;
        creatsElement.value =json_obj.results[i].original_title;

        input.appendChild(creatsElement);
}
}
}

// CLEARS DROPDOWNLIST
function clearOptions() {
    var removeElement = [];
removeElement = document.getElementsByTagName("option");
var arraySize = removeElement.length;
for(var i = 0; i < arraySize; i++) {
    removeElement[0].remove();
}
}

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}