import React from "react";
import "./More.css";

function Sw_data(param) {
    const {id,year,title,genres,poster,summary}=param.param;
    return (
        <div className="More" id="i_abt">
        <div className="i_mox">
            <div className="i_fir">
                <img className="i_img" src={poster} alt="" />
                <div className="i_tox">
                    <div className="i_tit">{title}</div>
                    <ul className="i_gnr">{genres.map(gnr => (<p>- {gnr}</p>))}</ul>
                    <span className="i_yr">{year}</span>
                </div>
            </div>
            <div className="i_sum">{summary}</div>
        </div>
    </div>
    );
}

class More extends React.Component {
    render() {
        const {location, history}=this.props;
        if(location.state === undefined) {
            history.push("/");
            return null;
        }
        return <Sw_data param={this.props.location.state} />
    }
}

export default More;