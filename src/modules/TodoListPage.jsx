import { Alert, Card, Col, Layout, Radio, Row, Space, Spin } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodoAsync } from "../redux/reducers/thunks";

const TodoListPage = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, errrorMessage } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    dispatch(loadTodoAsync());
  }, []);

  return (
    <>
      <Layout>
        <Header title="ToDo app" 
        style={{ 
          backgroundColor: '#222', 
          height: 150, 
          display: 'grid', 
          justifyContent: 'center' }}>
          <h1
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: 30
            }}
          >
            To Do List
          </h1>
        </Header>

        <Content
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #eecda3 , #ef629f)",
          }}
        >
          {/* use antd loading icon */}
          {isLoading && (
            <Spin
              style={{
                display: "grid",
                justifyContent: "center",
                textAlign: "center",
              }}
            />
          )}

          {/* use antd alert */}
          {errrorMessage && <Alert message={errrorMessage} type="error" />}

          {/* use antd data display */}
          <Row style={{ justifyContent: "center", display: "grid" }}>
            {todos &&
              todos.map((todo) => (
                <Card
                  style={{
                    marginTop: 16,
                    width: 500,
                    borderRadius: 6,
                    opacity: 0.7,
                  }}
                  type="inner"
                >
                  <Radio key={todo.userId}>
                    <Space direction="vertical">{todo.title}</Space>
                  </Radio>
                </Card>
              ))}
          </Row>
        </Content>

        <Footer>Created by TJ</Footer>
      </Layout>
    </>
  );
};

export default TodoListPage;
