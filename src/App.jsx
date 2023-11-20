import { useEffect, useState } from "react";
import ListView from "./pages/list-view";
import MapView from "./pages/map-view";
import Header from "./components/header";
import { useDispatch } from "react-redux";
import { getFlight } from "./redux/actions";
import SideDetail from "./components/side-detail";

function App() {
  const [showView, setShowView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  // Fetches flights
  useEffect(() => {
    dispatch(getFlight());
  }, []);

  // Gets the id of the aircraft for which details will be shown
  const openDetail = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };

  return (
    <>
      {/* Header */}
      <Header />
      {/* SideDetail menu */}
      {showDetail && (
        <SideDetail detailId={detailId} setShowDetail={setShowDetail} />
      )}
      <div className="view-buttons">
        <button
          className={showView ? "active" : ""}
          onClick={() => setShowView(true)}
        >
          Map View
        </button>
        <button
          className={!showView ? "active" : ""}
          onClick={() => setShowView(false)}
        >
          List View
        </button>
      </div>

      {showView ? (
        <MapView openDetail={openDetail} setShowDetail={setShowDetail} />
      ) : (
        <ListView openDetail={openDetail} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
