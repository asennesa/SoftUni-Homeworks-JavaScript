(async () => {

    Handlebars.registerPartial('cat',
        await fetch('single-cat-template.hbs')
            .then(result => result.text()));

    const template = Handlebars.compile(
        await fetch('all-cats-template.hbs').then((r) => r.text())
    );

    //Insert an object { with a name like the one given inside the .hbs } or else it won't work.
    const resultHtml = template({cats});

    document.querySelector("section#allCats").innerHTML += resultHtml;

    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.parentNode;
            const statusDiv = parent.querySelector('div.status')
            const {display} = statusDiv.style

            if (display === "none") {
                btn.textContent = "Hide status code"
                statusDiv.style.display = "block"
            } else {
                btn.textContent = "Show status code"
                statusDiv.style.display = "none";
            }
        })
    })

})();