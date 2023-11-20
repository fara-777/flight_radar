import axios from "axios";
import { useEffect, useState } from "react";
import { detailOptions } from "../../helper/constants";

const SideDetail = ({ detailId, setShowDetail }) => {
  const [detail, setDetail] = useState(null);

  // Fetches details of the aircraft with the given ID whenever the ID changes
  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail/?flight=${detailId}`,
        detailOptions
      )
      .then((res) => setDetail(res.data));
  }, [detailId]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close" onClick={() => setShowDetail(false)}>
          <span>X</span>
        </p>
        {!detail ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <h3>{detail.aircraft.model?.text}</h3>
            <h3>{detail.aircraft.model?.code}</h3>
            <p>Tail Number: {detail.aircraft?.registration}</p>
            <img src={detail?.aircraft?.images?.large?.[0]?.src} alt="" />
            <p>Airline: {detail.airline?.short}</p>
            <p>
              Departure:{" "}
              <a href={detail.airport.origin?.website}>
                {detail.airport.origin?.name}
              </a>
            </p>
            <p>
              Destination:{" "}
              <a href={detail.airport.destination?.website}>
                {detail.airport.destination?.name}
              </a>
            </p>
            <p>
              Status{" "}
              <span
                className="status"
                style={{ background: detail.status.icon }}
              >
                {detail.status.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
