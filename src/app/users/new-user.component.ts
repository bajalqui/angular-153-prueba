import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {
    newUserForm: FormGroup;

    constructor(private location: Location,
                private userService: UserService) {}

    ngOnInit() {
        this.newUserForm = new FormGroup({
            name: new FormControl('', [ Validators.required, Validators.minLength(4)]),
            lastname: new FormControl('', [ Validators.required, Validators.minLength(4)]),
            email: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(9)]),
            sexo: new FormControl('', [Validators.required])
        });
    }

    onCancel() {
        this.location.back();
    }


    onSave(form: FormGroup) {
        if (form.invalid) {
            return false;
        }

        const { name, lastname, email, phone, sexo } = form.value;
        const now = Date.now();
        const newUser: User = {
            name,
            lastname,
            email,
            phone,
            sexo: +sexo
        };
        this.userService.createUser(newUser).subscribe(res => {
            this.location.back();
        })
    }
}
