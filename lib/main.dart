import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:zealworkers_token/constants/tab/tab.dart';
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
