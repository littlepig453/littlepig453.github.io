function getCookieValue(cookieName) {
  const cookieString = document.cookie;
  const name = cookieName + '=';
  const parts = cookieString.split('; ');
  for (const part of parts) {
    if (part.startsWith(name)) {
      return part.substring(name.length);
    }
  }
  return null;
}
function check() {
	if (getCookieValue('hasCheated') == "true") {
		window.location.href = "about:blank"
	}
}
addEventListener("load", check);
//prevent right click for inspect element
function disableStuff() {
	document.body.addEventListener('contextmenu', function(e) {
		e.preventDefault();
		return false;
	});
	//prevent control+shift+i, dev tools
	document.addEventListener('keydown', function(event) {
		if (event.ctrlKey && event.shiftKey && event.key === 'I') {
			event.preventDefault();
		}
	});
}
addEventListener("load", disableStuff)
function punish() {
	//stop watching
	watchCookies = false
	//wipe page
	document.body.innerHTML = '';
	//wipe cookies
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].split('=')[0];
		document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
	}
	document.cookie = "hasCheated=true"; //add cheater cookie
	window.location.href = "about:blank" //move cheater to empty page
}
//watch cookies
let watchCookies = true //change whether to activate punishment if cookies are changed
//watch cookies
const initialCookies = {};
window.addEventListener('load', () => {
	const cookies = document.cookie.split('; ');
	for (const cookie of cookies) {
		const [name, value] = cookie.split('=');
		initialCookies[name] = value;
	}
});
setInterval(() => {
	const cookies = document.cookie.split('; ');
	for (const cookie of cookies) {
		const [name, value] = cookie.split('=');
		if (initialCookies[name] !== value) {
			if (watchCookies == true) {
				if (value != "0") {
					punish()
				}
			}
		}
	}
}, 1000);