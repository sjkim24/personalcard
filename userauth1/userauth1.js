var w = 400
var h = 450
var divW = w + 200
var divH = h + 200

var div = d3.select("body")
  .append("div")
    .style("width", divW + "px")
    .style("height", divH + "px")
    .style("background-color", "#80BD9E");

var svg = d3.select("div")
  .append("svg")
    .attr("width", divW)
    .attr("height", divH);

var underRect = svg.append("rect")
  .attr("id", "under-rect")
  .attr("x", (divW - w + 10) / 2)
  .attr("y", (divH - h) / 2 - 7)
  .attr("rx", 5)
  .attr("width", w - 10)
  .attr("height", 20)
  .attr("fill", "#FFFFFF")
  .attr("fill-opacity", 0.7);

var loginRect = svg.append("rect")
  .attr("id", "login-rect")
  .attr("x", (divW - w) / 2)
  .attr("y", (divH - h) / 2)
  .attr("rx", 5)
  .attr("width", w)
  .attr("height", h)
  .attr("fill", "#FFFFFF");

var sideRect = svg.append("rect")
  .attr("id", "side-rect")
  .attr("x", (divW - w) / 2)
  .attr("y", (divH - h) / 2 + 47)
  .attr("width", 5)
  .attr("height", 40)
  .attr("fill", "#FF420E");

var fillLoginForm = function() {
  var header = svg.append("text")
    .attr("id", "header")
    .attr("x", (divW - w) / 2 + 40)
    .attr("y", (divH - h) / 2 + 80)
    .text("LOGIN")
    .attr("font-size", "32px")
    .attr("fill", "#FF420E")
    .attr("font-weight", "500");

  var usernameText = svg.append("text")
    .attr("class", "form-username")
    .attr("transition", false)
    .attr("x", header.attr("x"))
    .attr("y", parseInt(header.attr("y")) + 60)
    .text("Username")
    .attr("font-size", "22px")
    .attr("fill", "#535353")
    .attr("font-weight", "300");

  var usernameInput = svg.append("foreignObject")
    .attr("x", header.attr("x"))
    .attr("y", usernameText.attr("y") - 10);

  usernameInput.append("xhtml:input")
    .attr("class", "form-username")
    .attr("type", "text")
    .attr("width", "350px");

  var passwordText = svg.append("text")
    .attr("class", "form-password")
    .attr("x", header.attr("x"))
    .attr("y", parseInt(usernameInput.attr("y")) + 85)
    .text("Password")
    .attr("transition", false)
    .attr("font-size", "22px")
    .attr("fill", "#535353")
    .attr("font-weight", "300");

  var passwordInput = svg.append("foreignObject")
    .attr("class", "form-password")
    .attr("x", header.attr("x"))
    .attr("y", parseInt(passwordText.attr("y")) - 10);

  passwordInput.append("xhtml:input")
    .attr("class", "form-password")
    .attr("type", "password");

  var usernameLine = svg.append("line")
    .attr("class", "form-username")
    .attr({
      x1: usernameText.attr("x"),
      y1: parseInt(usernameText.attr("y")) + 12,
      x2: parseInt(usernameText.attr("x")) + 315,
      y2: parseInt(usernameText.attr("y")) + 12
    })
    .attr("stroke", "#C5C5C5")
    .attr("stroke-width", "2px");

  var passwordLine = svg.append("line")
    .attr("class", "form-password")
    .attr({
      x1: passwordText.attr("x"),
      y1: parseInt(passwordText.attr("y")) + 12,
      x2: parseInt(passwordText.attr("x")) + 315,
      y2: parseInt(passwordText.attr("y")) + 12
    })
    .attr("stroke", "#C5C5C5")
    .attr("stroke-width", "2px");

  addButton("login")

  var buttonContainer = svg.select("#button");
  var forgot = svg.append("text")
    .attr("id", "forgot")
    .attr("class", "login-content")
    .attr("x", 190.92)
    .attr("y", parseInt(buttonContainer.attr("y")) + 100)
    .text("Forgot your password?")
    .attr("font-size", "22px")
    .attr("fill", "#C5C5C5")
    .attr("font-weight", "100");

  svg.selectAll("text")
    .attr("font-family", "Roboto, sans-serif");

  var registerCircle = svg.insert("rect", "#side-rect")
    .attr("id", "register-circle")
    .attr("class", "register-button")
    .attr("rx", 100)
    .attr("ry", 100)
    .attr("x", 440)
    .attr("y", 110)
    .attr("width", 120)
    .attr("height", 120)
    .attr("fill", "#FF420E");

  svg.append("line")
  .attr("id", "rl1") // registerline1
  .attr("class", "register-button register")
  .attr({
    x1: 480,
    y1: 170,
    x2: 520,
    y2: 170
  });

  svg.append("line")
    .attr("id", "rl2") // registerline2
    .attr("class", "register-button register")
    .attr({
      x1: 500,
      y1: 150,
      x2: 500,
      y2: 190
    });

  svg.selectAll(".register")
    .attr("stroke", "#FFFFFF")
    .attr("stroke-width", 7);
};

