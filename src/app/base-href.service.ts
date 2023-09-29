import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BaseHrefService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setBaseHref(href: string): void {
    const base = this.document.querySelector('base') as HTMLBaseElement;
    base.setAttribute('href', href);
  }
}
