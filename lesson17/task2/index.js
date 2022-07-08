// callbackPromt.

const callbackPromt = {
  message: 'Tell me you number please ?',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferrend() {
    setTimeout(this.showPrompt.bind(this), 1000);
  },
};

// callbackPromt.showPrompt();
// callbackPromt.showDeferrend(2000);
