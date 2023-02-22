const { nanoid } = require('nanoid');

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  addAlbum({ name, year, performer }) {
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newAlbum = {
      id,
      name,
      year,
      performer,
      insertedAt,
      updatedAt,
    };

    this._albums.push(newAlbum);

    const isSuccess =
      this._albums.filter((album) => album.id === id).length > 0;

    if (!isSuccess) {
      throw new Error('Gagal menambahkan lagu. Coba lagi!');
    }

    return id;
  }

  getAlbums() {
    return this._albums;
  }

  getAlbumById(id) {
    const album = this._albums.filter((n) => n.id === id)[0];

    if (!album) {
      throw new Error('Lagu tidak ditemukan');
    }

    return album;
  }

  editAlbumById(id, { name, year, performer }) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new Error('Gagal memperbarui lagu. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._albums[index] = {
      ...this._albums[index],
      name,
      year,
      performer,
      updatedAt,
    };
  }

  deleteAlbumById(id) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new Error('Lagu gagal dihapus. Id tidak ditemukan');
    }

    this._albums.splice(index, 1);
  }
}

module.exports = AlbumsService;
