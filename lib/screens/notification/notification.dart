import 'package:flutter/material.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class Notifications extends StatelessWidget {
  const Notifications({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: app_color.white,
      appBar: AppBar(
        backgroundColor: app_color.white,
        title: TextWidget(
            text: 'Notification',
            textColor: app_color.black,
            textAlign: TextAlign.center,
            fontWeight: FontWeight.w600,
            fontSize: screenWidth * 0.045),
        centerTitle: true,
      ),
      body: Padding(
        padding: EdgeInsets.all(screenWidth * 0.035),
        child: const Column(
          children: [],
        ),
      ),
    );
  }
}
