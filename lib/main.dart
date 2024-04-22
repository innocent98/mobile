import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:jwt_decode/jwt_decode.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:zealworkers_token/constants/tab/tab.dart';
import 'package:zealworkers_token/constants/utils/vars.dart';
import 'package:zealworkers_token/providers/prefs_provider.dart';
import 'package:zealworkers_token/providers/token_provider.dart';
// import 'package:zealworkers_token/constants/tab/tab.dart';
import 'package:zealworkers_token/screens/authentication/get_started.dart';
import 'constants/colors.dart' as app_color;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();

  runApp(ProviderScope(
      overrides: [prefsProvider.overrideWithValue(prefs)],
      child: const MyApp()));
}

class MyApp extends ConsumerWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context, ref) {
    final data = ref.watch(tokenProvider);

    // Function to check if JWT token is expired
    bool isTokenExpired(String token) {
      final Map<String, dynamic> decodedToken = Jwt.parseJwt(token);
      final int expiryTime = decodedToken['exp'];
      final int currentTime =
          DateTime.now().millisecondsSinceEpoch ~/ 1000; // Convert to seconds

      return currentTime > expiryTime;
    }

    // print(isTokenExpired(data));

    Future<void> logout() async {
      // Clear user session data
      ref.watch(tokenProvider.notifier).state = '';
      ref.watch(prefsProvider).setString(userTokenstr, '');
    }

    void checkTokenAndLogoutIfNeeded() {
      // Check if token is expired
      if (isTokenExpired(data) == true) {
        // Token is expired, logout user
        logout();
      }
    }

    // Run the function periodically, for example, every minute
    const Duration interval = Duration(minutes: 1);
    Timer.periodic(interval, (timer) {
      // Call the function to check token expiration and logout if needed
      checkTokenAndLogoutIfNeeded();
    });

    /// The route configuration.
    final GoRouter router = GoRouter(
      routes: <RouteBase>[
        GoRoute(
          path: '/',
          redirect: (BuildContext context, GoRouterState state) {
            if (data == '') {
              return '/start';
            } else {
              return '/home';
            }
          },
          routes: <RouteBase>[
            GoRoute(
              path: 'start',
              builder: (BuildContext context, GoRouterState state) {
                return const GetStarted();
              },
            ),
            GoRoute(
              path: 'home',
              builder: (BuildContext context, GoRouterState state) {
                return const HomeTab();
              },
            ),
          ],
        ),
      ],
    );

    return MaterialApp.router(
      title: 'Zeal Workers Token',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: app_color.white,
        colorScheme: ColorScheme.fromSeed(seedColor: app_color.white),
        useMaterial3: true,
      ),
      // home: data == '' ? const GetStarted() : MainTab(token: data),

      routerConfig: router,
    );
  }
}
