const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");
const pdfkit=require("pdfkit")
function getissuespage(url,rname,name){
    request(url,cb2);//issue page html
    function cb2(err,status,html){
        if(err){
            console.log(err);
        }
        else{
            //console.log(html);//GOT HTML
            getissueSF(html,rname,name);
        }
    }
    function getissueSF(html,rname,name){
        let $$$=cheerio.load(html);
        let iss=$$$(".d-block.d-md-none.position-absolute.top-0.bottom-0.left-0.right-0");
       // console.log(rname)
        //console.log("************************************************************************")
        let isss=[]
        for(let k=0;k<iss.length;k++){
             let linkk= "https://github.com"+$$$(iss[k]).attr("href");
             isss.push(linkk);
        }
        //console.log("--------------------------------------------------------------------------")
        let folderpath=path.join(__dirname,name);
        dircreator(folderpath);
        let filepath=path.join(folderpath,rname+".pdf");
        let text=JSON.stringify(isss);
        let pdfdoc=new pdfkit();
        pdfdoc.pipe(fs.createWriteStream(filepath))
        pdfdoc.text(text);
        pdfdoc.end();
        
    }
    function dircreator(folderpath){
        if(fs.existsSync(folderpath)==false){
            fs.mkdirSync(folderpath);
        }
    }
}
 
module.exports=getissuespage