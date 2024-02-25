import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:http/http.dart' as http;
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/models/user_data.dart';

class UserDataService {
  Future<UserData?> fetchUserData(String accessToken, String route) async {
    var client = http.Client();

    Map<String, String> headers = {
      'token': 'Bearer $accessToken',
    };

    var uri = Uri.parse('$liveBaseUrl/$route');

    try {
      final response = await client.get(uri, headers: headers);


      if (response.statusCode == 200) {
        final responseBody = jsonDecode(response.body);
        return UserData.fromJson(responseBody);
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

final userProvider = Provider<UserDataService>((ref) => UserDataService());
