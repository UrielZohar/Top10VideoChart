

export class AppDetailsService {
    private isMobile;
    private mobileLimit = 768;
    private innerWidth;

    constructor() {
        window.innerWidth;
    }

    checkDevice() {
        this.innerWidth = window.innerWidth;
        if (window.document.documentElement.clientWidth < this.mobileLimit) {
            this.isMobile = true;
        }
    }

    getIsMobile() {
        return this.isMobile;
    }

    getInnerWidth() {
        return this.innerWidth;
    }

}