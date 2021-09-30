const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const writeStream = fs.createWriteStream("post.csv");

// Write Headers
writeStream.write(`Link: \n`);

request(
  "https://makeawebsitehub.com/examples-of-blogs/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      $(".entry-content h3 a").each((i, el) => {
        const title = $(el).text().replace(/\s\s+/g, "");

        const link = $(el).attr("href");

        const date = $(el).find(".post-date").text().replace(/,/, "");

        // Write row to csv
        writeStream.write(`${link} \n`);
      });
    }

    console.log("Scraping done");
  }
);
