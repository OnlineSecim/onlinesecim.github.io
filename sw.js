self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = data.title || 'Default Title';
    const options = {
      body: data.body || 'Default body',
      icon: data.icon,
      badge: data.badge
    };
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    );





self.addEventListener('notificationclick', event => {
   
    //event.notification.close();
    eval(event.notification.data.exec)
  
    /*event.waitUntil(
     
    clients.openWindow(event.notification.data.url)
  );*/
});


    
  });

  
