import React from "react";
// Step1 Calling the component/function or similar to creating object of Class in C
import { Layout } from "./PropsComponentConcept/Layout";
import LayoutwithoutProps from "./PropsComponentConcept/Layout";
const App = () => {
  return (
    <>
      <h1> Hello from React Props Concept</h1>

      {/* Providing the parameter /attributes values  just like setting data in object  of the class in C*/}
      {/* Layout is just like a function define in other place but calling from the here */}
      {/* <Layout title="Madhu Sudan" name="Hare Krishan" userDefineClass="btn btn-primary"  /> */}
      <Layout
        title="Madhu Sudan"
        name="Hare Krishan"
        className="btn btn-primary"
        description="Madhu is a React web developer "
      >
        Any thing defined between tag /(component) is considered as children
      </Layout>
      <LayoutwithoutProps
        name="Hare Krishan"
        description=" React, React-Native, Graphql, Firebase, Nodejs, Express Mongodb, Sql. Mysql, C#,ASP.net Core......., Visual Studio......... "
      />
    </>
  );
};

export default App;
