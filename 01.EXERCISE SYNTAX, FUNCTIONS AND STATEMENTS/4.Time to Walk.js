function solve(steps, stepLength, speed) {
    seconds = ((steps * stepLength) / 1000 / speed) * 3600;

    seconds += Math.floor((steps * stepLength) / 500) * 60;


    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + ':' + minutes + ':' + seconds;
    }

    console.log(String(Math.ceil(seconds)).toHHMMSS());
}
solve(4000, 0.60, 5)