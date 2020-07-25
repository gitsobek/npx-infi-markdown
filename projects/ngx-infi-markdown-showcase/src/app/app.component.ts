import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articleStyles = {
    primaryHeader: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      textAlign: 'center',
      fontSize: '72px',
      fontWeight: 600,
      margin: '60px 0',
      color: '#312b80',
    },
    secondaryHeader: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontSize: '32px',
      letterSpacing: '.42px',
      fontWeight: 400,
      margin: '0 0 50px',
      color: '#312b80',
    },
    tertiaryHeader: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontSize: '42px',
      letterSpacing: '.42px',
      fontWeight: 600,
      margin: '0 0 50px',
      color: '#312b80',
    },
    quaternaryHeader: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontStyle: 'normal',
      fontSize: '30px',
      color: 'rgb(61, 90, 254)',
      textAlign: 'center',
    },
    orderedList: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontSize: '21px',
      letterSpacing: '.84px',
      color: '#312b80',
    },
    unorderedList: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontSize: '21px',
      letterSpacing: '.84px',
      color: '#312b80',
    },
    paragraph: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontSize: '21px',
      letterSpacing: '.84px',
      margin: '0 0 50px',
      color: '#312b80',
    },
    quote: {
      fontFamily: ['Playfair Display', 'sans-serif'],
      fontStyle: 'italic',
      fontSize: '24px',
      borderLeft: '1px solid #3d5afe',
      color: 'rgb(49, 43, 128)',
      textAlign: 'left',
    },
  };
}
