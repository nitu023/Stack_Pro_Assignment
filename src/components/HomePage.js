import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Cards from "./Cards";
import Search from "./Search";
import Navbar from "./Navbar";

const API_KEY = "36009008cb1dccbcd63bc390b58b9291";
const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const BASE_URL_IMAGE = "https://api.themoviedb.org/3/search/movie";

export default function HomePage() {
  const [allMovieData, setAllMoviedata] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      await axios(BASE_URL_IMAGE, {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: pageNumber,
          include_adult: false,
          query: query,
        },
      })
        // console.log(result.data)
        .then((res) => {
          setAllMoviedata(res.data.results);
          setPageNumber(res.data.page);
          setTotalPages(res.data.total_pages);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchItems();
  }, [query]);

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
        console.log(res.data);
        setAllMoviedata(res.data.results);
        setPageNumber(res.data.page);
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => console.log(error));
  }, [pageNumber]);

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

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

    // console.log("hii")
    // console.log(id)
  };
  return (
    <div>
      <Navbar />
      <div className="w-25 mt-4 mb-4 offset-4">
        <Search getQuery={(q) => setQuery(q)} />
      </div>
      <div className="row offset-1">
        {allMovieData && allMovieData.length > 0
          ? allMovieData.map((items) => {
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
