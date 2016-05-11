var navy = "#00293c";
var peacockBlue = "#1e656d";
var ivory = "#f1f3ce";
var candyapple = "#f62a00";
var fig = "#4c3f54";
var frosting = "#ddc5a2"

var w = 250;
var h = 450;
var divW = w + 200;
var divH = h + 200;

var div = d3.select("body")
  .append("div")
    .style("width", divW + "px")
    .style("height", divH + "px")
    .style("background-color", "#52908b");

var svg = d3.select("div")
  .append("svg")
    .attr("width", divW)
    .attr("height", divH);

var bgRect = svg.append("rect")
  .attr("id", "bg-rect")
  .attr("x", (divW - w) / 2)
  .attr("y", (divH - h) / 2)
  .attr("width", w)
  .attr("height", h)
  .attr("fill", fig);

var fillbgRect = function() {
  var logo = svg.append("image")
    .attr("id", "logo")
    .attr("x", (divW / 2) - 95)
    .attr("y", 110)
    .attr("width", 200)
    .attr("height", 200)
    .attr("opacity", 1)
    .attr("xlink:href", "images/logo.png");

  var logoRect1 = svg.append("rect")
    .attr("class", "logorect")
    .attr("width", 175)
    .attr("height", 7)
    .attr("rx", 5)
    .attr("fill", "white")
    .attr("fill-opacity", 0.5);

  logoRect1.attr("x", divW / 2 - parseInt(logoRect1.attr("width")) / 2)
    .attr("y", 275);

  var logoRect2 = svg.append("rect")
    .attr("class", "logorect")
    .attr("width", 150)
    .attr("height", 7)
    .attr("rx", 5)
    .attr("fill", "white")
    .attr("fill-opacity", 0.25);

  logoRect2.attr("x", divW / 2 - parseInt(logoRect2.attr("width")) / 2)
    .attr("y", parseInt(logoRect1.attr("y")) + 20);

  var button = svg.append("rect")
    .attr("id", "signupbutton")
    .attr("class", "button")
    .attr("x", divW / 2 - 45)
    .attr("y", 400)
    .attr("rx", 20)
    .attr("width", 90)
    .attr("height", 40)
    .attr("fill", "#ffffff")

  var signupText = svg.append("text")
    .attr("id", "signuptext")
    .attr("class", "button")
    .attr("x", divW / 2 - 22)
    .attr("y", 424)
    .text("SIGNUP")
    .attr("font-family", "Roboto, sans-serif")
    .attr("font-size", "12px")
    .attr("fill", fig);

  var footerLine1 = svg.append("path")
    .attr("class", "footer-line")
    .attr("d", "M 150 510 L 300 510")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0.3);

  var footerLine2 = svg.append("path")
    .attr("class", "footer-line")
    .attr("d", "M 200 525 L 250 525")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0.3);
};

var transformSignUp = function() {
  var button = svg.select("rect#signupbutton")
    .classed("button", false)
    .attr("transformed", true);

  button.transition()
    .duration(1000)
    .attr("x", 110)
    .attr("y", 225)
    .attr("rx", 5)
    .attr("width", 230)
    .attr("height", 250);
};

var removeLogoRect = function() {
  svg.select("text.button").remove();
  var rects = svg.selectAll("rect.logorect");
  rects.transition()
    .duration(750)
    .attr("fill-opacity", 0)
    .each("end", function() {
      rects.remove();
    });
};

var moveLogo = function() {
  var logo = svg.select("#logo");
  logo.transition()
    .duration(750)
    .attr("y", parseInt(logo.attr("y")) - 50)
    .each("end", function() {
      fillSignUpForm();
    });
};

