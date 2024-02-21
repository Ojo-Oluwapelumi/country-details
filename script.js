class Nation {
    constructor(nationalFlag, countryName, aboutNation) {
        this.flag = nationalFlag,
            this.name = countryName,
            this.about = aboutNation
    }
    check() {
        card.innerHTML = `
        <div class="card mx-auto" style="width: 18rem; transform: translateY(40%);">
            <h1 class="card-img-top" id="">${obj.flag}</h1>
            <div class="card-body">
                <h5 class="card-title mx-auto" id="name">${obj.name}</h5>
                <p class="card-text"${obj.about}></p>
            </div>
        </div>

        `
    }
}
let obj = ""
const algeria = () => {
    obj = ""
    let algeriaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="200">
    `;
    let algeriaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let algerian = new Nation("Algeria", algeriaFlag, algeriaAbout)
    obj = algerian
    algerian.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}

