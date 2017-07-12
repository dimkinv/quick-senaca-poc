import * as seneca from "seneca";
import { PlusRequest } from "../models/plus.request";

const sClient = seneca().client({type:'tcp', port: 3000});

const request: PlusRequest = {
    op1: 2,
    op2: 6
};

sClient.act({role: 'calc', cmd: 'plus', request}, (err, response) => {
    console.log(response);
});