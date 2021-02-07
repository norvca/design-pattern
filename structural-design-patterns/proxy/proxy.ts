interface ServiceInterface {
  method(): void;
}

class RealService implements ServiceInterface {
  method() {}
}

class ProxyService implements ServiceInterface {
  constructor(private realService: ServiceInterface) {}

  checkAccess(): boolean {
    console.log(`Proxy: Checking access prior`);
    return true;
  }

  method() {
    if (this.checkAccess()) {
      this.realService.method();
    }
  }
}

// Client code
function client(service: ServiceInterface) {
  service.method();
  // ...
}

// Client can operate real service, but for some reason, we can't get access it directly
const realService = new RealService();
client(realService);

// Now we can use proxy service to get access to real service
const proxyService = new ProxyService(realService);
client(realService);
