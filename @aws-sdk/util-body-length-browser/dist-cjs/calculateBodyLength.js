"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBodyLength = void 0;
const calculateBodyLength = (body) => {
    if (typeof body === "string") {
        let len = body.length;
        for (let i = len - 1; i >= 0; i--) {
            const code = body.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff)
                len++;
            else if (code > 0x7ff && code <= 0xffff)
                len += 2;
            if (code >= 0xdc00 && code <= 0xdfff)
                i--;
        }
        return len;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};
exports.calculateBodyLength = calculateBodyLength;
