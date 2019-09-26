const axios = require("axios");
const { transaction } = require("objection");

const ClientID = "870F4TOjmQaoIyplwwb6_Q";

const APIKey =
  "dUvLUaWKbzENQFaLOI8k513GsdidPFH0lriqnn51fjT7oWMN9NausAJLhjSE69F5bt7NJO8hpiOGMnlqrLXq9108tEXxkJ1N-j3MGsLKqsGulYwKsp3CLClYc0GMXXYx";

module.exports = router => {
  router.get("/categories", (req, res) => {
    const requestOptions = {
      // headers: { accept: "application/json", Authorization: APIKey }
      headers: {
        Authorization:
          "Bearer dUvLUaWKbzENQFaLOI8k513GsdidPFH0lriqnn51fjT7oWMN9NausAJLhjSE69F5bt7NJO8hpiOGMnlqrLXq9108tEXxkJ1N-j3MGsLKqsGulYwKsp3CLClYc0GMXXYx",
        "User-Agent": "PostmanRuntime/7.17.1",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token":
          "069774c1-fe30-4cf2-9a15-0e3a455516c8,33d51e34-ffcb-4921-9732-a7561af619d1",
        Host: "api.yelp.com",
        "Accept-Encoding": "gzip, deflate",
        Connection: "keep-alive",
        "cache-control": "no-cache"
      }
    };
    axios
      .get("https://api.yelp.com/v3/categories?locale=en_US", requestOptions)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Error Fetching Companies", error: err });
      });
  });

  router.get("/businesses/search/:category", (req, res) => {
    const category = req.params.category;
    const url =
      "https://api.yelp.com/v3/businesses/search?locale=en_US&location=arizona&categories=" +
      category;
    const requestOptions = {
      headers: {
        Authorization:
          "Bearer dUvLUaWKbzENQFaLOI8k513GsdidPFH0lriqnn51fjT7oWMN9NausAJLhjSE69F5bt7NJO8hpiOGMnlqrLXq9108tEXxkJ1N-j3MGsLKqsGulYwKsp3CLClYc0GMXXYx",
        "User-Agent": "PostmanRuntime/7.17.1",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token":
          "069774c1-fe30-4cf2-9a15-0e3a455516c8,33d51e34-ffcb-4921-9732-a7561af619d1",
        Host: "api.yelp.com",
        "Accept-Encoding": "gzip, deflate",
        Connection: "keep-alive",
        "cache-control": "no-cache"
      }
    };
    axios
      .get(url, requestOptions)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Error Fetching Companies", error: err });
      });
  });
};

function createStatusCodeError(statusCode) {
  return Object.assign(new Error(), {
    statusCode
  });
}
