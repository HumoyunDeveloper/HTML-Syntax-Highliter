/*   ____ _    _ _       _  _____    _      _  _
    /   |  \  /  |\     /     |     / \      \/
    |___    \/   | \   /      |    /   \     /\
        |   /    |  \ /       |   /-----\   /  \
    |___|  /     |   \        |  /       \ /    \
    HIGHLITER
    
    Supported Languages:
      HTML5.. TUGADI!
      
   Author : Humoyun Dev
     Date : Nowadays
*/

;(function(_obj, _scs, _err) {
  if (_obj.window && _obj.document) {
    _scs(_obj.window);
  } else {
    _err("Error: Not Browser")
  }
})({ window, document }, function(_root) {
  var SyntaxHighliter = _root.SyntaxHighliter || {};
  const convertHTMLTags = function(_text = "", _type = "h-mode") {
    var result = "";
    if (!(_type)) {
      var left, right, text;
      text = _text.toString();
      left = text.replace(/</g, "&lt;");
      right = left.replace(/>/g, "&gt;");
      result = right;
    } else {
      if (_type === "h-mode") {
        var left, right, text;
        text = _text.toString();
        left = text.replace(/</g, "&lt;");
        right = left.replace(/>/g, "&gt;");
        result = right;
      } else if (_type === "t-mode") {
        var left, right, text;
        text = _text.toString();
        left = text.replace(/&lt;/g, "<");
        right = left.replace(/&gt;/g, ">");
        result = right;
      }
    }
    return result;
  };

  const highliteHTML = function(_text) {
    var result = "";
    const htmlRegx = /<([\w\W]*?)(\s+[^>]+)?>/g;
    if (htmlRegx.test(_text)) {
      var repld = _text.replace(htmlRegx, function(_fullMatch, _firstMatch, _secondMatch) {
        var attrib = "",
          elName = "";
        if (_firstMatch.startsWith("!--")) {
          return "<span class='html-comment-color'>&lt;" + _firstMatch + _secondMatch + "&gt;</span>";
        }
        else {
          if (_secondMatch) {
            var attrRegx = /\"(\s*[^\"]*\s*)*?\"/g;
            attrib = _secondMatch.replace(attrRegx, "<span class='html-string-color'>\"$1\"</span>");
          }
          elName = "<span class='html-tag-color'>&lt;" + _firstMatch + "<span class='html-attr-color'>" + attrib + "</span>&gt;</span>";
          return elName;
        }
      });
      result = repld;
    }
    return result;
  };

  const highliteJS = function(_txt) {
    var specReg, stringReg, newLine, numberReg, objectReg, output, string1Reg, commentReg, mustWhite, functionName, undefinedReg, comment2, result, cb;
    specReg = /\b(var|let|true|false|const|for|foreach|if|switch|case|default|private|yield|do|while|with|static|new|this|super|in|insteadof|typeof|of|throw|get|return|continue|break|function|set)(?=[^\w])/g;
    numberReg = /\b([0-9\.]+)(?=[^\w])/g;
    stringReg = /'(.*?)'/g;
    string1Reg = /"(.*?)"/g;
    undefinedReg = /\bundefined(?=[^\w])/g;
    newLine = /\n/g;
    commentReg = /\/\*(.*?)\*\//g;
    mustWhite = /(,|\(|\)|\+|\;)/g;
    functionName = /(\w+)\(\)/g;
    comment2 = /\/\/(.*)/g;
    cb = /({|}|\[|\])/g;
    result = _txt
      .replace(stringReg, "<span class='js-str-color'>$1</span>")
      .replace(string1Reg, "<span class='js-str-color'>\"$1\"</span>")
      .replace(specReg, "<span class='js-spec-color'>$1</span>")
      .replace(numberReg, "<span class='js-number-color'>$1</span>")
      .replace(undefinedReg, "<span class='js-undefined-color'>undefined</span>")
      .replace(mustWhite, "<span class='js-add-color'>$1</span>")
      .replace(commentReg, "<span class='js-comment-color'>/*$1*/</span>")
      .replace(comment2, "<span class='js-comment-color'>//$1</span>")
      .replace(functionName, "<span class='js-function-name'>$1</span>")
      .replace(cb, "<span class='js-curly-brackets-color'>$1</span>");
    
    return result;
  };

  const elem = function(_el) {
    return document.querySelector(_el);
  };

  SyntaxHighliter = function() {
    this.highlite = function(_text = "", _type = "") {
      var txt = _text.toString(),
        result = "";
      var typ = _type.toString().toLowerCase();
      switch (typ) {
        case "html":
          result = highliteHTML(txt);
          break;
       /* case "js":
          result = highliteJS(txt);
          break;*/
        default:
          result = null;
          break;
      };
      return result;
    };
  }

  _root.SyntaxHighliter = SyntaxHighliter;
}, function(_param) {
  if (typeof console !== "undefined") {
    console.info(_param.message)
  } else {
    // Error!
  }
});