import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import createApp from '@shopify/app-bridge';
import { getSessionToken } from '@shopify/app-bridge-utils';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  ngOnInit() {
    const host = new URLSearchParams(window.location.search).get('host') || '';
    const app = createApp({
      apiKey: '57846d412e2d7c93610172487f6779b8', // ← from your App dashboard
      host: host,
      forceRedirect: true
    });

    // Optional: Get a session token to call Shopify APIs
    getSessionToken(app).then(token => {
      console.log('Shopify session token:', token);
      // Use this token in Authorization headers if calling Shopify Admin API
    });
  }
}