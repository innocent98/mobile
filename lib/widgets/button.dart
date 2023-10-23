import 'package:flutter/material.dart';
import '../constants/colors.dart' as app_color;

class Button extends StatelessWidget {
  final String? buttonText;
  final Color buttonColor;
  final Color? textColor;
  final Color? borderColor;
  final Function()? onPressed;
  final Widget? widget;

  const Button(
      {required this.buttonColor,
      this.buttonText,
      this.textColor,
      this.borderColor,
      this.onPressed,
      this.widget,
      super.key});

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

    return Padding(
      padding:
          EdgeInsets.fromLTRB(screenWidth * 0.09, 0, screenWidth * 0.09, 0),
      child: Container(
        decoration: BoxDecoration(
            border: Border.all(
                color: borderColor ?? app_color.transparent, width: 1),
            borderRadius: BorderRadius.circular(10)),
        child: SizedBox(
          width: screenWidth * 1,
          height: screenHeight * 0.06,
          child: ElevatedButton(
            style: ElevatedButton.styleFrom(
                backgroundColor: buttonColor,
                elevation: 0,
                shadowColor: app_color.transparent,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10))),
            onPressed: onPressed,
            child: widget ??
                Text(
                  buttonText!,
                  style: TextStyle(
                      color: textColor,
                      fontFamily: 'Inter',
                      fontWeight: FontWeight.w600,
                      fontSize: screenWidth * 0.035),
                ),
          ),
        ),
      ),
    );
  }
}
