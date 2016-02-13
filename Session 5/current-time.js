var date = new Date();
document.getElementById("time1").innerHTML = "Current Time:" + date.getHours() + ":" + ('0' + date.getMinutes()).slice(-2);
