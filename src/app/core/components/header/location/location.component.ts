import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    IIpLocationResponse, ILocationResponse
} from 'src/app/core/models/location-response.model';
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
      .get<IIpLocationResponse>(environment.GEO_IP_API)
      .pipe(
        switchMap((res: IIpLocationResponse) =>
          this.http.get<ILocationResponse>(
            `${environment.GEO_API}&q=${res.loc}`
          )
        )
      )
      .subscribe((res) => {
        const response = res.results.find((obj) => obj.components.city);
        if (response) {
          return this.location.next(
            response.components.village ||
              response.components.town ||
              response.components.city ||
              'Город не определен'
          );
        }
      });
  }
}
