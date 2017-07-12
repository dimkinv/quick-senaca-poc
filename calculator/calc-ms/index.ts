import * as seneca from 'seneca';
import { CalcService } from './services/calc.service';

const sInstance = seneca();
const calcService = new CalcService();

sInstance.add({role: 'calc', cmd: 'plus'}, (message, respond) => {
    respond(null, {answer: calcService.plus(message.request)});
});

sInstance.listen({type:'tcp', port: 3000});