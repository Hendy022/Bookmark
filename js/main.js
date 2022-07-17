var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var alertName = document.getElementById("alertName");
var alertUrl = document.getElementById("alertUrl");
var siteContainer;

if (localStorage.getItem('myWebsites') != null) {
    siteContainer = JSON.parse(localStorage.getItem('myWebsites'));
    displayProduct(siteContainer)

}
else {
    siteContainer = [];
}

function subSite() {
    var rejexName = /^[A-Za-z]+\s?[A-Za-z]*$/
    var rejexUrl = /www.[a-z]+[0-9]*.com$/
    var alertName = document.getElementById("alertName");
    var alertUrl = document.getElementById("alertUrl");

    if (rejexName.test(siteName.value) == true & rejexUrl.test(siteURL.value) == true) {
        alertName.classList.add("d-none");
        alertUrl.classList.add("d-none");
        var website =
        {
            name: siteName.value,
            url: siteURL.value,
        }
        siteContainer.push(website);
        console.log(siteContainer);
        localStorage.setItem('myWebsites', JSON.stringify(siteContainer));
        clearForm();
        displayProduct(siteContainer);

    } else if (rejexUrl.test(siteURL.value) == true & rejexName.test(siteName.value) == false) {
        alertName.classList.remove("d-none");
    } else if (rejexUrl.test(siteURL.value) == false & rejexName.test(siteName.value) == false) {

        alertName.classList.remove("d-none");
        alertUrl.classList.remove("d-none");
    } else if (rejexUrl.test(siteURL.value) == false & rejexName.test(siteName.value) == true) {
        alertUrl.classList.remove("d-none");

    }



}
function clearForm() {
    siteName.value = '';
    siteURL.value = '';
}
function displayProduct(siteContainer) {
    var cartoonaa = ``;
    for (var i = 0; i < siteContainer.length; i++) {
        cartoonaa += `
        <div class="w-75 m-auto visit d-flex" id="">
            <h2 class="w-25 text-start">${siteContainer[i].name}</h2>
            <a class="btn btn-primary m-2" href="${siteContainer[i].url}" target="_blank">visit</a>
            <button class="btn-sm btn-danger m-2" onclick="deleteSite(${i})">Delete</button>
        </div>`
        document.getElementById("list").innerHTML = cartoonaa;
    }
}

function deleteSite(deleteIndex) {
    siteContainer.splice(deleteIndex, 1);
    localStorage.setItem('myWebsites', JSON.stringify(siteContainer));
    displayProduct(siteContainer)
    
}

