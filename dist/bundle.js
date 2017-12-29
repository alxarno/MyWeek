/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_task_settings_task_settings_window__ = __webpack_require__(4);


class Task {
    constructor(text, color, start, stop, day, id, week_id) {
        this.currentGroup = 0;
        this.color = color;
        this.start = start;
        this.stop = stop;
        this.day = day;
        this.id = id;
        this.text = text;
        this.week_id = week_id;
    }
    draw(parentElement, hour, day, week_number) {
        let newInEl = document.createElement("div");
        newInEl.className = "task";
        newInEl.id = "task" + String(week_number) + ":" + String(hour) + ":" + String(day);
        newInEl.setAttribute("data-id", String(this.id));
        newInEl.style.background = this.color;
        newInEl.onclick = function (e) { this.elementClick(e); }.bind(this);
        newInEl.onmouseover = function (e) { this.elementHover(e); }.bind(this);
        newInEl.onmouseleave = function (e) { this.elementLeave(e); }.bind(this);
        parentElement.appendChild(newInEl);
        this.element = newInEl;
    }
    setAtrib(name, value) {
        this.element.setAttribute(name, value);
    }
    setTooltip() {
        this.tooltipElement = new __WEBPACK_IMPORTED_MODULE_0__tooltip__["a" /* default */](this.text, this.color, this.start, this.stop);
    }
    elementClick(event) {
        let modalSettings = Object(__WEBPACK_IMPORTED_MODULE_1__window_task_settings_task_settings_window__["a" /* getWindowTaskSettings */])();
        this.tooltipElement.hidden();
        modalSettings.draw(this, true);
    }
    elementHover(event) {
        let elementList = document.querySelectorAll('[data-group]');
        let tasksElements = [];
        let currentDataGroupEl = event.srcElement.getAttribute("data-group");
        for (let i = 0; i < elementList.length; i++) {
            if (currentDataGroupEl == elementList[i].getAttribute("data-group")) {
                tasksElements.push(i);
            }
        }
        if (tasksElements.length != 0) {
            let begin = elementList[tasksElements[0]].getBoundingClientRect().left;
            let top = elementList[tasksElements[0]].getBoundingClientRect().top - 10;
            let done = elementList[tasksElements[tasksElements.length - 1]].getBoundingClientRect().left +
                elementList[tasksElements[tasksElements.length - 1]].getBoundingClientRect().width;
            if (begin < 0) {
                done -= begin;
                begin -= begin;
            }
            let middle = begin + Math.floor((done - begin) / 2);
            this.tooltipElement.draw(top, middle);
        }
    }
    elementLeave() {
        this.tooltipElement.hidden();
    }
    setStyle(styleName, styleValue) {
        if (this.element != null) {
            this.element.style[styleName] = styleValue;
        }
    }
    clear() {
        if (this.element != null) {
            this.element.remove();
            this.element = null;
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Task);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElement; });
function createElement(type, className, parent) {
    let element = document.createElement(type);
    element.className = className;
    parent.appendChild(element);
    return element;
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dbInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getWeeks; });
/* unused harmony export deleteTask */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeTask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__week_task__ = __webpack_require__(0);

