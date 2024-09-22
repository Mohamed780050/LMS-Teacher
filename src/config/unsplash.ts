import axios from "axios";

async function getPhotos() {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${
        import.meta.env.VITE_UNSPLASH_ACCESS_KEY
      }&count=8&&content_filter=high&orientation=landscape`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default { getPhotos };
