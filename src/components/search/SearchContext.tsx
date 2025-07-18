// Context for managing search term state across the app
import { createContext, useContext, useState, type ReactNode } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Provider component for search context
export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to use search context
// eslint-disable-next-line react-refresh/only-export-components
export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within SearchProvider");
  return context;
}

// Example usage in main.tsx (not part of this file)
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import App from "../../App";
//
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <SearchProvider>
//         <App />
//       </SearchProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