let db;
function dbInit() {
    db = openDatabase('main_db', '1.1', 'Main DB', 2 * 1024 * 1024);
    if (!db) {
        throw new Error("Fail open db");
    }
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS tasks" +
            " (ID INTEGER PRIMARY KEY ASC,text TEXT,start " +
            "INTEGER, stop INTEGER, day INTEGER, color TEXT, week_id INTEGER)", []);
        tx.executeSql("CREATE TABLE IF NOT EXISTS weeks (ID INTEGER PRIMARY KEY ASC)", []);
    });
}
function createWeek() {
    if (!db)
        throw new Error("DB is not init, use dbInit()");
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO weeks DEFAULT VALUES ");
    });
    return true;
}
function createTask(task, callback) {
    if (!db)
        throw new Error("DB is not init, use dbInit()");
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO tasks (text,start,stop,day,color,week_id) VALUES(?,?,?,?,?,?)", [task.text, task.start, task.stop, task.day, task.color, task.week_id], function (transaction, result) {
            console.log(result);
            callback(true);
        }, function (transaction, error) {
            console.log(error);
            callback(false);
        });
    });
    return true;
}
function getTasks(week_id, res) {
    let final = [];
    if (!db)
        throw new Error("DB is not init, use dbInit()");
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM tasks WHERE week_id = ?", [week_id], function (tx, result) {
            for (let i = 0; i < result.rows.length; i++) {
                let now_task = new __WEBPACK_IMPORTED_MODULE_0__week_task__["a" /* default */](result.rows.item(i).text, result.rows.item(i).color, result.rows.item(i).start, result.rows.item(i).stop, result.rows.item(i).day, result.rows.item(i).ID, result.rows.item(i).week_id);
                final.push(now_task);
            }
            console.log(final);
            res(final);
        });
    });
}
function getWeeks(ret) {
    let final = [];
    if (!db)
        throw new Error("DB is not init, use dbInit()");
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM weeks", [], function (tx, result) {
            for (let i = 0; i < result.rows.length; i++) {
                final.push(Number(result.rows.item(i).ID));
            }
            ret(final);
        });
    });
}
function deleteTask(task_id, callback) {
    if (!db)
        throw new Error("DB is not init, use dbInit()");
    db.transaction(function (tx) {
        tx.executeSql("DELETE FROM tasks WHERE ID=?", [task_id], function (transaction, result) {
            console.log(result);
            callback(true);
        }, function (transaction, error) {
            console.log(error);
            callback(false);
        });
    });
    return true;
}
function changeTask(up_task, callback) {
    console.log(up_task.text, up_task.id);
    if (!db)
        throw new Error("DB is not init, use dbInit()");
    db.transaction(function (tx) {
        tx.executeSql("update tasks set text=?, start=?, stop=?, day=?, color=?, week_id=? " +
            " where ID=? ", [up_task.text, up_task.start, up_task.stop,
            up_task.day, up_task.color, up_task.week_id,
            up_task.id], function (transaction, result) {
            console.log(result);
            callback(true);
        }, function (transaction, error) {
            console.log(error);
            callback(false);
        });
    });
    return true;
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__week_week__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_db_api__ = __webpack_require__(2);




let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let currentWeek = 2;
let startHour = 11;
Object(__WEBPACK_IMPORTED_MODULE_2__db_db_api__["d" /* dbInit */])();
function clear(classType) {
    let elements = document.getElementsByClassName(classType);
    for (let i = elements.length; i--;) {
        elements[i].remove();
    }
}
function drawButton() {
    let buttonShell = Object(__WEBPACK_IMPORTED_MODULE_1__functions_functions__["a" /* createElement */])("div", "buttonShell", document.body);
    let button = Object(__WEBPACK_IMPORTED_MODULE_1__functions_functions__["a" /* createElement */])("div", "button", buttonShell);
    button.innerText = "Create week";
    button.onclick = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__db_db_api__["c" /* createWeek */])();
        Draw();
    };
}
function Draw() {
    clear("paper  main-container");
    clear("buttonShell");
    clear("taskTooltip");
    Object(__WEBPACK_IMPORTED_MODULE_2__db_db_api__["f" /* getWeeks */])(function (weeks) {
        weeks.map(function (item, index) {
            Object(__WEBPACK_IMPORTED_MODULE_2__db_db_api__["e" /* getTasks */])(item, function (tasks) {
                let week = new __WEBPACK_IMPORTED_MODULE_0__week_week__["a" /* default */](item);
                week.create(document.body, (item == currentWeek));
                week.loadDays(days);
                week.setStartHour(startHour);
                week.loadTasks(tasks);
                week.draw();
                if (index == weeks.length - 1) {
                    drawButton();
                }
            });
        });
    });
}
Draw();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowTaskSettings; });
/* unused harmony export TaskSettingsWindow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_settings_content__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(3);


let taskSettings;
function getWindowTaskSettings() {
    if (!taskSettings) {
        taskSettings = new TaskSettingsWindow();
    }
    return taskSettings;
}
class TaskSettingsWindow {
    constructor() {
        this.open = false;
        let newBackground = document.createElement("div");
        newBackground.className = "modalBackground close";
        this.background = newBackground;
        this.background.onclick = function (e) {
            if (e.srcElement.className != this.background.className)
                return;
            this.close();
        }.bind(this);
        document.body.appendChild(newBackground);
        this.content = new __WEBPACK_IMPORTED_MODULE_0__task_settings_content__["a" /* TaskSettingsContent */](this.background, function () { this.close(); }.bind(this), __WEBPACK_IMPORTED_MODULE_1__app__["Draw"]);
    }
    draw(task, saveOrCreate) {
        this.open = !this.open;
        this.background.className = "modalBackground colored";
        this.content.draw(task, saveOrCreate);
    }
    close() {
        this.open = !this.open;
        this.background.className = "modalBackground close";
        this.content.clear();
    }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__days__ = __webpack_require__(12);




