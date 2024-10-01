# Github-webscraper

Technologies: Javascript, Nodejs
Github has a ”Topics” page in which three random popular technologies appear. Github scraper selects top eight
repositories from each technology and scrapes all the ”issues” in those repositories and present them in a pdf file to
the user (open source developer).

Follow the given steps to run the github webscraping project-
Steps-
1)Download all the files in the repo and open them in VS code.
2)Go to main file and open it in integrated terminal, I used WSL Ubuntu.
3)
Now install all the dependencies-
nodejs version > 12 will be enough
request module (gives html from url)
cheerio module (helps to access html elements)
4)Run the main file in the opened integrated terminal and it will generate 3 pdfs for the top 3 topics it gets on github's topics page.

