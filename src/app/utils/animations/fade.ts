import { AnimationTriggerMetadata, trigger, transition, style, animate } from "@angular/animations";

export function FadeIn(): AnimationTriggerMetadata {
    return trigger('fade', [
        transition('* => *', [
            style({ opacity: 0 }),
            animate(1000, style({ opacity: 1 }))
        ])
    ]);
}