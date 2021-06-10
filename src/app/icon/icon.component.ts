import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core'

@Component({
  selector: 'wm-icon',
  template: `<mat-icon [color]="color"
                       [inline]="inline"
                       [fontSet]="fontSet"
                       [fontIcon]="fontIcon">
            {{matIcon}}
            </mat-icon>`,
  styleUrls: ['./icon.component.scss'],
  host: { 'class': 'wm-icon' }
  
})
export class IconComponent implements OnInit {

  public fontSet: string  = undefined;
  public fontIcon: string = undefined;
  public matIcon = "code";

  constructor() { }

  ngOnInit() {
  }

  @Input() inline: boolean;
  @Input() color: ThemePalette;

  @Input('icon') set setIcon(descriptor: string) {
   
    let segments = descriptor ? descriptor.split(':') : [];
    
    if(segments.length > 1) {
      
      this.matIcon  = undefined;
      this.fontSet  = segments[0];
      this.fontIcon = segments[1];
    }
    else {
      
      this.fontSet = this.fontIcon = undefined;
      this.matIcon = segments[0];
    }
  }
}
