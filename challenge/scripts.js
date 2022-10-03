function getUserInfo(){
    croct.fetch('home-banner').then(contents => {
        document.getElementById('titleCroct').innerHTML = String(contents.payload.title),
        document.getElementById('subtitleCroct').innerHTML = String(contents.payload.subtitle),
        document.getElementById('btnCroct').innerHTML = String(contents.payload.cta.label)
    });

    let link ='img/none.png';

    croct.evaluate(`user's persona`).then(profile =>{
        if(String (profile)=='developer'){
            link = 'img/developer.png'
        }else if(String (profile)=='marketer'){
            link = 'img/marketer.png'
        }else if(String (profile)=='growth-hacker'){
            link = 'img/growth-hacker.png'
        }
        document.getElementById('imgCroct').src=link;
    })
}
function demoCroct(){
    croct.fetch('home-banner').then(contents => {
        window.location.href=String(contents.payload.cta.link)
    })
}

