// Function to hide the nav bar when user scrolls down. When the user scrolls down, the nav bar is moved above outside the page's view.

window.onscroll = hide_nav_onscroll;
function hide_nav_onscroll() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByTagName("nav")[0].style.top = "-50px";
   } else {
      document.getElementsByTagName("nav")[0].style.top = "0px";
   }
}


// Code to create the proficiency graph on the About Me page

// Initializing the data to go into the graph
var data = [{
  type: 'bar',
  x: [100, 75, 50, 75, 75, 50, 50],
  y: ['Python', 'MATLAB', 'C++', 'R', 'SQL', 'JavaScript', 'HTML/CSS'],
  orientation: 'h',
  marker: {
  	color: '#0072A0'
  }
}];

// Configuring visual layout of the graph
var layout = {
  autosize: false,
  width: 600,
  height: 500,
  paper_bgcolor: 'transparent',
  plot_bgcolor: 'white',
  xaxis: {
    tickmode: "array",
    tickvals: [0, 25, 50, 75, 100],
    ticktext: ['No Experience', 'Beginner', 'Intermediate', 'Advanced', 'Expert'],
    range: [0, 	101]
	},
  font: {
    family: 'Open Sans, sans-serif',
    size: '15',
    color: 'white'
  }
};

// Hiding the toolbar
const config = {
  'displayModeBar': false
};

// Plotting the graph
Plotly.newPlot('skills_chart', data, layout, config);