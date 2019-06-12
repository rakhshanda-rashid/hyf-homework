const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = travelInformation.destinationDistance/travelInformation.speed;
  function timeConvert(travelTime)
  {
    const convertHoursIntoMinutes=(travelTime*60);
    const hours=(convertHoursIntoMinutes/60);
    const rhours=Math.floor(hours);
    const minutes=(hours - rhours)*60;
    const rminutes=Math.round(minutes);
    return rhours + " hours and " + rminutes + " minutes.";
  } 


  console.log(timeConvert(travelTime)); // 4 hours and 42 minutes