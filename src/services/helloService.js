class HelloService {
  helloString = 'Hello from Express';

  getHello() {
    return this.helloString;
  }
}

module.exports = HelloService;
