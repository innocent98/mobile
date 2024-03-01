import 'package:flutter/material.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class Kyc extends StatelessWidget {
  const Kyc({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
        backgroundColor: app_color.white,
        appBar: AppBar(
          backgroundColor: app_color.white,
        ),
        body: Padding(
          padding: EdgeInsets.all(screenWidth * 0.035),
          child: Center(
            child: TextWidget(
                text: 'Coming Soon',
                textColor: app_color.black,
                textAlign: TextAlign.center,
                fontWeight: FontWeight.w700,
                fontSize: screenWidth * 0.06),
          ),
        ));
  }
}
