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
    story: {
        title: 'داستان سریال بی گناه',
        text: 'بهمن مردانی بعد از ۲۵ سال برای پیدا کردن عشق گمشده اش به تهران باز میگردد.',
    },
    about_series: {
        title: 'درباره سریال بی گناه',
        text: 'سریال بی گناه به کارگردانی مهران احمدی در سال 1400 ساخته شده است. این سریال محصول کشور ایران و در ژانر خانوادگی و درام می‌باشد. در این سریال محسن کیایی، ویشکا آسایش، شبنم مقدمی، مهران احمدی، ماهور الوند، آتیلا پسیانی، نسرین نصرتی، حسین پورکریمی، هدیه بازوند، نوید لایقی مقدم، منوچهر زنده دل، دنیا مدنی، مبینا طبایی، مهران وثوقی، مسعود رایگان، مهرانه مهین ترابی، رویا تیموریان، باران احمدی، احسان معجونی و یگانه رادبخش به هنرمندی پرداخته‌اند.',
    },
    actors: {
        title: 'بازیگران سریال بی گناه',
        mohsenKiaei: {
        fullName: 'محسن کیایی',
        image: 'images/mohsen-kiaei-1-s.jpg',
        },
        vishkaAsaiesh: {
            fullName: 'ویشکا آسایش',
            image: 'images/vishka-asayesh-1-s.jpg',
        },
        shabnamMoghadami: {
            fullName: 'شبنم مقدمی',
            image: 'images/shabnam-moghadmi-1-s.jpg',
        },
        mehranAhmadi: {
            fullName: 'مهران احمدی',
            image: 'images/mehran-ahmadi-1-s.jpg',
        }, 
        mahvarAlvand: {
            fullName: 'ماهور الوند',
            image: 'images/mahvar-alvand-1-s.jpg',
        }, 
        atilaPesiani: {
            fullName: 'آتیلا پسیانی',
            image: 'images/atila-pesiani-1-s.jpg',
        }, 
        nasrinNosrati: {
            fullName: 'نسرین نصرتی',
            image: 'images/nasrin-nosrati-1-s.jpg',
        }, 
        hoseinPurkarimi: {
            fullName: 'حسین پورکرمی',
            image: 'images/hosein-purkaram-1-s.jpg',
        }, 
        hadieBazvand: {
            fullName: 'هدیه بازوند',
            image: 'images/hadie-bazvand-1-s.jpg',
        }, 
        navidLaieghiMoghadam: {
            fullName: 'نوید لایقی مقدم',
            image: 'images/navid-laieghi-1-s.jpg',
        }, 
        manoochehreZendeDel: {
            fullName: 'منوچهر زنده دل',
            image: 'images/manuchehr-zendedel--s.jpg',
        }, 
        doniaMadani: {
            fullName: 'دنیا مدنی',
            image: 'images/donia-madani-1-s.jpg',
        }, 
        mobinaTabaei: {
            fullName: 'مبینا طبایی',
            image: 'images/mobina-tabatabaei-1-s.jpg',
        }, 
        mehranVosooghi: {
            fullName: 'مهران وثوقی',
            image: 'null',
        }, 
        masudRaiegan: {
            fullName: 'مسعود رایگان',
            image: 'images/maseud-raiegan-1-s.jpg',
        }, 
        mehraneMahinTorabi: {
            fullName: 'مهرانه مهین ترابی',
            image: 'images/mehrane-mahin-torabi-1-s.jpg',
        }, 
        roiaTeimoorian: {
            fullName: 'رویا تیموریان',
            image: 'images/roya-teymoorian-1-s.jpg',
        },
        baranAhmadi: {
            fullName: 'باران احمدی',
            image: 'images/baran-ahmadi-1-s.jpg',
        },
        ehsanMaejooni: {
            fullName: 'احسان معجونی',
            image: 'images/ehsan-mejooni-1-s.jpg',
        },
        yeganeRadbakhsh: {
            fullName: 'یگانه رادبخش',
            image: 'null',
        },
    },
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
var aboutDiv = document.getElementById('about');
// console.log(innocentSeries.poster)
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
// story: {
//         title: 'داستان سریال بی گناه',
//         text: 'بهمن مردانی بعد از ۲۵ سال برای پیدا کردن عشق گمشده اش به تهران باز میگردد.',
//     },
//     about_series: {
//         title: 'درباره سریال بی گناه',
//         text: 'سریال بی گناه به کارگردانی مهران احمدی در سال 1400 ساخته شده است. این سریال محصول کشور ایران و در ژانر خانوادگی و درام می‌باشد. در این سریال محسن کیایی، ویشکا آسایش، شبنم مقدمی، مهران احمدی، ماهور الوند، آتیلا پسیانی، نسرین نصرتی، حسین پورکریمی، هدیه بازوند، نوید لایقی مقدم، منوچهر زنده دل، دنیا مدنی، مبینا طبایی، مهران وثوقی، مسعود رایگان، مهرانه مهین ترابی، رویا تیموریان، باران احمدی، احسان معجونی و یگانه رادبخش به هنرمندی پرداخته‌اند.',
//     },

var aboutDiv = document.getElementById('about');
var storyAboutDiv = document.getElementById('about-story')
var storyTitle = document.createElement('h3');
var stroyTxt = document.createElement('p');
var storyAboutTitle = document.createElement('h3');
var storyAboutTxt = document.createElement('p');
// var html = '';
for(var k in innocentSeries) {
    if(k == 'story') {
        var obj = innocentSeries[k];
        for(var kk in obj) {
            if(kk == 'title') {
                storyTitle.innerHTML = obj[kk];
            }
            if(kk == 'text') {
                stroyTxt.innerHTML = obj[kk];
            }
        }
}
    if(k == 'about_series') {
        var obj = innocentSeries[k];
        for(var kk in obj) {
            if(kk == 'title') {
                storyAboutTitle.innerHTML = obj[kk];
            }
            if(kk == 'text') {
                storyAboutTxt.innerHTML = obj[kk];
            }  
      }
   } 
}
aboutDiv.appendChild(storyTitle);
aboutDiv.appendChild(stroyTxt);
storyAboutDiv.appendChild(storyAboutTitle);
storyAboutDiv.appendChild(storyAboutTxt);