var addButton = function(type) {
  var container = svg.append("foreignObject")
    .attr("id", "button")
    .attr("clicked", false);
  var button = container.append("xhtml:button")
    .style("font-family", "Roboto, sans-serif")
    .style("font-size", "20px")
    .style("font-weight", 500)
    .style("padding", "15px 90px 15px 90px")
    .style("border", "3px solid #C5C5C5");

  if (type === "login") {
    container.attr("class", "login-content")
      .attr("x", 190.57)
      .attr("y", 375);

    button.text("GO")
      .style("color", "#C5C5C5");
  } else if (type === "register") {
    container.attr("class", "register-content")
      .attr("x", 190.57)
      .attr("y", 460);

    button.text("NEXT")
      .style("border", "none")
      .style("color", "#FF420E")
      .style("background", "#FFFFFF");
  }
}

var addTextTransition = function(text) {
  text.attr("transition", true)
    .transition()
    .duration(400)
    .attr("y", parseInt(text.attr("y")) - 20)
    .attr("font-size", "18px")
    .attr("fill", "#C5C5C5");
};

var resetTextTransition = function(text, transFill) {
  text.attr("transition", false)
    .attr("fill", transFill)
    .transition()
    .duration(400)
    .attr("y", parseInt(text.attr("y")) + 20)
    .attr("font-size", "22px");
};

var addSlidingUnderline = function(currentLine, transColor) {
  var className = currentLine.attr("class").replace(/ /g,".");
  if (svg.select("line.sliding." + className).empty()) {
    svg.append("line")
      .attr("class", "sliding " + currentLine.attr("class"))
      .attr({
        x1: currentLine.attr("x1"),
        y1: currentLine.attr("y1"),
        x2: currentLine.attr("x1"),
        y2: currentLine.attr("y1")
      })
      .attr("stroke", transColor)
      .attr("stroke-width", "2px")
      .transition()
      .duration(500)
      .attr({
        x2: currentLine.attr("x2"),
        y2: currentLine.attr("y2")
      });
  }
};

var unslideUnderline = function(className) {
  var line = svg.select("line.sliding." + className)
  if (!line.empty()) {
    line.transition()
    .duration(500)
    .attr({
      x2: line.attr("x1"),
      y2: line.attr("y1")
    })
    .each("end", function(){
      line.remove();
    });
  }
};

var addBorderTransition = function(color) {
  svg.select("button")
    .style("border", "3px solid " + color)
    .style("transition", "border-color 1s ease-in")
    .transition()
    .duration(1000)
    .style("color", color);
};

var allInputsFilled = function() {
  var filled = true;
  svg.selectAll("input")
    .each(function() {
      var className = $(this).attr("class").replace(/ /g,".");
      var input = svg.select("input." + className);
      if (input.property("value") === "") {
        filled = false;
        return;
      }
    });

  return filled;
};

