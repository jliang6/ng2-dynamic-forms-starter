"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@ng2-dynamic-forms/core");
var bootstrap_example_model_1 = require("./bootstrap-example.model");
var BootstrapExampleComponent = (function () {
    function BootstrapExampleComponent(formService) {
        this.formService = formService;
        this.formModel = bootstrap_example_model_1.BOOTSTRAP_EXAMPLE_MODEL;
    }
    BootstrapExampleComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.exampleControl = this.formGroup.get("bootstrapFormGroup1").get("bootstrapInput");
        this.exampleModel = this.formService.findById("bootstrapInput", this.formModel);
        this.arrayControl = this.formGroup.get("bootstrapFormGroup2").get("bootstrapFormArray");
        this.arrayModel = this.formService.findById("bootstrapFormArray", this.formModel);
    };
    BootstrapExampleComponent.prototype.add = function () {
        this.formService.addFormArrayGroup(this.arrayControl, this.arrayModel);
    };
    BootstrapExampleComponent.prototype.insert = function (context, index) {
        this.formService.insertFormArrayGroup(index, this.arrayControl, context);
    };
    BootstrapExampleComponent.prototype.remove = function (context, index) {
        this.formService.removeFormArrayGroup(index, this.arrayControl, context);
    };
    BootstrapExampleComponent.prototype.move = function (context, index, step) {
        this.formService.moveFormArrayGroup(index, step, this.arrayControl, context);
    };
    BootstrapExampleComponent.prototype.clear = function () {
        this.formService.clearFormArray(this.arrayControl, this.arrayModel);
    };
    BootstrapExampleComponent.prototype.test = function () {
        //this.exampleModel.disabledUpdates.next(!this.exampleModel.disabled);
        //this.exampleModel.valueUpdates.next("Hello Hello");
        //console.log(JSON.stringify(this.exampleModel));
        //this.arrayModel.get(1).group[0].valueUpdates.next("This is just a test");
        //this.formService.moveFormArrayGroup(2, -1, this.arrayControl, this.arrayModel);
        this.formService.removeFormGroupControl(1, this.formGroup.get("bootstrapFormGroup1"), this.formModel[0]);
    };
    BootstrapExampleComponent.prototype.onBlur = function ($event) {
        console.log("BLUR event on " + $event.model.id + ": ", $event);
    };
    BootstrapExampleComponent.prototype.onChange = function ($event) {
        console.log("CHANGE event on " + $event.model.id + ": ", $event);
    };
    BootstrapExampleComponent.prototype.onFocus = function ($event) {
        console.log("FOCUS event on " + $event.model.id + ": ", $event);
    };
    BootstrapExampleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "dynamic-form-bootstrap-example",
            styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css"],
            templateUrl: "./bootstrap-example.component.html",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_2.DynamicFormService])
    ], BootstrapExampleComponent);
    return BootstrapExampleComponent;
}());
exports.BootstrapExampleComponent = BootstrapExampleComponent;
//# sourceMappingURL=bootstrap-example.component.js.map