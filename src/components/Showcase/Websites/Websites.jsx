"use client"
import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Card = ({ item }) => (
  <div className="p-4">
    <a href={item.link} target='blank'>
      <div className=" rounded-sm py-4 px-3 shadow-sm bg-gray-50 group hover:text-blue-600">
        <img src={item.image_url} alt={item.title} className="w-full h-52 border object-cover rounded shadow-sm" />
        <div >
          <div className='group hover:text-blue-600'>
            <div className='inline-flex items-center'>
              <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
              <FiArrowUpRight className='text-xl transition duration-300 transform translate-x-0 group-hover:translate-x-1' />
            </div>
            <h4 className="mt-1 text-sm group-hover:text-blue-600 text-gray-500">{item.category}</h4>
          </div>
        </div>
      </div>
    </a>
  </div>
);

const Websites = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [visibleData, setVisibleData] = useState({});
  const itemsPerLoad = 6;

  useEffect(() => {
    fetch("websites.json")
      .then(res => res.json())
      .then(datas => {
        setData(datas);
        const initialVisibleData = {};
        categories.forEach(category => {
          initialVisibleData[category] = datas
            .filter(item => category === 'All' || item.category === category)
            .slice(0, itemsPerLoad);
        });
        setVisibleData(initialVisibleData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const categories = ['All', 'Finance', 'Tech', 'News', 'Ecommerce', 'Travel', 'Creative', 'Entertainment', 'Marketing'];

  const handleShowMore = (category) => {
    const startIndex = visibleData[category].length;
    const endIndex = startIndex + itemsPerLoad;
    const newVisibleData = data
      .filter(item => category === 'All' || item.category === category)
      .slice(startIndex, endIndex);
    setVisibleData(prevData => ({
      ...prevData,
      [category]: [...prevData[category], ...newVisibleData]
    }));
  };

  return (
    <div className="md:p-8 mt-20">
      <h1 className='text-3xl text-center mb-8 font-semibold'>
        <span className=' bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent'>
          Explore numerous stunning <br />websites created using Next.js by Vercel
        </span>
      </h1>

      <Tabs>
        <TabList className="grid grid-cols-3 md:grid-cols-10 gap-2 md:px-10 md:ml-24 px-5">
          {categories.map(category => (
            <Tab
              key={category}
              onClick={() => setActiveTab(category)}
              className={`cursor-pointer bg-black text-white md:px-4 px-3 py-2 rounded ${activeTab === category ? 'font-semibold' : ''}`}
            >
              {category}
            </Tab>
          ))}
        </TabList>
        {categories.map(category => (
          <TabPanel key={category}>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:px-28">
              {visibleData[category]?.map(item => (
                <Card key={item.title} item={item} />
              ))}
            </div>
            {activeTab === 'All' && visibleData[category]?.length < data.filter(item => category === 'All' || item.category === category).length && (
              <button
                className="mt-4 md:ml-[670px] ml-36 px-3 font-semibold py-3 border bg-white text-black rounded hover:bg-gray-100"
                onClick={() => handleShowMore(category)}
              >
                Load More
              </button>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Websites;
