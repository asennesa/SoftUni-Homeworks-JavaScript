function solve(str1, str2, str3) {
    let str1Length = str1.length;
    let str2Length = str2.length;
    let str3Length = str3.length;

    let sumOfLengths = str1Length + str2Length + str3Length;
    let averageOfLengths = Math.floor(sumOfLengths / 3);

    console.log(sumOfLengths);
    console.log(averageOfLengths);
}
