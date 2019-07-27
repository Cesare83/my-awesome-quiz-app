(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/question-form/question-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question-form/question-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz\" *ngIf=\"question\">\n  <div class=\"question-container\">\n    <h1>{{question.label}}</h1>\n  </div>\n  <form [formGroup]=\"form\">\n    <div class=\"form-group\">\n      <label *ngFor=\"let choice of question.choices\">\n      <input type=\"radio\" [value]=\"choice\" formControlName=\"choice\" id=\"radio-buttons\">\n      <span>{{choice.value}}</span>\n      </label>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questions/questions.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"quiz && !questions\" class=\"spinner-grow text-primary\"></div>\n\n<div class=\"quiz\" *ngIf=\"questions\">\n\n  <div class=\"questions\" *ngIf=\"!showResults\">\n    <app-question-form\n      [question]=\"questions[currentQuestionIndex]\"\n      (onChoiceMade)=\"updateChoice($event)\">\n    </app-question-form>\n\n    <button\n      class=\"btn btn-success\"\n      (click)=\"nextOrViewResults()\"\n      [disabled]=\"!answers.values[currentQuestionIndex]\"\n    >{{currentQuestionIndex === questions.length - 1 ? 'View results' : 'Next'}}</button>\n  </div>\n\n  <app-results *ngIf=\"showResults\" [answers]=\"answers\"></app-results>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/results/results.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\n  <div class=\"results-container\">\n    <h1>Results</h1>\n  </div>\n  <div class=\"answer\" *ngFor=\"let a of answers.values\" [ngStyle]=\"{'color': a.correct ? 'green' : 'red'}\" [ngClass]=\"{correct: a.correct}\">\n    {{a.value}}\n  </div>\n  <div class=\"backlink\">\n    <a routerLink=\"/welcome\" class=\"btn btn-primary\">Choose another quiz</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\">\n  <div class=\"welcome-title-container\">\n    <h1 class=\"welcome-title\">Prove your language skills!</h1>\n  </div>\n  <div class=\"quiz-choice\">\n    <div class=\"first-row\">\n      <div class=\"flag-container\">\n        <a [routerLink]=\"['/spanish']\">\n          <svg class=\"flag\" width=\"400\" height=\"300\" viewBox=\"0 0 400 400\">\n            <polygon fill=\"#ff1a1a\" points=\"0,0 266,0 0,200\"/>\n            <polygon fill=\"#ffdd1a\" points=\"266,0 400,0  400,100 133,300 0,300 0,200\"/>\n            <polygon fill=\"#ff1a1a\" points=\"400,100 400,300 133,300\"/>\n            <text class=\"flag-text\" font-size=\"40px\" text-anchor=\"middle\" x=\"200\" y=\"370\">spanish</text>\n          </svg>\n        </a>\n      </div>\n      <div class=\"flag-container\">\n        <a [routerLink]=\"['/french']\">\n          <svg class=\"flag\" width=\"400\" height=\"300\" viewBox=\"0 0 400 400\">\n            <polygon fill=\"#0000cc\" points=\"0,0 266,0 0,200\"/>\n            <polygon fill=\"#fff\" points=\"266,0 400,0  400,100 133,300 0,300 0,200\"/>\n            <polygon fill=\"#e60000\" points=\"400,100 400,300 133,300\"/>\n            <text class=\"flag-text\" font-size=\"40px\" text-anchor=\"middle\" x=\"200\" y=\"370\">french</text>\n          </svg>\n        </a>\n\n      </div>\n    </div>\n    <div class=\"second-row\">\n      <div class=\"flag-container\">\n        <a [routerLink]=\"['/italian']\">\n          <svg class=\"flag\" width=\"400\" height=\"300\" viewBox=\"0 0 400 400\">\n            <polygon fill=\"#1e7b1e\" points=\"0,0 266,0 0,200\"/>\n            <polygon fill=\"#fff\" points=\"266,0 400,0  400,100 133,300 0,300 0,200\"/>\n            <polygon fill=\"#e60000\" points=\"400,100 400,300 133,300\"/>\n            <text class=\"flag-text\" font-size=\"40px\" text-anchor=\"middle\" x=\"200\" y=\"370\">italian</text>\n          </svg>\n        </a>\n      </div>\n      <div class=\"flag-container\">\n        <a [routerLink]=\"['/german']\">\n          <svg class=\"flag\" width=\"400\" height=\"300\" viewBox=\"0 0 400 400\">\n            <polygon fill=\"#000\" points=\"0,0 266,0 0,200\"/>\n            <polygon fill=\"#ff1a1a\" points=\"266,0 400,0  400,100 133,300 0,300 0,200\"/>\n            <polygon fill=\"#ffdd1a\" points=\"400,100 400,300 133,300\"/>\n            <text class=\"flag-text\" font-size=\"40px\" text-anchor=\"middle\" x=\"200\" y=\"370\">german</text>\n          </svg>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

//-------------------------------IMPORT MODULES---------------------------------

//-----------------------------------COMPONENT----------------------------------
let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-form/question-form.component */ "./src/app/question-form/question-form.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");

