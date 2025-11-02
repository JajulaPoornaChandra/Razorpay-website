
var count = 1; // start from slide 1

function showSlide1() {
    // hide all slides
    document.getElementById("slide1").style.display = "none";
    document.getElementById("slide2").style.display = "none";
    document.getElementById("slide3").style.display = "none";

    // show current slide
    if (count === 1) {
      document.getElementById("slide1").style.display = "block";
    }
    if (count === 2) {
      document.getElementById("slide2").style.display = "block";
    }
    if (count === 3) {
      document.getElementById("slide3").style.display = "block";
    }
}
function nextSlide(){
    count = count + 1;
    if (count > 3) {
      count = 1;
    }
    showSlide1();
}
function prevSlide(){
    count = count - 1;
    if (count < 1) {
      count = 3;
    }
    showSlide1();
}
  showSlide1();


//   5th-page
var current = 1; // start from slide 1

function showSlide(){
    // hide all slides
    document.getElementById("slide-one").style.display = "none";
    document.getElementById("slide-two").style.display = "none";
    document.getElementById("slide-three").style.display = "none";

    // show current slide
    if (current === 1) {
      document.getElementById("slide-one").style.display = "flex";
    }
    if (current === 2) {
      document.getElementById("slide-two").style.display = "flex";
    }
    if (current === 3) {
      document.getElementById("slide-three").style.display = "flex";
    }
}
function nxtSlide(){
    current = current + 1;
    if (current > 3) {
      current = 1;
    }
    showSlide();
}
function previousSlide(){
    current = current - 1;
    if (current < 1) {
      current = 3;
    }
    showSlide();
}
  // Show first slide initially
    showSlide();

// 4th page
function showTab(n) {
      // Reset all tabs
                    document.getElementById('tab1').className = 'tab';    
                    document.getElementById('tab2').className = 'tab';
                    document.getElementById('tab3').className = 'tab';
                    document.getElementById('tab4').className = 'tab'; 
                    document.getElementById('tab5').className = 'tab';

      // Reset all contents
                    document.getElementById('content1').className = 'tab-content';
                    document.getElementById('content2').className = 'tab-content';
                    document.getElementById('content3').className = 'tab-content';
                    document.getElementById('content4').className = 'tab-content';
                    document.getElementById('content5').className = 'tab-content';

      // Activate clicked tab and content
                    document.getElementById('tab' + n).className = 'tab active';
                    document.getElementById('content' + n).className = 'tab-content active';
}

    // 6th-page