import { useEffect, useState } from "react";
import instance from "../api/api_instance";

const Home2 = () => {
  const [articles, setArticles] = useState([]);

  const getAllArticles = () => {
    instance.get("/articles").then((values) => {
      setArticles(values.data.AllArticles);
      console.log(values.data.AllArticles);
    });
  };
  console.log(articles);
  useEffect(() => {
    getAllArticles();
  }, []);
  return (
    <div>
      {articles.map((element) => {
        console.log(element);
        return <p>{element.title}</p>;
      })}
    </div>
  );
};

export default Home2;