//-------------------------------IMPORT MODULES---------------------------------










const appRoutes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"] },
    { path: ':quizId', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__["QuestionsComponent"] },
    { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__["QuestionFormComponent"],
            _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
            _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__["QuestionsComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/question-form/question-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/question-form/question-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 15vh;\n}\n\n#radio-buttons {\n  margin: 15% 0 0 5%;\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nlc2FyZS9jYXJlZXJmb3VuZHJ5L215LWF3ZXNvbWUtcXVpei1hcHAvc3JjL2FwcC9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9uLWZvcm0vcXVlc3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb24tZm9ybS9xdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDE1dmg7XG59XG5cbiNyYWRpby1idXR0b25zIHtcbiAgbWFyZ2luOiAxNSUgMCAwIDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG4iLCIucXVlc3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTV2aDtcbn1cblxuI3JhZGlvLWJ1dHRvbnMge1xuICBtYXJnaW46IDE1JSAwIDAgNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/question-form/question-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-form/question-form.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormComponent", function() { return QuestionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

//-------------------------------IMPORT MODULES---------------------------------


//-----------------------------------COMPONENT----------------------------------
let QuestionFormComponent = class QuestionFormComponent {
    //-----------------------------------COMPONENT----------------------------------
    constructor() {
        this.onChoiceMade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = () => {
            this.onChoiceMade.emit(this.form.value.choice);
        };
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.form.valueChanges.subscribe(this.onChange);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuestionFormComponent.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuestionFormComponent.prototype, "onChoiceMade", void 0);
QuestionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-form',
        template: __webpack_require__(/*! raw-loader!./question-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/question-form/question-form.component.html"),
        styles: [__webpack_require__(/*! ./question-form.component.scss */ "./src/app/question-form/question-form.component.scss")]
    })
], QuestionFormComponent);



/***/ }),

/***/ "./src/app/questions.service.ts":
/*!**************************************!*\
  !*** ./src/app/questions.service.ts ***!
  \**************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz.model */ "./src/app/quiz.model.ts");

//-----------------------------------IMPORT MODULES-----------------------------




//-----------------------------------SERVICE------------------------------------
let QuestionsService = class QuestionsService {
    constructor(http) {
        this.http = http;
    }
    getQuizzes() {
        return this.http.get(`./assets/quiz-list.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            return result.map(r => new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Quiz"](r.label, r.name, r.description, r.fileName));
        }));
    }
    getQuestions(fileName) {
        return this.http.get(`./assets/${fileName}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            return result.map(r => new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Question"](r.label, r.choices));
        }));
    }
};
QuestionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionsService);



/***/ }),

/***/ "./src/app/questions/questions.component.scss":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-success {\n  margin: 10% 0 0 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nlc2FyZS9jYXJlZXJmb3VuZHJ5L215LWF3ZXNvbWUtcXVpei1hcHAvc3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXN1Y2Nlc3Mge1xuICBtYXJnaW46IDEwJSAwIDAgNSU7XG59XG4iLCIuYnRuLXN1Y2Nlc3Mge1xuICBtYXJnaW46IDEwJSAwIDAgNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quiz.model */ "./src/app/quiz.model.ts");

//-----------------------------------IMPORT MODULES-----------------------------




//-----------------------------------COMPONENT----------------------------------
let QuestionsComponent = class QuestionsComponent {
    // inject both the active route and the questions service
    constructor(route, questionsService) {
        this.route = route;
        this.questionsService = questionsService;
        this.showResults = false;
    }
    ngOnInit() {
        // read from the dynamic route and load the proper quiz data
        this.questionsService.getQuestions(this.route.snapshot.params.quizId)
            .subscribe(questions => {
            // initialize everything
            this.questions = questions;
            this.answers = new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Answers"]();
            this.currentQuestionIndex = 0;
        });
    }
    updateChoice(choice) {
        this.answers.values[this.currentQuestionIndex] = choice;
    }
    nextOrViewResults() {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.showResults = true;
            return;
        }
        this.currentQuestionIndex++;
    }
    reset() {
        this.quiz = undefined;
        this.questions = undefined;
        this.answers = undefined;
        this.currentQuestionIndex = undefined;
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] }
];
QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html"),
        styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/questions/questions.component.scss")]
    })
], QuestionsComponent);



