import Content from "./components/Content";
import Header from "./components/Header";
import ToDoListView from "./components/ToDoListView";
import { UrlContextProvider } from "./contexts/UrlContext";

function App() {
  return (
    <div>
      <UrlContextProvider>
        <Header />
        <Content />
        {/* <ToDoListView /> */}
      </UrlContextProvider>
    </div>
  );
}

export default App;
