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

## 📁 Project Structure

```
ToDoListTSApp/
├── src/
│   ├── components/
│   │   ├── AddTodoForm.tsx      # Form for adding new todos
│   │   ├── TodoItem.tsx         # Individual todo item component
│   │   └── TodoList.tsx         # List container with sections
│   ├── store/
│   │   └── todoStore.ts         # Zustand store for state management
│   └── styles/
│       ├── colors.ts            # Material Design color palette
│       └── material.ts          # Spacing, typography, elevation
├── android/                     # Android-specific files
├── ios/                         # iOS-specific files
├── App.tsx                      # Main app component
└── package.json
```

## 🎨 Design System

The app follows Material Design principles with:

- **Consistent Color Palette**: Primary blue theme with accent colors
- **Typography Scale**: Standardized font sizes and weights
- **Spacing System**: 4px grid system for consistent layouts
- **Elevation**: Shadows and depth for visual hierarchy
- **Accessibility**: Proper touch targets and screen reader support

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

## 👨‍💻 Author

**Kavindu Bhanuka**
- GitHub: [@kavindupbsr](https://github.com/kavindupbsr)

---

**Note**: This app was built as a learning project to demonstrate React Native development skills, state management with Zustand, and Material Design implementation.

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
