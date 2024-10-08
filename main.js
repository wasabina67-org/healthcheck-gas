function myFunction() {
  const ownUrls = [
    'https://wasabina67.github.io/',
    'https://marunaka-food-corp.github.io/caremeat-carefish/',
    'https://marunaka-food-corp.github.io/tidus-shikaniku-curry/',
    'https://marunaka-food-corp.github.io/ondotori-ws-settings/',
    'https://garage-mash.com/',
  ];
  healthcheck(ownUrls);

  const otherUrls = [
    'http://www.marunaka-food.co.jp/',
    'https://www.garagemash.com/',
  ];
  healthcheck(otherUrls);
}

function healthcheck(urls) {
  urls.forEach((url) => {
    try {
      const resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
      const code = resp.getResponseCode();
      if (code !== 200) {
        throw new Error('Not healthy | url: ' + url + ' | code: ' + code);
      }
    } catch (e) {
      Logger.log(e);
      // const recipient = Session.getActiveUser().getEmail();
      const recipient = 'wasabina67@gmail.com';
      GmailApp.sendEmail(recipient, 'healthcheck-gas', e);
    }
  })
}
