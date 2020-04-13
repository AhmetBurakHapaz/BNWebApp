const url = "http://92.44.120.164:8090";
export function getConnectionLink(directory, paramsNames, paramsValues, requestType) {
    var link = url + "/" + directory;
    if (requestType.toUpperCase() == "GET") {
        if (paramsNames.length == paramsValues.length && (paramsNames[0] != "" && paramsNames.length != 0)) {
            link += "?";
            paramsNames.forEach((element, index) => {
                link += element + "=" + paramsValues[index] + "&";
            });
            console.log(link)
            return link;
        } else if (paramsNames.length != paramsValues.length) {
            console.log("b")
            throw "Parametrelerin isim ve değer sayısı eşit değil.";
        } else {
            console.log(link)
            return link;
        }
    } else if (requestType.toUpperCase() == "POST") {
        if (paramsNames.length == paramsValues.length && (paramsNames[0] != "" || paramsNames.length != 0)) {
            var formData = new FormData();
            paramsNames.forEach((element, index) => {
                formData.append(element, paramsValues[index])
            });
            var obj = {
                url: link,
                data: formData,
            }
            return obj;
        } else if (paramsNames.length != paramsValues.length) {
            console.log("b")
            throw "Parametrelerin isim ve değer sayısı eşit değil.";
        } else {
            throw "Parametreler POST methodunda boş bırakılamaz.";
        }
    }
}
export default function getBeacon() {
    //axios işlemleri
    /*
    var a = new Beacon(1,2,3);
    return a.getBeacon();*/
}