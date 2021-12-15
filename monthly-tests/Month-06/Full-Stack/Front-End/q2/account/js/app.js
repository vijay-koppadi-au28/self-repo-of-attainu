const email = document.getElementById('email');
const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const username = document.getElementById('username');


form.addEventListener('submit', e => {
	e.preventDefault();
	inputs();
});

function inputs() {

	const user_value = username.value.trim();
	const email_value = email.value.trim();
	const pass_value = password.value.trim();
	const confirmpass_value = confirmPassword.value.trim();  

	if(user_value === '') {
		ErrorFunc(username, 'Username blank hai');
	} else {
		SuccessFunc(username);
	}
	
	if(email_value === '') {
		ErrorFunc(email, 'Email blank hai');
	} else if (!isEmail(email_value)) {
		ErrorFunc(email, 'Email valid nhi hai');
	} else {
		SuccessFunc(email);
	}
	
	if(pass_value === '') {
		ErrorFunc(password, 'Password blank hai');
	} else {
		SuccessFunc(password);
	}
	
	if(confirmpass_value === '') {
		ErrorFunc(confirmPassword, 'Confirm Password blank hai');
	} else if(pass_value !== confirmpass_value) {
		ErrorFunc(confirmPassword, 'Password match nhi khaya');
	} else{
		SuccessFunc(confirmPassword);
        const datas = {
            user_name: user_value,
            email: email_value
        }
        console.log(datas);
	}
}

function ErrorFunc(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form_container error';
	small.innerText = message;
}

function SuccessFunc(input) {
	const formControl = input.parentElement;
	formControl.className = 'form_container success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}