/***/ }),

/***/ "./src/app/quiz.model.ts":
/*!*******************************!*\
  !*** ./src/app/quiz.model.ts ***!
  \*******************************/
/*! exports provided: Choice, Question, Quiz, Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
class Choice {
    constructor(value, correct) {
        this.value = value;
        this.correct = correct;
    }
}
Choice.ctorParameters = () => [
    { type: String },
    { type: Boolean }
];
class Question {
    constructor(label, choices) {
        this.label = label;
        this.choices = choices;
    }
}
Question.ctorParameters = () => [
    { type: String },
    { type: Array }
];
class Quiz {
    constructor(label, name, description, fileName) {
        this.label = label;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
    }
}
Quiz.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];
class Answers {
    constructor(values = []) {
        this.values = values;
    }
}
Answers.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/app/results/results.component.scss":
/*!************************************************!*\
  !*** ./src/app/results/results.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 15vh;\n}\n\n.answer {\n  margin: 5% 0 0 5%;\n}\n\n.backlink {\n  margin: 10% 0 0 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nlc2FyZS9jYXJlZXJmb3VuZHJ5L215LWF3ZXNvbWUtcXVpei1hcHAvc3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuXG4uYW5zd2VyICB7XG4gIG1hcmdpbjogNSUgMCAwIDUlO1xufVxuXG4uYmFja2xpbmsge1xuICBtYXJnaW46IDEwJSAwIDAgNSU7XG59XG4iLCIucmVzdWx0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuXG4uYW5zd2VyIHtcbiAgbWFyZ2luOiA1JSAwIDAgNSU7XG59XG5cbi5iYWNrbGluayB7XG4gIG1hcmdpbjogMTAlIDAgMCA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

//-----------------------------------IMPORT MODULES-----------------------------

//-----------------------------------COMPONENT----------------------------------
let ResultsComponent = class ResultsComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultsComponent.prototype, "answers", void 0);
ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results',
        template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html"),
        styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/results/results.component.scss")]
    })
], ResultsComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\n  display: grid;\n  grid-template-rows: 15% 85%;\n  width: 100%;\n  height: 100%;\n}\n\n.welcome-title-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.quiz-choice, .first-row, .second-row {\n  display: grid;\n  grid-template-rows: 50% 50%;\n}\n\n.flag {\n  width: 50%;\n  height: auto;\n  margin-top: 5%;\n  margin-left: 25%;\n}\n\n@media only screen and (min-width: 750px) {\n  .flag {\n    margin-top: 10%;\n    margin-left: 10%;\n  }\n\n  .quiz-choice {\n    display: grid;\n    grid-template-rows: 50% 50%;\n  }\n\n  .first-row, .second-row {\n    display: grid;\n    grid-template-columns: 50% 50%;\n  }\n\n  .flag {\n    width: 80%;\n    height: auto;\n    margin-top: 10%;\n    margin-left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nlc2FyZS9jYXJlZXJmb3VuZHJ5L215LWF3ZXNvbWUtcXVpei1hcHAvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBRUU7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNBRjs7RURHQTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtFQ0FGOztFREdBO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0VDQUY7O0VER0E7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDg1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndlbGNvbWUtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5xdWl6LWNob2ljZSwgLmZpcnN0LXJvdywgLnNlY29uZC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XG59XG5cbi5mbGFnIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuXG4gIC5mbGFnIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxuXG4gIC5xdWl6LWNob2ljZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XG4gIH1cblxuICAuZmlyc3Qtcm93LCAuc2Vjb25kLXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIH1cblxuICAuZmxhZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cblxufVxuIiwiLndlbGNvbWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA4NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi53ZWxjb21lLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucXVpei1jaG9pY2UsIC5maXJzdC1yb3csIC5zZWNvbmQtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xufVxuXG4uZmxhZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLmZsYWcge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiAgLnF1aXotY2hvaWNlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcbiAgfVxuXG4gIC5maXJzdC1yb3csIC5zZWNvbmQtcm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgfVxuXG4gIC5mbGFnIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");




let WelcomeComponent = class WelcomeComponent {
    constructor(route, questionsService) {
        this.route = route;
        this.questionsService = questionsService;
        this.questionsService.getQuizzes()
            .subscribe(quizzes => {
            this.quizzes = quizzes;
        });
    }
    ngOnInit() {
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cesare/careerfoundry/my-awesome-quiz-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map