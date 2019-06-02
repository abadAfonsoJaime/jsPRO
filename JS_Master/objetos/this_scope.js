class Test {
    constructor() {
        this.test = 0;
        // this.myMethod = this.myMethod.bind(this);
    }
    myMethod() {
        return this.test;
    }
    /*
    myMethod = () => {
        return this.test;
    }
    */
}

const exec = method => {
    return method();
}

let test = new Test();
console.log( exec(test.myMethod) );