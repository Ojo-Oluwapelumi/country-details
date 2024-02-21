class Nation {
    constructor(nationalFlag, countryName, aboutNation) {
        this.flag = nationalFlag,
            this.name = countryName,
            this.about = aboutNation
    }
    check() {
        card.innerHTML = `
        <div class="card mx-auto" style="width: 18rem; transform: translateY(15%);">
            <h1 class="card-img-top" id="">${obj.flag}</h1>
            <div class="card-body">
                <h5 class="card-title mx-auto" id="name">${obj.name}</h5>
                <p class="card-text">${obj.about}</p>
            </div>
        </div>

        `
    }
}
let obj = ""
const algeria = () => {
    obj = ""
    let algeriaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let algeriaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let algerian = new Nation("Algeria", algeriaFlag, algeriaAbout)
    obj = algerian
    algerian.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}

const angola = () => {
    obj = ""
    let angolaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let angolaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let angolian = new Nation("Angola", angolaFlag, angolaAbout)
    obj = angolian
    angolian.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const benin = () => {
    obj = ""
    let beninFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let beninAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let benins = new Nation("Benin", beninFlag, beninAbout)
    obj = benins
    benins.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const CaboVerde = () =>{
    obj = ""
    let CaboVerdeflag =`
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let CaboVerdeAbout ="molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let CaboVerdes = new Nation("CaboVerde", CaboVerdeflag, CaboVerdeAbout)
    obj = CaboVerdes
    CaboVerdes.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Cameroon = () => {
    obj = ""
    let CameroonFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let CameroonAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Cameroonian = new Nation("Cameroon", CameroonFlag, CameroonAbout)
    obj = Cameroonian
    Cameroonian.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Egypt = () => {
    obj = ""
    let EgyptFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let EgyptAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Egyptian = new Nation("Egypt",EgyptFlag, EgyptAbout)
    obj = Egyptian
    Egyptian.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Ethiopia = () => {
    obj = ""
    let EthiopiaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let EthiopiaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Ethiopians = new Nation("Ethiopia",EthiopiaFlag, EthiopiaAbout)
    obj = Ethiopians
    Ethiopians.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Gambia = () => {
    obj = ""
    let GambiaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let GambiaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Gambians = new Nation("Gambia",GambiaFlag,GambiaAbout)
    obj = Gambians
    Gambians.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Ghana = () => {
    obj = ""
    let GhanaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let GhanaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Ghanians = new Nation("Ghana",GhanaFlag,GhanaAbout)
    obj = Ghanians
    Ghanians.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Guinea = () => {
    obj = ""
    let GuineaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let GuineaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Guineas = new Nation("Guinea",GuineaFlag,GuineaAbout)
    obj = Guineas
    Guineas.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Kenya = () => {
    obj = ""
    let KenyaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let KenyaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Kenyans = new Nation("Kenya",KenyaFlag,KenyaAbout)
    obj = Kenyans
    Kenyans.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Nigeria = () => {
    obj = ""
    let NigeriaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let NigeriaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Nigerians = new Nation("Nigeria",NigeriaFlag,NigeriaAbout)
    obj = Nigerians
    Nigerians.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}
const Rwanda = () => {
    obj = ""
    let RwandaFlag = `
    <img src="image/chicago-city-lights-at-night.jpg"   width="250">
    `;
    let RwandaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
    let Rwandans = new Nation("Rwanda",RwandaFlag,RwandaAbout)
    obj = Rwandans
    Rwandans.check()
    setTimeout(()=>{
        card.innerHTML = ""
    }, 5000)
}

