import React from "react";
import Layout from "./layout";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Aside from "./aside";

const Example: React.FC = () => {
  return (
    <div>
      <div>
        <h1>demo1</h1>
        <div>
          <Layout
            className="hi"
            style={{ height: "300px", background: "red", width: "500px" }}
          >
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </div>
      </div>
      <div>
        <h1>demo2</h1>
        <div>
          <Layout
            className="hi"
            style={{ height: "300px", background: "red", width: "500px" }}
          >
            <Header>header</Header>
            <Layout>
              <Aside>aside</Aside>
              <Content>content</Content>
            </Layout>
            <Footer>footer</Footer>
          </Layout>
        </div>
      </div>
      <div>
        <h1>demo3</h1>
        <div>
          <Layout
            className="hi"
            style={{ height: "300px", background: "red", width: "500px" }}
          >
            <Header>header</Header>
            <Layout>
              <Content>content</Content>
              <Aside>aside</Aside>
            </Layout>
            <Footer>footer</Footer>
          </Layout>
        </div>
      </div>
      <div>
        <h1>demo4</h1>
        <div>
          <Layout
            className="hi"
            style={{ height: "300px", background: "red", width: "500px" }}
          >
            <Aside>aside</Aside>
            <Layout>
              <Header>header</Header>
              <Content>content</Content>
              <Footer>footer</Footer>
            </Layout>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Example;
