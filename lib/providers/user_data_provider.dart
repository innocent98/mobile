import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/providers/token_provider.dart';
import 'package:zealworkers_token/services/user_data_service.dart';

final userDataProvider = FutureProvider<UserData?>((ref) async {
  final accessToken = ref.read(tokenProvider);
  return ref.watch(userProvider).fetchUserData(accessToken, userRoute);
});

final mineDataProvider = FutureProvider<UserData?>((ref) async {
  final accessToken = ref.read(tokenProvider);
  return ref.watch(userProvider).fetchUserData(accessToken, mineRoute);
});
