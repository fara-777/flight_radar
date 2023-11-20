import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const ListView = ({ openDetail }) => {
  const store = useSelector((store) => store.flightReducer);

  const [itemOffset, setItemOffset] = useState(0);

  //! PAGINATION VALUES
  // items per page
  const itemsPerPage = 10;
  // determine the last item to be shown
  const endOffset = itemOffset + itemsPerPage;
  // get the range of items for a specific page (e.g., items 20 - 30 for page 3)
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  // calculate the total number of pages
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

  // Triggered when clicking on pages
  const handlePageClick = (event) => {
    // calculate from which element the slicing will start
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((fly) => (
              <tr key={fly.id}>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lan}</td>
                <td>
                  <button
                    className="list-detail-btn"
                    onClick={() => openDetail(fly.id)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default ListView;
