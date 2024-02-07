import { Injectable } from '@angular/core';
import { Observable, concatMap, delay, from, of, take, timer } from 'rxjs';
import { dialogue } from '../data/dialogue.text';
import { IntroductionDialogue } from '../models/interface/introduction.dialogue';

@Injectable({
    providedIn: 'root'
})
export class IntroductionService {
    public introductionFinished = false;
    private dialogue$ = from(dialogue);
    private delay$ = timer(13500);

    public dialogueStream(): Observable<IntroductionDialogue> {
        return this.dialogue$.pipe(
            concatMap( text => of(text).pipe ( delay( 2500 ) ))
        );
    }

    public loadDialogue():void {
        this.delay$.pipe(take(1)).subscribe({
            complete: () => this.introductionFinished = true
        })
    }
}
