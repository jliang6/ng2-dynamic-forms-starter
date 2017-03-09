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
var my_dynamic_form_model_1 = require("./my-dynamic-form.model");
var core_2 = require("@ng2-dynamic-forms/core");
var MyDynamicFormComponent = (function () {
    function MyDynamicFormComponent(formService) {
        this.formService = formService;
        this.formModel = my_dynamic_form_model_1.MY_DYNAMIC_FORM_MODEL;
    }
    MyDynamicFormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    };
    MyDynamicFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dynamic-form',
            templateUrl: './my-dynamic-form.component.html',
        }), 
        __metadata('design:paramtypes', [core_2.DynamicFormService])
    ], MyDynamicFormComponent);
    return MyDynamicFormComponent;
}());
exports.MyDynamicFormComponent = MyDynamicFormComponent;
//# sourceMappingURL=my-dynamic-form.component.js.map