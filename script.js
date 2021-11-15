const url = 'https://openweathermap.org/data/2.5/'
const key = 'e38d76e3c41152848c9539279ce326d2'

const searchBar = document.getElementById("#search");
const weatherContent = document.querySelector(".weather-content");
const slider = document.querySelector(".slider");

const tryClick = document.getElementsByClassName("tryClick");


{/* <ul class="weather-content m-4">
<li class="card shadow d-flex flex-column align-items-center p-3" style="width: 10rem;">
    <h5 class="card-title mb-3">İstanbul, TR</h5>
    <!-- <div class="img-block text-center ">
        <img src="#" class="card-img rounded">
    </div> -->
        <p class="card-text mb-3 fs-1 temp">15°c</p>
        <p class="card-text fs-6 desc">Güneşli</p>
</li>
</ul> */}

function addContentItems() {
    const ContentItemGroup = document.createElement("li");
    ContentItemGroup.className = "card shadow-sm d-inline-flex flex-column align-items-center mx-1 my-5 width10";
    ContentItemGroup.style.width = "10rem;"

    const cityOfContent = document.createElement("h5");
    cityOfContent.className = "card-title mb-3";
    cityOfContent.innerText = "İstanbul, TR"
    ContentItemGroup.appendChild(cityOfContent);

    const tempOfContent = document.createElement("p");
    tempOfContent.className = "card-text mb-3 fs-1 temp";
    tempOfContent.innerText = "15°c"
    ContentItemGroup.appendChild(tempOfContent);

    const decsOfContent = document.createElement("p");
    decsOfContent.className = "card-text fs-6 desc";
    decsOfContent.innerText = "Güneşli"
    ContentItemGroup.appendChild(decsOfContent);

    weatherContent.appendChild(ContentItemGroup);
    addContentItemBySlick(ContentItemGroup);
}
