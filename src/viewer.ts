export class Viewer {
    public num: number;
    public str: string;

    constructor() {
        this.num = 2;
        this.str = "hello";
    }

    getNum = () => {
        return this.num;
    }

    getStr = () => {
        return this.str;
    }
}