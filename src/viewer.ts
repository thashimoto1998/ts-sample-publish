export class Viewer {
    public num: number;
    public str: string;

    constructor() {
        this.num = 3;
        this.str = "hello world!!!!!";
    }

    getNum = () => {
        return this.num;
    }

    getStr = () => {
        return this.str;
    }
}