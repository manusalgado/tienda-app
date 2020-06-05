import { Component, OnInit } from '@angular/core';
import { NAVIGATION_CONTENT } from './constants/navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent{
  public navigationContent: Record<string, string> = NAVIGATION_CONTENT;
}
