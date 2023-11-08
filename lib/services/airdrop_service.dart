import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/models/airdrop_data.dart';
import 'package:http/http.dart' as http;

class AirdropService {
  Future<Airdrop?> fetchAirdrop(String accessToken) async {
    var client = http.Client();

    Map<String, String> headers = {
      'token': 'Bearer $accessToken',
    };

    var uri = Uri.parse('$liveBaseUrl/$airdropRoute');

    try {
      final response = await client.get(uri, headers: headers);

      if (response.statusCode == 200) {
        final responseBody = jsonDecode(response.body);

        return Airdrop.fromJson(responseBody);
      } else {
        throw Exception(response.reasonPhrase);
      }
    } catch (e) {
      throw Exception(e);
    } finally {
      client.close();
    }
  }
}

final airdropProvider = Provider<AirdropService>((ref) => AirdropService());
