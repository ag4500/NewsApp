import { useEffect } from "react";
import { requestNews, requestSearchNews } from "../thunks/news";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { onChangeSearch } from "../actions";
const News = (props) => {
  const dispatch = useDispatch();
  const articel = useSelector((state) => state.news);
  const { articels, setSearch, searchNews } = articel;

  const handleIndex = (index, publishedAt) => {
    console.log(index, props);
    props.history.push(`/desc/${index}/${publishedAt}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSearchNews(setSearch));
  };

  const handleChange = (e) => {
    dispatch(onChangeSearch(e.target.value));
  };

  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch]);

  return articels.length ? (
    <div className=" container ">
      <div className="row">
        <div className="col-md-6 my-1">
          <h3 className="text-center py-3 text-primary">
            Today's News HeadlLines
          </h3>
          {articels.map((data, index) => (
            <>
              <ListGroup>
                <ListGroup.Item className="my-2">
                  {data.title}...
                  <a
                    className="text-danger px-3"
                    onClick={() => handleIndex(index, data.publishedAt)}
                  >
                    Read More
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </>
          ))}
        </div>
        <div className="col">
          <h3 className="text-center py-3 text-danger">
            Search News By Articels
          </h3>
          <form className=" my-1" onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              name="setSearch"
              value={setSearch}
              onChange={(event) => handleChange(event)}
            />
            <button
              className="btn btn-outline-success mx-5 px-5 my-3"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col">
          {searchNews.length ? (
            <h3 className="text-center py-3 text-secondary fst-italic">
              Your Search Results
            </h3>
          ) : null}
          {searchNews.length
            ? searchNews.map((data, index) => (
                <ListGroup className=" my-1">
                  <ListGroup.Item>
                    {data.title}
                    <a
                      className="text-danger px-3"
                      onClick={() => handleIndex(index)}
                    >
                      Read More...
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              ))
            : null}
        </div>
      </div>
    </div>
  ) : (
    "Loading....."
  );
};
export default News;
