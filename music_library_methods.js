var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
  for (var playListKey in this.playlists) {
    console.log(this.playlists[playListKey].id + ": " + this.playlists[playListKey].name + " - " + this.playlists[playListKey].tracks.length + " tracks");
  }
 },
  printTracks: function () {
  for (var trackKey in this.tracks) {
    console.log(this.tracks[trackKey].id + ": " + this.tracks[trackKey].name + " by " +
      this.tracks[trackKey].artist + " (" + this.tracks[trackKey].album + ")")
  }
 },
  printPlaylist: function (playlistId) {
  for (var playListKey in this.playlists) {
    console.log(this.playlists[playListKey].id + ": " + this.playlists[playListKey].name + " - " +
      this.playlists[playListKey].tracks.length + " tracks")
    for (var i = 0; i < this.playlists[playListKey].tracks.length; i++) {
      console.log(this.tracks[this.playlists[playListKey].tracks[i]].id + ": " +
        this.tracks[this.playlists[playListKey].tracks[i]].name + " by " + this.tracks[this.playlists[playListKey].tracks[i]].artist +
        " (" + this.tracks[this.playlists[playListKey].tracks[i]].album + ")")
    }
    console.log("\n");
   }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
 },
  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
 },
  addTrack: function (name, artist, album) {
  var newId = this.uid();
  this.tracks[newId] = {'id': newId, 'name': name, 'artist': artist, 'album': album};
 },
  addPlaylist: function (name) {
  var newId = this.uid();
  this.playlists[newId] = {'id': newId, 'name': name, 'tracks': []}
 },
}
