// Reference to the 3D plane image in the AR scene
const activeImagePlane = document.querySelector('#activeOverlayImage');
const buttons = document.querySelectorAll('.ar-button');

// Array mapping button indices to asset IDs
const imageSources = [
  '#img0',
  '#img1',
  '#img2',
  '#img3',
  '#img4',
  '#img5',
  '#img6',
  '#img7'
];

// Function triggered when any of the 8 selector buttons is tapped
function switchImage(index) {
  // Update the texture of the AR plane to the selected image source
  activeImagePlane.setAttribute('src', imageSources[index]);

  // Update active styling across the buttons
  buttons.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
