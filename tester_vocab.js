function paramVal(name, def) {
    return url.searchParams.has(name) ? url.searchParams.get(name) : def;
}

function paramNumVal(name, def) {
    return url.searchParams.has(name) ? Number.parseInt(url.searchParams.get(name)) : def;
}

var url = new URL(location.href);
var all = paramVal("test", 0);
var start = paramNumVal("start", 1);
var end = paramNumVal("end", 40);
var english = paramVal("english", "yes");
if (end < start)
    end = start;

function checkEnglish(correct, guess) {
    var answers = correct.toLowerCase().replace(/ ?\([^\)]*\) ?/g, "").replace(/;/g, ",").split(",");
    var minguess = guess.toLowerCase().replace(/^(a|an|the|to) /, "").replace(/ ?\([^\)]*\) ?/g, "").replace(/!/g, "");
    for (i = 0; i < answers.length; i++) {
        var a = answers[i].replace(/!/g, "").replace(/^ */, "").replace(/ *$/, "").replace(/^(a|an|the|to) /, "");
        if (a == minguess) {
            return true;
        }
    }
    return false;
}

function checkLatin(correct, guess) {
    var answers = correct.replace(/ ?\([^\)]*\) ?/g, "").replace(/;/g, ",").split(",");
    if (answers[0] == "-") {
        return (guess.toLowerCase() == answers[1].replace(/^ +/, "").toLowerCase());
    } else {
        return (guess.toLowerCase() == answers[0].toLowerCase());
    }
}

function checkAnswer(num) {
    var check = document.getElementById("check" + num);
    var result = document.getElementById("result" + num);
    var correct = false;

    if (english == "yes") {
        correct = checkEnglish(check.name, check.value);
    } else {
        correct = checkLatin(check.name, check.value);
    }

    if (correct) {
        result.innerHTML = "<font color=\"green\">Correct!</font> " + check.name;
		check.disabled = true; //disable the input
    } else {
        result.innerHTML = "<font color=\"red\">Incorrect!</font> " + check.name;
		check.disabled = true; //disable the input
    }

    return false;
}

