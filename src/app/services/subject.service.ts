import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
    private subject = new Subject<any>();

    constructor() {}

    sendMessage(message: string): void{
        this.subject.next({ text: message });
    }

    clearMessages(): void{
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
