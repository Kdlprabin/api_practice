import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
function App() {
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=1")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const postData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        title: "Learn react",
        completed: false,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const putData = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/todos/1", {
        title: "Update Todo",
        completed: false,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const deleteData = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const allData = () => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=1"),
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=2"),
      ])
      .then(axios.spread((todo, posts) => console.log(posts)))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <div className="Btns">
        <Button as="button" onClick={getData} size="lg" variant="primary">
          Get
        </Button>
        <Button as="button" onClick={postData} size="lg" variant="success">
          Post
        </Button>
        <Button as="button" onClick={putData} size="lg" variant="warning">
          Put
        </Button>
        <Button as="button" onClick={deleteData} size="lg" variant="danger">
          Delete
        </Button>
        <Button
          as="button"
          onClick={allData}
          size="lg"
          variant="outline-primary"
        >
          ALL
        </Button>
      </div>
      <hr />
    </div>
  );
}

export default App;
