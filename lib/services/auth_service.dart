import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:zealworkers_token/constants/env.config.dart';

class AuthService {
  Function(String message) onErrorMessage;
  Function(String message) onSuccessMessage;
  Function(bool isLoading) onLoading;
  Function(String token) userToken;

  AuthService(
      {required this.onErrorMessage,
      required this.onSuccessMessage,
      required this.onLoading,
      required this.userToken});

  Future<void> registerUser(
      String? email, String? password, String? referral, String? url) async {
    var client = http.Client();
    var uri = Uri.parse('$baseUrl/$url');

    try {
      onLoading(true);

      final response = await client.post(uri, body: {
        'email': email,
        'password': password,
        'referral': referral,
      });

      final responseBody = jsonDecode(response.body);

      if (response.statusCode == 200) {
        onSuccessMessage(responseBody['message'] ?? 'Successful');
        userToken(responseBody['accessToken']) ?? '';
      } else {
        onErrorMessage(responseBody['message'] ?? 'Unknown error');
      }
    } catch (e) {
      onErrorMessage('$e');
      throw Exception('$e');
    } finally {
      onLoading(false);
      client.close();
    }
  }
}
