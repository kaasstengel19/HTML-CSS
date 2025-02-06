function Dobbel() {
    const images = [
        'dob1.png',
        'dob2.png',
        'dob3.png',
        'dob4.png',
        'dob5.png',
        'dob6.png'
    ];

    for (let i = 1; i <= 2; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);

    
    const imageElement = document.getElementById(`dice${i}`);

    
    imageElement.src = images[randomIndex];
    }

    setTimeout(() => {
        for (let i = 3; i <= 4; i++) {
            const randomIndex = Math.floor(Math.random() * images.length);
            const imageElement = document.getElementById(`dice${i}`);
            imageElement.src = images[randomIndex];
        }
    }, 1000);
}
