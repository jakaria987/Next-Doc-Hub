'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const SearchResults = () => {
  const router = useRouter();
  const { results } = router.query; // Get the search results from query parameters

  // Parse the JSON results if available
  const searchResults = results ? JSON.parse(results) : [];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>

      {searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {searchResults.map((item, index) => (
            <li key={index}>
              {/* You can customize the display of each search result as needed */}
              <div>
                <h3 className="text-xl font-semibold">
                  <a href={`/programmingDocs/${item._id}`} className="text-blue-600 hover:underline">
                    {item.language}
                  </a>
                </h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
