# Preview.js
## Simple library for previewing selected files

Preview.js lets you preview files before uploading, just by adding to `data-` attributes to the file input.

### Downloading
Using bower:
```shell
bower install preview.js
```
Or download the latest version manually from [releases](https://github.com/shvelo/preview.js/releases)

### Usage
Include `preview.js` on your page:
```html
<script src="preview.js"></script>
```
Create a preview element (img, video or audio):
```html
<img id="preview">
```

Add attributes to your input element:
```html
<input id="fileinput" type="file" data-preview="#preview">
```

You can also use it manually from Javascript:
```javascript
preview("#fileinput", { target: "#preview" });
```

### Reference

`data-preview`: selector for the `img`,`video` or `audio` element which will contain the preview.

`preview(source, options)`  
`source`: The file `input` element (`<input type=file`), can either be a selector(`string`), or an `Element` (can be obtained via `document.querySelector()` or `document.getElementById()`)  

`options`: The options object, currently supported options are:  
- `target`: selector for the `img`,`video` or `audio` element which will contain the preview.
