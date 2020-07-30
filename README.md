<p align="center">
 <img width="80%" height="80%" src="https://raw.githubusercontent.com/gitsobek/npx-infi-markdown/master/logo.svg?sanitize=true">
</p>
&nbsp;

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

Simple and neat editor with an embedded preview. Create your own custom styles and transpile your written text into HTML. This library provides an injectable and configurable web-component which you can easily place anywhere in your application.<br><br>

<p align="center">
 <img src="https://raw.githubusercontent.com/gitsobek/npx-infi-markdown/master/presentation.gif">
</p><br>

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Demo](#demo)
- [Future plans](#plans)
- [Contributors](#contributors)

## Installation

Using npm:

`npm install ngx-infi-markdown --save`

## Configuration
In order to start working with the editor you have to import NgxInfiMarkdown module in the root module:

```ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxInfiMarkdownModule } from 'ngx-infi-markdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ...,
    NgxInfiMarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Place the markdown editor in your template:

```html
<ngx-infi-markdown></ngx-infi-markdown>
<button (click)="getContent()">Submit post</button>
```

Inject NgxInfiMarkdownService into your component to interact with the editor and retrieve generated content:
```ts
import { NgxInfiMarkdownService } from 'ngx-infi-markdown';
 
export class AppComponent implements OnInit {
  constructor(private markdown: NgxInfiMarkdownService) {}
 
  ngOnInit() {}

  getContent(): void {
      const html = this.markdown.getHtml();
      // ..
  }
}
```
### Methods

- `html$()` returns observable of currently created content
- `getHtml()` returns currently created content synchronously

### Custom styles configuration
You can switch between default and custom styles by clicking the toggle button. This library provides a posibility to load your own custom styles in two ways:

- pass the configuration object to the component:
```html
<ngx-infi-markdown
    [styles]="articleStyles"
></ngx-infi-markdown>
```

In your class:
```ts
export class AppComponent {
  articleStyles = {
    primaryHeader: {
      textAlign: 'center',
      fontSize: '72px',
      fontWeight: 600,
    },
    secondaryHeader: {
      fontSize: '32px',
      fontWeight: 500,
    },
    tertiaryHeader: {
      fontFamily: ['Roboto', 'sans-serif'],
      fontSize: '26px',
      fontWeight: 400
    },
    quaternaryHeader: {
      fontSize: '22px',
    },
    orderedList: {
      // ...
    },
    unorderedList: {
      // ...
    },
    paragraph: {
      // ...
    },
    quote: {
      borderLeft: '1px solid #999',
      textAlign: 'left',
      // ...
    },
  };
}
```

- pass a configuration object to all instances globally:
```ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxInfiMarkdownModule.forRoot({
      styles: {
        primaryHeader: {
          // ...
        },
        secondaryHeader: {
          // ...
        }
        // ...
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

You have to take few things into consideration when configuring your custom styles:

1. Using global configuration method overrides component-level configuration in all instances of the editor.
2. Every tag must be added in the configuration object. Available tags are listed below:
`primaryHeader, secondaryHeader, tertiaryHeader, quaternaryHeader, orderedList, unorderedList, paragraph, quote`
3. Every style property must be added in a camel case format.
4. If you want to specify a `font-family` property for a particular tag, place the font names in an array:
`fontFamily: ['Roboto', 'sans-serif']`

### Store your changes
If you wish to store your changes on page leave or component destroy, then you have to pass the persistance storage configuration to the imported module.

```ts
NgxInfiMarkdownModule.forRoot({
    storageType: '<pass storage type>'
})
```

Available storages are as follows:
| Name            | Description                |
|:---------------:|:--------------------------:|
| none            | disables storage (default) |
| localStorage    | uses Local Storage         |
| sessionStorage  | uses Session Storage       |

## Demo
The showcase of the library can be found under the following [link](https://gitsobek.github.io/ngx-infi-markdown/).

## Future plans
- add bold, italic and underline tag
- improve responsiveness of editor and preview
- add IndexedDB as storage option

## Contributors
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/brhelu"><img src="https://avatars1.githubusercontent.com/u/32871713?v=4?s=100" width="100px;" alt=""/><br /><sub><b>brhelu</b></sub></a><br /><a href="https://github.com/gitsobek/ngx-infi-markdown/commits?author=brhelu" title="Code">💻</a> <a href="#ideas-brhelu" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gitsobek/ngx-infi-markdown/pulls?q=is%3Apr+reviewed-by%3Abrhelu" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org/docs/en/emoji-key) specification. Contributions of any kind are welcome!