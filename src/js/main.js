var tab = document.getElementsByClassName('details__tab');
var tabContent = document.getElementsByClassName('details__item');
var tabs = document.getElementById('tabs');

window.addEventListener("load", function() {
    hideTabsContent(1);
});

//hide class 'active', class 'show'; add class 'hide'
function hideTabsContent(a) {
	for (var i = a, max = tabContent.length; i < max; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('active');
	}
}

//event 'click' for block 'details'
tabs.onclick = function (event) {
	var target = event.target;
	if (target.className == 'details__tab') {
		for (var i = 0, max = tab.length; i < max; i++) {
			if (target == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
};

//add class 'active', class 'add'; hide class 'hide'
function showTabsContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('active');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

