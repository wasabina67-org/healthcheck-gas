function myFunction() {
  const urls = [
    'https://example.com/',
    'https://example.com/',
    'https://example.com/',
  ];

  urls.forEach((url) => {
    try {
      const resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
      const code = resp.getResponseCode();
      if (code !== 200) {
        throw new Error('Not healthy | url: ' + url + ' | code: ' + code);
      }
    } catch (e) {
      Logger.log(e);
      const recipient = Session.getActiveUser().getEmail();
      GmailApp.sendEmail(recipient, 'healthcheck-gas', e);
    }
  })
}
