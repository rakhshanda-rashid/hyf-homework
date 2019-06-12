const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]

  // Adding My favourite series into the list//
function addSeriesIntoList(title, days, hours, minutes) {
    const addNewSeries = { title, days, hours, minutes };
    seriesDurations.push(addNewSeries);
}
addSeriesIntoList("Lilly Jord", 4, 7, 0);
addSeriesIntoList("Frozen world", 5, 21, 0);
console.log(seriesDurations);

//Calculating percentage of average span of 80years //
let totalCalcPercent=0;
let totalPercentFixed;
let eachSeriesFixed;
function seriesDurationOfLife(averageLifeDuration)
{
let totalMinutes = averageLifeDuration * 365 * 24 * 60; // average days taken
    for (let i = 0; i < seriesDurations.length; i++) {
        // calculating minutes per series
        let seriesInMinutes = ((seriesDurations[i].days * 24) * 60) + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;
        // calculating percentage of total hours with hours of watched series
        seriesInPercent = (seriesInMinutes /totalMinutes) * 100 ;
        eachSeriesFixed = seriesInPercent.toFixed(3);
        console.log(seriesDurations[i].title + "  " + "took" + " " + eachSeriesFixed +" "+ "%"+" "+ "of my life");
        totalCalcPercent = totalCalcPercent + seriesInPercent;
        totalPercentFixed = totalCalcPercent.toFixed(3);
    }
    return totalPercentFixed;
}
let eachCalcPercent = seriesDurationOfLife(80);
console.log("In total that is"+" "+eachCalcPercent +" "+ "%"+" "+ "of my life");