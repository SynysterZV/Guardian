import { green, blue, bold, Color } from "colorette"

export class Logger {
    constructor() {
        
    }

    private log(msg: any, level: string, time: Boolean, style: Color[]) {
        console.log(style.reduce((a, x) => x(a || `${time ? new Date().toLocaleTimeString('en-GB') : ''} ${level} | ${msg}`), ''))
    }

    public info(msg: any, time = true) {
        this.log(msg, 'INFO', time, [blue, bold])
    }
}