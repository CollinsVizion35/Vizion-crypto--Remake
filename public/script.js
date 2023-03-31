//Grab elements

const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Oops, something went wrong, make sure that ${selector} exists or is typed correctly`);
};
//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);

//open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

//switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');
const cryptoChartLight = document.getElementById('cryptoChartLight');
const cryptoChartDark = document.getElementById('cryptoChartDark');
const cryptoChartToday = document.querySelector('.cryptoChartToday');

if(currentTheme){
    bodyElement.classList.add('light-theme');
    cryptoChartDark.classList.add('active');
    cryptoChartLight.classList.remove('active');
} else {
    cryptoChartDark.classList.remove('active');
    cryptoChartLight.classList.add('active');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if (cryptoChartLight.classList.contains('active')) {
        cryptoChartDark.classList.add('active');
        cryptoChartLight.classList.remove('active');
    } else if (cryptoChartDark.classList.contains('active')) {
        cryptoChartLight.classList.add('active');
        cryptoChartDark.classList.remove('active');
    }


    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});

//Live header coins prices
var btc = selectElement(".bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var sol = document.getElementById("solana");
var ada = document.getElementById("cardano");
var xrp = document.getElementById("ripple");
var ltc = document.getElementById("litecoin");
var bch = document.getElementById("bitcoin-cash");
var dot = document.getElementById("polkadot");
var shib = document.getElementById("shiba-inu");
var usdt = document.getElementById("tether");
var bnb = document.getElementById("binancecoin");

var btc2 = document.getElementById("bitcoin2");
var eth2 = document.getElementById("ethereum2");
var doge2 = document.getElementById("dogecoin2");
var sol2 = document.getElementById("solana2");


var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Cbinancecoin%2Ccardano%2Cripple%2Clitecoin%2Cbitcoin-cash%2Cpolkadot%2Cshiba-inu%2Ctether&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}



$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    sol.innerHTML = response.solana.usd;
    btc2.innerHTML = response.bitcoin.usd;
    eth2.innerHTML = response.ethereum.usd;
    doge2.innerHTML = response.dogecoin.usd;
    sol2.innerHTML = response.solana.usd;
    ada.innerHTML = response.cardano.usd;
    xrp.innerHTML = response.ripple.usd;
    ltc.innerHTML = response.litecoin.usd;
    usdt.innerHTML = response.tether.usd;
    dot.innerHTML = response.polkadot.usd;
    bnb.innerHTML = response.binancecoin.usd;
});

//Live header 24hrs volume
var btcChart = document.getElementById("bitcoinChart");
var ethChart = document.getElementById("ethereumChart");
var dogeChart = document.getElementById("dogecoinChart");
var solChart = document.getElementById("solanaChart");
var adaChart = document.getElementById("cardanoChart");
var xrpChart = document.getElementById("rippleChart");
var ltcChart = document.getElementById("litecoinChart");
var dotChart = document.getElementById("polkadotChart");
var usdtChart = document.getElementById("tetherChart");
var bnbChart = document.getElementById("binancecoinChart");


    



var coinCharts = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Cbinancecoin%2Ccardano%2Cripple%2Clitecoin%2Cbitcoin-cash%2Cpolkadot%2Cshiba-inu%2Ctether&vs_currencies=usd&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}



$.ajax(coinCharts).done(function (response){
    
    const hrsChartAll = document.querySelectorAll('.hrsChartAll');

    for (let i = 0; i < hrsChartAll.length; i++) {

    const topCrypto1Up = document.getElementById('arrowUp1');
    const topCrypto1Down = document.getElementById('arrowDown1');

    const topCrypto2Up = document.getElementById('arrowUp2');
    const topCrypto2Down = document.getElementById('arrowDown2');   
    
    const topCrypto3Up = document.getElementById('arrowUp3');
    const topCrypto3Down = document.getElementById('arrowDown3');   
    
    const topCrypto4Up = document.getElementById('arrowUp4');
    const topCrypto4Down = document.getElementById('arrowDown4');   
    
    const topCrypto5Up = document.getElementById('arrowUp5');
    const topCrypto5Down = document.getElementById('arrowDown5');   
    
    const topCrypto6Up = document.getElementById('arrowUp6');
    const topCrypto6Down = document.getElementById('arrowDown6');   
    
    const topCrypto7Up = document.getElementById('arrowUp7');
    const topCrypto7Down = document.getElementById('arrowDown7');   
    
    const topCrypto8Up = document.getElementById('arrowUp8');
    const topCrypto8Down = document.getElementById('arrowDown8');   
    
    const topCrypto9Up = document.getElementById('arrowUp9');
    const topCrypto9Down = document.getElementById('arrowDown9');   
    
    const topCrypto10Up = document.getElementById('arrowUp10');
    const topCrypto10Down = document.getElementById('arrowDown10');   

    btcChart.innerHTML = response.bitcoin.usd_24h_change.toFixed(4);
    ethChart.innerHTML = response.ethereum.usd_24h_change.toFixed(4);
    dogeChart.innerHTML = response.dogecoin.usd_24h_change.toFixed(4);
    solChart.innerHTML = response.solana.usd_24h_change.toFixed(4);
    adaChart.innerHTML = response.cardano.usd_24h_change.toFixed(4);
    xrpChart.innerHTML = response.ripple.usd_24h_change.toFixed(4);
    ltcChart.innerHTML = response.litecoin.usd_24h_change.toFixed(4);
    usdtChart.innerHTML = response.tether.usd_24h_change.toFixed(4);
    dotChart.innerHTML = response.polkadot.usd_24h_change.toFixed(4);
    bnbChart.innerHTML = response.binancecoin.usd_24h_change.toFixed(4);

    
    if (hrsChartAll[0].innerHTML < 0) {
        topCrypto1Up.classList.add('invisible');
        topCrypto1Down.classList.remove('invisible');
    } else if (hrsChartAll[0].innerHTML > 0) {
        topCrypto1Down.classList.add('invisible');
        topCrypto1Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[1].innerHTML < 0) {
        topCrypto2Up.classList.add('invisible');
        topCrypto2Down.classList.remove('invisible');
    } else if (hrsChartAll[1].innerHTML > 0) {
        topCrypto2Down.classList.add('invisible');
        topCrypto2Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[2].innerHTML < 0) {
        topCrypto3Up.classList.add('invisible');
        topCrypto3Down.classList.remove('invisible');
    } else if (hrsChartAll[2].innerHTML > 0) {
        topCrypto3Down.classList.add('invisible');
        topCrypto3Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[3].innerHTML < 0) {
        topCrypto4Up.classList.add('invisible');
        topCrypto4Down.classList.remove('invisible');
    } else if (hrsChartAll[3].innerHTML > 0) {
        topCrypto4Down.classList.add('invisible');
        topCrypto4Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[4].innerHTML < 0) {
        topCrypto5Up.classList.add('invisible');
        topCrypto5Down.classList.remove('invisible');
    } else if (hrsChartAll[4].innerHTML > 0) {
        topCrypto5Down.classList.add('invisible');
        topCrypto5Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[5].innerHTML < 0) {
        topCrypto6Up.classList.add('invisible');
        topCrypto6Down.classList.remove('invisible');
    } else if (hrsChartAll[5].innerHTML > 0) {
        topCrypto6Down.classList.add('invisible');
        topCrypto6Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[6].innerHTML < 0) {
        topCrypto7Up.classList.add('invisible');
        topCrypto7Down.classList.remove('invisible');
    } else if (hrsChartAll[6].innerHTML > 0) {
        topCrypto7Down.classList.add('invisible');
        topCrypto7Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[7].innerHTML < 0) {
        topCrypto8Up.classList.add('invisible');
        topCrypto8Down.classList.remove('invisible');
    } else if (hrsChartAll[7].innerHTML > 0) {
        topCrypto8Down.classList.add('invisible');
        topCrypto8Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[8].innerHTML < 0) {
        topCrypto9Up.classList.add('invisible');
        topCrypto9Down.classList.remove('invisible');
    } else if (hrsChartAll[8].innerHTML > 0) {
        topCrypto9Down.classList.add('invisible');
        topCrypto9Up.classList.remove('invisible');
    }
    
    if (hrsChartAll[9].innerHTML < 0) {
        topCrypto10Up.classList.add('invisible');
        topCrypto10Down.classList.remove('invisible');
    } else if (hrsChartAll[9].innerHTML > 0) {
        topCrypto10Down.classList.add('invisible');
        topCrypto10Up.classList.remove('invisible');
    }
    
}
});













// fetch cryptocurrency data and store it in the variable data
var xhReq = new XMLHttpRequest();
xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", false);
xhReq.send(null);
var data = JSON.parse(xhReq.responseText); 


//price-top-gainers

// initialization
var cryptocurrencies;
var timerId;
var updateInterval = 2000;


function ascending(a, b) { return a.percent_change_24h > b.percent_change_24h ? 1 : -1; }
function descending(a, b) { return a.percent_change_24h < b.percent_change_24h ? 1 : -1; }
function reposition() {
    var height = $("#cryptocurrencies .cryptocurrency").height();
    var y = height;
    for(var i = 0; i < cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.css("top", y + "px");
        y += height;			
    }
}  
function updateRanks(cryptocurrencies) {
    for(var i = 0; i < cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.find(".rank").text(i + 1);	
    }
}

function fetchNewData(data,attributeName,name){
    for(var x in data){
        if((data[x].name == name) == true) {
            return data[x][attributeName];
        }
    }
    return null;
}        
function updateBoard() {
    var cryptocurrency = getRandomCoin();	
    cryptocurrency.percent_change_24h += getRandomScoreIncrease();
    cryptocurrency.$item.find(".percent_change_24h").text(cryptocurrency.percent_change_24h);
    cryptocurrencies.sort(descending);
    updateRanks(cryptocurrencies);
    reposition();
}

function getNewData(){
    // get the new data for each coin and change to their new values
    var newReq = new XMLHttpRequest();
    newReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", false);
    newReq.send(null);
    var newData = JSON.parse(newReq.responseText); 

    for(var i = 0; i < cryptocurrencies.length; i++) {
        var cryptocurrency = cryptocurrencies[i];
        cryptocurrency.price = fetchNewData(newData,'current_price',cryptocurrency.name);
        cryptocurrency.$item.find(".price").text(cryptocurrency.price);
        cryptocurrency.volume_24h = fetchNewData(newData,'total_volume',cryptocurrency.name);
        cryptocurrency.$item.find(".volume_24h").text(cryptocurrency.volume_24h);
        cryptocurrency.percent_change_24h = fetchNewData(newData,'market_cap_change_percentage_24h',cryptocurrency.name);
        cryptocurrency.$item.find(".percent_change_24h").text(cryptocurrency.percent_change_24h);
        cryptocurrency.image = fetchNewData(newData,'image',cryptocurrency.name);
        // cryptocurrency.$item.find(".image").text(cryptocurrency.image).remove;
    }
    cryptocurrencies.sort(descending);
    updateRanks(cryptocurrencies);
    reposition();
    console.log('Finished retrieving new data');
    
}
function getRandomScoreIncrease() {
    return getRandomBetween(50, 150);
}
function getRandomBetween(minimum, maximum) {
        return Math.floor(Math.random() * maximum) + minimum;
}




function resetBoard() {
    var $list = $("#cryptocurrencies");
    $list.find(".cryptocurrency").remove();
    if(timerId !== undefined) {
        clearInterval(timerId);
    }
    cryptocurrencies = [];
    for(let i = 0;i < 100;i++){
        cryptocurrencies.push(
            {
                image: data[i].image,
                name : data[i].name,
                symbol: data[i].symbol,
                price: data[i].current_price.toFixed(2),
                market_cap: data[i].market_cap,
                circulating_supply: Math.round(data[i].circulating_supply),
                volume_24h: data[i].total_volume,
                percent_change_24h: data[i].market_cap_change_percentage_24h,
            }
        )
        
    };

    
    
    for(var i = 0; i < cryptocurrencies.length; i++) {
        var $item = $(
            "<tr class='cryptocurrency fade-in'>" + 
                "<th class='rank'>" + (i + 1) + "</th>" + 
                "<td class='image'>"  + "<img src=" +cryptocurrencies[i].image + ">" + "</td>" +
                "<td class='name'>" + cryptocurrencies[i].name + "</td>" + 
                "<td class='symbol'>"   + cryptocurrencies[i].symbol + "</td>" + 
                "<td class='price'>" + cryptocurrencies[i].price + "</td>" + 
                "<td class='market_cap'>" + cryptocurrencies[i].market_cap + "</td>" + 
                "<td class='circulating_supply'>" + cryptocurrencies[i].circulating_supply + "</td>" + 
                "<td class='volume_24h'>" + cryptocurrencies[i].volume_24h + "</td>" + 
                "<td class='percent_change_24h'>" + cryptocurrencies[i].percent_change_24h + "</td>" +
            "</tr>"
        );


        console.log(cryptocurrencies[1].image);
        // $('.image').append("<img src=" +cryptocurrencies[1].image + ">");
        cryptocurrencies[i].$item = $item;
        $list.append($item);
        
    }
    cryptocurrencies.sort(descending);
    updateRanks(cryptocurrencies);
    reposition();
    
    // fetch new data for the updateInterval
    timerId = setInterval("getNewDataa();", updateInterval);

}	
resetBoard();



//price-top-losers
var cryptocurrenciess;
var timerIdd;
var updateIntervall = 1000;


function ascendingg(a, b) { return a.percent_change_24h > b.percent_change_24h ? 1 : -1; }
function descendingg(a, b) { return a.percent_change_24h < b.percent_change_24h ? 1 : -1; }
function repositionn() {
    var heightt = $("#cryptocurrencies2 .cryptocurrency").height();
    var y = heightt;
    for(var i = 0; i < cryptocurrenciess.length; i++) {
        cryptocurrenciess[i].$itemm.css("top", y + "px");
        y += heightt;			
    }
}  
function updateRankss(cryptocurrenciess) {
    for(var i = 0; i < cryptocurrenciess.length; i++) {
        cryptocurrenciess[i].$itemm.find(".rank").text(i + 1);	
    }
}

function fetchNewDataa(data,attributeName,name){
    for(var x in data){
        if((data[x].name == name) == true) {
            return data[x][attributeName];
        }
    }
    return null;
}        
function updateBoardd() {
    var cryptocurrencyy = getRandomCoinn();	
    cryptocurrencyy.percent_change_24h += getRandomScoreIncreasee();
    cryptocurrencyy.$itemm.find(".percent_change_24h").text(cryptocurrencyy.percent_change_24h);
    cryptocurrenciess.sort(ascendingg);
    updateRankss(cryptocurrenciess);
    repositionn();
}

function getNewDataa(){
    // get the new data for each coin and change to their new values
    var newReqq = new XMLHttpRequest();
    newReqq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", false);
    newReqq.send(null);
    var newDataa = JSON.parse(newReqq.responseText); 

    for(var i = 0; i < cryptocurrenciess.length; i++) {
        var cryptocurrencyy = cryptocurrenciess[i];
        cryptocurrencyy.price = fetchNewDataa(newDataa,'current_price',cryptocurrencyy.name);
        cryptocurrencyy.$itemm.find(".price").text(cryptocurrencyy.price);
        cryptocurrencyy.volume_24h = fetchNewDataa(newDataa,'total_volume',cryptocurrencyy.name);
        cryptocurrencyy.$itemm.find(".volume_24h").text(cryptocurrencyy.volume_24h);
        cryptocurrencyy.percent_change_24h = fetchNewDataa(newDataa,'market_cap_change_percentage_24h',cryptocurrencyy.name);
        cryptocurrencyy.$itemm.find(".percent_change_24h").text(cryptocurrencyy.percent_change_24h);
        cryptocurrencyy.image = fetchNewDataa(newDataa,'image',cryptocurrencyy.name);
        // cryptocurrencyy.$itemm.find(".image").text(cryptocurrencyy.image).remove;
    }
    cryptocurrenciess.sort(ascendingg);
    updateRankss(cryptocurrenciess);
    repositionn();
    // console.log('Finished retrieving new data');
    
}
function getRandomScoreIncreasee() {
    return getRandomBetweenn(50, 150);
}
function getRandomBetweenn(minimum, maximum) {
        return Math.floor(Math.random() * maximum) + minimum;
}



function resetBoardd() {
    var $listt = $("#cryptocurrencies2");
    $listt.find(".cryptocurrency").remove();
    if(timerIdd !== undefined) {
        clearIntervall(timerIdd);
    }
    cryptocurrenciess = [];
    for(let i = 0;i < 100;i++){
        cryptocurrenciess.push(
            {
                image: data[i].image,
                name : data[i].name,
                symbol: data[i].symbol,
                price: data[i].current_price,
                market_cap: data[i].market_cap,
                circulating_supply: Math.round(data[i].circulating_supply),
                volume_24h: data[i].total_volume,
                percent_change_24h: data[i].market_cap_change_percentage_24h,
            }
        )
        
    };

    
    
    for(var i = 0; i < cryptocurrenciess.length; i++) {
        var $itemm = $(
            "<tr class='cryptocurrency fade-in'>" + 
                "<th class='rank'>" + (i + 1) + "</th>" + 
                "<td class='image'>"  + "<img src=" +cryptocurrenciess[i].image + ">" + "</td>" +
                "<td class='name'>" + cryptocurrenciess[i].name + "</td>" + 
                "<td class='symbol'>"   + cryptocurrenciess[i].symbol + "</td>" + 
                "<td class='price'>" + cryptocurrenciess[i].price.toFixed(2) + "</td>" + 
                "<td class='market_cap'>" + cryptocurrenciess[i].market_cap + "</td>" + 
                "<td class='circulating_supply'>" + cryptocurrenciess[i].circulating_supply + "</td>" + 
                "<td class='volume_24h'>" + cryptocurrenciess[i].volume_24h + "</td>" + 
                "<td class='percent_change_24h'>" + cryptocurrenciess[i].percent_change_24h + "</td>" +
            "</tr>"
        );



        console.log(cryptocurrenciess[1].image);
        cryptocurrenciess[i].$itemm = $itemm;
        $listt.append($itemm);
        
    }
    cryptocurrenciess.sort(ascendingg);
    updateRankss(cryptocurrenciess);
    repositionn();
    
    // fetch new data for the updateIntervall
    timerIdd = setInterval("getNewDataa();", updateIntervall);

}	
resetBoardd();

//display rest on see more

const cryptoList = document.querySelectorAll('#cryptocurrencies.cryptocurrency.rank');
// const cryptoView = document.querySelectorAll('.cryptocurrency');
// const rank = document.querySelectorAll('.rank');

console.log(cryptoList.length);

for(var i=0; i < cryptoList.length; i++) {
    if (cryptoList[i].value > 20) {
        cryptoList[i].style.display = none;
     };
};

// if (rank.contains > 20) {
//     rank.style.display = 'none'
// };


//Observer

const faders = document.querySelectorAll('.fade-in');
const sliderIns = document.querySelectorAll('.slide-in');
const sliderOuts = document.querySelectorAll('.slide-out');
const jumpers = document.querySelectorAll('.jump-in');


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver (function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliderIns.forEach(sliderIn => {
    appearOnScroll.observe(sliderIn);
});

sliderOuts.forEach(sliderOut => {
    appearOnScroll.observe(sliderOut);
});

jumpers.forEach(jumper => {
    appearOnScroll.observe(jumper);
});

// toggle price column

const popularCoinTitle = document.querySelector('.popular-coins');
const topGainerTitle = document.querySelector('.top-Gainers');
const topLoserTitle = document.querySelector('.top-losers');

const popularCoinList = document.querySelector('.price-column-box');
const topGainerList = document.getElementById('leaderboard');
const topLoserList = document.getElementById('leaderboard2');

popularCoinTitle.addEventListener('click', () => {
    popularCoinList.classList.remove('activated');
    topGainerList.classList.remove('activated');
    topLoserList.classList.remove('activated');
    popularCoinTitle.style.backgroundColor = 'var(--transparent-light-color)';
    topLoserTitle.style.backgroundColor = 'var(--primary-background-color)';

});

topGainerTitle.addEventListener('click', () => {
    popularCoinList.classList.add('activated');
    topGainerList.classList.add('activated');
    topLoserList.classList.remove('activated');
});

topLoserTitle.addEventListener('click', () => {
    popularCoinList.classList.add('activated');
    topGainerList.classList.remove('activated');
    topLoserList.classList.add('activated');
    topLoserTitle.style.backgroundColor = 'var(--transparent-light-color)';
    popularCoinTitle.style.backgroundColor = 'var(--primary-background-color)';
});


//Autoplay swiper

var swiper = new Swiper('.swiper-5', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev' },
  
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true } });