
	// Obtains an array of all <link>
	// elements.
	// Select your element using indexing.
	// var theme = document.getElementsByTagName('link')[0];

	// // Change the value of href attribute 
	// // to change the css sheet.
	// if (theme.getAttribute('href') == 'style.css') {
	// 	theme.setAttribute('href', 'style2.css');
	// } else {
	// 	theme.setAttribute('href', 'style.css');
	// }
	const check = document.getElementById("check")

	if(localStorage.getItem('darkMode') ===null){
		localStorage.setItem('darkMode',"false")
	}

	// const link = document.createElement('link');
	// link.rel = 'stylesheet';
	// document.getElementsByTagName('HEAD')[0].appendChild(link);

	checkStatus()

	function checkStatus(){
		const link = document.getElementsByTagName('link')[0];
		if(localStorage.getItem('darkMode')==="true"){
			check.checked = true;
			link.href = "./style2.css";
		}else{
			check.checked = false;
			link.href='./style.css';
		}
	}
	
	function changeStatus(){
		const link = document.getElementsByTagName('link')[0];
		if(localStorage.getItem('darkMode')==="true"){
			localStorage.setItem('darkMode' , "false");
			link.href ='./style.css';
		}else{
			localStorage.setItem('darkMode', "true");
			link.href = './style2.css'
		}
	}
