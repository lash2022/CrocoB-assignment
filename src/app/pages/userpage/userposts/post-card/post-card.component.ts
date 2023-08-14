import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit{
  @Input() post:any
  apiText :any
  dividedParts: string[] = [];
  numberOfParts = 3

  ngOnInit() {
    if (this.post) {
      this.apiText = this.post.body;
      this.divideText();
    }
  }

  divideText() {
    const words = this.apiText.split(' ');
    const wordsPerPart = Math.ceil(words.length / this.numberOfParts);

    for (let i = 0; i < this.numberOfParts; i++) {
      const startIndex = i * wordsPerPart;
      const endIndex = Math.min((i + 1) * wordsPerPart, words.length);
      const part = words.slice(startIndex, endIndex).join(' ');
      this.dividedParts.push(part);
    }
  }


  /*formatText(text: string, partIndex: number): string {
    const middleIndex = Math.floor(text.length / 2);
    const beforeMiddle = text.substring(0, middleIndex);
    const middle = text.substring(middleIndex, middleIndex + 1);
    const afterMiddle = text.substring(middleIndex + 1);

    if (partIndex === 1) {
      return `${beforeMiddle}${middle}${afterMiddle}`;
    }

    return text;
  }*/


}
