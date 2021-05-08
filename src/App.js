import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

//Finally IL build this up to slide style.

class Sw_data extends React.Component {
  state = {
  }
  props = {
    id: 0,
    year: 1990,
    title: "",
    poster: "",
    summary: "Not ready yet."
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="i_mox">
        <div className="i_fir">
          <img className="i_img" src={this.props.poster} alt="" />
          <div className="i_tox">
            <div className="i_tit">{this.props.title}</div>
            <ul className="i_gnr">{this.props.genres.map(gnr => (<p>- {gnr}</p>))}</ul>
            <span className="i_yr">{this.props.year}</span>
          </div>
        </div>
        <div className="i_sum">{this.props.summary.substr(0,190)}...</div>
        <div className="i_mr">more..</div>
      </div>
    );
  }
}

Sw_data.propTypes={
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired
};

class App extends React.Component {
  state = {
    d_mov: [],
    isLoading: true
  }
  async getData() {
    //const {data: {data: {movies}}} = {...} //don't understand.
    const d_mov=(await axios("https://yts-proxy.now.sh/list_movies.json")).data.data.movies;
    this.setState({d_mov,isLoading:false}); //stop confused. It's just state:variable (when same same).
  }
  componentDidMount() {
    console.log("rendering finished.");
    this.getData();
  }
  componentDidUpdate() {
    console.log("updated.");
  }
  render() {
    const {d_mov, isLoading} = this.state;
    console.log("rendering...");
    return (
      <main>
        {isLoading?
        <div id="i_lod">Loading...</div>:
        <div id="i_main">
          <div id="i_top">Today's Cinema</div>
          <div>
          {d_mov.map(mov => (
            <Sw_data key={mov.id}
            id={mov.id}
            year={mov.year}
            title={mov.title}
            genres={mov.genres}
            summary={mov.summary}
            poster={mov.medium_cover_image} />
          ))}
          </div>
          <div id="i_bot">This page is cloned into Nomad Coder's.</div>
        </div>
        }
      </main>
    );
  }
}

export default App;
