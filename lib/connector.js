const url ="http://213.14.182.224:8090";
import axios from 'axios';
var beacons=[]
export function getConnectionLink(directory, paramsNames, paramsValues,requestType){
    var link = url + "/" + directory;
    if(requestType.toUpperCase() == "GET"){
        if(paramsNames.length == paramsValues.length && (paramsNames[0]!="" && paramsNames.length!=0)){
            link += "?";
            paramsNames.forEach((element,index) => {
                link += element + "=" + paramsValues[index] + "&";
            });
            return link;
        }
        else if(paramsNames.length != paramsValues.length){
            throw paramsNames.length+ " " + paramsValues.length + " " +"Parametrelerin isim ve değer sayısı eşit değil.";
        }
        else{
            return link;
        }
    }
    else if (requestType.toUpperCase()=="POST" || requestType.toUpperCase()=="PUT"){
        if(paramsNames.length == paramsValues.length && (paramsNames[0]!="" || paramsNames.length!=0)){
            var formData= new FormData();
            paramsNames.forEach((element,index) => {
                formData.append(element, paramsValues[index])
            });
            var obj = {
                url:link,
                data:formData,
            }
            return obj;
        }
        else if(paramsNames.length != paramsValues.length){
            throw paramsNames.length+ " " + paramsValues.length + " " +"Parametrelerin isim ve değer sayısı eşit değil.";
        }
        else{
            throw "Parametreler POST methodunda boş bırakılamaz."; 
        }
    }
}