var fillSignUpForm = function() {
  var rect = svg.select("rect#signupbutton");
  var usernameInput = svg.append("foreignObject")
    .attr("x", parseInt(rect.attr("x")) + 30)
    .attr("y", parseInt(rect.attr("y")) + 50);

  usernameInput.append("xhtml:input")
    .attr("class", "signup-form")
    .attr("type", "text")
    .attr("placeholder", "Username")
    .style("width", "160px")
    .style("border-bottom", "1px solid #C5C5C5");

  var emailIdInput = svg.append("foreignObject")
    .attr("x", parseInt(usernameInput.attr("x")))
    .attr("y", parseInt(usernameInput.attr("y")) + 50);

  emailIdInput.append("xhtml:input")
    .attr("class", "signup-form")
    .attr("type", "text")
    .attr("placeholder", "Email ID")
    .style("width", "160px")
    .style("border-bottom", "1px solid #C5C5C5");

  var passwordInput = svg.append("foreignObject")
    .attr("x", parseInt(emailIdInput.attr("x")))
    .attr("y", parseInt(emailIdInput.attr("y")) + 50);

  passwordInput.append("xhtml:input")
    .attr("class", "signup-form")
    .attr("type", "password")
    .attr("placeholder", "Password")
    .style("width", "160px")
    .style("border-bottom", "1px solid #C5C5C5");

  var doneButton = svg.append("rect")
    .attr("id", "donebutton")
    .attr("class", "button")
    .attr("x", divW / 2)
    .attr("y", 450)
    .attr("rx", 0)
    .attr("width", 0)
    .attr("height", 40)
    .attr("fill", "#486824");

  doneButton.transition()
    .duration(1000)
    .attr("x", divW / 2 - 45)
    .attr("rx", 20)
    .attr("width", 90)
    .each("end", function() {
      var doneText = svg.append("text")
        .attr("id", "donetext")
        .attr("class", "button")
        .attr("x", divW / 2 - 15)
        .attr("y", 474)
        .text("DONE")
        .attr("font-family", "Roboto, sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "#ffffff");

      addDoneClickListener();
    });
};

var removeSignUpForm = function() {
  svg.selectAll(".signup-form")
    .style("border-bottom", "1px solid #ffffff")
    .style("transition", "border-color 0.5s ease-out")
    .transition()
    .duration(500)
    .style("color", "#ffffff")
    .each("end", function() {
      svg.selectAll("foreignObject").remove();
    });
};

var removeLogo = function() {
  svg.select("#logo")
    .transition()
    .duration(500)
    .attr("opacity", 0)
};


var transformDone = function() {
  var doneText = svg.select("#donetext")
  doneText.transition()
    .duration(500)
    .attr("fill", "#486824")
    .each("end", function() {
      doneText.remove();
    });

  var doneButton = svg.select("#donebutton")
  doneButton.transition()
    .duration(750)
    .attr("x", parseInt(doneButton.attr("x")) + 25)
    .attr("width", 40)
    .attr("rx", 25)
    .each("end", function() {
      doneButton.transition()
        .duration(500)
        .attr("x", 290)
        .attr("y", 490)
        .attr("width", 50)
        .attr("height", 50)
        .each("end", function() {
          addPlusSign();
          fillContent();
          svg.selectAll(".footer-line").remove();
        });
    });
};

var addPlusSign = function() {
  var line1 = svg.append("path")
    .attr("class", "plus")
    .attr("d", "M 305 515 L 325 515")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0);

  var line2 = svg.append("path")
    .attr("class", "plus")
    .attr("d", "M 315 505 L 315 525")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0);

  svg.selectAll(".plus")
    .transition()
    .duration(500)
    .attr("stroke-opacity", 1);
};

