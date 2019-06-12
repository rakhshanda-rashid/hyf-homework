let songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
  ];
  
  // Add songs to the songDatabase array
  function addSongToDatabase(song) {
    songDatabase.push(song);
  }
  
  addSongToDatabase({ songId: 5, title: "i dag er dine fødselsdag hurah hurah!!!", artist: "Halle" });
  addSongToDatabase({ songId: 6, title: "Komme ind Komme ind", artist: "pia" });
  console.log(songDatabase);
  
  //Searching for a song
  function getSongByTitle(title1) {
    for (let i = 0; i < songDatabase.length; i++) {
      if (songDatabase[i].title === title1) 
      {
        console.log(songDatabase[i]);
        return;
      } 
    }
  }
  let searchedSong1 = getSongByTitle('Blacker than black');
  console.log(searchedSong1);
  let searchedSong2 = getSongByTitle('come on come on');
  console.log(searchedSong2);
  let searchedSong3 = getSongByTitle('come on');
  console.log(searchedSong3);
  //add song to my playlist
  let myPlaylist = [];
  function addSong(song) {
    myPlaylist.push(song);
  }
  
  //Create our own playlist
  
  function addSongToMyPlaylist(title) {
    console.log(title);
    let newSong =getSongByTitle(title); // Using getSongByTitle(), add the song to myPlaylist
    if(getSongByTitle === title)
    {
      addSong(newSong);
    }else{
      addSong(title);
    }
  }
  addSongToMyPlaylist('3 nails in wood');
  addSongToMyPlaylist('come in a row');
  console.log(myPlaylist);