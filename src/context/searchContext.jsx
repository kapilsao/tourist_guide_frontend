import React, { createContext, useState } from 'react';

// Create the context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <SearchContext.Provider value={{ searchHistory, setSearchHistory }}>
      {children}
    </SearchContext.Provider>
  );
};
