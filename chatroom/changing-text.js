var example = [
  "Don't bully!",
  "Bzzt im a robot",
  "Be nice!",
  "Hows your day?",
  "Be civil!",
  "Whats your favorite animal?",
  "No inappropriate content.",
  "Whats your favorite color?",
  "Don't spam the chat!",
];

textSequence(0);
function textSequence(i) {
  if (example.length > i) {
    setTimeout(function () {
      document.getElementById("sequence").innerHTML = example[i];
      textSequence(++i);
    }, 5000);
  } else if (example.length == i) {
    textSequence(0);
  }
}
