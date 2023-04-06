
import axios from "axios";
const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {

  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString()
    }
  }
}
