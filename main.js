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
      Logger.log(code);
    } catch (e) {
      // e
    }
  })
}