function createChapterOptions(id, selected) {
    var selector = document.getElementById(id);
    for (var i = 1; i <= 40; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.text = i;
        opt.selected = (i === selected);
        selector.appendChild(opt);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function buildTable() {
    var vocabtable = document.getElementById("vocabtable");

    var list = vocab.filter((e) =>
        e.chapter >= start && e.chapter <= end &&
            e.type != "adjective, ordinal" &&
            e.type != "adjective. cardinal");
    shuffle(list);
    //if (start != end && all != 'all') //remove this because you should be doing all tests, no only 10 word stuff
        //list.splice(10);

    list.forEach((word, idx) => {
        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.valign = "top";
        var answer;
        if (english == 'yes') {
            td.innerText = word.latin;
            answer = word.english;
        } else {
            td.innerText = word.english;
            answer = word.latin;
        }
        if (word.gender)
            td.innerText += ` (${word.gender}.)`;
        else if (word.type != 'verb')
            td.innerText += ` (${word.type})`;
        tr.appendChild(td);

        td = document.createElement("td");
        td.valign = "bottom";
        tr.appendChild(td);

        var form = document.createElement("form");
        form.autocomplete = false;
        form.autocorrect = false;
        form.spellcheck = false;
        form.onsubmit = (() => { return checkAnswer(idx); });
        td.appendChild(form);

        var input = document.createElement("input");
        input.name = answer;
        input.id = `check${idx}`;
        input.type = "text";
        input.autocomplete = false;
        input.autocorrect = false;
        input.spellcheck = false;
        form.appendChild(input);

        var label = document.createElement("label");
        label.id = `result${idx}`;
        form.appendChild(label);

        vocabtable.appendChild(tr);
    });
}
function checkCookieExists(cookieName) {
  const cookieString = document.cookie;
  const cookieParts = cookieString.split('; ');
  for (const part of cookieParts) {
    if (part.startsWith(cookieName + '=')) {
      return true;
    }
  }
  return false;
}
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
function initTester() {
	//create cookies in case they arent already added and create the prompt
	if (start == end) {
		if (checkCookieExists(`${start}`) == false) {
			document.cookie = `${start}=0`; //add the cookie
			const timesCompleted = getCookieValue(start); //get the value of the cookie
			document.getElementById('tester_chapters').innerText = `You have completed chapter ${start} vocab ${timesCompleted} times`;
		}
		const timesCompleted = getCookieValue(start); //get the value of the cookie
		document.getElementById('tester_chapters').innerText = `You have completed chapter ${start} vocab ${timesCompleted} times`;
	}
	else {
		if (checkCookieExists(`${start}to${end}`) == false) {
			document.cookie = `${start}to${end}=0`; //add the cookie
			const timesCompleted = getCookieValue(start + "to" + end); //get the value of the cookie
			document.getElementById('tester_chapters').innerText = `You have completed chapters ${start} through ${end} vocab ${timesCompleted} times`;
		}
		const timesCompleted = getCookieValue(start + "to" + end); //get the value of the cookie
		document.getElementById('tester_chapters').innerText = `You have completed chapters ${start} through ${end} vocab ${timesCompleted} times`;
	}
}
function areAllInputsDisabled() {
	const allInputs = document.querySelectorAll("input");
	const nonQuizInputs = Array.from(allInputs).filter(input => input.value !== "Quiz"); //that one quiz button at the bottom of the page
	return nonQuizInputs.every((input) => input.disabled);
}
function testerButton() {
	if (areAllInputsDisabled() == true) {
		if (document.body.innerHTML.includes("Incorrect!") == false) {
			if (start == end) {
				let currentCookieValue = parseInt(getCookieValue(start)) + 1
				watchCookies = false
				watchElementValue = false
				document.cookie = `${start}=${currentCookieValue}`
				location.reload(); //reload the page so you can do it again
			}
			else {
				let currentCookieValue = parseInt(getCookieValue(start + "to" + end)) + 1
				watchCookies = false
				watchElementValue = false
				document.cookie = `${start}to${end}=${currentCookieValue}`
				location.reload(); //reload the page so you can do it again
			}
		}
		else {
			alert('You got something wrong!');
		}
	}
	else {
		alert('You did not answer all questions!');
	}
}
function punish() {
	//stop watching
	watchElementValue = false
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
let watchElementValue = true //change whether to activate punishment if element is changed
function watchElement() {
	if (watchElementValue == true) {
		if (start == end) {
			const timesCompleted = getCookieValue(start);
			if (document.getElementById('tester_chapters') == null) {
				punish()
			}
			else if (document.getElementById('tester_chapters').innerText != `You have completed chapter ${start} vocab ${timesCompleted} times`) {
				punish()
			}
		}
		else {
			const timesCompleted = getCookieValue(start + "to" + end);
			if (document.getElementById('tester_chapters') == null) {
				punish()
			}
			else if (document.getElementById('tester_chapters').innerText != `You have completed chapters ${start} through ${end} vocab ${timesCompleted} times`) {
				punish()
			}
		}
	}
}
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
//watch disabled inputs by just adding up the amount of correct and incorrect and if they dont match amount of disabled inputs, we know something is up
function countElementsWithText(text) {
  let count = 0;
  for (const element of document.querySelectorAll("*")) {
    if (element.textContent === text) {
      count++;
    }
  }
  return count;
}
function checkInputs() {
	const disabledInputCount = document.querySelectorAll('input:disabled').length;
	const countStr1 = countElementsWithText('Correct!');
	const countStr2 = countElementsWithText('Incorrect!');
	const totalOccurrences = countStr1 + countStr2;
	if (disabledInputCount != totalOccurrences) {
		punish()
	}
}
function buildPage() {
	if (getCookieValue('hasCheated') == "true") {
		window.location.href = "about:blank"
	}
    if (start == end)
        document.getElementById('chapters').innerText = `Chapter ${start}`;
    else
        document.getElementById('chapters').innerText = `Chapters ${start} through ${end}`;
    createChapterOptions('verbsstart', start);
    createChapterOptions('verbsend', end);
    GetVocab(buildTable);
	initTester(); //start testing
	setInterval(watchElement, 1000); //watch the element for cheaters
	setInterval(checkInputs, 1000); //watch the inputs for cheaters
	//prevent right click for inspect element
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
addEventListener("load", buildPage);