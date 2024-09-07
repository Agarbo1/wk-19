// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

// Your code here
app.get('/artists', (req, res) => {
  return res.json(getAllArtists())
});

app.get('artists/:artistId', (req, res) => {
  return res.json(getArtistByArtistId(req.params.artistId));
})

app.post('/artists', (req, res) => {
  return res.status(201).json(addArtist(req.body))
})

app.put('/artists/:artistId', (req, res) => {
  return res.json(editArtistByArtistId(req.params.artistId, req.body))
})

app.delete("/artist/:artistID", (req, res) => {
  deleteArtistByArtistId(req.params.artistID)

  return res.json({ message: "Successfully Deleted"})
})
// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
