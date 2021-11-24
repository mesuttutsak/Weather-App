const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'e38d76e3c41152848c9539279ce326d2'


const weatherContentList = document.querySelector(".weather-content-list");
const slider = document.querySelector(".slider");
const tryClick = document.getElementsByClassName("tryClick");
var data;

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

const setQuery = (e) => {
    if (e.keyCode == '13')
        getresult(searchBar.value)

}

const getresult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            data = weather.json()
            return data
        })
        .then(displayResult)
};

const displayResult = (result) => {
    const weatherContents = document.querySelectorAll(".weather-content");

    var isFlag = true;

    weatherContents.forEach(content => {
        const cityInContent = content.getElementsByClassName('card-title')[0]
        if (cityInContent.innerText.includes(result.name)) {
            isFlag = false
        }
    })

    if (isFlag) {
        const contentItemGroup = document.createElement("div");
        contentItemGroup.className = "card shadow-sm d-flex justify-content-center align-items-center mx-1 weather-content width10";
        
        const cityOfContent = document.createElement("h5");
        cityOfContent.className = "card-title mb-3";
        cityOfContent.innerText = `${result.name}, ${result.sys.country}`;
        contentItemGroup.appendChild(cityOfContent);

        const tempOfContent = document.createElement("p");
        tempOfContent.className = "card-text m-0 fs-1 temp";
        tempOfContent.innerText = `${Math.round(result.main.temp)}°C`
        contentItemGroup.appendChild(tempOfContent);

        const iconOfContent = document.createElement("img");
        iconOfContent.className = "card-img fs-6 desc";
        iconOfContent.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${result.weather[0].icon}.svg`;
        iconOfContent.alt = `${result.weather[0].description}`;
        iconOfContent.style.height = "13rem";
        contentItemGroup.appendChild(iconOfContent);

        const decsOfContent = document.createElement("p");
        decsOfContent.className = "card-text fs-6 desc";
        decsOfContent.innerText = `${result.weather[0].description}`.toUpperCase()
        contentItemGroup.appendChild(decsOfContent);

        weatherContentList.appendChild(contentItemGroup);
        addContentItemBySlick(contentItemGroup);
        console.log(result);
    }
}

const searchBar = document.getElementById('search');
searchBar.addEventListener('keypress', setQuery)

function addContentItems() {
    console.log(data);
    displayResult.apply(data);
}