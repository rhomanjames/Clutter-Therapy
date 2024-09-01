// script.js

document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Log In functionality not yet implemented.');
});

const sectionLinks = document.querySelectorAll('.section-link');
const sections = document.querySelectorAll('.section');

sectionLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).style.display = 'block';
    });
});

// Optional: Save checklist progress using Local Storage
document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const taskId = this.id;
        localStorage.setItem(taskId, this.checked);
    });
});

// Load checklist progress from Local Storage
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
        const taskId = checkbox.id;
        const checked = localStorage.getItem(taskId) === 'true';
        checkbox.checked = checked;
    });
});



function submitQuiz() {
    // Get user answers
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked')?.value,
        question2: document.querySelector('input[name="question2"]:checked')?.value,
        question3: document.querySelector('input[name="question3"]:checked')?.value,
        question4: document.querySelector('input[name="question4"]:checked')?.value,
        question5: document.querySelector('input[name="question5"]:checked')?.value,
        question6: document.querySelector('input[name="question6"]:checked')?.value,
        question7: document.querySelector('input[name="question7"]:checked')?.value,
        question8: document.querySelector('input[name="question8"]:checked')?.value,
        question9: document.querySelector('input[name="question9"]:checked')?.value,
        question10: document.querySelector('input[name="question10"]:checked')?.value
    };

    // Ensure all questions are answered
    if (Object.values(answers).includes(undefined)) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Initialize points
    let points = 0;

    // Calculate points based on answers
    if (answers.question1 === 'low-stress') points += 2;
    if (answers.question2 === 'young-kids') points += 3;
    if (answers.question3 === 'much-time') points += 2;
    if (answers.question4 === 'often-cook') points += 2;
    if (answers.question5 === 'never-change') points += 1;
    if (answers.question6 === 'minimalist') points += 2;
    if (answers.question7 === 'high-comfort') points += 2;
    if (answers.question8 === 'often-entertain') points += 3;
    if (answers.question9 === 'minimal-decor') points += 1;
    if (answers.question10 === 'low-maintenance') points += 2;

    // Determine style based on points
    let style;
    if (points <= 10) {
        style = 'Minimalist Style: You prefer a clean, organized space with minimal decor and low maintenance. This style emphasizes simplicity and functionality, often using a neutral color palette and sleek, unobtrusive furniture. The focus is on creating a clutter-free environment that promotes calm and relaxation. Minimalist homes are perfect for those who thrive in serene, orderly spaces where every item has a purpose and contributes to the overall harmony of the room.';
    } else if (points <= 15) {
        style = 'Modern Style: You enjoy a balance of functionality and style with moderate upkeep. Modern design combines clean lines and open spaces with a mix of natural and industrial materials. It often features a blend of contemporary furniture, bold accents, and innovative lighting to create a stylish, yet practical living environment. This style is great for those who appreciate the blend of aesthetic appeal with everyday usability, offering both comfort and a polished look.';
    } else if (points <= 20) {
        style = 'Eclectic Style: You love a mix of styles, lots of decor, and enjoy changing things up frequently. Eclectic design allows for personal expression and creativity, combining elements from different time periods, cultures, and design philosophies. This style is characterized by a diverse mix of colors, textures, and patterns, creating a unique and dynamic space that reflects your personality. It’s ideal for those who like to experiment with decor and enjoy a home that feels vibrant and ever-evolving.';
    } else {
        style = 'Family-Friendly Style: Your home is all about comfort, functionality, and creating a welcoming environment for kids and guests. Family-friendly design prioritizes durable materials, practical layouts, and versatile furniture that can withstand everyday use. This style often includes plenty of storage solutions, cozy seating, and safe, open spaces that accommodate the needs of a busy household. It’s perfect for those who want a home that is both stylish and suited to an active, family-centered lifestyle.';
    }

    // Display result
    document.getElementById('result-text').innerText = style;
    document.getElementById('quiz-result').style.display = 'block';
}


// script.js

function submitColorQuiz() {
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked')?.value,
        question2: document.querySelector('input[name="question2"]:checked')?.value,
        question3: document.querySelector('input[name="question3"]:checked')?.value,
        question4: document.querySelector('input[name="question4"]:checked')?.value,
        question5: document.querySelector('input[name="question5"]:checked')?.value,
        question6: document.querySelector('input[name="question6"]:checked')?.value,
        question7: document.querySelector('input[name="question7"]:checked')?.value,
        question8: document.querySelector('input[name="question8"]:checked')?.value
    };

    if (Object.values(answers).includes(undefined)) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Determine palettes based on answers
    const palettes = determinePalettes(answers);
    displayPalettes(palettes);
}