var fillContent = function() {
  var rect = svg.select("#signupbutton")
    .transition()
    .duration(1000)
    .attr("x", (divW - w) / 2)
    .attr("y", (divH - h) / 2  + 50)
    .attr("rx", 0)
    .attr("width", w)
    .attr("height", h - 50);

  var c1 = svg.append("circle")
    .attr("class", "content-circle")
    .attr("cx", 150)
    .attr("cy", 200)
    .attr("r", 25)
    .attr("fill", navy)
    .attr("fill-opacity", 0);

  var c1l1 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 190 325 190")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c1l2 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 205 275 205")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c2 = svg.append("circle")
    .attr("class", "content-circle")
    .attr("cx", 150)
    .attr("cy", 275)
    .attr("r", 25)
    .attr("fill", ivory)
    .attr("fill-opacity", 0);

  var c2l1 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 265 325 265")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c2l2 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 280 275 280")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c3 = svg.append("circle")
    .attr("class", "content-circle")
    .attr("cx", 150)
    .attr("cy", 350)
    .attr("r", 25)
    .attr("fill", peacockBlue)
    .attr("fill-opacity", 0);

  var c3l1 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 340 325 340")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c3l2 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 355 275 355")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c4 = svg.append("circle")
    .attr("class", "content-circle")
    .attr("cx", 150)
    .attr("cy", 425)
    .attr("r", 25)
    .attr("fill", candyapple)
    .attr("fill-opacity", 0);

  var c4l1 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 415 325 415")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c4l2 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 430 275 430")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c5 = svg.append("circle")
    .attr("class", "content-circle")
    .attr("cx", 150)
    .attr("cy", 500)
    .attr("r", 25)
    .attr("fill", frosting)
    .attr("fill-opacity", 0);

  var c5l1 = svg.insert("path", "#donebutton")
    .attr("class", "content-line")
    .attr("d", "M 200 490 325 490")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  var c5l2 = svg.append("path")
    .attr("class", "content-line")
    .attr("d", "M 200 505 275 505")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 0);

  svg.selectAll(".content-line")
    .transition()
    .duration(2000)
    .attr("stroke-opacity", 0.5);

  svg.selectAll(".content-circle")
    .transition()
    .duration(2000)
    .attr("fill-opacity", 1);
};

var createNav = function() {
  var line1 = svg.append("rect")
    .attr("class", "nav1")
    .attr("x", 110)
    .attr("y", 108) // 110 // 116
    .attr("width", 21)
    .attr("height", 2)
    .attr("fill", "white")
    .attr("fill-opacity", 0);

  var line2 = svg.append("rect")
    .attr("class", "nav1")
    .attr("x", 110)
    .attr("y", 115) // 117 // 123
    .attr("width", 21)
    .attr("height", 2)
    .attr("fill", "white")
    .attr("fill-opacity", 0);

  var line3 = svg.append("rect")
    .attr("class", "nav1")
    .attr("x", 110)
    .attr("y", 122) // 124 // 130
    .attr("width", 21)
    .attr("height", 2)
    .attr("fill", "white")
    .attr("fill-opacity", 0);

  var feedText = svg.append("text")
    .attr("class", "nav1")
    .attr("x", 150)
    .attr("y", 122)
    .text("FEED")
    .attr("font-family", "Roboto, sans-serif")
    .attr("font-size", "20px")
    .attr("fill", "#ffffff")
    .attr("fill-opacity", 0);

  var mg = svg.append("image")
    .attr("class", "nav2")
    .attr("x", 320)
    .attr("y", 105)
    .attr("width", 24)
    .attr("height", 24)
    .attr("opacity", 0)
    .attr("xlink:href", "images/mg.png");

  svg.selectAll(".nav1")
    .transition()
    .duration(1500)
    .attr("transform", "translate(0, 8)")
    .attr("fill-opacity", 1);

  svg.select(".nav2")
    .transition()
    .duration(1500)
    .attr("transform", "translate(0, 8)")
    .attr("opacity", 1);
};

var addSignUpClickListener = function() {
  svg.selectAll(".button").on("click", function() {
    if (svg.select("rect#signupbutton").attr("transformed") === null) {
      transformSignUp();
      removeLogoRect();
      moveLogo();
    }
  });
};

var addDoneClickListener = function() {
  svg.selectAll(".button").on("click", function() {
      removeSignUpForm();
      removeLogo();
      transformDone();
      createNav();
  });
};

var loadPage = function() {
  fillbgRect();
  addSignUpClickListener();
};
