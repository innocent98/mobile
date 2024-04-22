import 'package:flutter/material.dart';
import 'package:zealworkers_token/models/user_data.dart';
import '../../constants/colors.dart' as app_color;

class SwitchNotification extends StatefulWidget {
  final UserData userD;

  const SwitchNotification({super.key, required this.userD});

  @override
  State<SwitchNotification> createState() => _SwitchNotificationState();
}

class _SwitchNotificationState extends State<SwitchNotification> {
  bool _switchValue = false;

  @override
  void initState() {
    super.initState();

    _switchValue = widget.userD.notificationOn!;
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Switch(
      value: _switchValue,
      onChanged: (newValue) {
        setState(() {
          _switchValue = newValue;
        });
      },
      activeTrackColor: app_color.primary_soft,
      activeColor: app_color.secondary,
      inactiveThumbColor: app_color.grey,
      inactiveTrackColor: app_color.soft,
    );
  }
}
