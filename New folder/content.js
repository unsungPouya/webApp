var div = document.getElementById('singers');

for (var i = 0; i < singers.length; i++) {
    let singer = singers[i];
    let item = document.createElement('div');
    for (var j = 0; j < singer.albums.length; j++) {
        let album = singer.albums[j]; // Access the j-th album

        // Create a div for each album
        var albumDiv = document.createElement('div');
        albumDiv.className = 'album';

        // Add album cover image
        let cover = document.createElement('img');
        cover.src = album.cover + ".jpg"; // Set the source of the image
        albumDiv.appendChild(cover);

        // Iterate over each song title and create a div for it
        album.songs.title.forEach(function(titleText) {
            let titleDiv = document.createElement('div');
            titleDiv.className = 'song-title';

            // Create a heading for the song title
            let title = document.createElement('h4');
            title.textContent = titleText; // Use textContent instead of innerHTML
            titleDiv.appendChild(title);

            // Create a span for the artist and genre details
            var details = document.createElement('span');
            details.innerHTML = 'Artist: ' + singer.artist + "<br>" + 'Genre: ' + singer.genre; // Corrected 'gener' to 'genre'
            titleDiv.appendChild(details);

            // Append the song title div to the album div
            albumDiv.appendChild(titleDiv);
        });

        // Append the album div to the item div
        item.appendChild(albumDiv);
    }
    // Append the item div to the main container
    div.appendChild(item);
}
