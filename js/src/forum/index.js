import app from 'flarum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/components/CommentPost';
import ReadMoreApp from './ReadMoreApp';

app.initializers.add('justoverclock/flarum-ext-readmore', () => {
  extend(CommentPost.prototype, 'oninit', ReadMoreApp);
});
