function getFahrenheits(result){
  let farenheits = result.hourly_forecast.map(result => result.temp.english)
  return farenheits
}

function getHours(result){
  //console.log("hours", result.hourly_forecast)
  let hours = result.hourly_forecast.map(result => result.FCTTIME.hour)
  return hours
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [{
      data: data,
      //backgroundColor: "rgba(153, 255, 51, 0.4)"
    }]
  }
}

function makeAjaxRequest(endpoint, success) {
  fetch(endpoint).then(function(result){
    return result.json()
  }).then(function(result){
    success(result)
  })
}