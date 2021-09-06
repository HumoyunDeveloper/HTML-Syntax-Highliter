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