import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm')
  numbers!: number[];

  constructor(
    private conteiner: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for(let number of this.numbers){
      this.conteiner.createEmbeddedView(
        this.template, { $implicit: number})
    }
  }

}
