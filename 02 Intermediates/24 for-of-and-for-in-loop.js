var applications = ['youtube', 'instagram', 'facebook', 'linkedin', 'sololearn', 'canva', 'kite'];

for (const application of applications) {
    console.log(application);
}


var applications = {
    yt: 'youtube',
    fb: 'facebook',
    ig: 'instagram',
    lco: 'learncodeonline'
}

for (const key in applications) {
    console.log(`short is ${key} and long is ${applications[key]}`);
}