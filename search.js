function fill(jsonData){
	music.innerHTML = "";

	for(el of jsonData){
	  cardCreator(el);
	}
}
searchBar.onkeyup = function(){

	var searched = singers.filter(el => el.artist.toLowerCase().indexOf ( this.value.toLowerCase() ) !=-1)
	fill(searched);

}
