function isLandscape(width, height) {
    return (width>height);
}

let width = 800;
let height = 600;
console.log((isLandscape(width, height)) ? 'Landscape' : 'Portrait');