function determinePalettes(answers) {
    let palettes = [];

    // Open and airy with plenty of natural elements
    if (answers.question1 === 'open-airy' || answers.question2 === 'plants') {
        palettes.push({
            name: 'Nature Inspired',
            colors: ['#A8E6CF', '#DCEDC1', '#FFD3B6', '#FFAAA5']
        });
    }

    // Cozy and intimate with warm tones
    if (answers.question1 === 'cozy-intimate' || answers.question3 === 'low') {
        palettes.push({
            name: 'Warm & Cozy',
            colors: ['#DDA15E', '#BC6C25', '#283618', '#FEFAE0']
        });
    }

    // Luxurious and grand with sophisticated colors
    if (answers.question1 === 'luxurious' || answers.question6 === 'traditional') {
        palettes.push({
            name: 'Luxury Glam',
            colors: ['#4A4E69', '#9A8C98', '#C9ADA7', '#F2E9E4']
        });
    }

    // Functional and efficient with modern appeal
    if (answers.question1 === 'functional' || answers.question6 === 'modern') {
        palettes.push({
            name: 'Modern Minimal',
            colors: ['#D1D5DE', '#A8B1C5', '#7E8AA2', '#2E3A59']
        });
    }

    return palettes;
}
// script.js

function displayPalettes(palettes) {
    const paletteContainer = document.getElementById('palette-options');
    paletteContainer.innerHTML = ''; // Clear previous palettes

    palettes.forEach(palette => {
        palette.colors.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color-square';
            colorDiv.style.backgroundColor = color;
            
            const hexCode = document.createElement('div');
            hexCode.className = 'color-hex';
            hexCode.textContent = color;
            
            colorDiv.appendChild(hexCode);
            paletteContainer.appendChild(colorDiv);
        });
    });

    document.getElementById('quiz-result').style.display = 'block';
}



// HAmburger 


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebarContainer = document.querySelector('.sidebar-container');

    hamburgerMenu.addEventListener('click', function() {
        // Toggle 'show' class on sidebar container
        sidebarContainer.classList.toggle('show');
    });

    // Add functionality to the close button
    closeMenu.addEventListener('click', function() {
        sidebarContainer.classList.remove('show');
    });
});

//Music Player


document.addEventListener('DOMContentLoaded', function() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    const songTitle = document.getElementById('songTitle');

    // Playlist array containing song details
    const playlist = [
        {
            title: "Here's some chill music for you",
            src: "https://res.cloudinary.com/usamobileappsllc/video/upload/v1641999632/caramel-macchiato-noxz-main-version-02-15-19706_k0aldq.mp3",
        },
        {
            title: "With Yahuah, all things are possible",
            src: "https://res.cloudinary.com/usamobileappsllc/video/upload/v1641998663/freakshake-noxz-main-version-01-41-5860_scpuko.mp3",
        },
        {
            title: "Every journey starts with that first step",
            src: "https://res.cloudinary.com/usamobileappsllc/video/upload/v1641626388/tokyo-rain-wisanga-main-version-02-07-20583_fpx0vp.mp3",
        },
        {
            title: "You deserve to live in an organized space",
            src: "https://res.cloudinary.com/usamobileappsllc/video/upload/v1641625535/cortado-92elm-main-version-02-02-18300_hgbjos.mp3",
        },
        {
            title: "You're one step closer than yesterday",
            src: "https://res.cloudinary.com/usamobileappsllc/video/upload/v1641625292/pillow-thoughts-prigida-main-version-02-24-7566_sbbmhz.mp3",
        },
        {
            title: "Don't give up",
            src: "https://res.cloudinary.com/usamobileappsllc/video/upload/v1641625210/toy-box-mountaineer-main-version-03-02-8474_zed4to.mp3",
        }
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    // Function to load a song
    function loadSong(index) {
        const song = playlist[index];
        audioPlayer.src = song.src;
        songTitle.textContent = song.title;
    }

    // Function to play a song
    function playMusic() {
        isPlaying = true;
        playPauseBtn.textContent = '⏸'; // Change button to pause icon
        audioPlayer.play();
    }

    // Function to pause a song
    function pauseMusic() {
        isPlaying = false;
        playPauseBtn.textContent = '⏯'; // Change button to play icon
        audioPlayer.pause();
    }

    // Function to play the next song
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        playMusic();
    }

    // Function to play the previous song
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        playMusic();
    }

    // Load the first song in the playlist
    loadSong(currentSongIndex);

    // Play/pause button event listener
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // Next button event listener
    nextBtn.addEventListener('click', nextSong);

    // Previous button event listener
    prevBtn.addEventListener('click', prevSong);

    // Automatically play the next song when the current song ends
    audioPlayer.addEventListener('ended', nextSong);
});
