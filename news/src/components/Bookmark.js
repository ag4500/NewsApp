import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {  useSelector } from "react-redux";

const Bookmark = () => {
  let getBookmark=useSelector((state)=>state.news.getBookmark)
  const removeBookMark = (removeindex) => {
    for (let index = 0; index <= getBookmark.length; index++) {
      if (removeindex === index) {
        getBookmark.splice(index, 1);
      }
    }
    localStorage.setItem("bookmark", JSON.stringify(getBookmark));
    window.location.reload();
  };

  return getBookmark.length > 0 ? (
    <div className="container">
      <div className="row">
        {getBookmark.map((data, removeindex) => (
          <div class="col-6">
            <Card style={{ width: "35rem" }}>
              <Card.Header style={{ width: "35rem" }}>BookMarks</Card.Header>
              <Card.Img variant="top" src={data.urlToImage} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => removeBookMark(removeindex)}
                >
                  Remove BookMark
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  ) : (
    "Please Add BookMarks....."
  );
};
export default Bookmark;
