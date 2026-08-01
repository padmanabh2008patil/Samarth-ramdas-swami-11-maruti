// index.html मधून निवडलेला मारुती
const marutiName = localStorage.getItem("marutiName");

// maruti.html वर नाव दाखवा
const title = document.getElementById("marutiName");

if(title){
    title.innerHTML = "🛕 " + marutiName;
}

// माहिती बटण
function openInfo(){
    localStorage.setItem("page","info");
    window.location.href="info.html";
}

// फोटो बटण
function openPhoto(){
    localStorage.setItem("page","photo");
    window.location.href="photo.html";
}

// Location बटण
function openLocation(){
    localStorage.setItem("page","location");
    window.location.href="location.html";
}

// इतर माहिती बटण
function openOther(){
    localStorage.setItem("page","other");
    window.location.href="other.html";
}
