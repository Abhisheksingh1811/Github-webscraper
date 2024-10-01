let url="https://github.com/topics";
const request=require("request");
const cheerio=require("cheerio");
const getrepopage=require("./getrepopage")
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        //console.log(html);//GOT HTML
        gettopics(html);
    }
}
function gettopics(html){
    let $=cheerio.load(html);//LOAD HTML IN $ THROUGH CHEERIO
    let topicnames=$(".col-12.col-sm-6.col-md-4.mb-4 .f3.lh-condensed.text-center.Link--primary.mb-0.mt-1");//******SELECTORS FOR P TAGS CONATINING NAMES  
    let topiclinks=$(".col-12.col-sm-6.col-md-4.mb-4 a");// PASS SELECTORS TO GET ANCHOR TAGS 
    let topiclinksfull=[];
    let topicnamesS=[];
    for(let i=0;i<topiclinks.length;i++){
            //USE .attr TO GET HREF OF ANCHOR TAGS
        topiclinksfull[i]="https://github.com"+$(topiclinks[i]).attr("href");
        topicnamesS[i]=$(topicnames[i]).text().trim();
            // TO PRINT NAMES, PRINT TEXT OF THE P TAGS******************* TRIM EXTRA SPACES
        getrepopage(topiclinksfull[i],topicnamesS[i])
    }

}