var addButtonTransition = function() {
  var fO = svg.select("#button")
    .attr("clicked", true);

  svg.append("defs")
    .attr("id", "bcp")
    .attr("class", "login-content")
    .append("clipPath")
      .attr("id", "clip-path")
      .append("rect")
        .attr("width", 212)
        .attr("height", 60)
        .attr("x", Math.round(fO.attr("x")))
        .attr("y", Math.round(fO.attr("y")));

  var circle = svg.append("circle")
    .attr("class", "login-content")
    .attr("clip-path", "url(#clip-path)")
    .attr("cx", 297)
    .attr("cy", 405)
    .attr("r", 0)
    .attr("fill", "#FF420E");

  addCheckMark();

  svg.select("#cml1") // checkmark line1 transition
    .transition()
    .duration(700)
    .attr({
      x1: 290,
      y1: 405,
      x2: 298,
      y2: 415
    });

  svg.select("#cml2") // checkmark line2 transition
    .transition()
    .duration(700)
    .attr({
      x1: 295,
      y1: 415,
      x2: 310,
      y2: 400
    });

  circle.transition()
    .duration(500)
    .attr("r", 109);
};

var addCheckMark = function() {
  svg.append("line")
    .attr("id", "cml1")
    .attr("class", "checkmark login-content")
    .attr({
      x1: 285,
      y1: 415,
      x2: 298,
      y2: 415
    });

  svg.append("line")
    .attr("id", "cml2")
    .attr("class", "checkmark login-content")
    .attr({
      x1: 295.5,
      y1: 415,
      x2: 295.5,
      y2: 394
    });

  svg.selectAll(".checkmark")
    .attr("stroke", "#FFFFFF")
    .attr("stroke-width", 5);
};

var transformRegister = function() {
  svg.select("#register-circle")
    .attr("clicked", true)
    .transition()
    .duration(500)
    .attr("x", (divW - w) / 2)
    .attr("y", (divH - h) / 2)
    .attr("rx", 5)
    .attr("ry", 0)
    .attr("width", 400)
    .attr("height", 450)
    .each("end", function() {
      svg.select("button").style("visibility", "visible");
      sideRect.attr("fill", "#FFFFFF");
    });
};

var addUnderRectsTransition = function(type) {
  var underRect = svg.select("#under-rect");
  var loginRect = svg.select("#login-rect");

  if (type === "register") {
    var widthDiff = -10;
    var xDiff = 5;
    var yDiff = -5;
    var underRectOpac = 0.5;
    var loginRectOpac = 0.85;
  } else if (type === "login") {
    var widthDiff = 10;
    var xDiff = -5;
    var yDiff = 5;
    var underRectOpac = 0.75;
    var loginRectOpac = 1;
  }

  if (widthDiff) {
    underRect.transition()
      .duration(400)
      .attr("width", parseInt(underRect.attr("width")) + widthDiff)
      .attr("x", parseInt(underRect.attr("x")) + xDiff)
      .attr("y", parseInt(underRect.attr("y")) + yDiff)
      .each("end", function() {
        underRect.attr("fill-opacity", underRectOpac);
      });

    loginRect.transition()
      .duration(400)
      .attr("width", parseInt(loginRect.attr("width")) + widthDiff)
      .attr("x", parseInt(loginRect.attr("x")) + xDiff)
      .attr("y", parseInt(loginRect.attr("y")) + yDiff)
      .each("end", function() {
        loginRect.attr("fill-opacity", loginRectOpac)
      });
  }
};

