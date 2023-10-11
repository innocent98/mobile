import 'package:flutter/material.dart';
// import 'package:zealworkers_token/constants/tab/tab.dart';
import 'package:zealworkers_token/screens/authentication/get_started.dart';
import 'constants/colors.dart' as app_color;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Zeal Workers Token',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: app_color.primary,
        colorScheme: ColorScheme.fromSeed(seedColor: app_color.primary),
        useMaterial3: true,
      ),
      home: const GetStarted(),
    );
  }
}
