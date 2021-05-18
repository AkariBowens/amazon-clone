import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-a4b9f.cloudfunctions.net/api",
  // "http://localhost:5001/clone-a4b9f/us-central1/api",
});

export default instance;
