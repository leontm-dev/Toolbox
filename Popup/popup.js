// Changer

// pageTabs

document.getElementById("pageTabs-controlRight").addEventListener("click", (ev) => {
    document.getElementById("pageTabs").classList.add("hide");
    document.getElementById("pageBookmarks").classList.remove("hide");
});
document.getElementById("pageTabs-controlLeft").addEventListener("click", (ev) => {
    document.getElementById("pageTabs").classList.add("hide");
    document.getElementById("page").classList.remove("hide");
});

// pageBookmarks

document.getElementById("pageBookmarks-controlRight").addEventListener("click", (ev) => {
    document.getElementById("pageBookmarks").classList.add("hide");
    document.getElementById("page").classList.add("hide");
});
document.getElementById("pageBookmarks-controlLeft").addEventListener("click", (ev) => {
    document.getElementById("pageBookmarks").classList.add("hide");
    document.getElementById("pageTabs").classList.remove("hide");
});

// Donations

// pageTabs

document.getElementById("pageTabs-donate").addEventListener("click", (ev) => {
    window.open("https://www.buymeacoffee.com/leontm");
});

//pageBookmarks

document.getElementById("pageBookmarks-donate").addEventListener("click", (ev) => {
    window.open("https://www.buymeacoffee.com/leontm");
});

//Pages

// pageTabs

function addTab(icon, title, url) {
    let pageTab = document.createElement("div");
    let pageTabIcon = document.createElement("img");
    let pageTabTitle = document.createElement("div");
    let pageTabLink = document.createElement("img");
    pageTab.classList.add("pageTabs-tab");
    pageTab.title = url;
    pageTabIcon.src = icon;
    pageTabIcon.classList.add("pageTabs-tab-icon");
    pageTabLink.classList.add("pageTabs-tab-link");
    pageTabLink.src = "/Images/Blau/Share.png";
    pageTabTitle.classList.add("pageTabs-tab-title");
    pageTabTitle.innerText = title;
    pageTab.appendChild(pageTabIcon);
    pageTab.appendChild(pageTabLink);
    pageTab.appendChild(pageTabTitle);
    document.getElementById("pageTabs-tabs").appendChild(pageTab);
    pageTab.addEventListener("click", (ev) => {
        chrome.tabs.query({ "title": title }, (tab) => {
            chrome.tabs.highlight({ "tabs": tab[0].index }, (window) => {});
        });
    });
};
chrome.tabs.query({}, (tab) => {
    for (let i = 0; i < tab.length; i++) {
        addTab(tab[i].favIconUrl, tab[i].title, tab[i].url)
    }
});

// bookmarks

function addBookmark(icon, title, url) {
    let pageBookmark = document.createElement("div");
    let pageBookmarkIcon = document.createElement("img");
    let pageBookmarkTitle = document.createElement("div");
    let pageBookmarkDelete = document.createElement("img");
    pageBookmark.classList.add("pageTabs-tab");
    pageBookmark.title = url;
    pageBookmarkIcon.src = icon;
    pageBookmarkIcon.classList.add("pageTabs-tab-icon");
    pageBookmarkDelete.classList.add("pageTabs-tab-link");
    pageBookmarkDelete.src = "/Images/Blau/Share.png";
    pageBookmarkTitle.classList.add("pageTabs-tab-title");
    pageBookmarkTitle.innerText = title;
    pageBookmark.appendChild(pageBookmarkIcon);
    pageBookmark.appendChild(pageBookmarkDelete);
    pageBookmark.appendChild(pageBookmarkTitle);
    document.getElementById("pageTabs-tabs").appendChild(pageBookmark);
    pageBookmark.addEventListener("click", (ev) => {
        chrome.tabs.query({ "title": title }, (tab) => {
            chrome.tabs.highlight({ "tabs": tab[0].index }, (window) => {});
        });
    });
};
function deleteBookmark(title, icon, url) {
    
}