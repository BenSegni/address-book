import { Component } from '@angular/core';
import { IntroductionService } from '../_services/introduction.service';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
})
export class IntroductionComponent {
    public intro$ = this._introductionService.dialogueStream();
    public waitingMessage = 'Tick Tock Mr Wick...';
    public bobafett = '../../../assets/img/boba_fett.svg';

    public constructor(public _introductionService: IntroductionService) {}

    public ngOnInit(): void {
        this._introductionService.loadDialogue();
    }
}
