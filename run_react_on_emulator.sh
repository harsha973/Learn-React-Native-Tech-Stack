#!/bin/bash
emulator -avd 720p_Galaxy_Nexus_API_23  &
adb wait-for-device

cd /C/Sree/React-native/tech_stack %~dp0
react-native run-android
