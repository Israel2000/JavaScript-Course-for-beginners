// Example
//Create Object from JSON string
var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Mary","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';
// parse coverts string into object (text)
obj = JSON.parse(text);
document.getElementById("app").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;

// XMLHttpRequest - format written in jason format
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("app").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json_file.txt", true);
xmlhttp.send();