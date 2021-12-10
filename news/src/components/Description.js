import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

const Description = (props) => {
  const articel = useSelector((state) => state.news);
  const { articels, searchNews } = articel;
  const index = props.match.params.index;
  const publishedAt = props.match.params.publishedAt;

  return articels.length>0 ? (
    <>
      <h2 className="text-danger fs-1 text text-center">Latest News</h2>
      {publishedAt === "undefined" && index ? (
        <>
          <Card
            className="text-center"
            style={{ width: "60rem", marginLeft: "160px" }}
          >
            <Card.Img variant="top" src={searchNews[index].urlToImage} />
            <Card.Title>{searchNews[index].title}</Card.Title>
            <Card.Body>
              <Card.Text>{searchNews[index].description}</Card.Text>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>
          <Card
            className="text-center"
            style={{ width: "60rem", marginLeft: "160px" }}
          >
            <Card.Img variant="top" src={articels[index].urlToImage} />
            <Card.Title>{articels[index].title}</Card.Title>
            <Card.Body>
              <Card.Text>{articels[index].description}</Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  ) : (
    <div className="text-danger fs-3 text text-center">
      Please Go on New HomeTo Display a Brief news...
    </div>
  );
};
export default Description;
