const TimeService = {
    elapsedTime: function(createdAt) {
      let now = new Date();
      return simplePrettyTime(now - createdAt);
    }
};

function simplePrettyTime(ms) {
  ms = Math.abs(ms)
  var prettyTime;
  if (ms >= 1000*60*60*24*365) {
    prettyTime = Math.floor(ms / (1000*60*60*24*365)) + " years"
  } else if (ms >= 1000*60*60*24*30) {
    prettyTime = Math.floor(ms / (1000*60*60*24*30)) + " months"
  } else if (ms >= 1000*60*60*24) {
    prettyTime = Math.floor(ms / (1000*60*60*24)) + " days"
  } else if (ms >= 1000*60*60) {
    prettyTime = Math.floor(ms / (1000*60*60)) + " hours"
  } else {
    prettyTime = Math.floor(ms / (1000*60)) + " minutes"
  }
  // Remove pluralization if needed and return
  return prettyTime.split(" ")[0] === "1" ? prettyTime.slice(0,-1) : prettyTime  
}

export default TimeService;