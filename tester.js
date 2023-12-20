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
function populateVocabList() {
    createChapterOptions("vocabstart");
    createChapterOptions("vocabend", 40);
}

function populateAllLists() {
    populateVocabList();
}
addEventListener("load", populateAllLists);