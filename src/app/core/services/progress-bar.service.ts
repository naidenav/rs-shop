import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// import { Observable } from 'rxjs';
// import { youtubeLoading } from 'src/app/redux/selectors/youtube.selectors';
import { AppState } from 'src/app/redux/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  // public isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    // this.isLoading$ = this.store.select(youtubeLoading);
  }
}
