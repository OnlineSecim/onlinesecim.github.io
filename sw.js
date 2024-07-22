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
  });

  
