import { Subject } from 'rxjs';

const subject = new Subject();
export const messageService = {
    SendMessage: (data) => {
        subject.next(data);
    },
    getMessage: () => {
        return subject.asObservable();
    }
};