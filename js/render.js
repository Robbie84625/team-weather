const yearElement = document.getElementById("year");
const weekDayElement = document.getElementById("weekDay");
const monthDayElement = document.getElementById("monthDay");

function getYear() {
  const today = new Date();
  let year = formatNumber(today.getFullYear());

  return year;
}
yearElement.textContent = getYear();

function getMonthDay() {
  const today = new Date();
  let Month = today.getMonth();

  const monthNames = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  const monthName = monthNames[Month];
  let day = today.getDate();

  MonthDay = `${monthName}${day}`;

  return MonthDay;
}
monthDayElement.textContent = getMonthDay();

function getDayOfWeekName() {
  const today = new Date();
  const dayOfWeekNumber = today.getDay();

  // 根據整數值轉換為星期的英文縮寫
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // 取得當前星期的名稱
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  return dayOfWeekName;
}

weekDayElement.textContent = getDayOfWeekName();

function changePopImg(PoP6h) {
  const image = document.getElementById("PoPImg");
  if (PoP6h < 10) {
    image.src = "images/PoP0.svg";
  } else if (PoP6h >= 10 && PoP6h < 30) {
    image.src = "images/PoP10.svg";
  } else if (PoP6h >= 30 && PoP6h < 50) {
    image.src = "images/PoP30.svg";
  } else if (PoP6h >= 50 && PoP6h < 70) {
    image.src = "images/PoP50.svg";
  } else if (PoP6h >= 70 && PoP6h < 90) {
    image.src = "images/PoP70.svg";
  } else {
    image.src = "images/PoP90.svg";
  }
}

function changeWXImg(WxNum) {
  const wxImg = document.getElementById("wx-img");
  if (WxNum == "01") {
    wxImg.src = "images/sunny.svg";
    // console.log("晴天 images/sunny.svg");
  } else if (WxNum >= "02" && WxNum <= "03") {
    wxImg.src = "images/sunCloudMorining.svg";
    // console.log("晴天 多雲 images/sunCloudMorining.svg");
  } else if (WxNum >= "04" && WxNum <= "07") {
    wxImg.src = "images/cloud.svg";
    // console.log("多雲 images/cloud.svg");
  } else if (WxNum == "21") {
    wxImg.src = "images/morningRain.svg";
    // console.log("晴午後雷陣雨 images/morningRain.svg");
  } else if (WxNum >= "22") {
    wxImg.src = "images/rain.svg";
    // console.log("雷陣雨 images/rain.svg");
  } else {
    wxImg.src = " images/cloudRain.svg";
    // console.log("下雨 images/cloudRain.svg");
  }
}

function changeWXImg36H(WxNum, imgId) {
  const wxImg = document.getElementById(imgId);
  if (WxNum == "01") {
    wxImg.src = "images/sunny.svg";
    // console.log("晴天 images/sunny.svg");
  } else if (WxNum >= "02" && WxNum <= "03") {
    wxImg.src = "images/sunCloudMorining.svg";
    // console.log("晴天 多雲 images/sunCloudMorining.svg");
  } else if (WxNum >= "04" && WxNum <= "07") {
    wxImg.src = "images/cloud.svg";
    // console.log("多雲 images/cloud.svg");
  } else if (WxNum == "21") {
    wxImg.src = "images/morningRain.svg";
    // console.log("晴午後雷陣雨 images/morningRain.svg");
  } else if (WxNum >= "22") {
    wxImg.src = "images/rain.svg";
    // console.log("雷陣雨 images/rain.svg");
  } else {
    wxImg.src = " images/cloudRain.svg";
    // console.log("下雨 images/cloudRain.svg");
  }
}

function changeWsImg(Ws) {
  const wsImg = document.getElementById("ws-img");
  //   Ws = 50
  if (Ws <= 3) {
    wsImg.src = "images/wind3.svg";
  } else if (Ws > 3 && Ws <= 5) {
    wsImg.src = "images/wind5.svg";
  } else if (Ws > 5 && Ws <= 10) {
    wsImg.src = "images/wind10.svg";
  } else if (Ws > 10 && Ws <= 17) {
    wsImg.src = "images/wind17.svg";
  } else if (Ws > 17 && Ws <= 21) {
    wsImg.src = "images/wind21.svg";
  } else if (Ws > 21 && Ws <= 30) {
    wsImg.src = "images/wind30.svg";
  } else {
    wsImg.src = "images/wind50.svg";
  }
}

function changeTImg(T) {
  const image = document.getElementById("TImg");
  if (T < 10) {
    image.src = "images/temperature10.svg";
  } else if (T >= 10 && T < 15) {
    image.src = "images/temperature15.svg";
  } else if (T >= 15 && T < 20) {
    image.src = "images/temperature20.svg";
  } else {
    image.src = "images/temperature25.svg";
  }
}

function changeAQIImg(aqi) {
  console.log(aqi);
  const image = document.getElementById("aqiIcon"); //HTML尚未建立
  if (aqi <= 50) {
    image.src = "images/AQI50.svg";
  } else if (aqi >= 51 && aqi <= 100) {
    image.src = "images/AQI100.svg";
  } else if (aqi >= 101 && aqi <= 150) {
    image.src = "images/AQI150.svg";
  } else if (aqi >= 151 && aqi <= 200) {
    image.src = "images/AQI2000.svg";
  } else if (aqi >= 201 && aqi <= 300) {
    image.src = "images/AQI3000.svg";
  } else {
    image.src = "images/AQI4000.svg";
  }
}
