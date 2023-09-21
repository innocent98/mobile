import 'package:flutter/material.dart';

class TextForm extends StatefulWidget {
  final String labelText;
  final TextInputType keyboardType;
  final TextEditingController? controller;
  final Color labelColor;
  final bool? obscureText;

  const TextForm(
      {this.controller,
      required this.keyboardType,
      required this.labelText,
      required this.labelColor,
      this.obscureText,
      super.key});

  @override
  State<TextForm> createState() => _TextFormState();
}

class _TextFormState extends State<TextForm> {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    return Padding(
      padding:
          EdgeInsets.fromLTRB(screenWidth * 0.09, 0, screenWidth * 0.09, 0),
      child: TextFormField(
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Input cannot be empty';
          }
          return null;
        },
        obscureText: widget.obscureText ?? false,
        keyboardType: widget.keyboardType,
        style: TextStyle(
          fontSize: screenWidth * 0.03,
          fontFamily: 'Inter',
        ),
        decoration: InputDecoration(
            labelText: widget.labelText,
            labelStyle: TextStyle(
                color: widget.labelColor, fontSize: screenWidth * 0.03),
            border: OutlineInputBorder(
                borderSide: BorderSide(
                    width: 1,
                    color: widget.labelColor,
                    style: BorderStyle.solid),
                borderRadius: BorderRadius.circular(8)),
            focusedBorder: OutlineInputBorder(
                borderSide: BorderSide(
                    color: widget.labelColor, style: BorderStyle.solid),
                borderRadius: BorderRadius.circular(8)),
            errorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: const BorderSide(color: Colors.redAccent)),
            contentPadding: const EdgeInsets.all(10)),
        cursorColor: widget.labelColor,
        controller: widget.controller,
      ),
    );
  }
}
