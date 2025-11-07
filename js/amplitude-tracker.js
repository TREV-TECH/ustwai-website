// Amplitude Analytics Configuration
(function () {
  if (window.amplitude) {
    window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
    window.amplitude.init("8141dee26dc42e66867701985ab8e845", {
      autocapture: { elementInteractions: true },
    });
  }
})();
