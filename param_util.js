const escaped_one_to_xml_special_map = {
    '&amp;': '&',
    '&quot;': '"',
    '&lt;': '<',
    '&gt;': '>'
};

function decodeQuery(string) {
    /*
    * this is a function that can decode queries from URL fragments
    * like "http://localhost:8080/uploads/2016/10/Space-Rocket-Emoji.png?resize=1440,960&amp;crop=0,0,100,67"
    * this makes sure that the params in the query are parsed correctly
    * */
    return string.replace(/(&quot;|&lt;|&gt;|&amp;)/g,
        function (str, item) {
            return escaped_one_to_xml_special_map[item];
        });
}

module.exports.decodeQuery = decodeQuery
