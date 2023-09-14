"use client";
import CSSDocs from "../../components/Docs/CSSDocs/CSSDocs";
import HTMLDocs from "../../components/Docs/HTMLDocs/HTMLDocs";
import JavaScriptDocs from "../../components/Docs/JavaScriptDocs/JavaScriptDocs";
import ReactDocs from "../../components/Docs/ReactDocs/ReactDocs";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Docs = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch("docs.json")
      .then((res) => res.json())
      .then((data) => setDocs(data));
  }, []);
  return (
    <div>
      <Tabs>
        <TabList className="bg-gray-300  pt-3 text-center">
          {/* <h1 className="text-2xl py-3 font-medium uppercase ">
            Short Documentation Of --
          </h1> */}
          <Tab>HTML</Tab>
          <Tab></Tab>
          <Tab></Tab>
          <Tab>CSS</Tab>
          <Tab></Tab>
          <Tab></Tab>
          <Tab>JavaScript</Tab>
          <Tab></Tab>
          <Tab></Tab>
          <Tab>React</Tab>
          <Tab></Tab>
          <Tab></Tab>
          <Tab>C</Tab>
          <Tab></Tab>
          <Tab></Tab>
          <Tab>Python</Tab>
          <Tab></Tab>
          <Tab></Tab>
          <Tab>Java</Tab>
        </TabList>
        <TabPanel className="my-16 mx-0 lg:mx-20 ">
          <HTMLDocs />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel className="my-16 mx-0 lg:mx-20 ">
          <CSSDocs />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel className="my-16 mx-0 lg:mx-20 ">
          <JavaScriptDocs />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel className="my-16 mx-0 lg:mx-20 ">
          <ReactDocs />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Docs;
