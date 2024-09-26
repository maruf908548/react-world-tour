import CountryData from "../CountryData/CountryData";

const CountryDetail = ({
  country,
  handleVisitedCountry,
  handleVisitedFlags,
}) => {
  return (
    <div>
      <h4>Country Details: </h4>
      <hr />
      <CountryData
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
        country={country}
      ></CountryData>
    </div>
  );
};

export default CountryDetail;
