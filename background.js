var cnt;

chrome.runtime.onInstalled.addListener(function(){
  cnt = 0;
  chrome.alarms.clearAll();
  chrome.alarms.create({delayInMinutes: 20});
});

chrome.runtime.onStartup.addListener(function(){
  cnt = 0;
  chrome.alarms.clearAll();
  chrome.alarms.create({delayInMinutes: 20});
});

chrome.alarms.onAlarm.addListener(function() {
  if(cnt<=1){
    chrome.notifications.create({
      type:     'basic',
      iconUrl:  'rsz_safe48.png',
      title:    '20-20-20',
      message:  'Look at something 20 feet away for 20 seconds',
      priority: 1},callback);
      console.log("20-20-20 notification given and cnt = "+cnt);
  }
  else{
    chrome.notifications.create({
      type:     'basic',
      iconUrl:  'rsz_safe48.png',
      title:    'Hourly break',
      message:  'Get off your desk for 8 minutes',
      priority: 1},callback);
      console.log("Hourly notification given and cnt = "+cnt);
  }
});

function callback(){
  if(cnt==0){
    cnt=(cnt+1)%3;
    chrome.alarms.create({delayInMinutes: 20});
  }
  else if(cnt==1){
    cnt=(cnt+1)%3;
    chrome.alarms.create({delayInMinutes:12});
  }
  else if(cnt==2){
    cnt=(cnt+1)%3;
    chrome.alarms.create({delayInMinutes: 28});
  }
}