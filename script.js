let textArea = document.getElementById('textarea');
let saveText = document.getElementById('saveStatus');
let body = document.getElementById('body');
let btn = document.getElementById("dark");
let resetButton = document.getElementById("reset");





textArea.addEventListener('input', () => {
    let text = textArea.value;
    localStorage.setItem('text', text);
});

resetButton.addEventListener('click', () => {
    localStorage.clear();
    textArea.value = ''; // Corrected this line
    // saveText.innerHTML = 'Text area cleared!';
});


btn.addEventListener('click', () => {
    if (btn.innerHTML === "Light Mode") {
        toggleLightMode();
    } else {
        toggleDarkMode();
    }
    
})

function toggleDarkMode() {
    body.style.backgroundColor = "#1E201E"
    body.style.color = "#ffffff"
    textArea.style.backgroundColor = "#3C3D37"
    textArea.style.color = "#ffffff"
    container.style.backgroundColor = "#3C3D37"
    btn.style.backgroundColor = "#ffffff";
    btn.style.color = "#1E201E";
    btn.innerHTML = "Light Mode"
}

function toggleLightMode() {
    body.style.backgroundColor = "#ffffff"
    body.style.color = "#000000"
    textArea.style.backgroundColor = "#ffffff"
    textArea.style.color = "#000000"
    container.style.backgroundColor = "#ffffff"
    btn.style.backgroundColor = "#1E201E";
    btn.style.color = "#ffffff";
    btn.innerHTML = "Dark Mode"
}

