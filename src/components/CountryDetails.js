import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState([]);
  const [countryBorders, setCountryBorders] = useState([]);

  const { alpha3Code } = useParams();

  const getDetails = async () => {
    const response = await axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
    );
    console.log(response);
    setCountryDetails(response.data);
    setCountryBorders(response.data.borders);
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line
  }, [alpha3Code]);

  if (countryDetails.length <= 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="col-7">
        <h1>
          {countryDetails.name.common} ({countryDetails.alpha3Code})
        </h1>
        <h2>{countryDetails.name.official}</h2>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital:</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area:</td>
              <td>
                {countryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders:</td>
              <td>
                <ul>
                  {countryBorders.map((eachBorder, index) => {
                    return (
                      <li style={{ listStyle: 'none' }}>
                        <Link to={`/${eachBorder}`} key={index + eachBorder}>
                          {eachBorder}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
