const library = {
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
                  printPlaylists: function() {
                         for (const playlistId in this.playlists) {
                                const playlist = this.playlists[playlistId];
                                console.log(`${playlist.id}: ${playlist.name} — ${playlist.tracks.length} tracks`);
                         }
                  },
                  printTracks: function() {
                         for (const trackId in this.tracks) {
                                const track = this.tracks[trackId];
                                console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
                         }
                  },
                  printPlaylist:  function(playlistId) {
                         const playlist = this.playlists[playlistId];
                         console.log(`${playlist.id}: ${playlist.name} — ${playlist.tracks.length} tracks`);
                         for (const trackId of playlist.tracks) {
                                const track = this.tracks[trackId];
                                console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
                         }
                  },
                  addTrackToPlaylist: function(trackId, playlistId) {
                         const trackToAdd = this.tracks[trackId];
                         const playlist = this.playlists[playlistId];
                         console.log(`Adding ${trackId} to ${playlist.name}`);
                         playlist.tracks.push(trackId);
                         console.log(playlist);
                     },
                     generateUid: function() {
                            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                     },
                     addTrack: function(name, artist, album) {
                            const trackToAdd = {};
                            trackToAdd.id = this.generateUid();
                            trackToAdd[name] = name;
                            trackToAdd[artist] = artist;
                            trackToAdd[album] = album;
                            this.tracks = {...this.tracks, [trackToAdd.id] : trackToAdd };
                            console.log(`Added ${trackToAdd.id}: ${trackToAdd[name]} by ${trackToAdd[artist]} (${trackToAdd[album]}) to library`);
                     },
                     addPlaylist: function(name) {
                            const playlistToAdd = {};
                            playlistToAdd.id = this.generateUid();
                            playlistToAdd[name] = name;
                            this.playlists = {...this.playlists, [playlistToAdd.id] : playlistToAdd};
                            console.log(`Added ${playlistToAdd.id}: ${playlistToAdd[name]} to library`);
                     }
              };

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};

library.printPlaylists();
console.log("----");
library.printTracks();
console.log("----");
library.printPlaylist("p01");
console.log("----");
library.printPlaylist("p02");
console.log("----");
library.addTrackToPlaylist("t03", "p01");
console.log("----");
library.addTrackToPlaylist("t01", "p02");
console.log("----");
library.addTrack("Grand Designs", "Rush", "Power Windows");
console.log("----");
library.addPlaylist("Renaissance Music");
console.log("----");