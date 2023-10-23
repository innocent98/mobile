import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/models/airdrop_data.dart';
import 'package:zealworkers_token/providers/token_provider.dart';
import 'package:zealworkers_token/services/airdrop_service.dart';

final airdropDataProvider = FutureProvider<Airdrop?>((ref) async {
  final accessToken = ref.read(tokenProvider);
  return ref.watch(airdropProvider).fetchAirdrop(accessToken);
});
