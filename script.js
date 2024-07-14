function sendData() {
  var api_key = document.getElementById("api_key").value;
  var value1 = document.getElementById("field1").value;
  var value2 = document.getElementById("field2").value;

  var url = "https://api.thingspeak.com/update";
  var data = "api_key=" + api_key + "&field1=" + value1 + "&field2=" + value2;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById("result").textContent =
          "Data sent successfully!";
      } else {
        document.getElementById("result").textContent =
          "Error sending data: " + xhr.status;
      }
    }
  };

  xhr.send(data);
}
