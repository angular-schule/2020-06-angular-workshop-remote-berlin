export class Customer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    myTimeout(a: number, b: number) {
        console.log(a + b);
    }


    fooBar(): number {
        
        setTimeout(() => {
            console.log('Die ID ist', this.id);
        }, 2000);

        setTimeout(() => this.myTimeout(this.id, 5), 1000);
        
        return 5;
    }
}