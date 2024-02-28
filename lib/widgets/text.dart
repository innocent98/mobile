import 'package:flutter/material.dart';

class TextWidget extends StatelessWidget {
  final String text;
  final Color textColor;
  final FontWeight fontWeight;
  final TextAlign textAlign;
  final double fontSize;
  final String? fontFamily;

  const TextWidget(
      {required this.text,
      required this.textColor,
      required this.textAlign,
      required this.fontWeight,
      required this.fontSize,
      this.fontFamily,
      super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
          fontFamily: fontFamily ?? 'Poppins',
          color: textColor,
          fontWeight: fontWeight,
          fontSize: fontSize),
      textAlign: textAlign,
    );
  }
}
