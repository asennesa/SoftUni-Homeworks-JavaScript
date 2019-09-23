function solve (array) {
    let html = '<table>\n'
    for(let row of array){
        let parsed = JSON.parse(row)
        html += '	<tr>\n'
        html += '		<td>' + parsed.name + '</td>\n'
        html += '		<td>' + parsed.position + '</td>\n'
        html += '		<td>' + parsed.salary + '</td>\n'
        html += '	</tr>\n'
    }
    html += '</table>'
    return html
}



solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);