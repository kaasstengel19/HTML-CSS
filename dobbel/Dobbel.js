function Dobbel() {
    const images = [
        'dob1.png',
        'dob2.png',
        'dob3.png',
        'dob4.png',
        'dob5.png',
        'dob6.png'
    ];

    
    const randomIndex = Math.floor(Math.random() * images.length);

    
    const imageElement = document.getElementById('random-image');

    
    imageElement.src = images[randomIndex];
}
