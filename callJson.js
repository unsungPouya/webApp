var div = document.getElementById('music');

function cardCreator(cardData){
    let singer = cardData;
    let item = document.createElement('div');
    item.className = "item";
    for (var j = 0; j < singer.albums.length; j++) {
        let album = singer.albums[j]; // Access the j-th album

        var albumDiv = document.createElement('div');
        albumDiv.className = "album";

        let cover = document.createElement('img');
        cover.src = album.cover + ".jpg"; // Set the source of the image
        

        let title = document.createElement('h4');
        title.innerHTML = album.name; // Display song titles
        

        var captionDiv = document.createElement('div');
        captionDiv.className = "caption";

        var artistCap = document.createElement('span');
        artistCap.className = "arCp";
        artistCap.innerHTML = 'Artist: ' + singer.artist + "<br>" ;

        var genreCap = document.createElement('span');
        genreCap.className = "gCp";
        genreCap.innerHTML = ' Genre: ' + singer.genre;
        
        albumDiv.appendChild(cover);

        captionDiv.appendChild(artistCap);
        captionDiv.appendChild(genreCap);

        albumDiv.appendChild(captionDiv);
        
        item.appendChild(title);
        item.appendChild(albumDiv);

    }
    div.appendChild(item);
}
function fill(jsonData){
    for (let i = 0; i<= jsonData.length ;i++){
        cardCreator(jsonData[i]);
    }
}
fill(singers);


