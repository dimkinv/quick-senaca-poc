import { PlusRequest } from "../../models/plus.request";

export class CalcService {
    plus(plusRequest:PlusRequest) {
        return plusRequest.op1 + plusRequest.op2;
    }
}