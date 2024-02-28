import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/models/user_authentication.dart';
import 'package:zealworkers_token/providers/token_provider.dart';
import 'package:zealworkers_token/providers/user_data_provider.dart';
import 'package:zealworkers_token/services/auth_service.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/drawer.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
import '../../constants/colors.dart' as app_color;

class Profile extends ConsumerWidget {
  Profile({super.key});

  final formKey = GlobalKey<FormState>();

  final TextEditingController fullName = TextEditingController();

  final TextEditingController phoneNo = TextEditingController();

  @override
  Widget build(BuildContext context, ref) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    bool loading = false;

    final userToken = ref.watch(tokenProvider);

    AuthService userRegistrationService = AuthService(
      onErrorMessage: (message) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(message),
            duration: const Duration(seconds: 3),
            backgroundColor: app_color.red,
          ),
        );
      },
      onSuccessMessage: (message) {
        ref.invalidate(userDataProvider);

        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(message),
            duration: const Duration(seconds: 2),
            backgroundColor: app_color.green,
          ),
        );

        Future.delayed(const Duration(seconds: 2), () {
          Navigator.pop(context);
        });
      },
      onLoading: (isLoading) {
        loading = isLoading;
      },
      userToken: (String token) {},
    );

    final onSubmit = loading
        ? null
        : () async {
            if (formKey.currentState!.validate()) {
              final userData = UserAuthentication(
                fullName: fullName.text,
                phoneNo: phoneNo.text,
              );

              await userRegistrationService.updateUser(userToken, '', '',
                  userData.fullName, userData.phoneNo, updateUserProfileRoute);
            }
          };

    return Scaffold(
      backgroundColor: app_color.white,
      appBar: AppBar(
        backgroundColor: app_color.white,
        actions: [
          Padding(
            padding: EdgeInsets.only(right: screenWidth * 0.035),
            child: const Icon(Icons.notifications_outlined),
          )
        ],
      ),
      drawer: const MyDrawer(),
      body: Padding(
        padding: EdgeInsets.all(screenWidth * 0.035),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                InkWell(
                  onTap: () {
                    Navigator.pop(context);
                  },
                  child: Icon(
                    Icons.arrow_back,
                    color: app_color.black,
                    size: screenWidth * 0.06,
                  ),
                ),
                TextWidget(
                    text: 'My Profile',
                    textColor: app_color.black,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w700,
                    fontSize: screenWidth * 0.04),
                const Text(''),
              ],
            ),
            SizedBox(height: screenHeight * 0.1),

            // form
            Form(
              key: formKey,
              child: Column(
                children: [
                  TextForm(
                    controller: fullName,
                    keyboardType: TextInputType.text,
                    labelText: 'Full Name',
                    labelColor: app_color.black,
                    capitalize: TextCapitalization.sentences,
                    isRequired: false,
                  ),
                  SizedBox(
                    height: screenHeight * 0.03,
                  ),
                  TextForm(
                    controller: phoneNo,
                    keyboardType: TextInputType.phone,
                    labelText: 'Phone Number',
                    labelColor: app_color.black,
                    obscureText: true,
                    isRequired: false,
                  ),
                  SizedBox(
                    height: screenHeight * 0.03,
                  ),
                  Button(
                      onPressed: onSubmit,
                      buttonColor: app_color.primary,
                      buttonText: 'Update',
                      textColor: app_color.white),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
