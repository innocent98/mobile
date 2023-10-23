import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/constants/utils/vars.dart';
import 'package:zealworkers_token/providers/prefs_provider.dart';

final tokenProvider = StateProvider<String>((ref) {
  final prefs = ref.read(prefsProvider);
  return prefs.getString(userTokenstr) ?? '';
});
