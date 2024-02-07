import { Component, OnInit } from '@angular/core';
import { IntroductionService } from '../../services/introduction.service';
import { ImageEnum } from '../../../../global/utils/enum/image.enum';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
})
export class IntroductionComponent implements OnInit {
    public intro$ = this._introductionService.dialogueStream();
    public waitingMessage = 'Tick Tock Mr Wick. Tick Tock';
    public skipIntroductionMessage = "Fine, don't listen then! It'll cost ya!"
    public bobafett = ImageEnum.BobaFett;
    public skipButtonClicked = false;

    public constructor(public _introductionService: IntroductionService) {}

    public ngOnInit(): void {
        this._introductionService.loadDialogue();
    }

    public skipButtonWasClicked():void {
        this._introductionService.introductionFinished = true;
        this.waitingMessage = this.skipIntroductionMessage;
    }
}
