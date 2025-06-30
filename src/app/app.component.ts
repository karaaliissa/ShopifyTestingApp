import { Component, OnInit } from '@angular/core';
import createApp from '@shopify/app-bridge';
import { getSessionToken } from '@shopify/app-bridge-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const host = new URLSearchParams(window.location.search).get('host');

    if (!host) {
      console.error('❌ host parameter is missing — app not loaded from Shopify Admin');
      return;
    }

    const app = createApp({
      apiKey: '57846d412e2d7c93610172487f6779b8',  // ✅ Replace with your real public key
      host: host,
      forceRedirect: true
    });

    getSessionToken(app).then(token => {
      console.log('✅ Shopify session token:', token);
    }).catch(err => {
      console.error('❌ Failed to get session token:', err);
    });
  }
}
