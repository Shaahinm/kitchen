export class Notification {
  constructor(root) {
    root.toasted.register('success_toast', 'عملیات شما با موفقیت انجام شد.', {
      action: {
        text: 'بستن',
        onClick: (e, toastObject) => {
          toastObject.goAway(0)
        }
      },
      position: 'bottom-center',
      duration: 4000,
      theme: 'primary',
      fullWidth: true,
      fitToScreen: true
    });

    root.toasted.register('error_toast', 'عملیات شما با موفقیت انجام نشد.', {
      type: 'error',
      action: {
        text: 'بستن',
        onClick: (e, toastObject) => {
          toastObject.goAway(0)
        }
      },
      position: 'bottom-center',
      duration: 4000,
      theme: 'primary',
      fullWidth: true,
      fitToScreen: true
    });
  }

  static doMeWithProgress(progress, me) {
    progress.start();
    me();
    progress.finish();    
  }

}
