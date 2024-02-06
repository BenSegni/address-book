import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'altText'
})
export class AltTextPipe implements PipeTransform {

    transform(imgPath: string): string {
        const altText = `${imgPath.substring(imgPath.lastIndexOf('/') + 1, imgPath.lastIndexOf('.'))} logo`

        return altText;
    }
}
