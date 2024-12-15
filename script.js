
function toggleAbout() {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}

function toggleSignIn() {
    const signInModal = document.getElementById('signin-modal');
    const signUpModal = document.getElementById('signup-modal');
    signInModal.style.display = (signInModal.style.display === 'none' || signInModal.style.display === '') ? 'flex' : 'none';
    signUpModal.style.display = 'none';
}

function toggleSignUp() {
    const signInModal = document.getElementById('signin-modal');
    const signUpModal = document.getElementById('signup-modal');
    signUpModal.style.display = 'flex';
    signInModal.style.display = 'none'; 
}

function toggleToSignUp() {
    toggleSignUp();
}

function toggleToSignIn() {
    toggleSignIn();
}

function signIn(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log(`Sign In - Email: ${email}, Password: ${password}`);
    
    alert('Sign In successful!');
    toggleSignIn();
}

function signUp(event) {
    event.preventDefault(); 
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;
    
    console.log(`Sign Up - Email: ${newEmail}, Password: ${newPassword}`);
    
    alert('Sign Up successful!');
    toggleSignUp();
}

function toggleContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
}
function planTrip() {
    const fromCity = document.getElementById('from-city').value;
    const toCity = document.getElementById('to-city').value;

    if (fromCity && toCity) {
        const redBusUrl = `https://www.redbus.in/search?fromCity=${encodeURIComponent(fromCity)}&toCity=${encodeURIComponent(toCity)}`;
        window.open(redBusUrl, '_blank');
    } else {
        alert('Please enter both cities to plan your trip.');
    }
}


