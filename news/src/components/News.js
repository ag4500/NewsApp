import { useEffect } from "react";
import { requestNews, requestSearchNews } from "../thunks/news";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { onChangeSearch } from "../actions";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "react-bootstrap/Card";
const News = (props) => {
  const dispatch = useDispatch();
  const articel = useSelector((state) => state.news);
  let { articels, setSearch, searchNews,getBookmark } = articel;
  console.log(getBookmark)

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

  const handleBookmark = (index) => {
    articels.map((data, index) => {
      if (index ===index) {
        getBookmark.push(data)
        localStorage.setItem("bookmark", JSON.stringify(getBookmark));
      }
    });
  };

  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch ]);

  return articels.length ? (
    <div className=" container ">
      <div className="row">
        <div className="col">
          <form className=" my-1" onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              name="setSearch"
              value={setSearch}
              onChange={(event) => handleChange(event)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <h3 className="text-center text-primary">Today's News HeadlLines</h3>
          {articels.map((data, index) => (
            <>
              <ListGroup className='py-1'>
                <Card.Img variant="top" src={data.urlToImage} />
                <ListGroup.Item>
                  {data.title}...
                  <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    onClick={() => handleBookmark(index)}
                  />
                  <a href="#"
                    className="text-danger px-3"
                   /* eslint-disable jsx-a11y/anchor-is-valid*/
                    onClick={() => handleIndex(index, data.publishedAt)}
                  >
                    Read More...
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </>
          ))}
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
                    <Card.Img variant="top" src={data.urlToImage} />
                    {data.title}
                    <a href="#"
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
