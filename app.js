window.onload = function () {
  if (window.location.hash) {
    window.location.href = window.location.href.split("#")[0];
  }
};