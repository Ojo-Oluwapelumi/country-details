class Nation {
    constructor(nationalFlag, countryName, aboutNation ) {
        this.flag = nationalFlag,
        this.name = countryName,
        this.about = aboutNation
    }
    check(){
        card.innerHTML =`
        <div id="card">
        <div class="card mx-auto" style="width: 18rem; transform: translateY(40%);">
        <h1 class="card-img-top" id="">${obj.flag}</h1>
        <div class="card-body">
            <h5 class="card-title text-center" id="name">${obj.name}</h5>
            <p class="card-text"${obj.about}></p>
        </div>
        </div>
      </div>
        `
    }
}
const Algeria = () =>{
   obj =``
   let nationalFlag = `
   <img src="image/chicago-city-lights-at-night.jpg" alt="">
   `;
   let nigeriaAbout = "molestias rerum officiis fuga sunt optio officia dignissimos suscipit. Totam quod eos beatae veniam esse consectetur, laborum eum perferendis."
}

