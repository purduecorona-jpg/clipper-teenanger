async function subscribe(priceId){
    const res = await fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({priceId})
    });
    const data = await res.json();
    window.location = data.url;
}

// Example feed (static videos)
const feed = document.getElementById('feed');
const videos = ['videos/video1.mp4','videos/video2.mp4'];
videos.forEach(v => {
    const vid = document.createElement('video');
    vid.src = v;
    vid.controls = true;
    vid.width = 320;
    feed.appendChild(vid);
});
