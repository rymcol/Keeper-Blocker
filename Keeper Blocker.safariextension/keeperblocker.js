function findTheKeeper() {
	var theURI = window.location.href;

	var itsTheKeeper = theURI.match('mackeeper\.(com|net|org)');

	if (itsTheKeeper) {

		var theDocList = document.getElementsByTagName('html');
	
		theDocList.length;
		theDocList[0].style.display = 'none';
		
		if (confirm("This website may be harmful and will be closed")) {
			var closeMessage = "close-tab";
			safari.self.tab.dispatchMessage("Close",closeMessage);
	 	}

	}
	
}

findTheKeeper();