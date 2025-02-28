import axios from "axios";
import "./main.css"
const form = document.getElementById("create-url-form");

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const urlInput = form.querySelector('input');
    const urlInputValue = urlInput.value;

    if(!urlInputValue) {
      throw new Error("No url provided")
    }

    console.log(urlInputValue)
    //
    // const result = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // }, {
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   }
    // });
    //
    // console.log(result)

  } catch (e) {
    console.error(e)
  }
})
