
let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

text = JSON.stringify(text);


text = JSON.parse(text);



for (const key in text) {
    console.log(text[key]);
  
}