//data
var sliderImgs = ["images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];
var stopSlider = false;
var slideCounter = 0
var lorem = "My name is SJ and this is a personal card I made using D3.js and SVG. This personal card has engaging transitions and a custom image slider I made. It can be used to provide any information about you. Click on the icons to demo the project!";
var defaultData = {
  "color": "gray-light",
  "hex": "#f5f5f5",
  "image": {
    "url": "images/snoopy.png",
    "width": "275",
    "height": "475",
  },
  "h1": "HELLO",
  "h2": "WORLD",
  "p": lorem,
  "texthex": "#4c4c4c"
};

var dataset = [
  {
    "color": "blue-bahama",
    "hex": "#006495",
    "image": {
      "url": "images/samurai.png",
      "width": "210",
      "height": "250",
    },
    "icons": ["images/id-sword.png", "images/ic-sword.png", "images/inc-sword.png"],
    "h1": "MY",
    "h2": "JOB",
    "p": "I'm a wandering Samurai. I travel across the lands to defeat any formidable foes. Those who crossed my sword never lived to tell the tale!",
    "texthex": "#ffffff"
  },
  {
    "color": "blue-regal",
    "hex": "#004C70",
    "image": {
      "url": "images/plane.png",
      "width": "269",
      "height": "275",
    },
    "icons": ["images/id-plane.png", "images/ic-plane.png", "images/inc-plane.png"],
    "h1": "MY",
    "h2": "PLANE",
    "p": "I like to ride on my plane on my side time. The view of the sunset on a nice day is priceless!",
    "texthex": "#ffffff"
  },
  {
    "color": "blue-light",
    "hex": "#0093D1",
    "image": {
      "url": "images/woodstock.png",
      "width": "201",
      "height": "250",
    },
    "icons": ["images/id-friend.png", "images/ic-friend.png", "images/inc-friend.png"],
    "h1": "MY",
    "h2": "FRIEND",
    "p": "This is my bird friend Woodstock. We like to relax on top of my house and go on adventures",
    "texthex": "#ffffff"
  },
  {
    "color": "red-carnation",
    "hex": "#F2635F",
    "image": {
      "url": sliderImgs,
      "width": "200",
      "height": "200",
    },
    "icons": ["images/id-slider.png", "images/ic-slider.png", "images/inc-slider.png"],
    "h1": "MY",
    "h2": "CUSTOM SLIDER",
    "p": "This is my customer image slider. Are you an artist? Photographer? You can display your wonderful gallery using this slider. Check out these cats for now!",
    "texthex": "#ffffff"
  },
  {
    "color": "orange-golden",
    "hex": "#E0A025",
    "image": {
      "url": "images/userauth1.gif",
      "width": "200",
      "height": "300",
    },
    "icons": ["images/id-video.png", "images/ic-video.png", "images/inc-video.png"],
    "h1": "MY",
    "h2": "User Auth 1",
    "p": "Check out my user authentication using D3.js and SVG.",
    "texthex": "#ffffff"
  },
  {
    "color": "yellow-lemon",
    "hex": "#F4D00C",
    "image": {
      "url": "images/userauth2.gif",
      "width": "200",
      "height": "200",
    },
    "icons": ["images/id-gif.png", "images/ic-gif.png", "images/inc-gif.png"],
    "h1": "MY",
    "h2": "User Auth 2",
    "p": "Check out my another user authentication using D3.js and SVG.",
    "texthex": "#ffffff"
  }
];

// dimensions
var w = 725;
var h = 440;
var dw = 800 // div width
var dh = 600 // div height
var marginLeft = 100;
var radius = 17;
var paddingRight = (400 - radius * 2 * dataset.length) / dataset.length;

// pretty stuff
var div = d3.select("body")
  .style("margin", "0")
  .append("div")
  .style("background", "url(images/divbg.jpg)")
  .style("width", dw + "px")
  .style("height", dh + "px");

var svg = d3.select("div")
            .append("svg")
              .attr("x", 400)
              .attr("width", w)
              .attr("height", h)
              .style("border-radius", "5px")
              .style("margin-left", "35px")
              .style("margin-top", "80px")

var rect = svg.append("rect")
            .attr("width", w)
            .attr("height", h)
            .attr("fill", defaultData.hex);

var createOverCircles = function() {
  var data = [];
  svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("id", function(d) {
    data.push(d);
    return d.color + "-over";
  })
  .attr("class", "over")
  .attr("cx", function(d, i) {
    index = i
    return marginLeft + (i * (radius * 2 + paddingRight));
  })
  .attr("cy", h - 100)
  .attr("r", radius);

  defineIconPatterns(data);
};

var defineIconPatterns = function(data) {
  var defs = svg.append("defs").attr("id", "icons");

  for (var i = 0; i < data.length; i++) {
    var color = data[i].color;
    var id = color + "-iconpattern";
    defs.append("pattern")
      .attr("id", id)
      .attr("patterUnits", "userSpaceOnUse")
      .attr("width", 1)
      .attr("height", 1)
      .append("image")
        .attr("id", color + "-iconimage")
        .attr("class", "iconimage")
        .attr("x", 9)
        .attr("y", 9)
        .attr("width", 16)
        .attr("height", 16)
        .attr("xlink:href", data[i].icons[0]);

    svg.select("#" + color + "-over")
      .attr("fill", "url(#" + color + "-iconpattern)");
  }
};

var createUnderCircle = function(cx, cy, r, color, hexcode) {
  var uCircle = svg.insert("circle", ".over")
    .attr("id", color + "-under")
    .attr("class", "under")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", r)
    .attr("fill", hexcode);

  expandUnderCircle(uCircle);
};

var expandUnderCircle = function(circle) {
  circle.transition()
    .duration(1000)
    .each("end", function() {
      circle.attr("id", "background");
      if (svg.selectAll("#background")[0].length > 1) {
         svg.select("#background").remove();
      }
    })
    .attr("r", w);
};

var createArrow = function() {
  svg.append("line")
      .attr("y1", 30)
      .attr("x2", 70)
      .attr("y2", 30);

  svg.append("line")
      .attr("y1", 32)
      .attr("x2", 45)
      .attr("y2", 15);

  svg.append("line")
      .attr("y1", 28)
      .attr("x2", 45)
      .attr("y2", 45);

  svg.selectAll("line")
    .attr("class", "arrow")
    .attr("x1", 30)
    .attr("stroke", "#ffffff")
    .attr("stroke-width", "7px")
    .attr("stroke-opacity", 0)
    .style("visibility", "hidden");
};

var toggleArrow = function(state) {
  var arrow = svg.selectAll(".arrow");

  if (state === "visible") {
    arrow.style("visibility", "visible")
      .transition()
      .duration(1000)
      .attr("stroke-opacity", 1);
  } else {
    arrow.transition()
      .duration(1000)
      .each("end", function() { arrow.style("visibility", "hidden") })
      .attr("stroke-opacity", 0);
  }
};

var fillImage = function(data) {
  var imgdata = data.image;
  svg.append("image")
  .attr("class", "image")
  .attr("x", w - imgdata.width)
  .attr("y", (h - imgdata.height) / 2)
  .attr("width", imgdata.width)
  .attr("height", imgdata.height)
  .attr("xlink:href", imgdata.url);
}

var swapnSlideImg = function(data) {
  var imgdata = data.image;

  if (data.color === "red-carnation") {
    stopSlider = false;
    svg.select(".image").interrupt().attr("x", 725)
    createCustomSlider(data);
    var image = svg.selectAll(".slider-img")
      .attr("x", 725)
      .attr("y", (h - imgdata.height) / 2);
  } else {
    slideImgLeft(0, data, true)
    svg.select("defs#dcp").remove();
    svg.selectAll(".slider-img").remove();
    svg.select(".image")
      .attr("x", 725)
      .attr("y", (h - imgdata.height) / 2);

    var image = svg.select(".image").attr("xlink:href", imgdata.url);
  }

  image.attr("width", imgdata.width)
    .attr("height", imgdata.height)
    .interrupt()
    .transition()
    .duration(1000)
    .each("end", function() {
      if (data.color === "red-carnation") { slideImgLeft(0, data); }
    })
    .attr("x", 450 + (275 - imgdata.width) / 2);
};



var createCustomSlider = function(data) {
  var urls = data.image.url;
  svg.append("defs")
    .attr("id", "dcp")
    .append("clipPath")
      .attr("id", "clip-path")
      .append("rect")
        .attr("x", 450 + (275 - data.image.width) / 2)
        .attr("y", (h - data.image.height) / 2)
        .attr("rx", 5)
        .attr("width", 200)
        .attr("height", 200);

  svg.append("image")
    .attr("id", "behind")
    .attr("class", "slider-img")
    .attr("clip-path", "url(#clip-path)")
    .attr("xlink:href", urls[1])
    .attr("width", 200)
    .attr("height", 200);

  svg.append("image")
    .attr("id", "front")
    .attr("class", "slider-img")
    .attr("clip-path", "url(#clip-path)")
    .attr("xlink:href", urls[0])
    .attr("x", 450 + (275 - data.image.width) / 2)
    .attr("y", (h - data.image.height) / 2)
    .attr("width", 200)
    .attr("height", 200);
};

var checkIndex = function(index, max) {
  if (index === max) {
    return 0;
  } else {
    return index
  }
};

var slideImgLeft = function(index, data, stop = false) {
  if (stop === true) { return; }
  var urls = data.image.url
  var max = urls.length;
  var imgIndex = index += 1
  if (imgIndex === max) { imgIndex = 0; }

  d3.select("#front")
    .transition()
    .duration(2000)
    .each("end", function() {
      svg.select("#front").attr("xlink:href", urls[imgIndex]);
      svg.select("#behind")
        .attr("xlink:href", urls[checkIndex(imgIndex + 1, max)]);
      svg.select("#front").attr("x", 450 + (275 - data.image.width) / 2);
      slideImgLeft(imgIndex, data);
    })
    .attr("x", 450 + (275 - data.image.width) / 2 - data.image.width);
};

var fillText = function(data) {
  svg.append("text")
    .attr("id", "heading1")
    .attr("class", "heading")
    .attr("navigated", false)
    .attr("y", 100)
    .text(data.h1)
      .attr("font-size", "42px")
      .attr("font-weight", "900");

  svg.append("text")
    .attr("id", "heading2")
    .attr("class", "heading")
    .attr("y", 134)
    .text(data.h2)
      .attr("font-size", "40px")
      .attr("font-weight", "100");


  svg.selectAll("text")
  .attr("x", 80)
  .attr("fill", data.texthex);

  svg.append("text")
  .attr("id", "footer")
  .attr("class", "footer")
  .attr("x", 275)
  .attr("y", 390)
  .text("©SJ Kim | sjkim0421@gmail.com")
  .style("font-size", "12px")
  .style("font-color", data.texthex);

  svg.selectAll("text")
    .attr("font-family", "Montserrat, sans-serif");

  svg.append("foreignObject")
    .attr("width", 350)
    .attr("height", 300)
    .attr("x", 80)
    .attr("y", 164)
    .append("xhtml:p")
      .attr("id", "p")
      .text(data.p)
      .style("font-family", "Montserrat")
      .style("font-size", "14px")
      .style("color", data.texthex)
      .style("text-align", "justify");
};

var swapText = function(data) {
  svg.selectAll(".heading").attr("fill", data.texthex);
  svg.select("#p").style("color", data.texthex);

  var h1 = svg.select("#heading1").text(data.h1);
  var h2 = svg.select("#heading2").text(data.h2);

  if (data.color === "orange-golden") {
    var p = svg.select("#p").text(data.p + " Click this link to demo this ");
    p.append("a")
      .attr("href", "userauth1/userauth1.html")
      .text("project");
  } else if (data.color === "yellow-lemon") {
    var p = svg.select("#p").text(data.p + " Click this link to demo this ");
    p.append("a")
      .attr("href", "userauth2/userauth2.html")
      .text("project");
  } else {
    var p = svg.select("#p").text(data.p);
  }

  if (h1.attr("navigated") === "false") {
    h1.attr("fill-opacity", 0)
    .interrupt()
    .transition()
    .duration(1000)
    .each("end", function() { h1.attr("navigated", true) } )
    .attr("fill-opacity", 1);
  }

  h2.attr("fill-opacity", 0)
    .interrupt()
    .transition()
    .duration(1000)
    .attr("fill-opacity", 1);

  p.style("opacity", 0)
    .interrupt()
    .transition()
    .duration(1000)
    .style("opacity", 1);
};

var swapIcon = function(data) {
  var swappingId = data.color + "-iconimage";
  var iconImages = svg.selectAll(".iconimage");
  iconImages.each(function() {
    var iconImage = svg.select("#" + this.id);
    if (this.id === swappingId && iconImage.attr("changed") === null || iconImage.attr("changed") === "false") {
      svg.select("#" + swappingId)
        .attr("clicked", true)
        .attr("x", 1)
        .attr("y", 1)
        .attr("width", 32)
        .attr("height", 32)
        .attr("xlink:href", data.icons[1]);
    } else if (iconImage.attr("clicked") === null || iconImage.attr("clicked") === "true") {
      var href = this.href.baseVal
      var newHref = href.slice(0,7) + "inc" + href.slice(9)
      svg.select("#" + this.id)
        .attr("clicked", false)
        .attr("x", 9)
        .attr("y", 9)
        .attr("width", 16)
        .attr("height", 16)
        .attr("xlink:href", newHref);
    }
  })
};

var slideFooterRight = function() {
  svg.select("#footer")
    .transition()
    .duration(1000)
    .attr("x", 490)
    .attr("fill", "#ffffff");
};

var slideFooterLeft = function() {
  svg.select("#footer")
    .transition()
    .duration(1000)
    .attr("x", 275)
    .attr("fill", defaultData.texthex);
}

var resetButtons = function() {
  var iconImages = svg.selectAll(".iconimage")
  iconImages.each(function(d, i) {
    var href = dataset[i].icons[0]
    svg.select("#" + this.id)
      .attr("clicked", null)
      .attr("x", 9)
      .attr("y", 9)
      .attr("width", 16)
      .attr("height", 16)
      .attr("xlink:href", href);
  });
}

var resetToDefault = function(cx, cy, r) {
  //write a function to de highlight circle
  svg.select("#heading1").attr("navigated", false);
  toggleArrow("hidden");
  createUnderCircle(cx, cy, r, defaultData.color, defaultData.hex);
  swapnSlideImg(defaultData);
  swapText(defaultData);
  resetButtons();
  slideFooterLeft();
};

var loadPage = function() {
  createOverCircles();
  createArrow();
  fillImage(defaultData);
  fillText(defaultData);
};

// start the page
loadPage();

// icon click event listener
svg.selectAll(".over").on("click", function(data) {
  var cx = this.getAttribute("cx");
  var cy = this.getAttribute("cy");
  var r = this.getAttribute("r");
  var color = data.color;
  var hexcode = data.hex;
  // highlightCircle(color);
  createUnderCircle(cx, cy, r, color, hexcode);
  toggleArrow("visible");
  swapnSlideImg(data);
  swapText(data);
  swapIcon(data);
  slideFooterRight();
  // arrow click event listener
  svg.selectAll(".arrow").on("click", function() {
    var cx = d3.mouse(this)[0];
    var cy = d3.mouse(this)[1];
    resetToDefault(cx, cy, r);
  });

});

// d3.select("body").on("click", function() {
//   console.log(d3.mouse(this));
// })
// hover
// svg.select("#red-over")
//   .style("hover", function(){
//     svg.select("#red-over").attr("stroke", "red")
//   })
