import React from "react";

export default function Pagination(props) {
  return (
    <div>
      <div className="row py-2 ml-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {props.pageNo <= 1 ? (
              <li className="page-item disabled">
                <p className="page-link" tabIndex="-1">
                  {" "}
                  First
                </p>
              </li>
            ) : (
              <li className="page-item" onClick={() => props.handlePageChange(1)}>
                <p className="page-link">First</p>
              </li>
            )}
            {props.pageNo <= 1 ? (
              <li className="page-item disabled">
                <p className="page-link" tabIndex="-1">
                  Previous
                </p>
              </li>
            ) : (
              <li
                className="page-item"
                onClick={() => props.handlePageChange(props.pageNo - 1)}
              >
                <p className="page-link">Previous</p>
              </li>
            )}
            <li
              className="page-item active"
              onClick={() => props.handlePageChange(props.pageNo)}
            >
              <p className="page-link">{props.pageNo}</p>
            </li>
            {props.pageNo <= props.buttons - 1 ? (
              <li
                className="page-item"
                onClick={() => props.handlePageChange(props.pageNo + 1)}
              >
                <p className="page-link">{props.pageNo + 1}</p>
              </li>
            ) : null}
            {props.pageNo <= props.buttons - 2 ? (
              <li
                className="page-item"
                onClick={() => props.handlePageChange(props.pageNo + 2)}
              >
                <p className="page-link">{props.pageNo + 2}</p>
              </li>
            ) : null}
            {props.pageNo >= props.buttons ? (
              <li className="page-item disabled">
                <p
                  onClick={() => props.handlePageChange(props.pageNo + 1)}
                  className="page-link"
                >
                  Next
                </p>
              </li>
            ) : (
              <li className="page-item">
                <p
                  onClick={() => props.handlePageChange(props.pageNo + 1)}
                  className="page-link"
                >
                  Next
                </p>
              </li>
            )}
            {props.pageNo <= props.buttons &&
            props.pageNo >= props.buttons - 2 ? (
              <li className="page-item disabled">
                <p className="page-link">Last</p>
              </li>
            ) : (
              <li className="page-item">
                <p
                  onClick={() => props.handlePageChange(props.buttons - 2)}
                  className="page-link"
                >
                  Last
                </p>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
