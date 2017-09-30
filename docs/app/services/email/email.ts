export class Email {
  from: string = 'Mailgun Sandbox <postmaster@sandbox195e43a243ea42e0b67a76b1a0d421da.mailgun.org>';
  to: string = 'Max Blaushild <blaushmild@gmail.com>';
  subject: string = 'GITHUB REQUEST: Someone wants to hire you!';
  text: string;

  constructor(githubUsername: string) {
    this.text = `Get off your ass! ${githubUsername} wants access to your shit!`;
  }
}
