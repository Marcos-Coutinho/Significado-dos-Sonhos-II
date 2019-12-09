function socialsharingDemo() {
  window.plugins.socialsharing.available(function(isAvailable) {
    if (isAvailable) {
      // use uma imagem local de dentro da pasta www:
//      window.plugins.socialsharing.share('Some text', 'Some subject', null, 'http://www.nu.nl');
//      window.plugins.socialsharing.share('Some text');

//      window.plugins.socialsharing.share('test', null, 'data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7', null, function(e){alert("success: " + e)}, function(e){alert("error: " + e)});
      window.plugins.socialsharing.share('Texto de Comentário', 'Texto de Assunto.', 'www/img/icone_app.png', null,);
      // uso alternativo:

      // 1) uma imagem local de qualquer outro lugar (se permitido):
      // window.plugins.socialsharing.share('Some text', 'http://domain.com', '/Users/username/Library/Application Support/iPhone/6.1/Applications/25A1E7CF-079F-438D-823B-55C6F8CD2DC0/Documents/.nl.x-services.appname/pics/img.jpg');

      // 2) uma imagem da internet:
//      window.plugins.socialsharing.share('Some text', "Some subject', 'http://domain.com', 'http://domain.com/image.jpg');

      // 3) texto e link:
//      window.plugins.socialsharing.share('Some text and a link', '', '', 'http://www.nu.nl');
    }
  });
}

