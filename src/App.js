import React from "react";
import axios from "axios";

class Sw_data extends React.Component {
  state = {
  }
  props = {
    id: 0,
    title: "",
    poster: null
  }
  render() {
    return (
      <h4>{this.props.title}</h4>
    );
  }
}

class App extends React.Component {
  state = {
    d_mov: [],
    isLoading: true
  }
  async getData() {
    //const {data: {data: {movies}}} = {...} //don't understand.
    const d_mov=(await axios("https://yts-proxy.now.sh/list_movies.json")).data.data.movies;
    this.setState({d_mov,isLoading:false}); //stop confused. It's just state:variable (when same same).
    console.log(d_mov);
  }
  componentDidMount() {
    console.log("rendering finished.");
    this.getData();
  }
  componentDidUpdate() {
    console.log("updated.");
  }
  render() {
    console.log("rendering...");
    const {d_mov, isLoading} = this.state;
    return (
      <main>
      <div>{isLoading? "Loading..":d_mov.map(mov => (
        <Sw_data key={mov.id} id={mov.id} title={mov.title} poster={mov.medium_cover_image} />
      ))}</div>
      </main>
    );
  }
}

export default App;
