import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { MY_DYNAMIC_FORM_MODEL } from "./my-dynamic-form.model";
import { DynamicFormControlModel, DynamicFormService } from "@ng2-dynamic-forms/core";

@Component({
    moduleId: module.id,
    selector: 'my-dynamic-form',
    templateUrl: './my-dynamic-form.component.html',
})
export class MyDynamicFormComponent implements OnInit {

    formModel: DynamicFormControlModel[] = MY_DYNAMIC_FORM_MODEL;
    formGroup: FormGroup;

    constructor(private formService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    }
}