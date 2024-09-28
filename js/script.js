
const signInBtn = document.querySelector('#signIn');
const membersSection = document.querySelector('#members');

signInBtn.addEventListener('click', () => {
    const memberName = prompt('Enter member name:');
    if (memberName) {
        const memberItem = document.createElement('li');
        memberItem.textContent = memberName;
        membersSection.appendChild(memberItem);
    }
});



const addMusicBtn = document.querySelector('#addMusic');
const darkModeBtn = document.querySelector('#toggle-btn');
const btnColor = document.querySelectorAll('.buttons')


function toggleDarkMode() {
    const mode = localStorage.getItem('mode');

    if (mode === 'light') {
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
        btnColor.forEach(button => {
            button.classList.remove('btn-info');
            button.classList.add('btn-outline-warning');
        });
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
        btnColor.forEach(button => {
            button.classList.remove('btn-outline-warning');
            button.classList.add('btn-info');
        });
    }
}


function pageLoad() {
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        document.body.classList.add('dark');
        btnColor.forEach(button => {
            button.classList.add('btn-outline-warning');
            button.classList.remove('btn-info');
        });
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
        btnColor.forEach(button => {
            button.classList.remove('btn-outline-warning');
            button.classList.add('btn-info');
        });
    }


    darkModeBtn.addEventListener('click', toggleDarkMode);
    // addBtn.addEventListener('click', addStudent);
}


pageLoad();

