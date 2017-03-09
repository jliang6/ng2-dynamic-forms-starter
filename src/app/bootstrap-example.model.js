"use strict";
var core_1 = require("@ng2-dynamic-forms/core");
exports.BOOTSTRAP_EXAMPLE_MODEL = [
    new core_1.DynamicFormGroupModel({
        id: "bootstrapFormGroup1",
        legend: "Bootstrap Form Group 1",
        group: [
            new core_1.DynamicSelectModel({
                id: "bootstrapSelect",
                label: "Example Select",
                options: [
                    {
                        label: "Option 1",
                        value: "option-1",
                    },
                    {
                        label: "Option 2",
                        value: "option-2"
                    },
                    {
                        label: "Option 3",
                        value: "option-3"
                    },
                    {
                        label: "Option 4",
                        value: "option-4"
                    }
                ],
                value: "option-3"
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-9",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicInputModel({
                hint: "Just a sample help text",
                id: "bootstrapInput",
                label: "Example Input",
                maxLength: 51,
                placeholder: "example input",
                prefix: "Prefix",
                suffix: "Suffix",
                validators: {
                    required: null,
                    maxLength: 5
                },
                errorMessages: {
                    required: "{{label}} is required",
                    maxLength: "Max character count is 5"
                }
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-9",
                    errors: "col-sm-offset-3 col-sm-9",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicCheckboxGroupModel({
                id: "bootstrapCheckboxGroup",
                label: "Example Checkbox Group",
                group: [
                    new core_1.DynamicCheckboxModel({
                        id: "checkboxGroup1",
                        label: "Checkbox 1",
                        value: true
                    }, {
                        grid: {
                            control: "col-sm-12"
                        }
                    }),
                    new core_1.DynamicCheckboxModel({
                        id: "checkboxGroup2",
                        label: "Checkbox 2",
                        value: true
                    }, {
                        grid: {
                            control: "col-sm-12"
                        }
                    })
                ]
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-9",
                    label: "col-sm-3"
                }
            })
        ]
    }),
    new core_1.DynamicFormGroupModel({
        id: "bootstrapFormGroup2",
        legend: "Bootstrap Form Group 2",
        group: [
            new core_1.DynamicRadioGroupModel({
                id: "bootstrapRadioGroup",
                label: "Example Radio Group",
                options: [
                    {
                        label: "Option 1",
                        value: "option-1",
                    },
                    {
                        label: "Option 2",
                        value: "option-2"
                    },
                    {
                        label: "Option 3",
                        value: "option-3"
                    },
                    {
                        label: "Option 4",
                        value: "option-4"
                    }
                ],
                value: "option-3"
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-9",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicTextAreaModel({
                id: "bootstrapTextArea",
                label: "Example Textarea",
                rows: 5,
                placeholder: "example Textarea",
                relation: [
                    {
                        action: "DISABLE",
                        connective: "OR",
                        when: [
                            {
                                id: "bootstrapRadioGroup",
                                value: "option-2"
                            },
                            {
                                id: "bootstrapRadioGroup",
                                value: "option-4",
                            }
                        ]
                    }
                ],
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-9",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "bootstrapCheckbox",
                label: "I do agree"
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-9"
                }
            }),
            new core_1.DynamicFormArrayModel({
                id: "bootstrapFormArray",
                initialCount: 5,
                label: "Example Array Model",
                createGroup: function () {
                    return [
                        new core_1.DynamicInputModel({
                            id: "basicArrayGroupInput",
                            placeholder: "example array group input"
                        }, {
                            grid: {
                                container: "col-sm-8"
                            }
                        })
                    ];
                }
            }, {
                element: {
                    container: "form-array",
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-9",
                    label: "col-sm-3"
                }
            })]
    })
];
//# sourceMappingURL=bootstrap-example.model.js.map