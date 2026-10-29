# expo-device: deviceName is null on Android 12 and older without a Bluetooth name

A blank Expo SDK 58 app (`expo-device` 58.0.5) that shows `Device.platformApiLevel`, `Device.deviceName` and
`Device.modelName`.

On Android 12 (API 31) and older, `Device.deviceName` reads only `Settings.Secure "bluetooth_name"`. A device
whose owner gave it a name, stored in `Settings.Global.DEVICE_NAME`, but that has no Bluetooth name (an Android
TV box without Bluetooth, for example) gets `null`.

## Steps

1. Start an Android 12 (API 31) emulator, for example the `system-images;android-31;default;arm64-v8a` image.
2. Install the dependencies and build the app: `bun install`, then `bunx expo run:android --variant release`.
3. Launch it. `deviceName` shows the Bluetooth name the emulator comes with.
4. Give the device a name and remove its Bluetooth name, as on a device without Bluetooth:

   ```sh
   adb shell settings put global device_name "'Living room box'"
   adb shell settings delete secure bluetooth_name
   ```

5. Force stop the app and launch it again.

## Result

`deviceName` is `null`. Expected: `"Living room box"`, the name the owner gave the device, which
react-native-device-info returns in the same case (it falls back to `Settings.Global.DEVICE_NAME`).

| Default emulator | Named device without a Bluetooth name |
| --- | --- |
| ![default](docs/android-12-default.png) | ![no Bluetooth name](docs/android-12-no-bluetooth-name.png) |
