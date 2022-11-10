import React, { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Select place (any)');
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState('Move In Date (any)');
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ['Select place (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);

  const isDefault = (str) => {
    return str.split(' ').includes('(any)');
  };
  const handleSearch = (searchText) => {
     const searchItems = houses.filter((house) => {
      if (house.country.toLowerCase().includes(searchText.toLowerCase()) || house.type.toLowerCase().includes(searchText.toLowerCase())) {
        return house;
      }
    })
    
    setTimeout(() => {
      return (
        searchItems.length < 1 ? setHouses([]) : setHouses(searchItems),
        setLoading(false)
      );
    }, 1000);
  }

  const handleClick = () => {
    setLoading(true);
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);
    const selectedDate = new Date(date);

    // Filter Property
    const filterHousesAsProperty = !isDefault(property) ? houses.filter((house) => {
      if (house.type === property) {
        return house;
      }
    }) : houses;

    // Filter Country
    const filterHousesAsCountry = !isDefault(country) ? filterHousesAsProperty.filter((house) => {
      if (house.country === country) {
        return house;
      }
    }) : filterHousesAsProperty;

    // Filter Price Range
    const filterHousesAsPrice = !isDefault(price) ? filterHousesAsCountry.filter((house) => {
      const housePrice = parseInt(house.price);
      if (housePrice >= minPrice &&
        housePrice <= maxPrice) {
        return house;
      }
    }) : filterHousesAsCountry;

    // Fliter Date
    const newHouses = !isDefault(date) ? filterHousesAsPrice.filter((house) => {
      const actualDate = new Date(house.date);
      if (actualDate.getTime() >= selectedDate.getTime()) {
        return house;
      }
    }) : filterHousesAsPrice;

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        date,
        setDate,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
        isDefault,
        handleSearch
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
