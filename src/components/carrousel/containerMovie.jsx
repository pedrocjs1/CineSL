import React, { useState, useEffect } from "react";
import "../../estilos/carrousel.css";
import { getPopularMovies, searchMovies } from "../../data/httpClient";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

function ContainerMovie({ searchV = "" }) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filterSearch = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchV.toLowerCase())
  );

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    if (searchV) {
      setLoading(true);
      searchMovies(searchV, currentPage)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.error("Error al buscar películas", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      getPopularMovies(currentPage)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.error("Error al traer las películas populares", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchV, currentPage]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#ffffff" size={150} />
      </div>
    );
  }
  if (error) return <div>Error al cargar las películas: {error.message}</div>;

  return (
    <div className="containeraes">
      <h1 className="h1pub text-center">Películas populares</h1>
      <ReactPaginate
        previousLabel={<FaArrowLeft />}
        nextLabel={<FaArrowRight />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage - 1}
      />
      <div className="row">
        {filterSearch.map((movies) => {
          return (
            <div
              key={movies.id}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12  marcoPelis d-flex flex-column align-items-center"
            >
              <img
                className="peli img-fluid"
                src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
                alt={`${movies.title}`}
              ></img>
              <p className="d-flex justify-content-center pp">{movies.title}</p>
            </div>
          );
        })}
        <ReactPaginate
          previousLabel={<FaArrowLeft />}
          nextLabel={<FaArrowRight />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
}
export default ContainerMovie;
