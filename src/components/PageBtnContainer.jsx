import Pagination from "react-bootstrap/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const PageBtnContainer = ({ currentPage, numOfPages }) => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const handleChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= numOfPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => handleChange(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PageBtnContainer;
