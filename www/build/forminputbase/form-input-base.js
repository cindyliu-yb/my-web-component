/*! Built with http://stenciljs.com */
forminputbase.loadComponents(

/**** module id (dev mode) ****/
"form-input-base",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var FormInputBase = /** @class */ (function () {
    function FormInputBase() {
        this.type = 'text';
        this.theme = 'black';
    }
    // propagate model change to the view
    FormInputBase.prototype.valueChanged = function () {
        var inputEl = this.el.querySelector('input');
        if (inputEl.value !== this.value) {
            inputEl.value = this.value;
        }
    };
    FormInputBase.prototype.inputChanged = function (ev) {
        // from view to the model
        var val = ev.target && ev.target.value;
        if (this.type === 'time') {
            this.value = this.convertTimeToDate(val);
        }
        else {
            this.value = val;
        }
        this.value = ev.target && ev.target.value;
        // add a setter for the value
        this.valueChange.emit(this.value);
    };
    FormInputBase.prototype.convertTimeToDate = function (val) {
        return val;
    };
    FormInputBase.prototype.getColorClassList = function () {
    };
    FormInputBase.prototype.render = function () {
        if (this.mode === 'web') {
            return (h("div", { "c": this.theme },
                h("label", 0,
                    this.label, t(":"),
                    h("div", 0,
                        h("input", { "o": { "input": this.inputChanged.bind(this) }, "p": { "value": this.value } })))));
        }
        else {
            return (h("div", { "c": this.theme },
                h("label", 0,
                    this.label, t(":"),
                    h("input", { "o": { "input": this.inputChanged.bind(this) }, "p": { "value": this.value } }))));
        }
    };
    return FormInputBase;
}());

exports['FORM-INPUT-BASE'] = FormInputBase;
},


/***************** form-input-base *****************/
[
/** form-input-base: tag **/
"FORM-INPUT-BASE",

/** form-input-base: members **/
[
  [ "el", /** element ref **/ 7 ],
  [ "label", /** prop **/ 1 ],
  [ "theme", /** prop **/ 1 ],
  [ "type", /** prop **/ 1 ],
  [ "value", /** prop mutable **/ 2 ]
],

/** form-input-base: host **/
{},

/** form-input-base: events **/
[
  [
    /*****  form-input-base valueChange ***** /
    /* event name ***/ "valueChange"
  ]
],

/** form-input-base: propWillChanges **/
0 /* no prop will change methods */,

/** form-input-base: propDidChanges **/
[
  [
    /*****  form-input-base prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

]
)