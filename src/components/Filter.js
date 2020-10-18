import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Cards from "./Cards";
import Navbar from "./Navbar";

const BASE_URL = "https://api.themoviedb.org/3/movie/upcoming";
const API_KEY = "36009008cb1dccbcd63bc390b58b9291";

export default function Filter() {
  const [allUpcomingMovieData, setAllUpcomingMoviedata] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(BASE_URL, {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: pageNumber,
        },
      })
      .then((res) => {
        setPageNumber(res.data.page);
        setAllUpcomingMoviedata(res.data.results);
        setTotalPages(res.data.total_pages);
      });
  }, [pageNumber]);
  const handleBookMarked = (item) => {
    let BookMarkedData = [];
    var data = JSON.parse(localStorage.getItem("bookMarkedIdItems"));
    if (data === null) {
    } else {
      BookMarkedData = [...data];
    }
    let isAvailable = BookMarkedData.filter((i) => i.id === item.id);
    console.log(isAvailable);
    if (isAvailable.length === 0) {
      BookMarkedData.push(item);
      console.log(BookMarkedData);
      window.localStorage.setItem(
        "bookMarkedIdItems",
        JSON.stringify(BookMarkedData)
      );
      console.log(data, item);
    } else {
      alert("Already Bookmarked");
    }
  };
  const handlePageChange = (page) => {
    setPageNumber(page);
  };
  const handleSortByYear = () => {
    console.log("hii");
    let temp = [...allUpcomingMovieData];
    temp.sort((a, b) => {
      return (
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      );
    });
    console.log(temp);
    setAllUpcomingMoviedata(temp);
  };
  const handleSortByAlphabate = () => {
    let temp = [...allUpcomingMovieData];
    temp.sort(function (a, b) {
      if (a.original_title < b.original_title) {
        return -1;
      }
      if (a.original_title > b.original_title) {
        return 1;
      }
      return 0;
    });
    console.log(temp);
    setAllUpcomingMoviedata(temp);
  };
  return (
    <div>
      <Navbar />
      <button
        type="button"
        className="btn btn-primary mt-5 offset-4"
        onClick={handleSortByYear}
      >
        Sort By Year
      </button>
      <button
        type="button"
        className="btn btn-primary mt-5 offset-1"
        onClick={handleSortByAlphabate}
      >
        Sort By Name
      </button>
      <div className="row offset-1 mt-3">
        {allUpcomingMovieData && allUpcomingMovieData.length > 0
          ? allUpcomingMovieData.map((items) => {
              return (
                <div className="card col-lg-5 col-md-6 col-sm-12 mb-2 bg-light ml-1 ">
                  <Cards
                    key={items.id}
                    data={items}
                    handleBookMarked={() => handleBookMarked(items)}
                  />
                </div>
              );
            })
          : null}
        <Pagination
          pageNo={pageNumber}
          buttons={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
