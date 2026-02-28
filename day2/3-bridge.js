class TV {
  increaseVolume() {
    console.log('Increasing TV volume');
  }

  decreaseVolume() {
    console.log('Decreasing TV volume');
  }

  mute() {
    console.log('TV muted');
  }
}

class Speaker {
  increaseVolume() {
    console.log('Increasing Speaker volume');
  }

  decreaseVolume() {
    console.log('Decreasing Speaker volume');
  }

  mute() {
    console.log('Speaker muted');
  }
}

class VolumeController {
  constructor(device) {
    this.device = device;
  }

  increaseVolume() {
    this.device.increaseVolume();
  }

  decreaseVolume() {
    this.device.decreaseVolume();
  }
}

class MuteController {
  constructor(device) {
    this.device = device;
  }

  mute() {
    this.device.mute();
  }
}

// Usage
const tv = new TV();
const speaker = new Speaker();

// TV controllers
const volumeController1 = new VolumeController(tv);
const muteController1 = new MuteController(tv);

// Speaker Controllers
const volumeController2 = new VolumeController(speaker);
const muteController2 = new MuteController(speaker);

volumeController1.increaseVolume();
volumeController1.decreaseVolume();
muteController1.mute();

console.log('-------------------------');

volumeController2.increaseVolume();
volumeController2.decreaseVolume();
muteController2.mute();
