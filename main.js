var innocentSeries = {
    poster: 'images/movie-inoccent.jpg',
    title: 'سریال بی گناه',
    en_title: 'innocent',
    imbd: '10/5.3',
    user_rate: '(594,054)',
    user_likes: '% 94',
    age_rate: 'مناسب برای بالای 12 سال',
    time_of_show: 'یکشنبه‌ها، ساعت 8 صبح',
    director: 'مهران احمدی',
    made_in: 'محصول ایران - ',
    date_of_product: '1400',
    genre: {
        first: ' خانوادگی',
        second: 'درام ',
    },
    last_episode: 'فصل 1 قسمت 17',
}
var wrapperHeaderId = document.getElementById('wrapper');
var headerId = document.getElementById('banner-left');

var imgPoster = document.getElementById('poster');
var pTitle  = document.getElementById('h2');
var pEnTitle = document.createElement('h4');
var spanImdb = document.createElement('p');
var imgLikeIcon = document.createElement('img');
imgLikeIcon.setAttribute('src','images/like-svgrepo-com.svg');
imgLikeIcon.setAttribute('class', 'banner-like-icon');
var bannerImdbUserRate = document.createElement('div');
bannerImdbUserRate.setAttribute('class', 'banner-imdb-userRate');

var spanUserRate = document.createElement('p');
var pAgeRate = document.createElement('p');
pAgeRate.setAttribute('class', 'banner-age-rate');
var imgAgeRate = document.createElement('img');
imgAgeRate.setAttribute('src', 'images/12-plus-svgrepo-com.svg')
imgAgeRate.setAttribute('class', 'banner-age-rate-icon');
var pTimeOfShow = document.createElement('p');
pTimeOfShow.setAttribute('class', 'banner-time-of-show');
var imgTimeOfShow = document.createElement('img');
imgTimeOfShow.setAttribute('src','images/date-outline-badged-svgrepo-com.svg')
imgTimeOfShow.setAttribute('class', 'banner-time-of-show-icon');
var pDirector = document.createElement('p');
var pMadeIn = document.createElement('p');
var pDateOfProduct = document.createElement('span');

imgPoster.setAttribute('src', innocentSeries.poster); 
wrapperHeaderId.appendChild(imgPoster);

pTitle.innerHTML = innocentSeries.title;
headerId.appendChild(pTitle);

pEnTitle.innerHTML = innocentSeries.en_title;
headerId.appendChild(pEnTitle);


var userLikesSpan = document.createElement('span');
userLikesSpan.innerHTML = ' ' + innocentSeries.user_likes + ' ' ;

spanUserRate.innerHTML = innocentSeries.user_rate;
var imgImdbIcon = document.createElement('img');
imgImdbIcon.setAttribute('src','images/imdb.svg');
imgImdbIcon.setAttribute('class', 'banner-imdb-icon');

spanUserRate.appendChild(userLikesSpan);   
spanUserRate.appendChild(imgLikeIcon);

bannerImdbUserRate.appendChild(spanUserRate);

spanImdb.innerHTML =  innocentSeries.imbd;
spanImdb.appendChild(imgImdbIcon)
bannerImdbUserRate.appendChild(spanImdb);

headerId.appendChild(bannerImdbUserRate);
pAgeRate.innerHTML = innocentSeries.age_rate;
pAgeRate.appendChild(imgAgeRate);

headerId.appendChild(pAgeRate);

pTimeOfShow.innerHTML = innocentSeries.time_of_show;
pTimeOfShow.appendChild(imgTimeOfShow);
headerId.appendChild(pTimeOfShow);

pDirector.innerHTML = 'کارگردان: ' + innocentSeries.director;
headerId.appendChild(pDirector);

pMadeIn.innerHTML = innocentSeries.made_in;
pDateOfProduct.innerHTML = innocentSeries.date_of_product;
pMadeIn.appendChild(pDateOfProduct);
headerId.appendChild(pMadeIn);

// ////////////////////////////////////////////////////////////////////////////////////////
var str = '';
var footerHeader = document.getElementById('footer-header');
for(var k in innocentSeries) {
    if( k == 'genre') { 
        var obj = innocentSeries[k];
        for(var kk in obj) {
            str += '<p>' + "   " + obj[kk] + "   " +  '</p>';  
        }
    } 
}
footerHeader.innerHTML = str;
var lastEpisode = document.createElement('span');
lastEpisode.innerHTML = innocentSeries.last_episode;
footerHeader.appendChild(lastEpisode);

var descriotionShowMore = document.querySelector('.description-show-more');
function showMoreDescription(cls) {
    cls.style.display = 'none';
    }

descriotionShowMore.addEventListener('click', () => {
    showMoreDescription(descriotionShowMore);
}); 



