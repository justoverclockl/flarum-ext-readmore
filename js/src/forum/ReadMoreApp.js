import app from 'flarum/app';

/*  global $  */

export default function () {
  // La pagina profilo e i post utilizzano la stessa classe, quindi filtriamo tramite url
  if (window.location.href.indexOf('/u/') > -1) {
    $(document).ready(function () {
      // Limite caratteri settabile da pannello amministrazione
      const max = app.forum.attribute('Lenght');

      $('.Post-body').each(function () {
        var str = $(this).text();

        if ($.trim(str).length > max) {
          var subStr = str.substring(0, max);
          var hiddenStr = str.substring(max, $.trim(str).length);
          var ReadMore = app.translator.trans('flarum-ext-readmore.forum.readmore');

          $(this).text(subStr);
          $(this).append(' <a href="javascript:void(0);" class="linkReadMore">' + ReadMore + '</a>');
          $(this).append('<span class="addText">' + hiddenStr + '</span>');
        }
      });
      $('.linkReadMore').click(function () {
        $(this).siblings('.addText').contents().unwrap();
        $(this).remove();
      });
    });
  } else {
    if (app.forum.attribute('AlsoPost') === true) {
      $(document).ready(function () {
        // Limite caratteri settabile da pannello amministrazione
        const max = app.forum.attribute('Lenght');

        $('.Post-body').each(function () {
          var str = $(this).text();

          if ($.trim(str).length > max) {
            var subStr = str.substring(0, max);
            var hiddenStr = str.substring(max, $.trim(str).length);
            var ReadMore = app.translator.trans('flarum-ext-readmore.forum.readmore');

            $(this).text(subStr);
            $(this).append(' <a href="javascript:void(0);" class="linkReadMore">' + ReadMore + '</a>');
            $(this).append('<span class="addText">' + hiddenStr + '</span>');
          }
        });
        $('.linkReadMore').click(function () {
          $(this).siblings('.addText').contents().unwrap();
          $(this).remove();
        });
      });
    }
  }
}
