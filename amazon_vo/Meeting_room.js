/**
 * Meeting room 1
 */

var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0;i < intervals.length - 1;i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }

  return true;
};

/**
 * Meeting room2 - line sweap
 */
class TimeFrame {
  constructor(time, flag) {
    this.time = time;
    this.flag = flag; //start : 1 , end: 0
  }
}
var minMeetingRooms = function(intervals) {
  if (!intervals || !intervals.length || !intervals[0].length) return 0;

  const timeFrames = [];

  for (let [start, end] of intervals) {
    timeFrames.push(new TimeFrame(start, 1));
    timeFrames.push(new TimeFrame(end, 0));
  }

  timeFrames.sort((a, b) => {
    return a.time !== b.time ? a.time - b.time : a.flag - b.flag
  });
  // console.log(timeFrames);
  let rooms = 0, maxRooms = 0;
  for (let frame of timeFrames) {
    if (frame.flag) {
      rooms++;
    } else {
      rooms--;
    }

    maxRooms = Math.max(maxRooms, rooms);
  }

  return maxRooms;
};