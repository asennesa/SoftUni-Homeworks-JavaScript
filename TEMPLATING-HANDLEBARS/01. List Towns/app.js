const button = document.querySelector('#btnLoadTowns')
const countriesWrapper = document.querySelector('#root')


button.addEventListener('click', () => {
    Promise.all([
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json()),
        fetch('template.hbs').then(response => response.text())
    ])
        .then(([countries, templateHbs]) => {
            const template = Handlebars.compile(templateHbs);
            countriesWrapper.innerHTML = template({countries});

        })
})