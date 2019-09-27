import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges} from '@angular/core';
import { ReadingService } from '../reading.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Read } from '../models/read';

@Component({
  selector: 'app-reads',
  templateUrl: './reads.component.html',
  styleUrls: ['./reads.component.css']
})
export class ReadsComponent implements OnInit, OnDestroy ,OnChanges {

  @Input() childVar: any;
  @Output() purge = new EventEmitter();

  private unsubscribe$ = new Subject<void>();
  // reads: Read[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readingService: ReadingService
    ) { }

  ngOnInit() {

  }

  ngOnChanges(): void {

    if (this.childVar.length > 7) {
      this.purge.emit();
      this.childVar.length = 0;
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
