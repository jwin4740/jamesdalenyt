import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // Gets all saved articles from db
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the saved article
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the db
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
