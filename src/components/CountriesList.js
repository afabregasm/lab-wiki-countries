import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [listOfCountries, setListOfCountries] = useState([]);

  const getCountries = async () => {
    const response = await axios.get(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    setListOfCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  if (listOfCountries.length <= 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {listOfCountries.map((eachCountry, index) => {
                return (
                  <div
                    key={index + eachCountry.alpha3Code}
                    className="list-group-item list-group-item-action"
                  >
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                      alt={eachCountry.name.common}
                    />
                    <Link to={`${eachCountry.alpha3Code}`}>
                      {eachCountry.name.official}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