class Week {
    constructor(week_number) {
        this.hourWidth = 80;
        this.startHour = 13;
        this.week_number = week_number;
        this.timePanel = new __WEBPACK_IMPORTED_MODULE_0__time__["a" /* default */]();
        this.graphPanel = new __WEBPACK_IMPORTED_MODULE_2__graph__["a" /* default */]();
        this.daysPanel = new __WEBPACK_IMPORTED_MODULE_3__days__["a" /* default */]();
    }
    create(parent, currentWeek) {
        let wrap = document.createElement("div");
        wrap.className = "paper  main-container";
        let up = document.createElement("div");
        up.className = (currentWeek) ? "up active" : "up";
        wrap.appendChild(up);
        up.innerHTML = "Week " + String(this.week_number);
        up.onclick = function (e) {
            console.log(e.target);
            wrap.classList;
            let clList = wrap.classList;
            for (let i = 0; i < clList.length; i++) {
                if (clList[i] == "closed") {
                    clList.remove("closed");
                    days.className = "days";
                    return;
                }
            }
            clList.add("closed");
            days.className = "days close";
        };
        let grid = document.createElement("div");
        grid.id = "grid" + String(this.week_number);
        let header = document.createElement("div");
        header.className = "header";
        header.id = "header" + String(this.week_number);
        let container = document.createElement("div");
        container.className = "container-week";
        container.id = "container-week" + String(this.week_number);
        grid.appendChild(header);
        grid.appendChild(container);
        let days = document.createElement("div");
        let graph = document.createElement("div");
        days.id = "days" + String(this.week_number);
        days.className = "days";
        graph.id = "graph" + String(this.week_number);
        graph.className = "graph";
        container.appendChild(days);
        container.appendChild(graph);
        grid.className = "grid";
        wrap.appendChild(grid);
        parent.appendChild(wrap);
        this.container = container;
        this.daysPanel.setup(days);
        this.graphPanel.setNativeElement(graph);
        this.timePanel.setNativeElement(header);
    }
    loadTasks(plans) {
        let timePlans = [];
        for (let i = this.startHour; i < this.startHour + 24; i++) {
            let now = (i > 23) ? i - 23 : i;
            timePlans[i + 1] = new Array(7);
            for (let j = 0; j < 7; j++) {
                timePlans[i + 1][j] = new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* default */]("", "", 0, 0, 0, 0, 0);
                timePlans[i + 1][j].id = -1;
            }
            for (let j = 0; j < plans.length; j++) {
                if (now >= plans[j].start && now <= plans[j].stop) {
                    if (plans[j].stop == i) {
                        continue;
                    }
                    timePlans[i + 1][plans[j].day] = plans[j];
                }
            }
        }
        timePlans[this.startHour] = timePlans[this.startHour + 1];
        this.tasks = timePlans;
    }
    loadDays(days) {
        this.daysPanel.loadDays(days);
    }
    setStartHour(hour) {
        this.startHour = hour;
    }
    draw() {
        this.container.style.width = String(24.5 * this.hourWidth) + 'px';
        this.timePanel.setup(this.startHour, this.hourWidth);
        let count = this.timePanel.draw();
        this.graphPanel.setup(this.startHour, count, this.hourWidth, this.week_number);
        this.graphPanel.draw(this.tasks);
        this.daysPanel.draw();
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Week);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Time {
    setup(start, hourWidth) {
        this.start = start;
        this.hourWidth = hourWidth;
    }
    setNativeElement(element) {
        this.nativeElement = element;
    }
    draw() {
        this.nativeElement.innerHTML = "";
        this.nativeElement.style.width = String(24 * this.hourWidth) + "px";
        let count = 24;
        let final = this.start + count;
        let begin = this.start;
        for (let i = begin; i < final; i++) {
            if (i >= 24) {
                i = i - 24;
                final = final - 24;
            }
            let newEl = document.createElement("div");
            let time = (i < 10) ? '0' + String(i) : String(i);
            newEl.innerHTML = time + ":00";
            newEl.className = "hour";
            newEl.style.width = this.hourWidth + "px";
            this.nativeElement.appendChild(newEl);
        }
        return count;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Time);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tooltip {
    constructor(text, color, start, stop) {
        this.open = false;
        this.color = color;
        this.start = start;
        this.stop = stop;
        this.text = text;
        let tooltip = document.createElement("div");
        tooltip.className = "taskTooltip";
        document.body.appendChild(tooltip);
        this.element = tooltip;
        this.drawInner();
    }
    drawInner() {
        if (!this.element)
            throw new Error("tooltip yet not created");
        let text = document.createElement("div");
        let color = document.createElement("div");
        let time = document.createElement("div");
        text.className = "tooltipText";
        color.className = "tooltipColor";
        time.className = "tooltipTime";
        text.innerText = this.text;
        color.style.background = this.color;
        time.innerText = String(this.start) +
            ":00 - " + String(this.stop) + ":00";
        this.element.appendChild(text);
        this.element.appendChild(color);
        this.element.appendChild(time);
    }
    draw(top, left) {
        this.element.className = "taskTooltip active";
        let borderRight = window.innerWidth;
        let borderBottom = window.innerHeight;
        let elementHeight = this.element.getBoundingClientRect().height;
        let elementWidth = this.element.getBoundingClientRect().width;
        let nTop = top - elementHeight;
        let nLeft = left - (elementWidth / 2);
        if (nLeft + elementWidth > borderRight) {
            nLeft = borderRight - elementWidth;
        }
        this.element.style.top = String(nTop) + "px";
        this.element.style.left = String(nLeft) + "px";
        this.open = true;
    }
    hidden() {
        this.element.className = "taskTooltip";
        this.open = false;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Tooltip);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskSettingsContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_db_api__ = __webpack_require__(2);


class TaskSettingsContent {
    constructor(parent, closeBackground, redrawFun) {
        this.colorsList = ["#f5a978", "#000", "#ffdda9"];
        this.colorsElements = [];
        this.saveFunc = this.save;
        this.closeBackground = closeBackground;
        this.redraw = redrawFun;
        this.element = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("div", "modalContent", parent);
        this.name = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("input", "modalContentInput", this.element);
        this.timeStart = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("input", "modalContentInput half", this.element);
        this.timeStop = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("input", "modalContentInput half", this.element);
        let colorWrapper = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("div", "colorWrapper", this.element);
        this.colorsList.map(function (item) {
            this.colorsElements.push(Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("div", "modalContentColor", colorWrapper));
            this.colorsElements[this.colorsElements.length - 1].style.background = item;
            this.colorsElements[this.colorsElements.length - 1].onclick = function () {
                this.currentColor = item;
                this.drawColors();
            }.bind(this);
        }.bind(this));
        let close = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("div", "closeContentWindow", this.element);
        close.onclick = function () {
            this.closeBackground();
        }.bind(this);
        close.innerText = "Close";
        let save = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("div", "saveContentWindow", this.element);
        save.onclick = function () {
            this.saveFunc();
        }.bind(this);
        save.innerText = "Save";
    }
    save() {
        this.currentTask.text = this.name.value;
        this.currentTask.start = Number(this.timeStart.value);
        this.currentTask.stop = Number(this.timeStop.value);
        this.currentTask.color = this.currentColor;
        Object(__WEBPACK_IMPORTED_MODULE_1__db_db_api__["a" /* changeTask */])(this.currentTask, function (result) {
            if (result) {
                this.clearData();
                this.closeBackground();
                this.redraw();
            }
        }.bind(this));
    }
    create() {
        this.currentTask.color = this.currentColor;
        this.currentTask.start = Number(this.timeStart.value);
        this.currentTask.stop = Number(this.timeStop.value);
        this.currentTask.text = this.name.value;
        Object(__WEBPACK_IMPORTED_MODULE_1__db_db_api__["b" /* createTask */])(this.currentTask, function (result) {
            if (result) {
                this.clearData();
                this.closeBackground();
                this.redraw();
            }
        }.bind(this));
    }
    draw(task, saveOrCreate) {
        if (!saveOrCreate) {
            this.saveFunc = this.create;
        }
        this.currentTask = task;
        this.element.className = "modalContent active";
        this.currentColor = task.color;
        this.name.value = task.text;
        this.timeStart.value = task.start;
        this.timeStop.value = task.stop;
        this.drawColors();
    }
    drawColors() {
        this.colorsList.map(function (item, index) {
            if (item == this.currentColor) {
                this.colorsElements[index].className = "modalContentColor current";
            }
            else {
                this.colorsElements[index].className = "modalContentColor";
            }
        }.bind(this));
    }
    clear() {
        this.currentTask = null;
        this.element.className = "modalContent close";
    }
    clearData() {
        this.name.value = "";
        this.timeStart.value = "";
        this.timeStop.value = "";
        this.currentColor = "";
    }
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_popup_popup__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_popup_contents_task_create__ = __webpack_require__(11);



class Graph {
    constructor() {
        this.elementClick = function (e) {
        };
    }
    setNativeElement(element) {
        this.nativeElement = element;
    }
    setup(start, count, hourWidth, week_number) {
        this.start = start;
        this.count = count;
        this.hourWidth = hourWidth;
        this.week_number = week_number;
    }
    draw(tasks) {
        let lastJ = 0;
        this.nativeElement.innerHTML = "";
        for (let i = this.start; i < this.start + this.count + 1; i++) {
            let newColumn = document.createElement("div");
            newColumn.className = "column";
            newColumn.style.width = this.hourWidth + "px";
            newColumn.style.height = 40 * 7 + "px";
            for (let j = 0; j < 7; j++) {
                let newEl = document.createElement("div");
                newEl.className = "cell";
                newEl.style.width = this.hourWidth + "px";
                if (i == this.start) {
                    newEl.style.width = 20 + "px";
                    newColumn.style.width = 20 + "px";
                }
                if (tasks[i][j].id != -1) {
                    tasks[i][j].draw(newEl, i, j, this.week_number);
                    tasks[i][j].setAtrib("data-group", String(tasks[i][j].currentGroup) + ":" + String(tasks[i][j].id));
                    if (i != this.start + this.count) {
                        if (tasks[i][j].id == tasks[i + 1][j].id) {
                            tasks[i][j].setStyle('marginRight', '0px');
                        }
                        else {
                            tasks[i][j].setStyle('borderTopRightRadius', '5px');
                            tasks[i][j].setStyle('borderBottomRightRadius', '5px');
                            tasks[i][j].setTooltip();
                            if (j != lastJ)
                                tasks[i][j].currentGroup++;
                            lastJ = j;
                        }
                    }
                    else {
                        tasks[i][j].setStyle('borderTopRightRadius', '5px');
                        tasks[i][j].setStyle('borderBottomRightRadius', '5px');
                        tasks[i][j].setTooltip();
                        if (j != lastJ)
                            tasks[i][j].currentGroup++;
                        lastJ = j;
                    }
                    if (i != this.start) {
                        if (tasks[i - 1][j].id == tasks[i][j].id && i - 1 != this.start) {
                            tasks[i][j].setStyle('marginLeft', '0px');
                        }
                        else {
                            tasks[i][j].setStyle('borderTopLeftRadius', '5px');
                            tasks[i][j].setStyle('borderBottomLeftRadius', '5px');
                        }
                    }
                    else {
                        tasks[i][j].clear();
                    }
                }
                else if (i != this.start) {
                    let newInEl = document.createElement("div");
                    newInEl.className = "empty_cell";
                    newInEl.onclick = function (e) {
                        let startTask = (i > 24) ? i - 24 : i;
                        let content = new __WEBPACK_IMPORTED_MODULE_2__features_popup_contents_task_create__["a" /* default */]();
                        content.setCurrentTask(new __WEBPACK_IMPORTED_MODULE_0__task__["a" /* default */]("", "#fff", startTask - 1, startTask, j, 0, this.week_number));
                        let popup = Object(__WEBPACK_IMPORTED_MODULE_1__features_popup_popup__["a" /* getPopup */])();
                        popup.open(content);
                    }.bind(this);
                    newEl.appendChild(newInEl);
                }
                if (i == this.start + this.count) {
                    newEl.style.borderRight = "none";
                }
                if (j == 6) {
                    newEl.style.borderBottom = "none";
                }
                newColumn.appendChild(newEl);
            }
            this.nativeElement.appendChild(newColumn);
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Graph);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPopup; });
__webpack_require__(13);
class Popup {
    constructor() {
        this.now_open = false;
        let newBackground = document.createElement("div");
        newBackground.className = "popupBack close";
        this.background = newBackground;
        this.background.onclick = function (e) {
            if (e.srcElement.className != this.background.className)
                return;
            this.close();
        }.bind(this);
        document.body.appendChild(newBackground);
    }
    open(content) {
        if (this.now_open) {
            this.close();
        }
        this.now_open = true;
        this.background.className = "popupBack open";
        document.body.style.overflow = 'hidden';
        content.draw(this.background, this.close);
    }
    close() {
        this.now_open = false;
        this.background.className = "popupBack close";
        document.body.style.overflow = 'auto';
        this.background.innerHTML = null;
    }
}
let currentPopup;
function getPopup() {
    if (!currentPopup) {
        currentPopup = new Popup();
    }
    return currentPopup;
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_functions__ = __webpack_require__(1);

class TaskCreate {
    draw(background, closePopup) {
        if (!this.currentTask)
            return;
        this.element = Object(__WEBPACK_IMPORTED_MODULE_0__functions_functions__["a" /* createElement */])("div", "", background);
        this.element.innerHTML =
            "<div class='popupContent'>" +
                "<div>" +
                "<div>Имя</div>" +
                "<input />" +
                "</div>" +
                "<div>" +
                "<div>Старт</div>" +
                `<input value=${this.currentTask.start}>` +
                "</div>" +
                "<div>" +
                "<div>Конец</div>" +
                `<input value=${this.currentTask.stop}>` +
                "</div>" +
                "</div>";
    }
    setCurrentTask(task) {
        this.currentTask = task;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (TaskCreate);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Days {
    setup(element) {
        this.nativeElement = element;
    }
    draw() {
        this.nativeElement.innerHTML = "";
        for (let i = 0; i < this.days.length; i++) {
            let newEl = document.createElement("div");
            newEl.innerHTML = this.days[i];
            newEl.className = "day";
            this.nativeElement.appendChild(newEl);
        }
    }
    loadDays(days) {
        this.days = days;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Days);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./popup.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./popup.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, ".popupBack{\r\n    position: fixed;\r\n    z-index: 9999;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.popupBack.close{\r\n    width: 0;\r\n    height: 0;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.popupBack.open{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0,0,0,0.7);\r\n}\r\n.popupContent{\r\n    background: #fff;\r\n    overflow: hidden;\r\n    font-family: Helvetica-Light;\r\n    padding: 10px;\r\n    width: 400px;\r\n    height: 150px;\r\n    background: #fff;\r\n    position: fixed;\r\n    left: calc(50vw - 200px);\r\n    top: calc(50vh - 75px);\r\n    border-radius: 5px;\r\n    opacity: 1;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(17);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);