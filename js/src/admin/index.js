import app from 'flarum/app';

app.initializers.add('justoverclock/flarum-ext-readmore', () => {
  app.extensionData.for('justoverclock-readmore').registerSetting({
    setting: 'justoverclock-readmore.lenght',
    name: 'Lenght',
    type: 'number',
    label: app.translator.trans('flarum-ext-readmore.admin.charlenght'),
    help: app.translator.trans('flarum-ext-readmore.admin.charlenghtdesc'),
  });
});
