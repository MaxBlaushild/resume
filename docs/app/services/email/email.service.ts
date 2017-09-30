import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Email } from './email';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmailService {

   url: string = 'https://api:key-befd9289e6f9dc35d3fb2fee212f0aa1@api.mailgun.net/v3/sandbox195e43a243ea42e0b67a76b1a0d421da.mailgun.org/messages';

  constructor(private http: Http) { }

  send(githubUsername: string): void {
    const email = new Email(githubUsername);
    var headers = new Headers();
    // headers.append('Authorization', `Basic ${btoa("")}`);
    headers.append('Access-Control-Allow-Headers', 'Authorization')
    headers.append("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

    const body = "from="+email.from+"<"+email.from+">&to=Max Blaushild<blaushmild@gmail.com>&subject="+email.subject+"&text="+email.text;

    this.http.post(this.url, email, { headers})
      .toPromise()
      .then(console.log)
      .catch(console.log);
  }
}
