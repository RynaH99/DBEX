import Footer from "./footer.jsx";
import Table from "./table.jsx";
import Filters from "./filters.jsx";

function MainArea() {
  return (
    <div className="main-area">
      <Filters />
      <Table />
      <Footer />
    </div>
  );
}

export default MainArea;
