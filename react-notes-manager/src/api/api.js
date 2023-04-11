import axios from "axios";
const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {

  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static async fetchById(id) {
    return this.formatId((await axios.get(`${BASE_URL}/${id}`)).data);
  }

  //! url => localhost:3200/note1

  static async create(note) {
    return this.formatId((await axios.post(`${BASE_URL}`, note)).data);
  }

  static async update(note) {
    return this.formatId((await axios.put(`${BASE_URL}/${note.id}`, note)).data);
  }

  //! url => localhost:3200/notes/1, data => {id: 1, title: "Note 1", content: "Content 1"}

  static async delete(id) {
    return this.formatId((await axios.delete(`${BASE_URL}/${id}`)).data);
  }

  //! url => localhost:3200/notes/1

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString()
    }
  }
}
