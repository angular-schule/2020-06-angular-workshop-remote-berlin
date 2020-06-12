export class Customer {

    constructor(private id: number) {}

    /*
    private id: number;

    constructor(id: number) {
        this.id = id;
    }
    */

    myTimeout(a: number, b: number) {
        console.log(a + b);
    }


    fooBar(): number {
        
        // Arrow Function
        setTimeout(() => {
            console.log('Die ID ist', this.id);
        }, 2000);

        // function() {
        //    this
        // }
        // foo => foo + 1
        // function(foo) { return foo + 1; }

        setTimeout(() => this.myTimeout(this.id, 5), 1000);
        
        return 5;
    }
}