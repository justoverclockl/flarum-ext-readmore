import app from 'flarum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/components/CommentPost';
import ReadMoreApp from './ReadMoreApp';
import Button from "flarum/common/components/Button";

/*const readMore = function () {
  this.readMore = !this.readMore;
}*/

app.initializers.add('justoverclock/flarum-ext-readmore', () => {
  extend(CommentPost.prototype, 'oninit', ReadMoreApp);
});
/*
extend(CommentPost.prototype, 'footerItems', function (items) {
  items.add('read-more', <Button onclick={readMore}>
    {app.translator.trans('flarum-ext-readmore.forum.readmore')}
    </Button>
  )
});
extend(CommentPost.prototype, 'view', function (vdom) {
  if (this.readMore) vdom.attrs.className += ' Post-readMore';
});
*/
