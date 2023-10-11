import 'package:flutter/material.dart';
import 'package:zealworkers_token/screens/home/home.dart';
import 'package:zealworkers_token/screens/settings/settings.dart';
import 'package:zealworkers_token/screens/team/team.dart';
import '../../constants/colors.dart' as app_color;

class HomeTab extends StatefulWidget {
  const HomeTab({super.key});

  @override
  State<HomeTab> createState() => _HomeTabState();
}

class _HomeTabState extends State<HomeTab> {
  int _selectedTabIndex = 1;

  static const List<Widget> _widgetOptions = <Widget>[
    Team(),
    Home(),
    Settings()
  ];

  void onTabTapped(int index) {
    setState(() {
      _selectedTabIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: app_color.white,
      child: SafeArea(
          child: Scaffold(
        backgroundColor: app_color.white,
        body: Center(
          child: _widgetOptions.elementAt(_selectedTabIndex),
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.people),
              label: 'Team',
            ),
            BottomNavigationBarItem(
              icon: ImageIcon(AssetImage('assets/img/tab_coin.png')),
              label: 'Mine',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.settings_outlined),
              label: 'Settings',
            ),
          ],
          currentIndex: _selectedTabIndex,
          selectedItemColor: app_color.secondary,
          onTap: onTabTapped,
        ),
      )),
    );
  }
}