var transformPlus = function(type) {
  if (type === "register") {
    var plusLines = svg.selectAll(".register");

    plusLines.classed({
        "register-button": false,
        "register": false,
        "cancel": true
      });
    addXClickListener();
  } else if (type === "login") {
    var plusLines = svg.selectAll(".cancel");

    plusLines.classed({
        "register-button": true,
        "register": true,
        "cancel": false
      });
    addRegisterClickListener();
  }

  plusLines.each(function() {
    var id = $(this).attr("id");
    var line = svg.select("#" + id);
    var x1 = parseInt(line.attr("x1"));
    var x2 = parseInt(line.attr("x2"));
    var y1 = parseInt(line.attr("y1"));
    var y2 = parseInt(line.attr("y2"));

    if (id === "rl1") {
      var halfLength = (x2 - x1) / 2;
      var xMid = (x1 + x2) / 2;
      var rotatedX = Math.round(xMid - (Math.sin(45 * Math.PI / 180)) / halfLength);
      var rotatedY = Math.round(y1 - Math.sin(45 * Math.PI / 180) * halfLength);
      if (type === "register") {
        var transX = 470 - rotatedX;
        var transY = 115 - rotatedY;
        var degrees = 45;
      } else {
        var transX = 0;
        var transY = 0;
        var degrees = 0;
      }
      var translate = transX + "," + transY;
      var rotate = degrees.toString() + "," + xMid + "," + y1;
      line.transition()
        .duration(500)
        .attr("transform", "translate(" + translate + ")" + "rotate(" + rotate + ")");
    } else {
      var halfLength = (y2 - y1) / 2;
      var yMid = (y1 + y2) / 2;
      var rotatedX = Math.round(x1 + Math.sin(45 * Math.PI /180) * halfLength);
      var rotatedY = Math.round(yMid - Math.sin(45 * Math.PI / 180) * halfLength);
      if (type === "register") {
        var transX = 484 - rotatedX;
        var transY = 115 - rotatedY;
        var degrees = 45;
      } else {
        var transX = 0;
        var transY = 0;
        var degrees = 0;
      }
      var translate = transX + "," + transY;
      var rotate = degrees.toString() + "," + x1 + "," + yMid;
      line.transition()
        .duration(500)
        .attr("transform", "translate(" + translate + ")" + "rotate(" + rotate + ")");
    }
  });
};

var removeContents = function(type) {
  svg.selectAll("." + type + "-content").remove();
};

var swapnFillIn = function(type) {
  var header = svg.select("#header");
  if (type === "register") {
    header.text("REGISTER");

    svg.selectAll("input")
      .each(function() {
        var className = $(this).attr("class").replace(/ /g,".");
        var inputVal = svg.select("input." + className).property("value");
        if (inputVal !== "") {
          svg.select("input." + className).property("value", "");
          var text = svg.select("text." + className);
          resetTextTransition(text, "#FFFFFF");
        }
      });

    svg.selectAll("text")
      .transition()
      .duration(300)
      .attr("fill", "#FFFFFF");

    svg.selectAll("line")
      .transition()
      .duration(300)
      .attr("stroke", "#FFFFFF");

    var passwordInput = svg.select("foreignObject.form-password");

    var passwordRepeatText = svg.append("text")
      .attr("class", "form-repeatpassword register-content")
      .attr("x", header.attr("x"))
      .attr("y", parseInt(passwordInput.attr("y")) + 85)
      .text("Repeat Password")
      .attr("transition", false)
      .attr("font-family", "Roboto, sans-serif")
      .attr("font-size", "22px")
      .attr("font-weight", "300");

    var passwordRepeatInput = svg.append("foreignObject")
      .attr("class", "form-repeatpassword register-content")
      .attr("x", header.attr("x"))
      .attr("y", parseInt(passwordRepeatText.attr("y")) - 10);

    passwordRepeatInput.append("xhtml:input")
      .attr("class", "form-repeatpassword register-content")
      .attr("type", "password");

    var passwordRepeatLine = svg.append("line")
      .attr("class", "form-repeatpassword register-content")
      .attr({
        x1: passwordRepeatText.attr("x"),
        y1: parseInt(passwordRepeatText.attr("y")) + 12,
        x2: parseInt(passwordRepeatText.attr("x")) + 315,
        y2: parseInt(passwordRepeatText.attr("y")) + 12
      })
      .attr("stroke-width", "2px");

    svg.select("text.form-repeatpassword.register-content")
      .attr("fill", "#FFFFFF");

    svg.select("line.form-repeatpassword.register-content")
      .attr("stroke", "#FFFFFF");

    addButton("register");
    svg.select("button").style("visibility", "hidden");
  } else if (type === "login") {
      header.text("LOGIN").attr("fill", "#FF420E");
      svg.selectAll("input")
        .each(function() {
          var className = $(this).attr("class").replace(/ /g,".");
          var inputVal = svg.select("input." + className).property("value");
          if (inputVal !== "") {
            svg.select("input." + className).property("value", "");
            var text = svg.select("text." + className);
            resetTextTransition(text, "#535353");
          }
        });

      svg.selectAll("line.form-username, line.form-password")
        .transition()
        .duration(200)
        .attr("stroke", "#C5C5C5");

      svg.selectAll("text.form-username, text.form-password")
        .transition()
        .duration(200)
        .attr("fill", "#535353");

      addButton("login");
      var buttonContainer = svg.select("#button.login-content");
      var forgot = svg.append("text")
        .attr("id", "forgot")
        .attr("class", "login-content")
        .attr("x", 190.92)
        .attr("y", parseInt(buttonContainer.attr("y")) + 100)
        .text("Forgot your password?")
        .attr("font-family", "Roboto, sans-serif")
        .attr("font-size", "22px")
        .attr("fill", "#C5C5C5")
        .attr("font-weight", "100");
      addButtonClickListener();
  }

  addFocusListener();
  addBlurListener();
  addInputListener();
};

