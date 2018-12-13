

export class AppDetailsService {
    private isMobile;
    private mobileLimit = 768;

    constructor() {
    }

    checkDevice() {
        if (window.document.documentElement.clientWidth < this.mobileLimit) {
            this.isMobile = true;
        }
    }

    getIsMobile() {
        return this.isMobile;
    }

}