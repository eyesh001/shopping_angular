import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckecdProductSetService } from '../checkecd-product-set.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sh-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  noneNo$: Observable<boolean>;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClicked: EventEmitter<string> = new EventEmitter();

  constructor(private prodSet: CheckecdProductSetService) { }

  ngOnInit() {
    this.mapNoneKeyObservable();
  }

  private mapNoneKeyObservable(){
    this.noneNo$ = this.prodSet.hasNo$.pipe(map(hasNo => !hasNo));
  }
}