var resetRegisterRect = function() {
  var sideRect = svg.select("#side-rect").attr("visibility", "hidden");
  svg.select("#register-circle")
    .attr("class", "register-button")
    .transition()
    .duration(500)
    .attr("rx", 100)
    .attr("ry", 100)
    .attr("x", 440)
    .attr("y", 110)
    .attr("width", 120)
    .attr("height", 120)
    .each("end", function() {
      sideRect.attr("visibility", "visible")
        .attr("fill", "#FF420E");
    });
  swapnFillIn("login");
};

var addFocusListener = function() {
  svg.selectAll("input").on("focus", function() {
    var className = $(this).attr("class").replace(/ /g,".");
    var text = svg.select("text." + className);
    if (text.attr("transition") === "false") {
      addTextTransition(text);
    }
  });
};

var addBlurListener = function() {
  svg.selectAll("input").on("blur", function() {
    var className = $(this).attr("class").replace(/ /g,".");
    if (svg.select("input." + className).property("value") === "") {
      var text = svg.select("text." + className);
      if (svg.select("#header").attr("fill") === "#FF420E") {
        resetTextTransition(text, "#535353");
      } else {
        resetTextTransition(text, "#FFFFFF");
      }
      unslideUnderline(className);
    }
  });
};

var addInputListener = function() {
  svg.selectAll("input").on("input", function() {
    var className = $(this).attr("class").replace(/ /g,".");
    var currentLine = svg.select("line." + className);
    if (currentLine.attr("stroke").toUpperCase() === "#C5C5C5" ) {
      addSlidingUnderline(currentLine, "#FF420E");
      if (allInputsFilled()) {
        addBorderTransition("#FF420E");
      } else {
        addBorderTransition("#C5C5C5");
      }
    } else {
      addSlidingUnderline(currentLine, "#C5C5C5");
    }

  });
};

var addButtonClickListener = function() {
  var fO = svg.select("#button");
  svg.select("button").on("click", function() {
    if (allInputsFilled() && fO.attr("clicked") === "false") {
      addButtonTransition()
    }
  });
};

var addRegisterClickListener = function() {
  svg.selectAll(".register-button").on("click", function() {
      if (svg.select("#register-circle").attr("clicked") === null) {
        removeContents("login")
        transformRegister("register");
        swapnFillIn("register");
        transformPlus("register");
        addUnderRectsTransition("register");
      }
  });
};

var addXClickListener = function() {
  svg.selectAll(".cancel").on("click", function() {
    svg.select("#register-circle").attr("clicked", null);
    removeContents("register");
    addUnderRectsTransition("login");
    resetRegisterRect();
    transformPlus("login");
  });
};

var loadPage = function() {
  fillLoginForm();
  addFocusListener();
  addBlurListener();
  addInputListener();
  addButtonClickListener();
  addRegisterClickListener();
};

loadPage();
