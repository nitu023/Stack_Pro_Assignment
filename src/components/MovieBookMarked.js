import React from "react";
import Navbar from "./Navbar";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieBookMarked() {
  let data = JSON.parse(window.localStorage.getItem("bookMarkedIdItems"));

  return (
    <div>
      <Navbar />
      <div className="row offset-1">
        {data && data.length > 0
          ? data.map((item) => {
              return (
                <div  key={item.id} className="card col-lg-5 col-md-6 col-sm-12 mb-2 bg-light ml-1 ">
                  <div className="shadow">
                    <div className="card-body text-center">
                      <img
                        src={IMAGE_BASE_URL + item.poster_path}
                        height="300px"
                        width="100%"
                        style={{ objectFit: "cover" }}
                        alt="food-pic"
                      ></img>
                      <div className="py-2 text-center">
                        <span className="card-title ">
                          {" "}
                          Title: {item.original_title}
                        </span>
                      </div>
                      <div className="card-title">
                        {" "}
                        Vote : {item.vote_average}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
