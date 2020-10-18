import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Cards(props) {
  return (
    <div>
      <div className="shadow">
        <div className="card-body text-center">
          <img
            src={IMAGE_BASE_URL + props.data.poster_path}
            height="300px"
            width="100%"
            style={{ objectFit: "cover" }}
            alt="food-pic"
          ></img>
          <div className="py-2 text-center">
            <span className="card-title ">
              {" "}
              Title: {props.data.original_title}
            </span>
          </div>
          <div className="card-title"> Vote : {props.data.vote_average}</div>
          <div className="card-title"> Year : {props.data.release_date}</div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={props.handleBookMarked}
          >
            Add To bookmarked
          </button>
        </div>
      </div>
    </div>
  );
}
