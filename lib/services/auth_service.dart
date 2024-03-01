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

  Future<void> registerUser(String? email, String? password,
      String? referralCode, String? url) async {
    var client = http.Client();
    var uri = Uri.parse('$liveBaseUrl/$url');

    try {
      onLoading(true);

      final response = await client.post(uri, body: {
        'email': email,
        'password': password,
        'referralCode': referralCode,
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

  Future<void> updateUser(String accessToken, String? currentPassword,
      String? password, String? fullName, String? phoneNo, String? url) async {
    var client = http.Client();

    Map<String, String> headers = {
      'token': 'Bearer $accessToken',
    };

    var uri = Uri.parse('$liveBaseUrl/$url');

    final Map<String, dynamic> requestBody = {
      if (currentPassword != '') 'currentPassword': currentPassword,
      if (password != '') 'password': password,
      if (fullName != '') 'fullName': fullName,
      if (phoneNo != '') 'phoneNo': phoneNo,
    };

    try {
      onLoading(true);

      final response =
          await client.put(uri, body: requestBody, headers: headers);

      final responseBody = jsonDecode(response.body);

      if (response.statusCode == 200) {
        onSuccessMessage(responseBody['message'] is! String
            ? 'Successful'
            : responseBody['message']
                ? responseBody['message']
                : 'Successful');
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
