export class contactClass {
    fName: string;
    lName: string;
    email: string;
    phone: string;
    bookingDate: Date;
    bookingTime: string;
    message: string;


    constructor() {
        this.lName = "";
        this.fName = "";
        this.email = "";
        this.phone = "";
        this.bookingDate = new Date;
        this.bookingTime = "";
        this.message = "";
    }
}