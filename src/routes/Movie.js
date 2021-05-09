import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import "./Movie.css";

//Finally IL build this up to slide style.

function Sw_data ({id=0, year=1990, title="", genres, poster="", summary="Not ready yet."}) {
    return (
    <div className="i_mox">
        <div className="i_fir">
            <img className="i_img" src={poster} alt="" />
            <div className="i_tox">
                <div className="i_tit">{title}</div>
                <ul className="i_gnr">{genres.map(gnr => (<p>- {gnr}</p>))}</ul>
                <span className="i_yr">{year}</span>
            </div>
        </div>
        <div className="i_sum">{summary.substr(0,190)}...</div>
        <div className="i_mr">more..</div>
    </div>
    );
}

Sw_data.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.array.isRequired,
    poster: PropTypes.string.isRequired
};

class Movie extends React.Component {
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
      <main className="Movie">
        {isLoading?
        <div id="i_lod">Loading...</div>:
        <div id="i_main">
          <div id="i_top">Today's Cinema</div>
          <div>
          {d_mov.map(mov => (
            <Link to={{
                pathname: `/more/${mov.id}`,
                state: {id:mov.id,
                    year:mov.year,
                    title:mov.title,
                    genres:mov.genres,
                    poster:mov.medium_cover_image,
                    summary:mov.summary}
            }}>
                <Sw_data key={mov.id}
                id={mov.id}
                year={mov.year}
                title={mov.title}
                genres={mov.genres.slice(0,5)}
                summary={mov.summary}
                poster={mov.medium_cover_image} />
            </Link>
          ))}
          </div>
        </div>
        }
      </main>
    );
  }
}

export default Movie;
