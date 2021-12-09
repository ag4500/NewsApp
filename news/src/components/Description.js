import { useSelector } from "react-redux";

const Description = (props) => {
  const articel = useSelector((state) => state.news);
  const { articels, searchNews } = articel;

  const index = props.match.params.index;
  const publishedAt = props.match.params.publishedAt;

  return articels.length ? (
    <>
      {publishedAt === "undefined" && index ? (
        <>
          <h2 className="text-danger my-4 fs-1 text text-center">
            Latest News
          </h2>
          <div
            style={{
              width: "40%",
              marginLeft: "350px",
              padding: "12px",
              border: "3px groove red",
            }}
          >
            <h4>{searchNews[index].title}...</h4>
            <span
              style={{
                color: "blue",
                textAlign: "center",
                padding: "12px",
              }}
            >
              {searchNews[index].description}
            </span>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-danger my-4 fs-1 text text-center">
            Latest News
          </h2>
          <div
            style={{
              width: "40%",
              marginLeft: "350px",
              padding: "12px",
              border: "3px groove red",
            }}
          >
            <h4>{articels[index].title}...</h4>
            <span
              style={{
                color: "blue",
                textAlign: "center",
                padding: "12px",
              }}
            >
              {articels[index].description}
            </span>
          </div>
        </>
      )}
    </>
  ) : (
    "Please Go on News DashBoard To display a news..."
  );
};
export default Description;
