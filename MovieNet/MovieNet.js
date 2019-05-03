var apiurl = "http://www.omdbapi.com/?apikey=d1fa16e7&"

function getInfoMovie(url, string) {
	return new Promise(function(resolve, reject){
		var request = new XMLHttpRequest();
		request.open('GET', url + string, true);
		request.onload = function() {
			var data = JSON.parse(this.response);
			if(request.status == 200){
				resolve(data)
			}else{
				reject(data)
			}
		}
		request.send();	
	})
	
}

function search(){
	var pelicula = document.getElementById("pelicula")
	var string = pelicula.value
	string = "t=" + string
	var p = getInfoMovie(apiurl, string)
	p.then((data)=>{
		console.log(data)
		document.getElementById("imgcarousel").src = data.Poster
		document.getElementById("plot").src = data.Plot
	})
}


