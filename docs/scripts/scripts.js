function getArticleAnalysis() {
  alert("hey");
    // var $btn = $(this).button('loading')
    //    // business logic...
    //    $btn.button('reset')
 })
}
async function getArticleAnalysis() {
  $( "#newsURL").click(function() {
    const URL = $(this).val();
  });
yield $.ajax({
  url:URL,
  type:"GET",
  success: function(result) {
    fillArticleBox(result);
  },
})
}

function fillArticleBox(result) {
  const articleObject = JSON.parse(result);
  fillRelatedArticles(articleObject.relatedArticles);

  $("#title").innerHTML(articleObject.title);
  if(articleObject.author) {
      $("#author").innerHTML(articleObject.author);
  }
  $("#bias").innerHTML(articleObject.bias);
  if(articleObject.datePublished) {
    $("#datePublished").innerHTML(articleObject.datePublish);
  }
  $("#summary").innerHTML(articleObject.summary);
  $('#mainArticleBox').removeAttr('hidden');
}

async function fillRelatedArticles(relatedArticles) {
  let count = 0;
  let articleObject;
  relatedArticles.forEach(article {
    yield $.ajax({
      url: article,
      type:"GET",
      success: function(result) {
        articleObject = JSON.parse(result);
      },
    })
    if(!articleObject) {
      continue;
    }
    let title = "#relatedTitle" + count;
    let author = "#relatedAuthor" + count;
    let bias = "#relatedBias" + count;
    let datePublished = "#relatedDate" + count;
    let description = "#relatedDescription" + count;
    let img = "#relatedImg" + count;

    $(title).innerHTML('Title: ' + articleObject.title);
    if(articleObject.author) {
        $(author).innerHTML('Author: ' + articleObject.author);
    }
    $(bias).innerHTML(articleObject.bias);
    if(articleObject.datePublished) {
      $(datePublished).innerHTML('Bias: ' + articleObject.datePublish);
    }
    // $(description).innerHTML(articleObject.summary);
    if(article.img) {
      $(img).src(img);3
    }
    count++;
  });
  $('#related').removeAttr('hidden');
}
