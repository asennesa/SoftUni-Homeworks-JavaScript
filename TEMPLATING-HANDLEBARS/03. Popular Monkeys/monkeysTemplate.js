import {monkeys} from "./monkeys.js";
//to import you need to set the html file script type to module
(async () => {
    Handlebars.registerPartial(
        'monkey',
        await fetch('monkey-template.hbs').then(result => result.text()))

    const templateSrc = await fetch('monkeys-template.hbs').then(result => result.text())

    const template = Handlebars.compile(templateSrc);

    const resultHtml = template({monkeys})

    document.querySelector('section').innerHTML += resultHtml;

    document.querySelectorAll('button').forEach(btn=>{
        btn.addEventListener('click',()=>{
            const pInfo = btn.parentNode.querySelector('p');
            const {display} = pInfo.style;
            if(display==="none"){
                pInfo.style.display="block"
            }else{
                pInfo.style.display="none"
            }
        })
    })

})()
