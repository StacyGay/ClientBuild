﻿import {Factory} from "decorators/Factory";

@Factory
export class Person {
    private name: string;
    constructor(name) {
        this.name = name;
    }

    public sayHello() {
        console.log("Hello " + this.name);
    }
}