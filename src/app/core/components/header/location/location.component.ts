import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ILocationResponse } from 'src/app/core/models/location-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {
  public location: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Выберите город'
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<ILocationResponse>(environment.GEO_API)
      .subscribe((response) => {
        this.location.next(response.city);
      });
  }
}
