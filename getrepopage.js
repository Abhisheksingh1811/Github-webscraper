const request=require("request");
const cheerio=require("cheerio");
const getissuespage=require("./issues")
function getrepopage(url,name){
    request(url,cb1);
    function cb1(err,status,html){
        if(err){
            console.log(err);
        }
        else{
            //console.log(html);//GOT HTML
            getrepo(html,name);
        }
    }
    function getrepo(html,name){
        let $$=cheerio.load(html);
        let reponame=$$(".Link.text-bold.wb-break-word");
        let repolinkS=$$(".Link.text-bold.wb-break-word");
        let repo=[];
        let repolink=[];
      //  console.log(name)
       // console.log("////////////////////////////////////////////////////////////////////")
        for(let j=0;j<8;j++){
            repo[j]=$$(reponame[j]).text().trim();
            repolink[j]="https://github.com"+$$(repolinkS[j]).attr("href");
           // console.log(repo[j]);
            let issuepagelink=repolink[j]+"/issues";// issue page link
            getissuespage(issuepagelink,repo[j],name); 
        }
       // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

    }
}
module.exports=getrepopage;