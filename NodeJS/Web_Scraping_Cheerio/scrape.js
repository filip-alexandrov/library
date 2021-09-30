// Testing with different website example so selectors differ
const request = require("request");
const cheerio = require("cheerio");

request(
  "https://makeawebsitehub.com/examples-of-blogs/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const siteHeading = $(".inside-article header");

      /*
      console.log(siteHeading.html());
      console.log(siteHeading.text());
      const output = siteHeading.find("h1").text();
      const output = siteHeading.children("h1").text();
      const output = siteHeading.children("h1").next().text();
      const output = siteHeading.children("h1").parent().text(); 
      */

      $("#menu-menu-1 li a").each((i, el) => {
        const item = $(el).text();
        const link = $(el).attr("href");
        console.log(link);
      });
    }
  }
);
