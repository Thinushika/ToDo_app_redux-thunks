import { Col, Layout, Radio, Row, Space } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAsync } from "../redux/reducers/thunks";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, errrorMessage } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    dispatch(loadUserAsync());
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <h1 style={{ color: "#fff", textAlign: "center" }}>User Listing</h1>
        </Header>

        <Content>
          {/* use antd loading icon */}
          {isLoading && <h3>Loading...</h3>}
          {/* use antd alert */}
          {errrorMessage && <h3>{errrorMessage}</h3>}

          {/* use antd data display */}
          
          <Row>
            <Col span={12} offset={6}>
            
            {todos &&
            todos.map((todo) => 
                <Radio key={todo.userId} >{todo.title}</Radio>
            )}
                
            
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default UsersPage;
