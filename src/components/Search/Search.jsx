import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pro, setPro] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch programming data when the component mounts
    fetch("/api/programming")
      .then(res => res.json())
      .then(data => setPro(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    // You can search within the 'pro' data based on the 'searchTerm'
    const filteredResults = pro.filter(item =>
      item.language.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the searchResults state with the filtered results
    setSearchResults(filteredResults);
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Documentation..."
          className="input input-sm invisible lg:visible focus:outline-none bg-base-200 w-3/5 max-w-xs"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();

            }
          }}
        />
        <button
          className=""
          onClick={handleSearch}

        >
          Search
        </button>
      </div>

      {/* Display search results */}
      {/* <div className="mt-4">
        {searchResults.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
            <ul>
              {searchResults.map((result) => (
                <li key={result._id}>
                  <Link href={`/programmingDocs/${result._id}`}>
                    <a className="text-blue-600 hover:underline">{result.language}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {searchResults.length === 0 && (
          <p>No results found.</p>
        )}
      </div> */}
    </div>
  );
};

export default Search;
