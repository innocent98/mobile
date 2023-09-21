import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:zealworkers_token/screens/authentication/sign_in.dart';
import 'package:zealworkers_token/screens/authentication/sign_up.dart';
import 'package:zealworkers_token/widgets/button.dart';
import '../../constants/colors.dart' as app_color;

class GetStarted extends StatelessWidget {
  const GetStarted({super.key});

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
        statusBarColor: Colors.white,
        statusBarBrightness: Brightness.dark,
        statusBarIconBrightness: Brightness.dark));

    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

    return Container(
      color: app_color.white,
      child: SafeArea(
        child: Scaffold(
          backgroundColor: app_color.white,
          body: SizedBox(
            height: screenHeight,
            width: screenWidth,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset(
                  'assets/img/logo.png',
                  fit: BoxFit.contain,
                ),
                SizedBox(
                  height: screenHeight * 0.1,
                ),
                Button(
                  buttonColor: app_color.primary,
                  buttonText: 'Create Account',
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => SignUp()));
                  },
                  textColor: app_color.white,
                  borderColor: null,
                ),
                SizedBox(
                  height: screenHeight * 0.02,
                ),
                Button(
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => SignIn()));
                  },
                  buttonColor: app_color.white,
                  buttonText: 'Sign in',
                  textColor: app_color.black,
                  borderColor: app_color.primary,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
