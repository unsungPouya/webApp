var div = document.getElementById('singers');

for (var i = 0; i < singers.length; i++) {
    let singer = singers[i];
    let item = document.createElement('div')
    for (var j = 0; j < singer.albums.length; j++) {
        let album = singer.albums[j]; // Access the j-th album

        var albumDiv = document.createElement('div');
        albumDiv.className = "album";

        let cover = document.createElement('img');
        cover.src = album.cover + ".jpg"; // Set the source of the image
        

        let title = document.createElement('h4');
        title.innerHTML = album.name; // Display song titles
        

        var captionDiv = document.createElement('div');
        captionDiv.className = "caption"

        var details = document.createElement('span');
        details.innerHTML = 'Artist: ' + singer.artist + "<br>" + ' Genre: ' + singer.gener;
        
        albumDiv.appendChild(cover);
        captionDiv.appendChild(details);

        item.appendChild(title);
        item.appendChild(albumDiv);
        item.appendChild(captionDiv);
    }
    div.appendChild(item);
}
// console.log(singer.albums[0].songs)

// function creatItems(dataItems){
//     let it = document.createElement('div');
//     it.className = "items";

//     let 
// }
console.log(album)