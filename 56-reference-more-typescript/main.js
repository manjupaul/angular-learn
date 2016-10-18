var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./utils");
var Main = (function () {
    function Main() {
        this.h = new utils_1.Helper();
        var height = 6;
        var name = "bob";
        name = "smith";
        var list = [1, 2, 3];
        var list2 = [1, 2, 3];
        var notSure = 4;
        notSure = "maybe a string instead";
        notSure = false;
    }
    Main.prototype.run = function () {
        console.log(this.h.helpMe());
    };
    return Main;
})();
new Main().run();
var X = (function () {
    function X(y) {
        this.y = y;
    }
    X.prototype.getT = function () {
        return this.y;
    };
    return X;
})();
var x = new X("three");
x.getT();
var ColorOne;
(function (ColorOne) {
    ColorOne[ColorOne["Red"] = 0] = "Red";
    ColorOne[ColorOne["Green"] = 1] = "Green";
    ColorOne[ColorOne["Blue"] = 2] = "Blue";
})(ColorOne || (ColorOne = {}));
;
var c = ColorOne.Green;
c = ColorOne.Blue;
var ColorTwo;
(function (ColorTwo) {
    ColorTwo[ColorTwo["Red"] = 1] = "Red";
    ColorTwo[ColorTwo["Green"] = 2] = "Green";
    ColorTwo[ColorTwo["Blue"] = 3] = "Blue";
})(ColorTwo || (ColorTwo = {}));
;
var c2 = ColorTwo.Green;
var LabelledThing = (function () {
    function LabelledThing() {
    }
    return LabelledThing;
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result === -1) {
        return false;
    }
    else {
        return true;
    }
};
function foo(x) {
    if (x > 0) {
        return x;
    }
    else {
        return "Less than 0";
    }
}
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter("world");
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//# sourceMappingURL=main.js.map