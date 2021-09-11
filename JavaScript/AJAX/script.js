//like onload
XPathResult.onreadystatechange = function () {
  //readyState values
  //0: request not initialized
  //1: server connection established
  //2: request received
  //3: processing request
  //4: request finished and response is ready <--- should be here

  if (this.readyState == 4 && this.status == 200) {
    console.log(this.resposeText);
  }
};
