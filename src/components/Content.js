import React from "react";
import DeleteAllToDo from "./DeleteAllToDo";
import ToDoListView from "./ToDoListView";
import { Tabs, Tab, Row, Container } from "react-bootstrap";
import ToDoEnd from "./ToDoEnd";
import ToDoList from "./ToDoList";

function Content() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Tabs
            justify
            variant="pills"
            defaultActiveKey="tab-1"
            className="border rounded-md"
          >
            <Tab eventKey="tab-1" title="Bütün Görevler">
              <ToDoListView />
            </Tab>
            <Tab eventKey="tab-2" title="Yapılacaklar">
              <ToDoList />
            </Tab>
            <Tab eventKey="tab-3" title="Tamamlananlar">
              <ToDoEnd />
            </Tab>
          </Tabs>
        </Row>
      </Container>

      {/* <div className="w-2/12 flex justify-end">
        <DeleteAllToDo />
      </div> */}
    </div>
  );
}

export default Content;
