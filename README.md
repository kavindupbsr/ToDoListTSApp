# Todo List React Native App

A modern, feature-rich todo list application built with React Native CLI, featuring Material Design principles, persistent storage, and a clean, intuitive user interface.

## 📱 Features

- ✅ **Add Tasks**: Create new todo items with a simple input interface
- ✅ **Delete Tasks**: Remove tasks with confirmation dialog to prevent accidents
- ✅ **Mark Complete**: Toggle task completion with visual strikethrough effect
- ✅ **Edit Tasks**: Tap on any task to edit its text inline
- ✅ **Separate Sections**: Active and completed tasks are organized in separate sections
- ✅ **Persistent Storage**: Tasks are saved locally using AsyncStorage
- ✅ **Statistics**: View total, completed, and pending task counts
- ✅ **Clear Completed**: Bulk remove all completed tasks
- ✅ **Material Design**: Clean, professional UI following Google's Material Design guidelines

## 🛠️ Technology Stack

- **React Native CLI** (Bare Workflow) - Full native control
- **TypeScript** - Type safety and better developer experience
- **Zustand** - Lightweight state management
- **AsyncStorage** - Persistent local data storage
- **Material Design** - Professional UI/UX principles

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **React Native CLI**: `npm install -g react-native-cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)
- **Java Development Kit (JDK)** version 11 or higher

### Android Setup
- Android Studio with Android SDK
- Android Virtual Device (AVD) or physical Android device
- Enable Developer Mode and USB Debugging on physical device

### iOS Setup (macOS only)
- Xcode (latest version)
- iOS Simulator or physical iOS device
- CocoaPods: `sudo gem install cocoapods`

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/kavindupbsr/ToDoListTSApp.git
cd ToDoListTSApp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install iOS Dependencies (iOS only)
```bash
cd ios
pod install
cd ..
```

## 📱 Running the Application

### Android

#### Using Android Emulator:
1. Start Android Studio
2. Open AVD Manager and start an Android Virtual Device
3. Run the app:
```bash
npx react-native run-android
```

#### Using Physical Android Device:
1. Connect your Android device via USB
2. Enable Developer Mode and USB Debugging
3. Run the app:
```bash
npx react-native run-android
```

### iOS (macOS only)

#### Using iOS Simulator:
```bash
npx react-native run-ios
```

#### Using Physical iOS Device:
1. Open `ios/ToDoListTSApp.xcworkspace` in Xcode
2. Select your connected iOS device
3. Click the Run button in Xcode

#### Specific iOS Simulator:
```bash
npx react-native run-ios --simulator="iPhone 14"
```

## 🔧 Development Commands

### Start Metro Bundler
```bash
npx react-native start
```

### Reset Metro Cache
```bash
npx react-native start --reset-cache
```

### Clean Build (if you encounter issues)
```bash
# Android
cd android
./gradlew clean
cd ..

# iOS
cd ios
xcodebuild clean
cd ..
```


## 🔍 Troubleshooting

### Common Issues:

#### Metro bundler issues:
```bash
npx react-native start --reset-cache
```

#### Android build issues:
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

#### iOS build issues:
```bash
cd ios
pod install
xcodebuild clean
cd ..
npx react-native run-ios
```