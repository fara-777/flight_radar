export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "37.309563",
    bl_lng: "-7.716704",
    tr_lat: "66.406357",
    tr_lng: "47.629620",
    limit: "1000",
  },
  headers: {
    "X-RapidAPI-Key": "f576273367msh2c7c39b4584137ap1384ffjsn79ed6dc0e38f",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  headers: {
    "X-RapidAPI-Key": "f576273367msh2c7c39b4584137ap1384ffjsn79ed6dc0e38f",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
