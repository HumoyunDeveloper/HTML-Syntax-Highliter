<h1 align="center">HTML Syntax Highliter</h1>

![Photos 9_6_2021 6_17_05 PM (2)](https://user-images.githubusercontent.com/87017227/132243956-1fdae43e-650b-432f-95cd-f9f92f7aacd9.png)


# How to install?

<p>Use <code>git clone</code> command to clone the repository</p>

```
git clone https://github.com/HumoyunDeveloper/HTML-Syntax-Highliter.git
```

<p>Or you can just download this as a zip format</p>

# How to use?

<p>Copy & Paste the code below into your head tag:</p>

```html
<link rel="stylesheet" href="./syntax_highliter_styles_pack/default.css" type="text/css" media="all" />
<script type="text/javascript" src="dist/syntax_highliter.js"></script>
```

<p>And you need to create <code>SyntaxHighliter</code> object by using <code>new</code> keyword.</p>

```javascript
var highliter = new SyntaxHighliter();

document.querySelector("#code").innerHTML = highliter.highlite(`
<!DOCTYPE html>
<html>
  <head>
    <title>SyntaxHighliter Demo</title>
  </head>
  <body>
    <h1 defer class="title">SyntaxHighliter</h1>
    <p class="paragraph" id="pelement">Easy to Use</p>
    <!-- I am  Comment -->
  </body>
</html>
`, "html");
```

<p><code>highlite</code> method takes the first argument as a string, second argument is the name of the language. But currently there is only one language which is HTML..
</p>

# How it works?
<p><code>highlite</code> method converts all the HTML arrow keys into entities, extracts element's name, attributes, texts and adds them into specific element. Elements have the following class names:</p>
<code>html-tag-color</code><br/>
<code>html-attr-color</code><br/>
<code>html-string-color</code>
<p>
